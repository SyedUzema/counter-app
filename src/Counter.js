import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-container">
            <img src="./logo.png" alt="Logo" className="counter-logo" />
            <h1 className="counter-title">Counter App</h1>
            <p className="count">{count}</p>
            <button className="button increment" onClick={increment}>Increment</button>
            <button className="button decrement" onClick={decrement}>Decrement</button>
            <button className="button reset" onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
