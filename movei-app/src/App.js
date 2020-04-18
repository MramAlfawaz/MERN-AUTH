import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nave from './navebar/Nave.jsx';
import Home from './home/Home';
import About from './about/About';
import Allmovies from './moveis/Allmovies';
import {Switch , Route, Redirect} from 'react-router-dom'
import OneMovei from './moveis/OneMovei.jsx';
import { Login } from './user/Login.jsx';
import { SingUp } from './user/SingUp.jsx';
import jwt_decode from 'jwt-decode'



export default class App extends Component {

state = {
  user : null , 
  isLogin : false
}

componentDidMount (){

  this.userLogin()
  
}



userLogin = () =>{

  if (localStorage.token){
    let token = localStorage.token
    let user = jwt_decode(token , "SECRET").user
    this.setState({
      user : user , 
      isLogin:true
    })
    }else {

      this.setState({
        user : null , 
        isLogin:false
      })
    }

}
  render() {
console.log(this.state.user)



    return (
      <div>
      <Nave  isLogin ={this.state.isLogin} userLogin = {this.userLogin}/>

      <Switch>

        <Route path="/home" render={()=> <Home name = {"yasir"}/>} />
       
        
        <Route path= '/login' render ={ (props) => <Login  {...props} userLogin = {this.userLogin}/>} />
        <Route path= '/singUp' component ={SingUp} />
        <Route path = '/Allmovie/:id' component={OneMovei} />
      {this.state.isLogin ?<>  <Route exact path="/Allmovie" component={Allmovies} /> <Route path="/about" render={()=> <About user = {this.state.user} />}  /> </> 
      :
      <> <Redirect to="/login" /> </>

      }  
    
      </Switch>


      </div>
    )
  }
}
