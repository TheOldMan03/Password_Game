import store from '../store';


// const fs=store.getState().fireStatus.value;
const pS=store.getState().paulStage.value;
const eggCount=store.getState().eggC.value;

function ParentFireFunction(pwd){

    if(fs===0){

      if(fireTimeId){
        clearTimeout(fireTimeId);
      }

      fireTimeId=setTimeout(()=>{
        addFire(pwd)
      },1500);
    }

    else if(fs===1){

      if(TimeId.current){
        clearTimeout(TimeId.current);
      }

      if(!pwd.includes("🔥")){
        setFireStatus(3)
        clearTimeout(TimeId.current);
        eggCount=0;
        TimeId=null;
        return true;
      }

      else{

        TimeId=setTimeout(()=>{
          setFireStatus(0);
        },2000);

        return false;
      }
    }

    else if(fs.current===3 && pwd.includes("🔥")){
     setFireStatus(0);
    }

    else {

      if(pS===0){
        let newPwd=pwd.replace("🥚","🐔");
        setPassword(newPwd);
        setPaulStage(1)
      }

      return true;
    }

    return false;
  }

  const addFire=(pwd)=>{

    if(eggCount.current>=pwd.length){
      setFireStatus(1);
      return;
    }

    if(eggIndex===-1 && pwd.includes("🥚")){
        eggIndex=pwd.indexOf("🥚");
    }

    let RandomIndex=Math.floor(Math.random()*pwd.length);

    if(((RandomIndex===eggIndex.current || RandomIndex===eggIndex.current+1) && eggCount.current<6)){
      while(RandomIndex===eggIndex.current || RandomIndex===eggIndex.current+1){
        RandomIndex=Math.floor(Math.random()*pwd.length);
      }
    }

    const newPassword=pwd.substring(0,RandomIndex)+"🔥"+pwd.substring(RandomIndex+1);
    setPassword(newPassword);
    setWordCount(newPassword.length);
    setFireStatus(1); 
    eggCount+=1;

  }
