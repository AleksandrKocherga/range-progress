import React, {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {ADD_INPUT_VALUE} from '../../redux/actionTypes'

function Input() {
  const dispatch = useDispatch()
  const input = useRef(null)
  const {value} =useSelector(store => store)

 function inputHandler (event){
  event.target.classList.remove('error')
    dispatch({type:ADD_INPUT_VALUE, payload: event.target.value })
      let a = event.target.value.replace(/%/gi, '')
      const min = 0 
      const max = 100 
    if(+a > max || +a < min){
      console.log(event.target.tagName)
      event.target.classList.add('error')
      return event.target.value = `0 %`
    }
  }

  useEffect(()=> {
    input.current.value = value + '%'
  },[value, input])

  return (
    <>
      <input className="h-input w-input text-center outline-none bg-white border border-gray-200 rounded-mid dark:text-white dark:bg-gray-800 dark:border-gray-border" ref={input} onChange={inputHandler}/>
    </>
  );
}

export default Input;
