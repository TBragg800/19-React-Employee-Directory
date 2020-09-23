import React from "react";


function TableHeader() {
return (
  <div>
    <table className="table table-dark">
      <thead>
        <tr>
          <th className="text-center" scope="col">Photo</th>
          <th className="text-center" scope="col">Name</th>
          <th className="text-center" scope="col">Email</th>
          <th className="text-center" scope="col">Phone Number</th>
          <th className="text-center" scope="col">Date of Birth</th>
        </tr>
      </thead>
    </table>
  </div>
  )
}

export default TableHeader;