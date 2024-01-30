import React from 'react';

function EmployeeTable() {
  // Array of employee objects
  const employees = [
    { id: 1, name: 'Pragyna', age: 23, department: 'Developer' },
    { id: 2, name: 'Partha', age: 25, department: 'Finance' },
    { id: 3, name: 'Pratyusha', age: 35, department: 'Designer' }
  ];

  return (
    <div>
      <h2>Employee Information</h2>
      <table style={{  width : '100%',  borderCollapse :'collapse',border: '2px solid black' }}>
        <thead>
          <tr>
            <th style ={{ border: '1px solid black', padding: '8px'}}>ID</th>
            <th style ={{border: '1px solid black', padding: '8px'}}>Name</th>

            <th style={{border: '1px solid black', padding: '8px'}}>Age</th>
            
            <th style ={{border: '1px solid black', padding: '8px' }}>Department</th>
          </tr>
        </thead>
        <tbody>
        
          {employees.map((employee, index) => (
            <tr key={index}>
              
              {Object.keys(employee).map((key, index) => (
                <td key={index}>{employee[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
