import React, { Component } from 'react'
import { Col, Image, Button } from 'react-bootstrap'
import { Link , withRouter } from 'react-router-dom'

 class MoveiCard extends Component {
    render() {

        let { YourName, link, name, typee, history , _id} = this.props.movei
        return (
            <Col md={3} xs={5} className="m-2" style={{ borderStyle: "double", borderRadius: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Image roundedCircle style={{ height: 150, width: 150 }} src={link} ></Image>
                <p>{this.props.movei.name}</p>
                <h5>{history}</h5>
                <h5>{typee}</h5>
                <h4>{YourName} </h4>
                <Button as={Link} to={`/allmovie/${_id}`} className="mb-3" variant="outline-warning">more info</Button>

            </Col>
        )
    }
}

export default withRouter(MoveiCard)