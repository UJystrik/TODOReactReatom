import { ITodoItem } from "../types";
import { useAction } from "@reatom/react";
import { checkTodo, deleteTodo } from "../actions";
import { useState } from "react";
import  "./todoitem.css";

export default function TodoItem(item: ITodoItem) {
    const [checked, setChecked] = useState(item.complete);
    const deleteItem = useAction(deleteTodo);
    const checkItem = useAction(checkTodo);

    return( 
    <div className={"todoCase"}>
        <input className={"todoItemImg"} type="checkbox" checked={checked} onChange={() => {setChecked(!checked); checkItem(item.id)}}/>
        <div className={item.complete? "checkText" : ""}>
            {item.text}
        </div>
        <button key={item.id} onClick={() => deleteItem(item.id)}>
            Удалить
        </button>
    </div>
    )
}

