function Header(props){
    return(
        <div className="heading">
            <div>
                <h1>BBUTTER98 MEMORY GAME</h1>
            </div>
            <div className="score-container">
                <p>Your score is {props.score}</p>
                <p>Your streak {props.streak}</p>
            </div>
        </div>
    )
}
export default Header;