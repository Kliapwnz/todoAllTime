import {FilterValuesType, TodolistType} from '../App'
import {v1} from 'uuid'

export type RemoveTodolistActionType = {
   type: 'REMOVE-TODOLIST'
   payload: {
      id: string
   }
}

export type AddTodolistActionType = {
   type: 'ADD-TODOLIST'
   payload: {
      title: string
   }
}

export type ChangeTodolistTitleActionType = {
   type: 'CHANGE-TODOLIST-TITLE'
   payload: {
      id: string
      title: string
   }
}

export type ChangeTodolistFilterActionType = {
   type: 'CHANGE-TODOLIST-FILTER'
   payload: {
      id: string
      filter: FilterValuesType
   }
}

type ActionsType =
   | RemoveTodolistActionType
   | AddTodolistActionType
   | ChangeTodolistTitleActionType
   | ChangeTodolistFilterActionType


let todolistID1 = v1()
let todolistID2 = v1()

const initialState: TodolistType[] = [
   {id: todolistID1, title: 'What to learn', filter: 'all'},
   {id: todolistID2, title: 'What to buy', filter: 'all'},
]

export const todolistsReducer = (state: TodolistType[] = initialState, action: ActionsType) => {
   switch (action.type) {
      case 'REMOVE-TODOLIST': {
         return state.filter(tl => tl.id !== action.payload.id)
      }
      case 'ADD-TODOLIST': {
         const newTodolist: TodolistType = {id: v1(), title: action.payload.title, filter: 'all'}
         return [...state, newTodolist]
      }
      case 'CHANGE-TODOLIST-TITLE': {
         return state.map(el => (el.id === action.payload.id ? {...el, title: action.payload.title} : el))
      }
      case 'CHANGE-TODOLIST-FILTER': {
         return state.map(el => (el.id === action.payload.id ? {...el, filter: action.payload.filter} : el))
      }
      default:
         throw new Error("I don't understand this type")
   }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
   return {type: 'REMOVE-TODOLIST', payload: {id: todolistId}} as const
}
export const addTodolistAC = (title: string): AddTodolistActionType => {
   return {type: 'ADD-TODOLIST', payload: {title}} as const
}
export const changeTodolistTitleAC = (title: string, id: string): ChangeTodolistTitleActionType => {
   return {
      type: 'CHANGE-TODOLIST-TITLE', payload: {
         id,
         title
      }
   } as const
}