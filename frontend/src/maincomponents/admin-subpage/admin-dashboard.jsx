import { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import data from '../../assets/data.json'
import momemt from 'moment';
import Chart from './charts';
import React from "react";
import Calendar from 'react-calendar';
import axios from 'axios';

const dashboard = () =>{

    const [item, setItem] = useState([]);
	const [datePick, setDatePick] = useState(new Date());
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    
    useEffect(() =>{
		setItem(data);
	},[]);
    let keys = Object.keys(item);
	console.log("Keys " + keys)
	let values = Object.values(item.map(dates => dates.dates))
	console.log("dates " + values)

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
                
            <Chart />


            <Calendar 
				value={datePick}
				onChange={setDatePick}
				tileClassName={({ date }) => {
					const formatDate = momemt(date).format("M/D/YYYY");
					if (values.includes(formatDate)) {
						console.log("it is working")
					  return 'hightlight';
					}
				  }
				  
			}
			
			/>

            <div className="message-container">
                <div className="top-header">
                    USER MESSAGES
                </div>

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
    )

}

export default dashboard