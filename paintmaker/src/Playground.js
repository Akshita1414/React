import React, {useState} from "react";
import randomColor from "randomcolor";


export default function Playground() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(null);

useEffect(() => {
    setColor(randomColor());
}, [count]);

    return (
        <div>
        <buton onClick = {() => setCount((currentCount) => currentCount - 1)}>-</buton>
        <buton onClick = {() => setCount((currentCount) => currentCount + 1)}>+</buton>
        </div>
    );
}