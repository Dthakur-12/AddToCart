import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { Increment,Decrement } from '../features/Counter/counterSlice';

const CounterValue = () => {
   const data= useSelector((state)=>state.Counter);
   const dispatch=useDispatch();
   console.log(data);
  return (
    <div>CounterValue:
        <h1>{data.counter}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default CounterValue