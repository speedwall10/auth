import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Registration from './register'
import Welcome from './welcome'


const Home = () => (
  <Router>
  <div>
  <Route exact path="/" component={App}/>
  {/* <Route path="/register" component={Registration} /> */}
  {/* <Route path='/welcome' component={Welcome} /> */}
  </div>
  </Router>
  )
ReactDOM.render(
  <Home/>,
  document.getElementById('root')
)