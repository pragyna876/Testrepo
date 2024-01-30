import React from "react";
import { Link } from 'react-router-dom';

function DoctorsDetails(){
    let doctorsArray = [
        { doctorId: 10, doctorName: "Pragyna", designation: "Dental", experience: "23", contactNumber:"0000000" },
        { doctorId: 20, doctorName: "Subhasmita", designation: "neurologist", experience: "24", contactNumber:"0000000" },
        { doctorId: 30, doctorName: "Ayesha", designation: "Orthopedic", experience: "21", contactNumber:"0000000" },
        { doctorId: 40, doctorName: "Pratyusha", designation: "physiotherapy", experience: "25", contactNumber:"0000000" },
        { doctorId: 50, doctorName: "Adyasha", designation: "psychiatrist", experience: "22", contactNumber:"0000000" },
    ];

    let doctorResult = doctorsArray.map((item) => {
        return <tr>
            <td>   {item.doctorId}  </td>
            <td>   {item.doctorName}  </td>
            <td>   {item.designation}  </td>
            <td>   {item.experience}  </td>
            <td>   {item.contactNumber}  </td>
        </tr>
    });
    return(
        <>
            <h3>List of all the Doctors</h3>
            <table border="2" width="400" cellspacing="0" cellpadding="5">
                <tr>
                    <th>doctorId</th>
                    <th>doctorName   </th>
                    <th>designation</th>
                    <th>experience</th>
                    <th>contactNumber</th>
                </tr>
                {doctorResult}
            </table>
        </>
    );
}

export default DoctorsDetails;