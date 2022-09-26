import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './Components/AddUser';
import UsersLists from './Components/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler =(uName, uAge) =>{
    setUsersList((prevList)=>{
     return  [...prevList, {name: uName, age:uAge ,id: Math.random().toString()}, ];

    })
  }
  return (
    <div className="App">
      <header className="App-header">
      <AddUser onAddUser ={addUserHandler}/>
      <UsersLists usersArray={usersList} />
      </header>
    </div>
  );
}

export default App;
