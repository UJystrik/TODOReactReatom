import { declareAction } from "@reatom/core";

export const addTodo = declareAction<string>("add_todo");

export const deleteTodo = declareAction<string>("delete_todo");

export const checkTodo = declareAction<string>("check_todo");