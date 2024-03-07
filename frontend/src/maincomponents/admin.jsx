import './style/admin.scss';
import { useState, useEffect } from 'react';
import React from "react";
import axios from 'axios';
import Calendar from 'react-calendar';

function admin(){

    const [data, setData] = useState([]);

    useEffect( ()=>{
        const getdata = async()=>{
            axios.get("http://localhost:8081/users").then(res =>{
                console.log(res.data)
                setData(res.data)
            }).catch(err=>{
                console.log(err)
            })
        }
        getdata()
    },[])

    return(
        <div className='admin-wrapper'>
            <div className="side-bar">
            <div className="bar">Admin Dashboard</div>
                <ol className='navigation'>
                    <li>Name of page</li>
                    <li>Name of page</li>
                    <li>Name of page</li>
                    <li>Name of page</li>
                </ol>
            </div>
            <div className="main-content">
                <div className='user-container'>
                    <div className='top-header'>
                        <h2>User History</h2>
                    </div>
                    <ul className='body-data'>
                        {data.map(mydata =>{ <li key={mydata.Id}> </li>})}
                    </ul>
                </div>
                <Calendar></Calendar>
                <div className="message-container">2</div>
                <div className="user-count">3</div>
            </div>
        </div>
    )
}

export default admin;