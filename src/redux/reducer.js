import {ADD_VALUE, ADD_INPUT_VALUE} from './actionTypes.js'

export function reducer ( state = {value : '0', inputValue : '0'}, action){
  switch(action.type){
    case ADD_VALUE:
      return {...state, value: action.payload}
      case ADD_INPUT_VALUE:
        return {...state, inputValue: action.payload}
     default : 
      return state
  }
}
