import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

export default class About extends Component {
    render() {
        let user = this.props.user
        console.log(user.image)
        return (
            <div>
                <Image  src ={user.image}></Image>
                <h1>profile page </h1>
        <h2>frist name : {user.firstName}</h2>
                <h3> last name : {user.lastName} </h3>

            </div>
        )
    }
}
