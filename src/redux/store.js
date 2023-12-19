import {configureStore} from "@reduxjs/toolkit"
import paulDedReducer from './PaulStates/isPaulDed'
import paulStageReducer from "./PaulStates/paulStage"
import cpbkReducer from "./PaulStates/cpbk"
import passwordReducer from "./MainStates/passwordstate"
import wordCountReducer from "./MainStates/wordcountstate"

export default configureStore({
    reducer:{
        paulDed:paulDedReducer,
        paulStage:paulStageReducer,
        cpbk:cpbkReducer,
        pwd:passwordReducer,
        wc:wordCountReducer
    }
})