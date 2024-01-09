import Button from "./Button";
import Layout from "./Layout";

function HomeAdmin() {
    // const [currentRole,setCurrentRole] = useState('Admin');
    return(
        <Layout>
            <h1>Generation Thailand Home - Admin Sector</h1>
            <Button />
            <div>
                <p>Create User Here</p>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Position"/>
                <button>Save</button>
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
                    
                </tbody>
            </table>
            </div>
        </Layout>
    );
}

export default HomeAdmin;