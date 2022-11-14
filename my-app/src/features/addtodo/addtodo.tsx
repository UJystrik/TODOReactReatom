import React from "react";
import { addTodoInStore } from "../service";

export default class AddTodo extends React.Component<{}, {value: string}>{
    constructor(props: string) {
        super(props);
        this.state = {value: ""};
    }
    public handleChange = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        this.setState({value: e.target.value});
    }

    render(): React.ReactNode {
        return(
            <div>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={() => addTodoInStore(this.state.value)}>Добавить</button>
            </div>
        )
    }
}