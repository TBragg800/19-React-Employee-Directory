import React from "react";


function TableBody(props) {
return (
  <div>
    {props.results.map(employee => (
    <table className="table table-dark">
      <tbody>
        <tr>
          <td className="text-center" scope="col"><img src={employee.picture.medium}/></td>
          <td className="text-center" scope="col">{employee.name.first} {employee.name.first}</td>
          <td className="text-center" scope="col">{employee.email}</td>
          <td className="text-center" scope="col">{employee.phone}</td>
          <td className="text-center" scope="col">{employee.dob.date}</td>
        </tr>
      </tbody>
    </table>
    ))}
  </div>
  )
}

export default TableBody;