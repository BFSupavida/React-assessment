import Button from "./Button";
import Layout from "./Layout";
import { useState } from "react";



function HomeAdmin({ employees,handleDeleteData,setEmployees }) {
    //first solotion set from data 
    // const [data, setData] = useState({
    //     name: "",
    //     lastName: "",
    //     position: ""
    // });

    // const [tableData, setTableData] = useState([]);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setData((prevData) => ({
    //         ...prevData,
    //         [name]: value
    //     }));
    // };

    // const handleSave = () => {
    //     setTableData((prevTableData) => [...prevTableData, data]);

    //     // Reset the form data
    //     setData({
    //         name: '',
    //         lastName: '',
    //         position: '',
    //     });
    // };

    //delete
    // const handleDeleteData = (index) => {
    //     const updatedTableData = [...tableData];
    //     updatedTableData.splice(index, 1);
    //     setTableData(updatedTableData);
    // };

    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [position,setPosition] = useState('');

    const handleSave = () => {
        const id = Math.floor(Math.random () *100)
        const newEmployeesdata = {
            id: id,
            name: name,
            lastname: lastname,
            position: position,
        }
        //เอา employees แล้วต่อด้วย newEmployeesdata ที่เรา input เข้าไปใหม่
        setEmployees([...employees,newEmployeesdata]);
        setName('')
        setLastname('')
        setPosition('')
    };

    return (
        <>
            
            {/* <Button /> */}
            <div>
                <p>Create User Here</p>
                <input

                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={ (e) => setName(e.target.value) }
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value) } />
                <input
                    type="text"
                    placeholder="Position"
                    name="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value) } />
                <button onClick={handleSave}>Save</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.lastname}</td>
                                <td>{data.position}</td>
                                <td>
                                    <button onClick={() => handleDeleteData(data.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default HomeAdmin;