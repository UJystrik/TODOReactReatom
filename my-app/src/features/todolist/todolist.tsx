import { ITodoItem } from "../types";
import TodoItem from "../todoitem/todoItem";
import { useAtom } from "@reatom/react";
import { todosAtom } from "../atoms"

export default function TodoList(){
    const todos = useAtom(todosAtom);;
    return(
        <div>
            {todos.map((todo: ITodoItem) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} complete={todo.complete}/>
            ))}   
        </div>  
    )
}