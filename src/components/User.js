import { useState } from "react";
const User = ({ name }) => {
    const [count, setCount] = useState(0);
    return <div className="user-card">
        <h1>Count : {count}</h1>
        <button onClick={() => {
            setCount(count + 1);
        }}>Count Increase</button>
        <button onClick={() => {
            setCount(count - 1);
        }}>Count Decrease</button>
        <h2>Name: {name}</h2>
        <h3>Location: Mumbai </h3>
        <h4>Contact: @sadaan_18</h4>
    </div>
}
export default User;