import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div><button onClick={() => setCount(c => c + 1)}>Click {count}</button></div>
    )
}