import React, {useState} from 'react';
import './App.css';
import './components/Users/AddUsers'
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList,setUsersList] = useState([]);

  const addUserHandler = (name,age) => {
      setUsersList((prevUsersList) => {
        return [...prevUsersList,{name:name,age:age,id:Math.random().toString()}]
      });
  }

  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
