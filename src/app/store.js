import {configureStore} from "@reduxjs/toolkit";
import graphReducer from "../graph/state/graphSlice";

export default configureStore({
    reducer: {
        graph: graphReducer
    }
})
