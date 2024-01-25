import { killable } from "../redux/PaulStates/cpbk";
import { paulDeath } from "../redux/PaulStates/isPaulDed";
import { setStage } from "../redux/PaulStates/paulStage";
import { paulhasbeenslain } from "../redux/PaulStates/pauldeathstages";
import store from "../redux/store";

export default function HelloPaul(){

  const pS=store.getState().paulStage.value
  const pwd=store.getState().pwd.value
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
          dispatch(paulhasbeenslain())
          return false
          //paul is dead
        }
    }


    else if(pS===1){ //intermediate stage
      dispatch(setStage());
    }


    else{
        if(pwd.includes("🐔")){
            return true
        }

        else if(!pwd.includes("🐔") && canPaulbekilled){
          dispatch(paulDeath())
          dispatch(paulhasbeenslain())
          return false
        }
    }


  return false

}
