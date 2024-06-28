import React, {useState} from "react"
import { useEffect } from "react";

export default function WindowSize() {
    const [[windowWidth, windowHeight], setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight
    ]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {};
        window.addEventListener("resize", handleResize);
        //clenup phase in useEffect
        return () => window.removeEventListener("resize", handleResize);
    }, []);
}

const [visible, setVisible] = useState(false);
useEffect(() => {
    const handleResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
        setVisible(true);
        setTimeout(() => setVisible(false), 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
})