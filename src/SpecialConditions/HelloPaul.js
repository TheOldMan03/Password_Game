import { killable } from "../redux/PaulStates/canPaulBekilled/cpbk";
import { paulDeath } from "../redux/PaulStates/isPaulDed/isPaulDed";
import store from "../redux/store";

export const HelloPaul=(pwd)=>{

  const pS=store.getState().paulStage.value
  const canPaulbekilled=store.getState().cpbk.value
  const dispatch=store.dispatch

  
    if(pS===0){
        if(pwd.includes("🥚")){
            if(!canPaulbekilled){
              
              dispatch(killable())
              //this means that Paul is susceptible to dying 
              //if he is ever removed from the pwd then the game is over
            }

            return true
        }

        else if(!pwd.includes("🥚") && canPaulbekilled){
          dispatch(paulDeath())
          return false
          //paul is dead
        }
    }

    else{
        if(pwd.includes("🐔")){
            return true
        }

        else if(!pwd.includes("🐔") && canPaulbekilled){
          dispatch(paulDeath())
          return false
        }
    }


  return false

}
