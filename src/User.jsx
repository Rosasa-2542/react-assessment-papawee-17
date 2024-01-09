const User  = ({employees}) =>{
    return(
        <div>
        <h1>User</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
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
                </tr> 
            ))}
        </table>
        </div>
    )
}
export default User