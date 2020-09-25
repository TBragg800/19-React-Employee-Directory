import React from "react";


function TableBody(props) {
return (
  <div>
    
    <table className="table table-dark">
      <tbody>
        <tr>
          <td className="text-center" scope="col"><img alt="employee" src={props.photo}/></td>
          <td className="text-center" scope="col">{props.name}</td>
          <td className="text-center" scope="col">{props.email}</td>
          <td className="text-center" scope="col">{props.phone}</td>
          <td className="text-center" scope="col">{props.dateOfBirth}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
  )
}

export default TableBody;