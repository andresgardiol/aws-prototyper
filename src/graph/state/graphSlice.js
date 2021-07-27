import {createSlice} from '@reduxjs/toolkit'
import LiteGraphJS from 'litegraph.js/build/litegraph.js';
import {LoadCustomNodes} from "../LoadCustomNodes";

export let graph = null;
export let canvas = null;

export const graphSlice = createSlice({
    name: 'graph',
    initialState: {},
    reducers: {
        createCanvas: () => {
            graph = new LiteGraphJS.LGraph();
            canvas = new LiteGraphJS.LGraphCanvas("#editor-canvas", graph);
            graph.start();
            LoadCustomNodes();
        },
        addNode: (state, action) => {
            graph.add(action.payload);
        }
    }
})

export const {createCanvas, addNode} = graphSlice.actions

export default graphSlice.reducer
