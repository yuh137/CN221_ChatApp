import React, { useState } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './signup.css';
import profile from '../../assets/profile-pic.jpg'

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const [image, setImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  function validateImg(event){
    const file = event.target.files[0];
    if (file.size >= 1048576){
      return alert("Max file size is 1mb");
    }
    else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function uploadImage(){
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'e4digbot');
    try {
      setUploadingImage(true);
      let res = await fetch('https://api.cloudinary.com/v1_1/ddnzywxpt/image/upload', {
        method: 'post',
        body: data
      })
      const urlData = await res.json();
      setUploadingImage(false);
      return urlData.url;
    }
    catch (error){
      setUploadingImage(false);
      console.log(error);
    }
  }
  
  async function handleSignup(event){
    event.preventDefault();
    if (!image) return alert("Please upload your profile image");
    const url = await uploadImage(image);
    console.log(url);
  }

  return (
    <Container>
      <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{width: "80%", maxWidth: 500}} onSubmit={handleSignup}>
            <h1 className='text-center'>Create account</h1>
            <div className="signup-profile-pic__container">
              <img src={imagePreview || profile} alt="" className="signup-profile-pic" />
              <label htmlFor="image-upload" className="image-upload-lable">
                <i className="fas fa-plus-circle add-picture-icon"></i>
                <input type="file" id="image-upload" hidden accept='image/png, image/jpeg' onChange={validateImg}/>
              </label>
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} value = {name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value = {email}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value = {password}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button id="create-account-button" style = {{backgroundColor: '#CDF0EA', color: "#000", border: 'nne'}} variant="primary" type="submit">
              {uploadingImage ? "Signing you up..." : "Create account"}
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already signed up?
                <Link style={{display: "inline-block", marginLeft: "4px" }} to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
  )
}

export default Signup