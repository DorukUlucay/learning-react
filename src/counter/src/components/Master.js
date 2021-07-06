import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import UserInput from './UserInput';

const Master = (props) =>{
    
    const[count, setCounter] = useState(0);
    const[incrementValue, setIncrementValue] = useState(1);

    const clickHandler = () => {
        setCounter(count+incrementValue);
    }

    const incrementValueChangeHandler = (value) => {
        setIncrementValue(value);
    }

    return <div>
        <UserInput incrementValueChangeHandler={incrementValueChangeHandler} />
        <Display count={count} />
        <Button clickHandler={clickHandler} incValue={incrementValue} />
    </div>;
}

export default Master;