import { setEIVal } from '../redux/FireStates/eggindex';
import { fs_mode1, fs_mode3 ,fs_mode0} from '../redux/FireStates/fireStatus';
import { setFTID } from '../redux/FireStates/firetimeid';
import { setPwd } from '../redux/MainStates/passwordstate';
import { setWC } from '../redux/MainStates/wordcountstate';
import { intermediateStage} from '../redux/PaulStates/paulStage';
import { resetEggCount,incEggCount } from '../redux/FireStates/eggcount';
import { setTID,resetTID } from '../redux/FireStates/timeid';

import store from '../redux/store';

const dispatch=store.dispatch;


export default function ParentFireFunction(){

  const pS=store.getState().paulStage.value;
  const fs=store.getState().fireStatus.value;
  const pwd=store.getState().pwd.value
  const fireTimeId=store.getState().FTID.value;
  const TimeId=store.getState().TID.value;
  const PaulDied=store.getState().paulDed.value


    if(fs===0){

      if(fireTimeId){
        clearTimeout(fireTimeId);
      }

      let fid=setTimeout(()=>{addFire()},1500);
      dispatch(setFTID(fid));

    }

    else if(fs===1 && PaulDied){
      if(TimeId){
        clearTimeout(TimeId);
      }
      
      return false;
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
        const newPwd=pwd.replace("🥚","🐔")
        dispatch(intermediateStage());
        dispatch(setPwd(newPwd));
      }

      return true;
    }

    return false;
  }

const addFire=()=>{

  const eggCount=store.getState().eggC.value;
  const eggIndex=store.getState().eggIndex.value;
  const pwd=store.getState().pwd.value;


  if(eggCount>=pwd.length){
    dispatch(fs_mode1());
    return;
  }

  
  dispatch(setEIVal(pwd.indexOf("🥚")));

  let RandomIndex=Math.floor(Math.random()*pwd.length);

  if(((RandomIndex===eggIndex || RandomIndex+1===eggIndex) && eggCount<6)){
    while(RandomIndex===eggIndex || RandomIndex+1===eggIndex){
      RandomIndex=Math.floor(Math.random()*pwd.length);
    }
  }

  const newPassword=pwd.substring(0,RandomIndex)+"🔥"+pwd.substring(RandomIndex+1);
  dispatch(setPwd(newPassword));
  dispatch(setWC(newPassword.length));
  dispatch(fs_mode1());
  dispatch(incEggCount());

  console.log(RandomIndex,"This is RI")
  console.log(RandomIndex+1,"This is RI+1")
  console.log(eggCount,"This is the eggCount")
  console.log(pwd)
  console.log(eggIndex,"This is the egg Index")
  console.log()

}
