import { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useParams } from "react-router-dom";

const View = () => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/' + id)
        .then(result => {
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
        })
        
        .catch(err => console.log(err))
    }, [id])
    return ( 
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="text-white">
                <span><Link className="btn btn-success btn-sm" to='/'>Go back</Link></span>
                <h1 className="text-black mt-3">My Email: <b className="text-white">{email}</b></h1>
                <div>
                    <span className="me-5 text-black">My Name is: <b className="text-white">{name}</b></span>
                </div>
            </div>
        </div>
     );
}
 
export default View;