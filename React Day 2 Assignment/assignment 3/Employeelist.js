import { configure } from "@testing-library/react";
import { useState } from "react";

function EmployeeList() {

    const [emplsArray, setEmplsArray] = useState([]);
    const [editingEmpl, setEditingEmpl] = useState(null);

    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");


    function getEmplsButton_click() {
        let tempArray = [
            { empno: 1, ename: "pragynaa", job: "Accountant",sal:"25000",deptno:10 },
            { empno: 2, ename: "subhasmita", job: "Manager",sal:"75000",deptno:20 },
            { empno: 3, ename: "Milan", job: "Tester",sal:"35000",deptno:30 },
            { empno: 4, ename: "Jiban", job: "Developer",sal:"40000",deptno:40 },
        ];

        setEmplsArray(tempArray);
    }

    function addEmplButton_click() {

        let tempArray = [...emplsArray];       
        
        let emplObj = {};
        emplObj.empno = empno;
        emplObj.ename = ename;
        emplObj.job = job;
        emplObj.sal = sal;
        emplObj.deptno = deptno;
        tempArray.push(emplObj);        

        setEmplsArray(tempArray);


        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");


    }


    function deleteEmpl_click(eno) {

        let flag = window.confirm("Are you sure want to delete?");    
        if(  flag == false   )
        {
            return;
        }

        let tempArray = [...emplsArray];    // cloning original array into temp array
        let index = tempArray.findIndex(item => item.empno == eno);
        tempArray.splice(index, 1);
        setEmplsArray(tempArray);
    }
    function editEmpl_click(empl) {
        setEditingEmpl(empl);
        setEmpno(empl.empno);
        setEname(empl.ename);
        setJob(empl.job);
        setSal(empl.sal);
        setDeptno(empl.deptno);
    }

    function updateEmplButton_click() {
        let tempArray = [...emplsArray];
        let index = tempArray.findIndex(item => item.empno === editingEmpl.empno);

        if (index !== -1) {
            tempArray[index].empno = empno;
            tempArray[index].ename = ename;
            tempArray[index].job = job;
            tempArray[index].sal = sal;
            tempArray[index].deptno = deptno;

            setEmplsArray(tempArray);
            setEditingEmpl(null);

            // Clear input fields after updating
            setEmpno("");
            setEname("");
            setJob("");
            setSal("");
            setDeptno("");
        }
    }


    let resultArray1 = emplsArray.map((item) => {
        return <tr>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.job}  </td>
            <td>   {item.sal}  </td>
            <td>   {item.deptno}  </td>
            <td>
            <button className="btn btn-primary" onClick={() => editEmpl_click(item)}>
              Edit
            </button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => deleteEmpl_click(item.empno)}>
              Delete
            </button>
          </td>
        </tr>
    });

      return (
        <>
          <h3 className="mt-3">Working with State -- CRUD Operations on Array of Objects</h3>
          <hr />
    
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Employee Number"
              value={empno}
              onChange={(e) => setEmpno(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Employee Name"
              value={ename}
              onChange={(e) => setEname(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Empl Job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Employee Salary"
              value={sal}
              onChange={(e) => setSal(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Employee Deptno"
              value={deptno}
              onChange={(e) => setDeptno(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <button className="btn btn-success btn-sm " onClick={getEmplsButton_click}>
              Get Employee
            </button>
            <button className="btn btn-primary btn-sm " onClick={addEmplButton_click}>
              Add Employee
            </button>
            <button className="btn btn-warning btn-sm" onClick={updateEmplButton_click}>
              Update Employee
            </button>
          </div>
          <hr />
    
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Employee Number</th>
                <th>Employee Name</th>
                <th>Empl Job</th>
                <th>Salary</th>
                <th>Dept Number</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{resultArray1}</tbody>
          </table>
        </>
      );
    }
    
    export default EmployeeList;