function HomeUser({employees}) {
    console.log(employees);
    return(
            <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((data, index) => (
                        <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.lastname}</td>
                        <td>{data.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
    );
}

export default HomeUser;