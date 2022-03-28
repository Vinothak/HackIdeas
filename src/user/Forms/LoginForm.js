import React, { useState } from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import logo from '../../../src/logo.png'
import styled from 'styled-components';
import { withRouter } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm(props){
    const [empid,setEmpId]=useState('');
    const [empname,setEmpName]=useState('');

    const handleIdChange=(event)=>{
       setEmpId(event.target.value);
       console.log(empid);
    }
    const handleNameChange=(event)=>{
        setEmpName(event.target.value);
        console.log(empid);
     }

    const handleSubmit=(e)=>{
       e.preventDefault();
       if(!empid){
           toast('Enter Employee Id');
       }else if(!empname){
        toast('Enter Name');
       }

       localStorage.setItem('currentUser',empname);
       localStorage.setItem('curentEmpId',empid)

       props.history.push('/dashboard');
    }
    return (
        <Wrapper>
            <ToastContainer />
            <Container>
                <h1 className="mt-5 p-3 text-primary text-center rounded">
                <img src={logo} alt="Logo" />
                </h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Employee ID</Form.Label>
                                <Form.Control type="text" onChange={handleIdChange} placeholder="Enter employee id" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Employee Name</Form.Label>
                                <Form.Control type="text" onChange={handleNameChange} placeholder="Enter employee name" />
                            </Form.Group>

                            <Button variant="primary btn-block" type="submit" onClick={handleSubmit}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-dark ">Copyright © 2022 Vinoth Ak. All Rights Reserved.</h6>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 50px;
`;

export default withRouter(LoginForm);