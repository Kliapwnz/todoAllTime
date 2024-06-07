import {TasksStateType} from "../App";
import {v1} from "uuid";

type TasksReducerType =
   removeTaskACType |
   addTaskACType

type removeTaskACType = ReturnType<typeof removeTaskAC>
type addTaskACType = ReturnType<typeof addTaskAC>


export const tasksReducer = (state: TasksStateType, action: TasksReducerType): TasksStateType => {
   switch (action.type) {
      case "REMOVE-TASK":
         return {
            ...state,
            [action.payload.todolistId]:
               state[action.payload.todolistId].filter(el => el.id !== action.payload.taskId)
         }
      case "ADD-TASK":
         const newTask = {id: v1(), title: action.payload.title, isDone: false}
         return {
            ...state,
            [action.payload.todolistId]:
               [newTask, ...state[action.payload.todolistId]]
         }
      default:
         return state
   }
}


export const removeTaskAC = (taskId: string, todolistId: string) => {
   return {
      type: 'REMOVE-TASK',
      payload: {
         taskId, todolistId,
      },
   } as const
}


export const addTaskAC = (title: string, todolistId: string) => {
   return {
      type: "ADD-TASK",
      payload: {
         title, todolistId
      }
   } as const
}
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