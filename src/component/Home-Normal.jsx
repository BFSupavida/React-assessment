
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import HomeAdmin from "./Home-Admin";
import HomeUser from "./Home-User";
import { useEffect, useState } from "react";

const mockEmployees = [
    {
        id: 1,
        name: "mock",
        lastname: 'mocklastname',
        position: "Manager"
    },
    {
        id: 2,
        name: "employee 1",
        lastname: "em",
        position: "Engineer"
    },
    {
        id: 3,
        name: "employee 2",
        lastname: "lord",
        position: "Designer"
    },
]

function HomeNormal() {
    const [sector, setSector] = useState('');

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        setEmployees(mockEmployees)
    }, []);

    const handleDeleteData = (id) => {
        // console.log(id);
        const newEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees(newEmployees);
    };


    return (
        <Layout>
            <div className="flex flex-col items-center p-[60px]">
            {/* short is eles recheck for show h1*/}
                {sector === 'admin' ? (<h1 className="text-5xl font-bold max-w-[477px] ">Generation Thailand Home - Admin Sector</h1>) :
                    sector === 'user' ? (<h1 className="text-5xl font-bold max-w-[477px] ">Generation Thailand Home - User Sector</h1>) :
                        (<h1 className="text-5xl font-bold max-w-[477px] ">Generation Thailand React - Assessment</h1>)}
                <Button setSector={setSector} />
                {/* //short if  for check sector is admin or user*/}
                {sector === 'admin' && <HomeAdmin employees={employees}
                    handleDeleteData={handleDeleteData}
                    setEmployees={setEmployees} />
                }
                {sector === 'user' && <HomeUser employees={employees} />}
            </div>
        </Layout>

    );
}

export default HomeNormal;