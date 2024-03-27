import { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import React from "react";
import axios from 'axios';

const dashboard = () =>{


    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);

    useEffect( ()=>{
        const getdata = async()=>{
            axios.get("http://localhost:8081/profiles").then(res =>{
                console.log(res.data)
                setData2(res.data)
            }).catch(err=>{
                console.log(err)
            })
        }
        getdata()
    },[])
    useEffect( ()=>{
        const getdata = async()=>{
            axios.get("http://localhost:8081/history").then(res =>{
                console.log(res.data)
                setData3(res.data)
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

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    {data3.map(mydata3 =>(
                        <tbody>
                            <tr key={mydata3.name}>
                                <td>{mydata3.name}</td>
                                <td>{mydata3.date}</td>
                                <td>{mydata3.title}</td>
                                <td>{mydata3.description}</td>
                            </tr>
                        </tbody>
                    ))}
                </Table>

            </div>
            <div className="message-container">
                <div className="top-header">
                    USER MESSAGESss
                </div>
                <div className="list-messages">

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    {data2.map(mydata2 =>(
                        <tbody>
                            <tr key={mydata2.id}>
                                <td>{mydata2.id}</td>
                                <td>{mydata2.name}</td>
                                <td>{mydata2.date}</td>
                                <td>{mydata2.email}</td>
                                <td>{mydata2.phone}</td>
                                <td>{mydata2.description}</td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
                    
                </div>
            </div>
        </div>
    )

}

export default dashboard