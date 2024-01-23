function DeptList() {
    
    let deptsArray = [
        { deptno: 10, dname: "Accounts", loc: "Hyd" },
        { deptno: 20, dname: "Sales", loc: "Pune" },
        { deptno: 30, dname: "Marketing", loc: "Hyd" },
        { deptno: 40, dname: "Operations", loc: "Chnnai" },
    ];

    let resultArray2 = deptsArray.map((item) => {
        return <tr>
            <td>   {item.deptno}  </td>
            <td>   {item.dname}  </td>
            <td>   {item.loc}  </td>
        </tr>
    });

    return (
        <>
            <h3>Array of Objects</h3>
            <table border="2" width="400" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Dept Number</th>
                    <th>Dept Name</th>
                    <th>Location</th>
                </tr>
                {resultArray2}
            </table>
        </>
    );
}

export default DeptList;