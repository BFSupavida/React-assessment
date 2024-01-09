import Button from "./Button";
import Layout from "./Layout";

function HomeUser() {
    return(
        <Layout>
            <h1>Generation Thailand Home - User Sector</h1>
            <Button /> 
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {} */}
                </tbody>
            </table>
        </Layout>
    );
}

export default HomeUser;