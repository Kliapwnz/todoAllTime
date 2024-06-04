import {TodolistType} from "../App";

export const todolistsReducer = (state: TodolistType[], action: TodolistsReducerType): TodolistType[] => {
   switch (action.type) {
      case "REMOVE-TODOLIST": {
         return state.filter(tl => tl.id !== action.payload.id)
      }
      default:
         return state
   }
}

type TodolistsReducerType = RemoveTodolistAcType
type RemoveTodolistAcType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (todolistId: string) => {
   return {
      type: 'REMOVE-TODOLIST',
      payload: {
         id: todolistId,
      },
   } as const
}