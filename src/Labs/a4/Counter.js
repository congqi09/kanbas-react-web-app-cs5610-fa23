import React, { useState } from "react";
function Counter() {
    const [count, setCount] = useState(8);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button className="btn btn-danger me-2" onClick={() => { setCount(count + 1) }}>
                Up
            </button>
            <button className="btn btn-success" onClick={() => { setCount(count - 1) }}>
                Down
            </button>
        </div>
    );
}
export default Counter;