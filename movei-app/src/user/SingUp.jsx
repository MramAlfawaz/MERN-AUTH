import React, { useState, useEffect } from 'react'
import { Row, Form, Col, Button, Alert } from 'react-bootstrap'
import Axios from 'axios'

export const SingUp = (props) => {
    const [user, setUser] = useState({})// user info
    const [register , setRegister] = useState(false) // to show aleart
  
    //to add the input inside user
    let onChangeInput = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }
    // to add the user info to database
    let onSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:4000/user/register', user)
            .then(res => {
                    if (res.data.register){
                        props.history.push('/login')
               }else{
                        setRegister(true)
                        setTimeout(() => {
                            setRegister(false)
                        }, 4000);
                    } 
            })
            .catch(err => console.log(err))
    }
//==================================================
    return (
        <>
            {register && <Alert variant={"danger"}>
              the email used . plz change the email 
            </Alert> }
            <Form className="mt-5">
                <Row className="justify-content-center mt-5">
                    <Col md={8}>
                        <Form.Row>
                            <Col md={6}>

                                <Form.Label>First name</Form.Label>
                                <Form.Control placeholder="First name" name="firstName" onChange={(e) => onChangeInput(e)} />
                            </Col>
                            <Col md={6}>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control placeholder="Last name" name="lastName" onChange={(e) => onChangeInput(e)} />
                            </Col>
                            <Col md={12}>
                                <Form.Label>image</Form.Label>
                                <Form.Control placeholder="image" name="image" onChange={(e) => onChangeInput(e)} />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => onChangeInput(e)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => onChangeInput(e)} />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
                            Submit
                    </Button>
                    </Col>
                </Row>
            </Form>

        </>
    )
}
