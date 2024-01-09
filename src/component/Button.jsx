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
        <>
            <button 
            onClick={ () => setSector('user') }>User Home Sector</button>
            <button
            onClick={() => setSector('admin') }>Admin Home Sector</button> 
        </>
    );
    
}

export default Button;