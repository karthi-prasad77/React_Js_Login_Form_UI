import React from 'react';
import { Col, Button, Row, Container, Card, Form, Image } from "react-bootstrap";




const Login = () => {
  return (
    <div>
       <Container>
        <Row className="vh-100 d-flex justify-content-left align-items-center">
          <Col md={4} lg={5} xs={10}>
            <Card className="shadow">
              <Card.Body>
                <div >
                  <h2 className="fw-bold mb-2 text-uppercase ">Sign up your account</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-2">
                    <Form>
                    <Form.Group className='text-start my-3'>
          <Form.Label className='text'>Enter your full name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>

                      <Form.Group
                        className="mb-3 text-start"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      
                      <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox" >
                      <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <div>
                      <Button type="button" className="btn btn-primary btn-lg">Login</Button>
                          
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
         <Col md={4} lg={6} xs={10}>
       <Image src={process.env.PUBLIC_URL + "/image.jpeg"}></Image>
         </Col>
        </Row>
       
      </Container>
     
    </div>
      


  )
}

export default Login