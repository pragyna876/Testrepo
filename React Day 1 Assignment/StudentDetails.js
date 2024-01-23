function StudentDetails(){
    let sid= "30";
    let sname= "Pragyna";
    let course= "MCA";
    let age = "24";

    return (
        <>
        <hr/>
            <div>
                <h3>Single Student Data</h3>
                Student Id :   {sid}    <br />
                Student Name :   {sname}    <br />
                Student Course  :   {course}    <br />
                Student Age  :   {age}    <br />
            </div>
        <hr/>
        </>
    );
}

export default StudentDetails;