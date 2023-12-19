import {configureStore} from "@reduxjs/toolkit"
import paulDedReducer from './PaulStates/isPaulDed'
import paulStageReducer from "./PaulStates/paulStage"
import cpbkReducer from "./PaulStates/cpbk"
import passwordReducer from "./MainStates/passwordstate"
import wordCountReducer from "./MainStates/wordcountstate"
import eggCReducer from "./FireStates/eggcount"
import eggIndexReducer from "./FireStates/eggindex"
import fireStatusReducer from "./FireStates/fireStatus"
import fireTimeIdReducer from "./FireStates/firetimeid"
import timeIdReducer from "./FireStates/timeid"

export default configureStore({
    reducer:{
        paulDed:paulDedReducer,
        paulStage:paulStageReducer,
        cpbk:cpbkReducer,
        pwd:passwordReducer,
        wc:wordCountReducer,
        eggC:eggCReducer,
        eggIndex:eggIndexReducer,
        fireStatus:fireStatusReducer,
        FTID:fireTimeIdReducer,
        TID:timeIdReducer
    }
})