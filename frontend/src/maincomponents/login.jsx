import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style/login.scss';
import axios from 'axios';

function login() {

    const [mydata, setData] = useState([]);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    useEffect( ()=>{
        const getdata = async() =>{
            axios.get("http://localhost:8081/users").then(res =>{
                console.log(res.data)
                setData(res.data);
            }).catch(err=>{
                console.log(err)
            })
        }
        getdata();
    }, [])

    const handlesubmit = async (e) => {
        e.preventDefault();

        const userData = mydata.find(data => data.username === user && data.password === pass);

        if (userData) {
            alert("User: " + user +" matched");
        } else {
            alert("User: " + user + " does not matched");
        }
    }

    return(
        <div className="form-login">
            <h1>Logins</h1>
            <div className="alert">lll</div>
            {mydata.map(mydata =>(
                <form onSubmit={handlesubmit} key={mydata.id}>
                    <h1>Hello {mydata.username} {mydata.password} {mydata.id}</h1>
                    <div className="mb-3" >
                        <label>Username</label>
                        <input type="username" placeholder="Username.." onChange={e => setUser(e.target.value)} /> 
                    </div>
                    <div className="mb-3" controlId="formBasicPassword">
                        <label>Password</label>
                        <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
                    </div>
                    <button variant="Primary" type="submit">Submit</button>

                </form>
            ))}
        </div>
    )
    

}

export default login;