import React, {useState} from 'react';
import Box from './Box';
import './App.css';


export default function App(){
  const [count, setCount] = useState(0);

  function updateCount(diff){
    setCount(count+diff);
  } 
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <div class="container">
        <Box updateCount={updateCount}/>
        <Box updateCount={updateCount}/>
        </div>
      <div class="container">
        <Box updateCount={updateCount}/>
        <Box updateCount={updateCount}/>
        </div>
    </div>
  )
}
