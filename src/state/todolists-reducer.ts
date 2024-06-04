import {TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: TodolistType[], action: TodolistsReducerType): TodolistType[] => {
   switch (action.type) {
      case "REMOVE-TODOLIST": {
         return state.filter(tl => tl.id !== action.payload.id)
      }
      case "ADD-TODOLIST": {
         const todolistId = v1()
         const newTodolist: TodolistType = {id: todolistId, title: action.payload.title, filter: 'all'}
         return [...state,newTodolist]
      }
      default:
         return state
   }
}

type TodolistsReducerType = RemoveTodolistAcType | AddTodolistACType
type RemoveTodolistAcType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (todolistId: string) => {
   return {
      type: 'REMOVE-TODOLIST',
      payload: {
         id: todolistId,
      },
   } as const
}
type AddTodolistACType = ReturnType<typeof addTodolistAC>

export const addTodolistAC = (title: string) => {
   return {
      type: "ADD-TODOLIST",
      payload: {
         title
      }
   } as const
}