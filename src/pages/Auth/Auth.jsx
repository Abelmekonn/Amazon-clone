import React,{useState} from 'react'
import classes from './Auth.module.css';
import { Link } from 'react-router-dom';
import {auth} from "../../Utility/fireBase"
function Auth() {
  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const authHandler=(e)=>{
    e.preventDefault()
    if( e.target.name=="signin"){
      
    }else{

    }
  }
  return (
    <section className={classes.login}>
      <Link>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon logo" />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        <h1>
          Sign In
        </h1>
        <form action="" method="post">
          <div>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' />
          </div>
          <div>
            <label htmlFor='password'>password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id='password' />
          </div>
          <button onClick={authHandler} 
            className={classes.login_signInButton} 
            type='submit'
            name="signin"
          >
            Sign in
          </button>
        </form>
        {/*  */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Porro maxime enim vitae facere deserunt quod necessitatibus
          dolorem ad voluptas rem suscipit accusamus architecto.
        </p>
        {/* create account */}
        <button type='submit' 
        onClick={authHandler} 
        className={classes.login_register}
        name='signup'
        >Create your account
        </button>
      </div>
    </section>
  );
}

export default Auth;
