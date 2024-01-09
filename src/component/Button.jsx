import { useNavigate  } from "react-router-dom";
import { useState } from "react";

function Button() {
    const [employees, setEmployees] = useState();
    const [sector, setSetor] = useState();
    const navigate = useNavigate();

    const handleUserButtonClick = () => {
        // Update state if needed
        setSetor("user");
        // Navigate to "/homeuser"
        navigate("/homeuser");
    };

    const handleAdminButtonClick = () => {
        // Update state if needed
        setEmployees("admin");
        // Navigate to "/homeuser"
        navigate("/homeadmin");
    };
    return (
        <>
        {/* //link by navigate */}
            <button 
            onClick={handleUserButtonClick}>User Home Sector</button>
            {/* //link
            // <Link to="/homeuser">
            //     <button>User Home Sector</button>
            // </Link> */}
            <button
            onClick={handleAdminButtonClick}>Admin Home Sector</button> 
        </>
    );
    
}

export default Button;