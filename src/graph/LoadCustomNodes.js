import Lambda from "./nodes/Aws/Lambda";
import LiteGraphJS from 'litegraph.js/build/litegraph.js';

const customNodes = [
    {
        name: "aws/lambda", node: Lambda
    }
];


const addNodes = function ({name, node}) {
    LiteGraphJS.LiteGraph.registerNodeType(name, node);
}

export function createNode(LiteGraphJS, {nodeName, xPos, yPos}) {
    let node_const = LiteGraphJS.LiteGraph.createNode(nodeName);
    node_const.pos = [xPos, yPos];
    return node_const;
}

export function LoadCustomNodes() {

    for (let n in customNodes) {
        addNodes(customNodes[n])
    }
}
