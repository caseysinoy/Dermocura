import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style/login.scss';
import axios from 'axios';

function login() {

    // useState is container for any values that you want to save and used for any other method
    // You can define on how it can contain value, which could be an arrays or strings
    const [mydata, setData] = useState([]);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    // useEffect is a hook that lets me connect to any api and grab data values or grab from the database
    // For example, I added links to the supposed existing database link which would be an api that contains
    // data informations and displayed inside the api.
    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await axios.get("http://localhost:8080/users");
                setData(response.data);
            } catch (err) {
                console.error(err);
            }
        };
    
        getdata();
    }, []);
    

    const handlesubmit = async (e) => {
        e.preventDefault();
        // mydata is from a usestate that contain all the information inside an array.
        const userData = mydata.find(data => data.adminName === user && data.adminPassword === pass);

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
            {/* to access and interact with the database is to have a curly braces and call on mydata and use map
            to search through the database api from a backend server. I used this to connect my login to the 
            database just to find a match if the user input exist in the database.*/}
            {mydata.map(mydata => (

                <Form onSubmit={handlesubmit} key={mydata.adminID}>
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
            ))}
        </div>
    )
    

}

export default login;