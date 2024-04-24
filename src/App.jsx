import { useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Routing from './Router'
import { DataContext } from './components/DataProvider/DataProvider'
import { auth } from './Utility/fireBase'
import { Type } from './Utility/action.type'
function App() {
  const [{user},dispatch]=useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      }else{
        dispatch({
          type:Type.SET_USER,
          user:null
        })
      }
    }) 
  },[dispatch])
  return (
    <>
      <Routing />
    </>
  )
}

export default App
