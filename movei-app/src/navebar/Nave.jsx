import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class Nave extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Navbar.Brand>Qc</Navbar.Brand>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Allmovie">All movie</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                    </Nav>
                    <Nav>
                       {!this.props.isLogin ? <> <Button as={Link} to="/login" variant="outline-light" > login</Button>
                        <Button as={Link} to="/singup" variant="outline-light" className="ml-3"> sing up</Button> </>

                 :  <Button onClick ={() => {localStorage.removeItem('token') ; this.props.userLogin() }} variant="outline-light" > logOut</Button> }
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
