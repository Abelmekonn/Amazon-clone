import React,{useState,useContext} from 'react'
import classes from './Auth.module.css';
import { Link,useNavigate } from 'react-router-dom';
import {auth} from "../../Utility/fireBase"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import {DataContext} from "../../components/DataProvider/DataProvider"
import {ClipLoader} from "react-spinners"
import { Type } from '../../Utility/action.type';
function Auth() {
  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [{user},dispatch]=useContext(DataContext)
  const [loading,setLoading]=useState({
    signIn:false,
    signUp: false
  });
  const navigate=useNavigate()

  const authHandler=async(e)=>{
    e.preventDefault()
    if( e.target.name=="signin"){
      setLoading({...loading,signIn:true})
      signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        setLoading({...loading,signIn:false});
        navigate("/")
      }).catch((err)=>{
        setError(err.message)
        setLoading({...loading,signIn:false});
      })
    }else{
      setLoading({...loading,signUp: true})
      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        setLoading({...loading,signUp: false})
        navigate("/")
      }).catch((err)=>{
        setError(err.message)
        setLoading({...loading,signUp: false})
      })
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
          >{
            loading.signIn? (<ClipLoader color="#36d7b7" size={15} />) :("sign in")
          }
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
        >{
          loading.signUp? (<ClipLoader color="#36d7b7" size={15} />) :("sign up")
        }
        </button>
        {
          error && <small style={{paddingTop:"5px", color:"red"}}>{error}</small>
        }
      </div>
    </section>
  );
}

export default Auth;
