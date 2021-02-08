import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_VALUE } from '../../redux/actionTypes.js';

function Range() {
  const rangeValue = useRef(null);
  const dispatch = useDispatch();
  const { inputValue } = useSelector(store => store);

  function inputHandler(event) {
    return dispatch({ type: ADD_VALUE, payload: event.target.value })
  };

  function validNumber(input, rangeValue) {
    let current = parseFloat(input)
    const min = 0
    const max = 100
    if (current >= min && current <= max) {
      return rangeValue.current.value = current
    } else {
      return rangeValue.current.value = min
    }
  };

  useEffect(() => {
    validNumber(inputValue, rangeValue)
  }, [rangeValue, inputValue]);

  return (
    <>
      <input ref={rangeValue} type="range" min="0" max="100" step="0.01" className="slider z-10 border-range-border dark:border-white" onChange={inputHandler} list="number" />
      <datalist id="number">
        <option value="0" />
        <option value="25" />
        <option value="50" />
        <option value="75" />
        <option value="100" />
      </datalist>
      <div className="-ml-ellipce pl-ell-p flex justify-between w-rage ">
        <span className="elipse dark:bg-white"></span>
        <span className="elipse dark:bg-white"></span>
        <span className="elipse dark:bg-white"></span>
        <span className="elipse dark:bg-white"></span>
        <span className="elipse dark:bg-white"></span>
      </div>

    </>
  );
};

export default Range;
