function ParentFireFunction(pwd){

    if(fs.current===0){

      if(fireTimeId.current){
        clearTimeout(fireTimeId.current);
      }

      fireTimeId.current=setTimeout(()=>{
        addFire(pwd)
      },1500);
    }

    else if(fs.current===1){

      if(TimeId.current){
        clearTimeout(TimeId.current);
      }

      if(!pwd.includes("🔥")){
        setFireStatus(3)
        clearTimeout(TimeId.current);
        eggCount.current=0;
        TimeId.current=null;
        return true;
      }

      else{

        TimeId.current=setTimeout(()=>{
          setFireStatus(0);
        },2000);

        return false;
      }
    }

    else if(fs.current===3 && pwd.includes("🔥")){
     setFireStatus(0);
    }

    else {

      if(pS.current===0){
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

    if(eggIndex.current===-1 && pwd.includes("🥚")){
        eggIndex.current=pwd.indexOf("🥚");
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
    eggCount.current+=1;

  }
