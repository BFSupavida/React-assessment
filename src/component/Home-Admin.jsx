import Button from "./Button";
import Layout from "./Layout";
import { useState } from "react";


function HomeAdmin() {
    const [data,setData] = useState({
        name: "",
        lastName: "",
        position: ""
      });


      const [tableData, setTableData] = useState([]);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSave = () => {
        setTableData((prevTableData) => [...prevTableData, data]);

        // Reset the form data
        setData({
        name: '',
        lastName: '',
        position: '',
        });
      };

    const handleDeleteData = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

    return(
        <Layout>
            <h1>Generation Thailand Home - Admin Sector</h1>
            <Button />
            <div>
                <p>Create User Here</p>
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    />
                <input 
                    type="text" 
                    placeholder="Last Name"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange}/>
                    
                <input 
                    type="text" 
                    placeholder="Position"
                    name="position"
                    value={data.position}
                    onChange={handleChange}/>
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
                    {tableData.map((data, index) => (
                        <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.lastName}</td>
                        <td>{data.position}</td>
                        <td>
                            <button  onClick={() => handleDeleteData(index)}>Delete</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </Layout>
    );
}

export default HomeAdmin;