import { useState } from "react";

function Deptlist() {

    const [deptsArray, setDeptsArray] = useState([]);

    const [deptno, setDeptno] = useState("");
    const [dname, setDname] = useState("");
    const [loc, setLoc] = useState("");
    const [editingDept, setEditingDept] = useState("");


    function getDeptsButton_click() {
        let tempArray = [
            { deptno: 10, dname: "Accounts", loc: "Hyd" },
            { deptno: 20, dname: "Sales", loc: "Pune" },
            { deptno: 30, dname: "Marketing", loc: "Hyd" },
            { deptno: 40, dname: "Operations", loc: "Chnnai" },
        ];

        setDeptsArray(tempArray);
    }

    function addDeptButton_click() {

        let tempArray = [...deptsArray];       
        
        let deptObj = {};
        deptObj.deptno = deptno;
        deptObj.dname = dname;
        deptObj.loc = loc;
        tempArray.push(deptObj);        

        setDeptsArray(tempArray);


        setDeptno("");
        setDname("");
        setLoc("");


    }
    
function editDept_click(dept){
    setEditingDept(dept);
    setDeptno(dept.deptno);
    setDname(dept.dname);
    setLoc(dept.loc);
}
    function updateDeptButton_click( dno) {
        let tempArray = [...deptsArray];
        let index = tempArray.findIndex((item) => item.deptno ===editingDept.deptno);

        if (index !== -1) {
            tempArray[index] = { deptno, dname, loc };
            setDeptsArray(tempArray);
            setEditingDept(null);

            setDeptno("");
        setDname("");
        setLoc("");

            
        }
    }


    function deleteDept_click(dno) {

        let tempArray = [...deptsArray];    // cloning original array into temp array
        let index = tempArray.findIndex(item => item.deptno == dno);
        tempArray.splice(index, 1);
        setDeptsArray(tempArray);
    }


    let resultArray2 = deptsArray.map((item) => {
        return <tr>
            <td>   {item.deptno}  </td>
            <td>   {item.dname}  </td>
            <td>   {item.loc}  </td>
            <td><a href="javascript:void(0);" onClick={()=>editDept_click(item)}>Edit</a></td>
            <td>
                <a href="javascript:void(0);" 
                   onClick={() => deleteDept_click(item.deptno)}>Delete</a>
            </td>
        </tr>
    });

    return (
        <>
            <h3>Working with State -- CRUD Operations on Array of Objects</h3>
            <hr />

            <input type="text" placeholder="Dept Number" value={deptno} onChange={ (e) => setDeptno(e.target.value)} />
            <input type="text" placeholder="Dept Name" value={dname} onChange={ (e) => setDname(e.target.value)} />
            <input type="text" placeholder="Dept Location" value={loc} onChange={ (e) => setLoc(e.target.value)} />
            <hr/>
            <input type="button" onClick={getDeptsButton_click} value="Get Depts" />
            <input type="button" onClick={addDeptButton_click} value="Add Dept" />
            <input type="button" onClick={updateDeptButton_click} value="Update Dept" />
            <hr />

            <table border="2" width="400" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Dept Number</th>
                    <th>Dept Name</th>
                    <th>Location</th>
                    <th></th>
                </tr>
                {resultArray2}
            </table>
        </>
    );
}

export default Deptlist;