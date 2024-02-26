import React, { useState, useEffect } from "react";
import './style/login.scss';
import axios from 'axios';

function login() {

    const [mydata, setData] = useState([]);
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

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

    return(
        <div className="form-login">
            <h1>Logins</h1>
            {mydata.map(mydata =>(
                <form action="">
                    <h1>Hello {mydata.Username}</h1>
                    <input className="username" placeholder="Username..."></input>
                    <input className="password" placeholder="Password..."></input>
                    <button type="button">Submit</button>
                </form>
            ))}
        </div>
    )
    

}

export default login;