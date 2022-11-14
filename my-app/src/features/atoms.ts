import {  declareAtom } from "@reatom/core";
import { addTodo, checkTodo, deleteTodo, newTodoId } from "./actions"
import { getNewId } from "./service";
import { ITodoItem } from "./types"

const todoItems: ITodoItem[] = [];

const todoIdMax = 0;

export const todosAtom = declareAtom(todoItems, on => [
    on(addTodo, (state, text) => {return [...state, {
        id: getNewId(), 
        text: text, 
        complete: false
    }]}),
    on(deleteTodo, (state, id) =>{
        return state.filter(el => el.id != id)
    }),
    on(checkTodo, (state, id) =>{
        return state.map(function(item){ 
            return {id: item.id, 
                text: item.text, 
                complete: item.id == id? !item.complete: item.complete};
        })
    })
])

export const todosIdAtom = declareAtom(todoIdMax, on => [
    on(newTodoId, state => state + 1)
])