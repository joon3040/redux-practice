import logo from './logo.svg';
import {useState} from "react";
import { useDispatch, useSelector} from 'react-redux';
import './App.css';
import Box from "./component/Box"

function App() {
  let count = useSelector((state)=>state.count);
  let id = useSelector(state=> state.id); //reducer의 return값을 통해 store에 저장된 매개변수 action값을
  let password = useSelector(state=> state.password); // App.js component에 각각 useSelector를 이용하여 저장한다.

  const dispatch = useDispatch(); // 아래 dispatch()를 사용하기 위해 useDispatch 함수를 선언 

  const increase = ()=> {
    dispatch({type:"INCREMENT", payload:{num:5}}) // dispatch({매개변수})를 사용하는데 매개변수를 component에서 reducer의 action으로 던져준다. 
    
  };
  const login = ()=>{
    dispatch({type:"LOGIN", payload:{ id:"noona", password: "123" } });
  }

  const decrement = () =>{
    dispatch({type: "DECREMENT", payload:{num:5}})
  };
  return (
    <div>
     <h1>{id},{password}</h1>
     <h1>{count}</h1>
     <button onClick={increase}>증가!</button>
     <button onClick={login}>Login</button>
     <button onClick={decrement}>감소!</button>
     <Box />
    </div>
  );
}

export default App;
