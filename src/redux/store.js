import {configureStore} from "@reduxjs/toolkit"
import paulDedReducer from './PaulStates/isPaulDed/isPaulDed'
import paulStageReducer from "./PaulStates/PaulStage/paulStage"
import cpbkReducer from "./PaulStates/canPaulBekilled/cpbk"


export default configureStore({
    reducer:{
        paulDed:paulDedReducer,
        paulStage:paulStageReducer,
        cpbk:cpbkReducer
    }
})