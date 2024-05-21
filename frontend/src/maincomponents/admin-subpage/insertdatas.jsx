import {useState , useEffect} from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// This file is just to test things to connect to database to post and grab

const insertdatas = () =>{
    const [data2, setData2] = useState([]);

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
    // basically like a package of values with different name labels use to send to the backend and to the database
    // if successful
    const[profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        description: ""
    })
    // It grabs all value and set all value in setprofile
    const handleChange = (e) =>{
        setProfile({...profile, [e.target.name]: e.target.value });
    };

    // This handlesubmit communicates with the database and post the values
    const handSubmit = (e) =>{
        e.preventDefault();
        const users = {
            name: profile.name,
            email: profile.email,
            phone: profile.phone,
            description: profile.description
        }
        axios.post("http://localhost:8081/userpost", users)
        .then(res => console.log("data send" + res))
        .catch(err => console.log("data not send" + err))
    }


    return(
        <div>
            <Form onSubmit={handSubmit} style={{padding:"50px"}}>
                <Form.Group className="mb-3">
                    <Form.Label>name</Form.Label>
                    {/* onchange is a constant changes whenever a user input each single letters */}
                    {/* profile.name is a captured values from an onchange effect */}
                    <Form.Control type="text" name="name" value={profile.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="text" name="email" value={profile.email} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>phone</Form.Label>
                    <Form.Control type="text" name="phone" value={profile.phone} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>description</Form.Label>
                    <Form.Control type="text" name="description" value={profile.description} onChange={handleChange} />
                </Form.Group>

                
                <Button type="submit">Submit</Button>

            </Form>

            <div className="container">
            {/* This displays all the data values by searching the database and display it here */}
            {data2.map(mydata2 =>(
                <h1 key={mydata2.id}> {mydata2.name} </h1>
            ))}
            
            </div>

        </div>
    )

}

export default insertdatas;