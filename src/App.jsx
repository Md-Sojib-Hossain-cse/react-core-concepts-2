import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  const handleSearch = () => alert('button clicked');
  const addToFive =(num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concept 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleSearch}>Click me</button>
      <button onClick={() =>{alert('Second Clicked')}}>Click me 2</button>
      <button onClick={() => {addToFive(5)}}>Click me 3</button>
    </>
  )
}

export default App
