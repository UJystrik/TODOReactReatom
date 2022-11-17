import { ITodoItem } from "../types";
import { useAction } from "@reatom/react";
import { checkTodo, deleteTodo } from "../actions";
import  "./todoitem.css";

export default function TodoItem(item: ITodoItem) {
    const deleteItem = useAction(deleteTodo);
    const checkItem = useAction(checkTodo);

    return( 
    <div className={"todoCase"}>
        <input 
            className={"todoItemImg"} 
            type="checkbox" 
            checked={item.complete} 
            onChange={() => {checkItem(item.id)}}/>

        <div className={item.complete? "checkText" : ""}>
            {item.text}
        </div>
        <button key={item.id} onClick={() => deleteItem(item.id)}>
            Удалить
        </button>
    </div>
    )
}

