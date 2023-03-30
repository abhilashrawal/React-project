import {useState} from "react"
import EmployeeRow from "./EmployeeRow"



function EmployeeList(){
   
    const employeeData = [
        {id: 1, name:"abhilash",gender: "male", designation :"trainer", salery:32000},
        {id: 2, name:"ketan",gender: "male", designation :"trainer", salery:32000},
        {id: 3, name:"ram",gender: "male", designation :"trainer", salery:32000},
        {id: 4, name:"sita",gender: "female", designation :"trainer", salery:32000},
        {id: 5, name:"gita",gender: "female", designation :"trainer", salery:12000}
    ]

    const [Employees, setEmployees] = useState(employeeData)
    const deleteEmployee = (id) => {
      const filterdData = Employees.filter((item)=>{
            return item.id !== id;
        })
        setEmployees(filterdData);
    }

   
    return(
        <div>
         <table>
           <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>designation</th>
                        <th>Salery</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>

            {
            Employees.map((item)=>{
                return( 
                <EmployeeRow key={item.id} item={item} onEmpDelete={deleteEmployee}/>
                )
            })
         }
   
        </div> 
           )
}
export default EmployeeList;