import { useState } from 'react';
import './index.css';

function ToDoList(){
    const [ toDos, setToDos ]=useState([]);
    const [ resultToDos, setResultToDos ]=useState([]);
    const [ input, setInput ]=useState('');
    const [ open, setOpen ]=useState(true);

    const handleToDoAdd= () => {
    if(input===''){
        return;
    }
    const toDo={
    todoname:input,
    };
    setToDos([ ...toDos, toDo ]);
    setResultToDos([ ...toDos, toDo ]);
    setInput('');
    };
    
    const handleInputChange = e => {
        setInput(e.target.value);
    };  
    
    const search = e => {
        let value=e.target.value.trim();
        setResultToDos(toDos.filter(elem => elem.todoname.toLowerCase().match(value.toLowerCase())));
    };
    
    const deleteToDo = index => {
        setToDos(toDos.filter((elem,i) => i!==index));
        setResultToDos(toDos.filter((elem,i) => i!==index));
    };
    
    const hideAll = () => {
       setOpen(!open);
       setResultToDos(open ? [] : toDos);
    };
    
    const handleKeyDown = event =>{
    if (event.key === 'Enter'){
        handleToDoAdd()
    }
    };
        return(
        <div id='container'>
            <p>Library</p>
            <span>Books for Students</span>
            <input onChange={ search } type='text' placeholder='Search books...' id='input1'></input>
            <div id='todos'>
            <p id='booksp'>Books to Read</p>
            <ul>
                {
                resultToDos.map((elem,index)=>{
                    return <li key={ index }>
                    <span>{ elem.todoname }</span><button onClick={()=>deleteToDo(index)}>Delete</button>
                    </li>
                })
                }
            </ul>
            <div id="inputs">
            <p><input type='checkbox' onClick={ hideAll } id='checkbox' name="todos" value="show"></input><label for='checkbox'><span>Hide all books</span></label></p>
            <p><input type='text' placeholder='Add a book...' onChange={ handleInputChange } value={ input } id='input2' onKeyDown={ handleKeyDown }></input><button onClick={ handleToDoAdd }>Add</button></p>
            </div>
            </div>
        </div>)
} 
export default ToDoList