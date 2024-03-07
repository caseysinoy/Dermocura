import React, { useState, useEffect } from "react";
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

        const userData = mydata.find(data => data.Username === user && data.Password === pass);

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
                <form onSubmit={handlesubmit} key={mydata.Id}>
                    <h1>Hello {mydata.Username} {mydata.Password} {mydata.Id}</h1>
                    <input className="username" placeholder="Username..." onChange={e => setUser(e.target.value)}></input>
                    <input className="password" placeholder="Password..." onChange={e => setPass(e.target.value)}></input>
                    <button type="button" onClick={handlesubmit}>Submit</button>
                </form>
            ))}
        </div>
    )
    

}

export default login;