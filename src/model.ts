export interface Todo {
  id: number
  todo: string
  isDone: boolean
}

// import React, { useReducer } from 'react'

// type Actions =
//   | { type: 'add'; payload: string }
//   | { type: 'remove'; payload: number }
//   | { type: 'done'; payload: number }

// const todoReducer = (state: Todo[], action: Actions) => {
//  switch(action.type){
//   case 'add':
//    return [
//     ...state,
//     {id: Date.now(), todo:action.payload,isDone: false}
//    ]
//    case 'remove':
//     return state.filter((todo) => todo.id !== action.payload)
//     case 'done':
//      return state.map((todo) => todo.id !== action.payload ? {...todo, isDone: !todo.isDone})

//  }
// }

// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, [])

//   return <div />
// }

// export default ReducerExample
