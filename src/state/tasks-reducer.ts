import {TasksStateType} from "../App";
import {v1} from "uuid";

type TasksReducerType =
   removeTaskACType |
   addTaskACType |
   changeTaskStatusACType |
   changeTaskTitleACType

type removeTaskACType = ReturnType<typeof removeTaskAC>
type addTaskACType = ReturnType<typeof addTaskAC>
type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>


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
      case "CHANGE-TODOLIST-TITLE":
         return {
            ...state,
            [action.payload.todolistId]:
            state[action.payload.todolistId].map(el=> el.id ? {...el, isDone: action.payload.isDone} :el)
         }
      case "CHANGE-TODOLIST-FILTER":
         return {
            ...state,
            [action.payload.todolistId]:
               state[action.payload.todolistId].map(el=> el.id ? {...el, title: action.payload.title} :el)
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

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
   return {
      type: 'CHANGE-TODOLIST-TITLE',
      payload: {
         taskId, isDone, todolistId
      }
   } as const
}
//
export const changeTaskTitleAC = (todolistId: string, taskId: string, title: string) => {
   return {
      type: 'CHANGE-TODOLIST-FILTER',
      payload: {
         todolistId, taskId, title
      }
   } as const
}