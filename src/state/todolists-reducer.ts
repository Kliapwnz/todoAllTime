import {TodolistType} from "../App";

export const todolistsReducer = (state: TodolistType[], action: any): TodolistType[] => {
   switch (action.type) {
      case "xxx": {
         return state
      }
      default:
         return state
   }
}