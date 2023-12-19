import {configureStore} from "@reduxjs/toolkit"
import paulDedReducer from './PaulStates/isPaulDed'
import paulStageReducer from "./PaulStates/paulStage"
import cpbkReducer from "./PaulStates/cpbk"
import passwordReducer from "./MainStates/passwordstate"
import wordCountReducer from "./MainStates/wordcountstate"
import eggCReducer from "./FireStates/eggcount"

export default configureStore({
    reducer:{
        paulDed:paulDedReducer,
        paulStage:paulStageReducer,
        cpbk:cpbkReducer,
        pwd:passwordReducer,
        wc:wordCountReducer,
        eggC:eggCReducer,
    }
})