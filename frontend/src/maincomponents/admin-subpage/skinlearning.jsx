import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function SkinDisease() { // Use PascalCase for component names
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files); // Convert FileList to array
    setSelectedFiles(newFiles);
  };

  const handleRemoveFile = (index) => {
    const remainingFiles = [...selectedFiles]; // Clone the array
    remainingFiles.splice(index, 1);
    setSelectedFiles(remainingFiles);
  };

  // Generate image preview URLs (optional)
  const [previewUrls, setPreviewUrls] = useState([]);

  useEffect(() => {
    const urls = [];
    for (const file of selectedFiles) {
      if (file.type.startsWith('image/')) { // Check file type for images
        const reader = new FileReader();
        reader.onload = (e) => urls.push(e.target.result);
        reader.readAsDataURL(file);
      }
    }
    setPreviewUrls(urls);
  }, [selectedFiles]);

  return (
    <Container>
      <Form style={{padding:"30px"}}>
        <h2>Skin disease information inputs: </h2>
        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>File Images</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} accept="image/*" />
        </Form.Group>

        {selectedFiles.length > 0 && (
          <ListGroup className="mt-3">
            {selectedFiles.map((file, index) => (
              <ListGroup.Item key={index}>
                {previewUrls.length > 0 && previewUrls[index] && (
                  <img src={previewUrls[index]} alt={file.name} width="100" className="mr-2" />
                )}
                {file.name}
                <Button variant="danger" size="sm" className="float-right" onClick={() => handleRemoveFile(index)}>
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}

        <Form.Group className="mb-3">
            <Form.Label>Disease Name</Form.Label>
            <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Skin Type</Form.Label>
          <Form.Select arial-label="Default select example">
            <option value="NormalSkin">Normal Skin</option>
            <option value="OilySkin">Oily Skin</option>
            <option value="DrySkin">Dry Skin</option>
            <option value="SensitiveSkin">Sensitive Skin</option>
            <option value="CombinationSkin">Combination Skin</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Skin Severity Level</Form.Label>
          <Form.Select arial-label="Default select example">
            <option value="Mild">Mild</option>
            <option value="Severe">Severe</option>
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Symptoms</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Treatment</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reccomendation</Form.Label>
          <Form.Control as="textarea" rows={3}/>
        </Form.Group>

        <Button className="mb-5" type="Submit" >Submit</Button> 
      </Form>
    </Container>
  );
}

export default SkinDisease;
