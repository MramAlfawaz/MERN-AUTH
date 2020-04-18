import React, { Component } from 'react'
import Axios from 'axios'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default class OneMovei extends Component {
    state = {
        movei: {}
    }
    componentDidMount() {
        Axios.get('https://sei12.herokuapp.com/movei/json')
            .then(res =>
                this.setState({
                    movei: (res.data.filter(movei => movei._id == this.props.match.params.id))[0]
                }))
    }
    render() {
        console.log(this.state.movei)
        return (
            <div>
                <Container>
                    <Row className="mt-5">
                        <Col md={5} xs={5} className="mr-5">
                            <Image src={this.state.movei.link} style={{ height: "100%", width: "100%" }} />
                        </Col>
                        <Col md={5} xs={5}>
                            <h4>{this.state.movei.name}</h4>
                            <h4>{this.state.movei.typee}</h4>
                            <h4>{this.state.movei.history}</h4>
                            <h4>{this.state.movei.YourName}</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
