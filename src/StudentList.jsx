import { useState } from "react";

function StudentList(){

   const studentData =[
    {id:1, name:"rajput",fees:2000},
    {id:2, name:"ishu",fees:25000},
    {id:3, name:"rawal",fees:20000},
    {id:4, name:"vipin",fees:26000}
   ]

    const [user,setUser]=useState("shubham");
    
    const [StudentList,setStudentList] =useState(studentData)

    const chnageName = ()=>{
     setUser("ishuu")
    }

    return(
        <div>
       {user}
       <button onClick={chnageName}>change Name</button>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Fees</th>
            </tr>
        </table>
         
         {
            StudentList.map((item,index)=>{
                return (
                    <tr>
                        <td>{item.id }</td>
                        <td>{item.name }</td>
                        <td>{item.fees }</td>

                    </tr>
                )
            })
         }



        </div>
    )
}

export default StudentList;