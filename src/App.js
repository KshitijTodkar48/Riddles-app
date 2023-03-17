import './App.css';
import { getRiddles } from "./components/Riddles" ;
import { useState,useEffect } from 'react';
import Card from './components/Card';

function App() {

  const [data,setData] = useState(null) ;

  useEffect(()=>{
    getRiddles().then((riddles) => {
      console.log(riddles) ;
      setData(riddles) ;}) ;
  },[])

  const nextRiddle=()=>{
    getRiddles().then((riddles)=>{
      console.log(riddles);
      setData(riddles) ;}) ;
  }

  return (
    <>
    <div className="App">

      <div className="sidestuff">
        <div id='first'> Can you </div>
        <div id='second'> answer ?</div>
      </div>

      <div className="App-container">
      {
        data ? <>
        <Card riddle = {data.riddle} answer = {data.answer}/>
        <button className="button-next" onClick={nextRiddle}>Next riddle</button>
        </> : <> </>
      } 
      </div>
    </div>

    </>
  );
}

export default App;
