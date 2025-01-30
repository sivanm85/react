import { useState } from "react";

function Counter () {
const [count, setCount]= useState(0);
const countToIncrease = () => {
        setCount(count+1);
}
return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={countToIncrease}>Click Me</button>
    </div>
)
}
export default Counter;