import { useState } from 'react';
import Button from './components/Button';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    console.log(useState);

    const increaseHandler = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const resetHandler = () => {
        setCount(0);
    };

    const decreaseHandler = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const setColor = () => {
        if (count > 0) {
            return 'red';
        } else if (count < 0) {
            return 'green';
        } else {
            return 'blue';
        }
    };

    return (
        <div>
            <h1 className={`count-style ${setColor()}`}>{count}</h1>
            <Button
                styling="increase"
                text="Increase"
                clickHandler={increaseHandler}
            />
            <Button styling="reset" text="Reset" clickHandler={resetHandler} />
            <Button
                styling="decrease"
                text="Decrease"
                clickHandler={decreaseHandler}
            />
        </div>
    );
}

export default App;
