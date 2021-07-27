export function createNode(LiteGraphJS, {nodeName, xPos, yPos}) {
    let node_const = LiteGraphJS.LiteGraph.createNode(nodeName);
    node_const.pos = [xPos, yPos];
    return node_const;
}
