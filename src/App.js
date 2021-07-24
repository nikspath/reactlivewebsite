import Header from './MyComponents/Header'
import ToDos from './MyComponents/ToDos'
import Footer from './MyComponents/Footer'
import AddTodos from './MyComponents/AddTodos';
import react,{useState} from 'react';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(){

 

const onDelete= (todo) =>{
  console.log("i am on delete function",todo);
  setTodos(todos.filter((e)=>e != todo))
}

  const show=false;

   const addTodo=(title,desc)=>{
    let sr=todos.length > 0 ? todos[todos.length-1].id+parseInt(1):1;
    const newTodo={
      id:sr,
      title:title,
      desc:desc
    }
    setTodos([...todos,newTodo]);
  }

  
const [todos,setTodos]=useState([
  {
    id:1,
    title:"first",
    desc:"first desc"
  },
  {
    id:2,
    title:"second",
    desc:"second desc"
  },
  {
    id:3,
    title:"third",
    desc:"third desc"
  },
  {
    id:4,
    title:"forth",
    desc:"first desc"
  }

  ]);

  return (
    <div className="container">
    <Router>
      <Header title="My Todo List" searchbar={show} />

      <Switch>
      <Route exact path="/" render={()=>{

        return (
          <>
          <AddTodos addTodo={addTodo}/>
      <ToDos todos={todos} ondelete={onDelete}/>
      </>
          );

      }}>
            
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        
          
        </Switch>


      
      <Footer/>
     </Router> 
    </div>
    )
}

export default App;



