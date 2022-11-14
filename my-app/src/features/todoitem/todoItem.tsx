import { ITodoItem } from "../types";
import deleteLogo from "../icons/delete.png"
import checkLogo from "../icons/check.png"
import uncheckLogo from "../icons/uncheck.png"
import { checkTodoElement, deleteTodoFromStore } from "../service";
import  "./todoitem.css";

export default function TodoItem(item: ITodoItem) {
    const deleteItem = (id: number) => {
        deleteTodoFromStore(id);
    }
    const checkItem = (id: number) => {
        checkTodoElement(id);
    }
    return( 
    <div className={"todoCase " + (item.complete? "checkText" : "")}>
        <img className={"todoItemImg"} onClick={() => checkItem(item.id)} src={(item.complete? checkLogo : uncheckLogo)}/>
        <div>{item.text}</div>
        <img className="todoItemImg" key={item.id} src={deleteLogo} onClick={() => deleteItem(item.id)} />
    </div>
    )
}

