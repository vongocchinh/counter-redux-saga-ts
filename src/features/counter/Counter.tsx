import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  selectCount,
  incrementNumberSaga,
  selectLoading
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const [lding,setLoading]=React.useState(false);
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  const loading=useAppSelector(selectLoading);

  React.useEffect(() => {
  
    if(loading==='loading'){
      setLoading(true);
    }
    if(loading==='idle'){
      setLoading(false);
    }
  }, [loading,setLoading])
  


  const showLoading=(loading : boolean)=>{
      if(loading){
        return (
          <div className={styles.loading}>
                <img alt="" src={"https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"} />
          </div>
        )
      }else{
        return null;
      }
  }
  return (
    <div>
      {showLoading(lding)}

      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={() => dispatch(incrementNumberSaga(incrementValue))}
      >
        Add Async
      </button>
      {/* <div className={styles.row}>
       
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div> */}
    </div>
  );
}
