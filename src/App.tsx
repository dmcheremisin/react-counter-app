import React, { useState } from 'react';
import './App.css';
import Result from './components/result';
import Buttons from './components/buttons';
import Reset from './components/reset';

export default function App() {
    const [total, setTotal] = useState<number>(0);

    const add = (value: number) => {
        setTotal(total + value);
    }

    const remove = (value: number) => {
        setTotal(total - value);
    }

    const reset = () => {
      setTotal(0);
    }

    return (
        <div className="App">
            <h1>Counter App</h1>

            <Buttons add={add} remove={remove} />

            <Result result={total}/>

            <Reset reset={reset} />

        </div>
    );
}
