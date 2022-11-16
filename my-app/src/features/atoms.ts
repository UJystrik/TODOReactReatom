import {  declareAtom } from "@reatom/core";
import { addTodo, checkTodo, deleteTodo } from "./actions"
import { ITodoItem } from "./types"
import { v4 as uuidv4 } from 'uuid';

const todoItems: ITodoItem[] = [];

export const todosAtom = declareAtom(todoItems, on => [
    on(addTodo, (state, text) => {return [...state, {
        id: uuidv4(), 
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