import {LiteGraph} from "litegraph.js";

export function createNode({nodeName, xPos, yPos}) {
    let node_const = LiteGraph.createNode(nodeName);
    node_const.pos = [xPos, yPos];
    return node_const;
}
