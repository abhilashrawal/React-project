function User(props){
    console.log(props);

return(
    <div className="card">
        <p>{props.title} {props.data} {props.gender}</p>
        <h2>Abhilash</h2>
        <p>Web devloper</p>
    </div>
) 
}

export default User;