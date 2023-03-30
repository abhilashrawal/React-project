import User from "./User";
import { useState } from "react";

function UserList(){

const[ gender, setGender]=useState("male")
return (
    <div className="card">
<h2>User List</h2>

<User title="hello abhilash" data={4} gender={gender}/>
<User title="hello ram" data={5}/>
<User title="hello shyam" data={6}/>
<User title="hello sita" data={7}/>
    </div>

)
}

export default UserList;