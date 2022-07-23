import { Component } from "react";

class Todo extends Component{

    constructor(){
        super();
        this.state = {
            tasks:[],
            currtask:""
        }
    }
    handleChange = (e)=>{
        this.setState({
            currtask:e.target.value
        })
    }

    handleAdd = ()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currtask,id:this.state.tasks.length+1}],
            currtask:""
        })
    }

    handleDelete = (id)=>{
        let narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id!==id
        })
        this.setState({
            tasks:[...narr]
        })

    }
    render(){
        return(
            <div>
            <input type="text" value= {this.state.currtask} onChange={this.handleChange}/>
            <button onClick={this.handleAdd}> Add task </button>
            <ul>
                {this.state.tasks.map((taskObj)=>(
                    <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            </div>
        )
    }
}

export default Todo;