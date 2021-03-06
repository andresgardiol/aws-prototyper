import LiteGraphJS from 'litegraph.js/build/litegraph.js';
import Lambda from "./nodes/Aws/Lambda";
import DynamoDB from "./nodes/Aws/DynamoDB";

export const customNodes = [
    {name: "aws/lambda", node: Lambda, title: "Lambda", module: "aws"},
    {name: "aws/dynamodb", node: DynamoDB, title: "DynamoDB", module: "aws"}
];

export function LoadCustomNodes() {
    for (let n in customNodes) {
        addNodes(customNodes[n])
    }
}

const addNodes = function ({name, node}) {
    LiteGraphJS.LiteGraph.registerNodeType(name, node);
}
