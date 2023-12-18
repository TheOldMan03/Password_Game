function WormCheck(pwd){

    if(wormS.current===0){ //0 means that it is hungry
      
      if(pwd.includes("🐛")){
        // wormS.current=1;
        setWormStatus(1);
        clearTimeout(wormHungry.current);
        wormHungry.current=null;
      }

      else{

        if(wormHungry.current){
          return false;
        }

        wormHungry.current=setTimeout(()=>{
          setisPaulDed(true);
        },20000)
      }
    }

    else{ //paul is being fed

      if(wormFeed.current){
        clearTimeout(wormFeed.current);
        wormFeed.current=null;
      }
      
      if(!pwd.includes("🐛")){
        // wormS.current=0;
        setWormStatus(0);
        paulBelly.current=0;
      }

      else{
          wormFeed.current=setTimeout(()=>{
            const wormIndex=pwd.indexOf("🐛")
            const newPwd=pwd.substring(0,wormIndex)+pwd.substring(wormIndex+2);
            setPassword(newPwd);
            setWordCount(newPwd.length);
            paulBelly.current+=1;  
        },10000)

        if(paulBelly.current>=5){
          setisPaulDed(true);
        }

      }
    }

    if(wormS.current===1){
      return true;
    }

    return false;

  }