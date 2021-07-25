import {useEffect, useLayoutEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {canvas, createCanvas} from "./state/graphSlice";


export function Graph() {
    const dispatch = useDispatch();
    let [width, height] = useWindowSize();

    useEffect(() => {
        dispatch(createCanvas());
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener("resize", function () {
            canvas.resize();
        });
    }, [])


    return (
        <>
            <canvas id="editor-canvas" width={Math.max(100, width)} height={Math.max(100, height)} tabIndex={10}
                    style={{background: "#111111", outline: 'none', borderBottom: '1px solid #666666'}}/>
        </>
    );
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
