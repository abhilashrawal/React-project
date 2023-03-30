function Header(){
    var as = "abhilash";
    //var bgRed = 'red';
    var isHeading = true;

    const myStyle = {
        color:'green',
     
}
    return(
        <div className={isHeading ? "red":"blue"}>
            <h3>{as}</h3>
            <p style = {{color:"red", backgroundcolor:"yellow"}}>Hello World</p>
            <p style ={myStyle}>Hello World</p>
        </div>
    )
}
export default Header;