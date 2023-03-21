import './App.css';
import { getRiddles } from "./components/Riddles" ;
import { useEffect } from 'react';
import { useBtn } from './context/NextBtn'; 
import FlipCard from './components/FlipCard';

function App() {

  const btnState = useBtn() ;

  useEffect(()=>{
    getRiddles().then((riddles) => {
      console.log(riddles) ;
      btnState.setData(riddles) ;}) ;
  },[])

  return (
    <>
    <div className="App">

      <div className="sidestuff">
        <div id='first'> Can you </div>
        <div id='second'> answer ?</div>
      </div>

      <div className="App-container">
      {
        btnState.data ? <>
        <FlipCard riddle = {btnState.data.riddle} answer = {btnState.data.answer}/>
        </> : <> </>
      } 
      </div>
    </div>

    </>
  );
}

export default App;