import {useState , useEffect} from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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

    const[profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        description: ""
    })

    const handleChange = (e) =>{
        setProfile({...profile, [e.target.name]: e.target.value });
    };

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
            {data2.map(mydata2 =>(
                <h1 key={mydata2.id}> {mydata2.name} </h1>
            ))}
            
            </div>

        </div>
    )

}

export default insertdatas;