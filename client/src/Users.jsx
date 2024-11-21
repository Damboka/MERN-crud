import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/deleteUser/" + id)
        .then(result => {
            console.log(result);
            window.location.reload();
        })
        .catch(err => console.log(err));
    };

    return ( 
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to={'/create'} className="btn btn-success">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td className="">
                                            <Link to={`/update/${user._id}`} className="btn btn-success me-2 btn-sm">Update</Link>
                                            <Link to={`/view/${user._id}`} className="btn btn-warning me-2 btn-sm">View</Link>
                                            <button onClick={() => handleDelete(user._id)} className="btn btn-danger me-2 btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center text-secondary">No Users</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default Users;
