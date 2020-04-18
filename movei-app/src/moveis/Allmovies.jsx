import React, { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import MoveiCard from './MoveiCard'
import axios from "axios"
import Circle from 'react-animation-h3ro-yasir'

export default class Allmovies extends Component {

    state = {
        allMoveis: [],
        loading: false,
        selectedMoveis: []
    }

    componentDidMount() {

        axios.get('https://sei12.herokuapp.com/movei/json')
            .then(res => {
                this.setState({
                    allMoveis: res.data,
                    selectedMoveis: res.data,
                      
                })
               
                    this.setState({
                        loading : true
                    })
              
            }).catch(err => console.log(err))



    }

    filterMoveis = ({target:{value}})=>{
        
        if (value == "All")
        {
            this.setState({
                selectedMoveis : this.state.allMoveis
            })
        }else{
            this.setState({
                selectedMoveis : this.state.allMoveis.filter(movei =>{

                    return movei.typee == value
                }
                )
            })
        }


    }



    render() {
        console.log(this.state.allMoveis)

        let allmoveis = this.state.selectedMoveis.map(movei => {


            if (movei.link) return <MoveiCard movei={movei} />
        })
        let types = this.state.allMoveis.map(movei =>movei.typee)
            types.unshift("All")
        return (
            <div>
                <h1>All movie</h1>
                <Container className="mt-5">
                    <Row className="mt-5 justify-content-center">
                        <Col md={4}>
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" onChange={(e) =>this.filterMoveis(e)}>
                            {Array.from(new Set(types)).map(ele => (<option>{ele}</option>))}
                        </Form.Control>
                        </Col>
                    </Row>
                <Row className="mt-5 justify-content-center" >

                     {this.state.loading ?  allmoveis : (<Circle />) }

                </Row>

                </Container>

            </div >
        )
    }
}
