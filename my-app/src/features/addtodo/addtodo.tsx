import { useAction } from "@reatom/react";
import React, { useState } from "react";
import { addTodo } from "../actions";

export default function AddTodo(){
    const [text, setText] = useState("");
    const doAddTodo = useAction(addTodo);

    const handleChange = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setText(e.target.value);
    }

    return(
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={() => (text === "") ? "" : doAddTodo(text)}>Добавить</button>
        </div>
    )

}