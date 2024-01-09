const Admin = ({employees}) =>{
    return(
        <div>
        <h1>Admin</h1>
        <table>
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
        </tr>
        {employees.map ((data) => (
                <tr key ={data.id}>
                    <td>
                        {data.name}
                    </td>
                    <td>
                        {data.lastname}
                    </td>
                    <td>
                        {data.position}
                    </td>
                    <td>
                        <button>delete</button>
                    </td>
                </tr> 
            ))}
    </table>
    </div>
    )
}
export default Admin