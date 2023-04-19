import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const Counter = () => {
  //this state contains all of the states in the store, one of them is counter, we can see in the store/index.js
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div>
        <button onClick={() => resetAll()}>reset</button>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Amount
        </button>
      </div>
    </section>
  );
};
export default Counter;
