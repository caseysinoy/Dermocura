import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style/login.scss';
import axios from 'axios';

function login() {

    const [mydata, setData] = useState([]);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await axios.get("http://51.79.159.127/thesis/adminlogin.php");
                setData(response.data);
            } catch (err) {
                console.error(err);
            }
        };
    
        getdata();
    }, []);
    

    const handlesubmit = async (e) => {
        e.preventDefault();

        const userData = mydata.find(data => data.username === user && data.password === pass);

        console.log(userData);

        if (userData) {
            alert("User: " + user +" matched");
        } else {
            alert("User: " + user + " does not matched");
        }
    }

    return(
        <div className="form-login">
            <h1>DermoCura</h1>
            <h1>Login</h1>
            {/* {mydata.map(mydata => ( */}

                <Form onSubmit={handlesubmit} key={mydata.id}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Username.." onChange={e => setUser(e.target.value)} /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            {/* ))}  */}
        </div>
    )
    

}

export default login;