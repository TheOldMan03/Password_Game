import { setEIVal } from '../redux/FireStates/eggindex';
import { fs_mode1, fs_mode3 ,fs_mode0} from '../redux/FireStates/fireStatus';
import { setFTID } from '../redux/FireStates/firetimeid';
import { setPwd } from '../redux/MainStates/passwordstate';
import { setWC } from '../redux/MainStates/wordcountstate';
import { setStage } from '../redux/PaulStates/paulStage';
import { resetEggCount,incEggCount } from '../redux/FireStates/eggcount';
import store from '../redux/store';
import { setTID,resetTID } from '../redux/FireStates/timeid';

const dispatch=store.dispatch;


export function ParentFireFunction(pwd){

  const pS=store.getState().paulStage.value;
  const fs=store.getState().fireStatus.value;
  const fireTimeId=store.getState().FTID.value;
  const TimeId=store.getState().TID.value;


    if(fs===0){

      if(fireTimeId){
        clearTimeout(fireTimeId);
      }

      let fid=setTimeout(()=>{addFire(pwd)},1500);
      dispatch(setFTID(fid));

      console.log(fireTimeId);

    }

    else if(fs===1){

      if(TimeId){
        clearTimeout(TimeId);
      }

      if(!pwd.includes("🔥")){
        dispatch(fs_mode3());
        clearTimeout(TimeId);
        dispatch(resetEggCount());
        dispatch(resetTID())
        return true;
      }

      else{

        let tid=setTimeout(()=>{dispatch(fs_mode0())},2000)
        dispatch(setTID(tid))

        return false;
      }
    }

    else if(fs.current===3 && pwd.includes("🔥")){
      dispatch(fs_mode0());
    }

    else {

      if(pS===0){
        let newPwd=pwd.replace("🥚","🐔");
        dispatch(setPwd(newPwd));
        dispatch(setStage());
      }

      return true;
    }

    return false;
  }

  const addFire=(pwd)=>{

    const eggCount=store.getState().eggC.value;
    const eggIndex=store.getState().eggIndex.value;


    if(eggCount>=pwd.length){
      dispatch(fs_mode1());
      return;
    }

    if(eggIndex===-1 && pwd.includes("🥚")){
        dispatch(setEIVal(pwd.indexOf("🥚")));
    }

    let RandomIndex=Math.floor(Math.random()*pwd.length);

    if(((RandomIndex===eggIndex || RandomIndex===eggIndex) && eggCount<6)){
      while(RandomIndex===eggIndex || RandomIndex===eggIndex){
        RandomIndex=Math.floor(Math.random()*pwd.length);
      }
    }

    const newPassword=pwd.substring(0,RandomIndex)+"🔥"+pwd.substring(RandomIndex+1);
    dispatch(setPwd(newPassword));
    dispatch(setWC(newPassword.length));
    dispatch(fs_mode1());
    dispatch(incEggCount());

}
