import React, { useState } from 'react';
import { Col, Container, Row} from "react-bootstrap";
import { withRouter } from "react-router";
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { useEffect } from 'react';

function Logout(){

    const [empname,setEmpName]=useState('');

    useEffect(()=>{
        const user=localStorage.getItem('currentUser');
        setEmpName(user);
        localStorage.removeItem('currentUser');
        localStorage.removeItem('curentEmpId')
    },[])

    return (
        <Wrapper>
            <Container>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg">
                     <div>
                         <h1>Thank you {empname}</h1>
                         </div>
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

export default withRouter(Logout);