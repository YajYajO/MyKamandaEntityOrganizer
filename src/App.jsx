import React, { useEffect, useState } from "react";
import './UserList.css'; // Import a CSS file for styling

function UserList() {
  const [users, setUsers] = useState([]);
  const example = {
    businessName: "JJ's Business",
    field: "Field",
    address: "Address",
    SICcode: "SICcode",
    dataFurnisherCode: "Furnish",
    creditScore: "Credit Score",
    domainName: "domain",
    websitesUsername: "username",
    webstiesPassword: "pass",
    licenses: "license",
    franchises: "Franchise yes",
  };

  return (
    <div>
      <h1>Data Traversal</h1>
      <ObjectTraverser data={example} />
    </div>
  );
}

function ObjectTraverser(props) {
  const { data } = props;

  return (
    <div className="object-traverser">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="object-item">
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
}

export default UserList;



