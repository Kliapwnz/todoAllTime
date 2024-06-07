import {FilterValuesType, TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";

type TasksReducerType =
   removeTaskACType

type removeTaskACType = ReturnType<typeof removeTaskAC>


export const tasksReducer = (state: TasksStateType, action: TasksReducerType): TasksStateType => {
   switch (action.type) {
      case "REMOVE-TASK":
         return state
      default:
         return state
   }
}


export const removeTaskAC = (taskId:string ,todolistId: string) => {
   return {
      type: 'REMOVE-TASK',
      payload: {
         taskId, todolistId,
      },
   } as const
}


// export const addTodolistAC = (title: string) => {
//    return {
//       type: "ADD-TODOLIST",
//       payload: {
//          title
//       }
//    } as const
// }
//
// export const changeTodolistTitleAC = (id: string, title: string) => {
//    return {
//       type: 'CHANGE-TODOLIST-TITLE',
//       payload: {
//          id, title
//       }
//    } as const
// }
//
// export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => {
//    return {
//       type: 'CHANGE-TODOLIST-FILTER',
//       payload: {
//          id, filter
//       }
//    } as const
// }