import React, { useEffect, useState } from "react";
import './UserList.css'; // Import a CSS file for styling
import './index.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const example = createBusinessObject("JJ's Business"); // Pass the business name as a parameter
  const moreBusiness = createBusinessObject("Addatives");
  const businesses = [];
  businesses.push(example, moreBusiness);
  const numOfIcons = 40;

  const icons = Array.from({ length: numOfIcons }, (_, index) => (
    <i key={index}></i>
  ));
  return(

<body>

  <div class="header">
    <h1>Mykamanda</h1>
    <p>Data Traversal</p>
    <button class="button-1" role="button"><span class="text">Account Details</span></button>
    <button class="button-2" role="button"><span class="text">View Buisness</span></button>
  </div>
  <div class='search'>
    <input id='form' placeholder='Find A Company'></input>
    <input type="submit" id="button" value="Search"></input>
  </div>
  {icons}
  
</body>
  )}

// Function to create the example business object
function createBusinessObject(businessName) {
  return {
    businessName,
    field: "null",
    address: "null",
    structure: "null",
    SICcode: "null",
    dataFurnisherCode: "null",
    creditScore: "null",
    domainName: "null",
    websites: "null",
    franchises: "null",
    labels: "null",
    socialMedia: "null",
    documents: "null",
  };
}

function ObjectTraverser(props) {
  const { data } = props;

  return (
    <table className="object-table">
  <thead>
    <tr className="object-row">
      {Object.keys(data).map((key) => (
        <th key={key} className="object-key">{key}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr className="object-row">
      {Object.values(data).map((value) => (
        <td className="object-value" key={value}>{value}</td>
      ))}
    </tr>
  </tbody>
</table>
  );
}

export default UserList;




