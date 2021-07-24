import React from 'react'



function TodoItem(props){
	return (
		<div>
		<h4>{props.todo.title}</h4>
		<p>{props.todo.desc}</p>
		<div className="px-auto">
		<button className="btn btn-sm  btn-success"> Select</button>
		<button className="btn btn-sm btn-danger" onClick={()=>{props.ondelete(props.todo)}}> Delete</button>
		</div>
		<hr/>
		</div>
		)
}

export default TodoItem;