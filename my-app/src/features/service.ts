

import { createStore  } from "@reatom/core";
import { todosAtom, todosIdAtom } from "./atoms";
import { addTodo, checkTodo, deleteTodo, newTodoId } from "./actions";
import { ITodoItem } from "./types";

export const todosStore = createStore(todosAtom);

export const todosIdStore = createStore(todosIdAtom);

export function addTodoInStore(text: string){
     if(text.length > 0){
          todosStore.dispatch(addTodo(text));
     }
}

export function deleteTodoFromStore(id: number){
     todosStore.dispatch(deleteTodo(id));
}

export function checkTodoElement(id: number){
     todosStore.dispatch(checkTodo(id));
}

export function getTodos(): ITodoItem[]{
    return todosStore.getState(todosAtom);
}

export function getNewId(){
     todosIdStore.dispatch(newTodoId());
     return todosIdStore.getState(todosIdAtom);
}