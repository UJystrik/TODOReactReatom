import { declareAction } from "@reatom/core";

export const addTodo = declareAction<string>("add_todo");

export const deleteTodo = declareAction<number>("delete_todo");

export const checkTodo = declareAction<number>("check_todo");

export const newTodoId = declareAction("new_todo_id");