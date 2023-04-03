import Header from "./Header";

import React  from "react";
import StudentList from "./StudentList";
import Counter from "./Counter"

import EmployeeList from "./EmployeeList";
import UserList from "./UserList";
import User from "./User";
import EmployeeRow from "./EmployeeRow";
import Form from "./Form";

function App(){
  return(
   <React.Fragment>
      {/* <h1>Hello world</h1>
      <Header />
      <StudentList />

 <User/>
 <UserList />

 */}
<Form />      <Counter></Counter>
<EmployeeList />
</React.Fragment>
  )
}
export default App;