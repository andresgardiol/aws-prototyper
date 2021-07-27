import LiteGraphJS from 'litegraph.js/build/litegraph.js';

export function createNode(nodeName) {
    let node_const = LiteGraphJS.LiteGraph.createNode(nodeName);
    return node_const;
}
