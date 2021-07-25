import {createSlice} from '@reduxjs/toolkit'
import {LGraph, LGraphCanvas} from "litegraph.js";

const graph = new LGraph();
export let canvas = null;

export const graphSlice = createSlice({
    name: 'graph',
    initialState: {
    },
    reducers: {
        createCanvas: state => {
            canvas = new LGraphCanvas("#editor-canvas", graph);
            graph.start();
        },
        addNode: (state, action) => {
            graph.add(action.payload);
        }
    }
})

export const {createCanvas, addNode} = graphSlice.actions

export default graphSlice.reducer
