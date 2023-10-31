import React  from 'react'

import "./entry.style.css";
import LoginForm from '../../components/pages/login';
import { useState } from "react";
import ForgetPass from '../../components/pages/forgetPass';

const Entry  = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [Fpass, setFpass] = useState("login");
    const handleOnChange = e =>{
      const {name , value} = e.target
      switch(name){
        case 'email':
          setemail(value);
          break;
        case 'password':
          setpassword(value);
          break;

        default:
          break;

      }
      

    };

const handleOnSubmit = e => {
  e.preventDefault()
  if (!email || !password){
    return alert("fill the missing");
  }
};

const formSwitcher = changer =>{
  setFpass (changer);
};
const handleOnResetSubmit = (e) =>{
  e.preventDefault()
  if (!email){
    return alert("enter your email");
  }
};
  return (
    <div className='entry-page bg-info'>
<div className="jumbotron">
  {Fpass ==='login' &&   <LoginForm handleOnChange={handleOnChange}
  handleOnSubmit={handleOnSubmit}
  formSwitcher={formSwitcher}
  email={email}
  pass={password}
  />}

{Fpass ==='reset' && 
<ForgetPass handleOnChange={handleOnChange}
  handleOnResetSubmit={handleOnResetSubmit}
  formSwitcher={formSwitcher}
  email={email} 
  />}
</div>
    </div>
  )
}

export default Entry 
