import {useState} from "react"
function Counter(){
    
    const[count,setCount]=useState(0);
    const myStyle = {
        color:"green",
        backgroundcolor:"green"    
    }
    const style = {
        color:"blue"
    }
    
    const increment=()=>{
if(count<10){
    setCount(count+1 );
}       
    }
        const decrement=()=>{
        if(count>0){
      setCount(count-1 );
    }
}   

    return(
        <div>
            <p style = {{color:"red", backgroundcolor:"yellow"}}>There are range bw 0
                 to 10
            </p>
         <h1 style={myStyle}>{count}</h1>
         <p style ={myStyle}>Hello World</p>
            <button style={style} onClick={increment}>Increment</button>
            <button style={myStyle}onClick={decrement}>decrement</button>      
        </div>
    )
}
export default Counter