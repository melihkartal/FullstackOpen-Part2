import { useState } from 'react';
import PersonList from './components/PersonList';


const App = () => {

  //state: to keep the list of names type : array
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  //state to keep the list of new names type: string 
  const [newName, setNewName] = useState('')
  // const [newNameList, setNewNameList] = useState([]);


  const submitHandler = event => {
    event.preventDefault();
    const temp = {'name' : newName};
    setPersons(persons.concat(temp));
  }
  

  const inputHandler = event => {
    setNewName(event.target.value);
   
  }


  return (
    <div>
   
      <h2>Phonebook</h2>   
      <form onSubmit = {submitHandler}>
        <div>
          name: <input onChange = {inputHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
   

      <ul>
            {persons.map((element,index)=>{
              return (<PersonList key = {index} person = {element} />)
            })}
      </ul>

   
 
    </div>
  );
  
}

export default App