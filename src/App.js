import './App.css';
import React, {useState} from 'react';

function App() {
  const [min,setMin] = useState()
  const [max,setMax] = useState()
  const [random, setRandom] = useState()

  const changeMin = (e) =>{
    setMin(Number(e.target.value))
  }

  const changeMax = (e) =>{
    setMax(Number(e.target.value))
  }

  const generateRandom = () =>{
     if(max>=min){
        setRandom(Math.floor(Math.random()*(max-min +1) + min))
     }
     else{
       alert("Maksimum sayı minimum sayıdan küçük olamaz!");
       return;
     }
  }

  return (
    <div className="App">
      <h1 className="App-header">Random Number Generation</h1>

      <div className='container'>
        <p>Random Number: {random}</p>

        <div className="row">
          <label>Minimum Number</label>
          <input type='number' placeholder='Enter min number' onChange={changeMin}/>
        </div>

        <div className="row">
          <label>Maximum Number</label>
          <input type='number' placeholder='Enter max number' onChange={changeMax}/>
        </div>
      
        <button onClick={generateRandom}>
          Give a random number
        </button>
      </div>
    </div>
  );
}

export default App;
