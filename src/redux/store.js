import {configureStore} from "@reduxjs/toolkit"
import * as MS from './storeIndex.js';

export default configureStore({
    reducer:{
        paulDed:MS.paulDedReducer,
        paulStage:MS.paulStageReducer,
        cpbk:MS.cpbkReducer,
        pwd:MS.passwordReducer,
        wc:MS.wordCountReducer,
        eggC:MS.eggCReducer,
        eggIndex:MS.eggIndexReducer,
        fireStatus:MS.fireStatusReducer,
        FTID:MS.fireTimeIdReducer,
        TID:MS.timeIdReducer,

        ws:MS.wormStatusReducer,
        whtid:MS.wormHungryReducer,
        wftid:MS.wormFeedReducer,
        paulbelly:MS.PaulBellyReducer,

        pdStages:MS.pauldeathReducer,
        RTState:MS.rtreducer,
        RTRandom:MS.rtrandomizerreducer,
        RTGameover:MS.rtgameover,
        CaptchaGenerator:MS.CaptchaReducer
    }
})