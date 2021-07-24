import './Graph.css';
import {useEffect, useLayoutEffect, useState} from "react";
import {LGraph, LGraphCanvas, LiteGraph} from "litegraph.js";
import {ToolBox} from "./ToolBox";


export function Graph() {
    let [graph] = useState(new LGraph());
    let [width, height] = useWindowSize();
    useEffect(() => {
        const canvas = mountGraph(graph);
        window.addEventListener("resize", function () {
            canvas.resize();
        });
    }, []);

    function handleClickAddNode(node) {
        const newNode = createNode({nodeName: 'basic/const',yPos:300, xPos:300});
        graph.add(newNode);
    }

    return (
        <>
            <canvas id="editor-canvas" width={Math.max(100, width)} height={Math.max(100, height)} tabIndex={10}
                    style={{background: "#111111", outline: 'none', borderBottom: '1px solid #666666'}}/>
            <ToolBox onClickAddNode={handleClickAddNode}/>
        </>
    );
}

function mountGraph(graph) {
    const canvas = new LGraphCanvas("#editor-canvas", graph);

    graph.start();
    return canvas;
}

function createNode({nodeName, xPos, yPos}) {
    let node_const = LiteGraph.createNode(nodeName);
    node_const.pos = [xPos, yPos];
    return node_const;
}

function useWindowSize() {
    let [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([(window.clientWidth || window.scrollWidth || window.innerWidth), (window.clientHeight || window.scrollHeight || window.innerHeight) - 8]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
