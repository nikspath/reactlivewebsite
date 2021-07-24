import React from 'react'
import TodoItem from './TodoItem';

function ToDos(props){
	return (
	<>
	<div className="container">
	<h3 className="text-center">Todos List</h3>
	{props.todos.length > 0 
		?
		props.todos.map((todo,index)=>{
			return <TodoItem todo={todo} key={index} ondelete={props.ondelete}/>
		})
		: 
		<p>No List</p>
	}
	
	</div>
	</>
	)
}

export default ToDos;