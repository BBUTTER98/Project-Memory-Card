import { useState, useEffect } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
function App(){
  const[streak, setStreak] = useState(0);
  const[score, setScore]  = useState(0);
  const[selectedCards, setSelectedCards] = useState([]);
  const reset = () =>{
    setStreak(0);
    setSelectedCards([]);
  }
  const handleClick = (id) =>{
    if(selectedCards.includes(id)){
      alert("you lose the game, don't click the same card twice");
      reset();
    }
    else{
      setSelectedCards([...selectedCards,id]);
      setStreak(streak+1);
      setScore(score+1);
    }
  }
  useEffect(() => {
    if(selectedCards.length === 8){
      alert("winner");
      reset();
    }
  }, [selectedCards]);
 
  return(
    <div>
      <Header streak={streak} score={score}/>
      <Board handleClick={handleClick}/>
    </div>
  );
}
export default App;