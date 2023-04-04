import butter1 from "../photos/butter1.jpg";
import butter2 from "../photos/butter2.jpg";
import butter3 from "../photos/butter3.jpg";
import butter4 from "../photos/butter4.jpg";
import butter5 from "../photos/butter5.jpg";
import butter6 from "../photos/butter6.jpg";
import butter7 from "../photos/butter7.jpg";
import butter8 from "../photos/butter8.jpg";
import "../style.css";
import Memory from "./Memory";
function Board(props){
    const butterArray = [
        {id:1,src: butter1},
        {id:2,src: butter2},
        {id:3,src: butter3},
        {id:4,src: butter4},
        {id:5,src: butter5},
        {id:6,src: butter6},
        {id:7,src: butter7},
        {id:8,src: butter8},
    ];
    butterArray.sort(() => Math.random() - 0.5);
    return(
        <div className="memory-container">
            {butterArray.map(memory=> <Memory key={memory.id} source={memory.src} id={memory.id} handleClick={props.handleClick}/>)}
        </div>
    )
}
export default Board;