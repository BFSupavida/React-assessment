import { useNavigate  } from "react-router-dom";
import { useState } from "react";

function Button( {setSector} ) {
    //first solotion i did
    // const [employees, setEmployees] = useState();
    // const [sector, setSetor] = useState();
    // const navigate = useNavigate();

    // const handleUserButtonClick = () => {
    //     // Update state if needed
    //     setSetor("user");
    //     // Navigate to "/homeuser"
    //     navigate("/homeuser");
    // };

    // const handleAdminButtonClick = () => {
    //     // Update state if needed
    //     setEmployees("admin");
    //     // Navigate to "/homeuser"
    //     navigate("/homeadmin");
    // };


    return (
        <div className="flex mt-12 gap-[180px]">
            <button className="p-4 bg-white "
            onClick={ () => setSector('user') }>User Home Sector</button>
            <button className="p-4 bg-white "
            onClick={() => setSector('admin') }>Admin Home Sector</button> 
        </div>
    );
    
}

export default Button;