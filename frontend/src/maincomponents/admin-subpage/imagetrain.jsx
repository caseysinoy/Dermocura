import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Imagetrain(){
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [skinName, setSkinName] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('label', skinName);
  
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }
  
    try {
      // link to the flask that kylle is working on and is used to post the formData to the cnn model folders.
      const response = await fetch('http://51.79.159.127:8080/upload_images', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      console.log(data); // handle success or error response from the server
    } catch (error) {
      console.error(error);
    }
  }
  

  return(
    <Container>
      <h1>Skin Disease Training</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Skin Images: </Form.Label>
          <Form.Control type="file" multiple accepts="images/*" onChange={(event) => setSelectedFiles(event.target.files)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Skin Disease Name: </Form.Label>
          <Form.Control type="text" value={skinName} onChange={(event) => setSkinName(event.target.value)} />
        </Form.Group>

        <Button className="mb-5" type="submit">Submit</Button>
      </Form><hr/>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="mb-3">Skin training count</Form.Label>
          <Form.Control type="number" placeholder="Limit count: 8"/>
        </Form.Group>
        <Button className="mb-5" type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default Imagetrain;