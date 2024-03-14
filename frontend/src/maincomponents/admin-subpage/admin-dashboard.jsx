import { useState, useEffect } from 'react';
import React from "react";
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const dashboard = () =>{


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
        <div className="main-content">
                <div className='user-container'>
                    <div className='top-header'>
                        USER HISTORY
                    </div>
                    <ul className='body-data'>
                        {data.map(mydata =>{ <li key={mydata.Id}> </li>})}
                    </ul>
                </div>
                <Calendar></Calendar>
                <div className="message-container">
                    <div className="top-header">
                        USER MESSAGES
                    </div>
                    <div className="list-messages">
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
    )

}

export default dashboard