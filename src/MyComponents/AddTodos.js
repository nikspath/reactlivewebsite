import react ,{useState} from 'react';


function AddTodos(props){
	const [title,setTitle]=useState();
	const [desc,setDesc]=useState();

	const submit=(e)=>{
		e.preventDefault();
		props.addTodo(title,desc)
	}

	return(
		<>
		<h3 className="text-center">Add ToDo</h3>
		<form onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="txttile">title</label>
    <input type="text" className="form-control" id="txttile" onChange={(e)=>setTitle(e.target.value)}  aria-describedby="emailHelp" placeholder="Enter title" />

  </div>
  <div className="form-group">
    <label htmlFor="txtdesc">desc</label>
    <input type="text" className="form-control" id="txtdesc" onChange={(e)=>{setDesc(e.target.value)}} placeholder="desc" />
  </div>
 
  <button type="submit" className="btn btn-success" >Submit</button>
</form>
		</>
		);
}

export default AddTodos;