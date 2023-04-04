function Memory(props){
    return(
    <div
        id={props.id}
        onClick={()=>{
        props.handleClick(props.id);
    }}>
        <img src={props.source} alt="description" />
    </div>
    )
    
}
export default Memory;