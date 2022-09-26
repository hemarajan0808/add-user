import React, { useState } from "react";
import "./AddUser.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const AddUserHandler = (e) => {
    e.preventDefault();
    if(userName.trim().length===0 && age.trim().length === 0)
    return;
    if(+age <1){
        return;
    }
    
    props?.onAddUser(userName,age );
    setUserName('');
    setAge('');

  };

  const userNameHandler = (e)=>{
    setUserName(e.target.value)
  }
 const ageChangeHandler=(e) =>{
    setAge(e.target.value)
 }
  return (
    <form onSubmit={AddUserHandler}>
      <div className="Container">
        <div className="Input_Fields">
          <label htmlFor="username"> Username</label>
          <input type="text" id="username" value={userName} onChange={userNameHandler} ></input>
          <label htmlFor="age"> Age </label>
          <input type="number" id="age" value={age} onChange={ageChangeHandler}></input>
        </div>
        <div className="Button_Container">
          <button className="Add_User_Button" type="submit">
            Add User
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
