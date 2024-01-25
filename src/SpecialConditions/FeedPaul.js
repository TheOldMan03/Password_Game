import { resetWHTID,setWHTID } from '../redux/WormStates/wormhungry';
import { ws_mode1,ws_mode0 } from '../redux/WormStates/wormstatus';
import { setWFTID,resetWFTID } from '../redux/WormStates/wormfeed';
import { incPB, resetPB } from '../redux/WormStates/paulbelly';
import { setWC } from '../redux/MainStates/wordcountstate';
import { paulDeath } from '../redux/PaulStates/isPaulDed';
import { setPwd } from '../redux/MainStates/passwordstate';
import { overfed, underfed } from '../redux/PaulStates/pauldeathstages';
import store from '../redux/store';


export default function WormCheck(){

   const wormS=store.getState().ws.value;
   const wormHungry=store.getState().whtid.value;
   const wormFeed=store.getState().wftid.value;
   const paulBelly=store.getState().paulbelly.value;
   const pwd=store.getState().pwd.value
   const dispatch=store.dispatch;


  if(wormS===0){ //0 means that it is hungry
    
    if(pwd.includes("🐛")){
      // wormS.current=1;
      dispatch(ws_mode1());
      clearTimeout(wormHungry);
      dispatch(resetWHTID());
    }

    else{

      if(wormHungry){
        return false;
      }

      let x=setTimeout(()=>{
        dispatch(paulDeath())
        dispatch(underfed())
      },20000)

      dispatch(setWHTID(x));

      return false;
    }
  }

  else{ //paul is being fed

    if(wormFeed){
      clearTimeout(wormFeed);
      dispatch(resetWFTID()); 
    }
    
    if(!pwd.includes("🐛")){
      // wormS.current=0;
      dispatch(ws_mode0());
      dispatch(resetPB());
    }

    else{

      let y=setTimeout(()=>{
        const wormIndex=pwd.indexOf("🐛")
        const newPwd=pwd.substring(0,wormIndex)+pwd.substring(wormIndex+2);
        dispatch(setPwd(newPwd));
        dispatch(setWC(newPwd.length));
        dispatch(incPB())
      },10000)


      dispatch(setWFTID(y))

      if(paulBelly>=5){
        dispatch(paulDeath());
        dispatch(overfed())
      }

    }

    return true;

  }

}