import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Page2 from './page2.jsx';

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Page 1</h1>
        <h2>This is the first page of our React application.</h2>
        <br/><br/>
    <Link to ="/page2">Go to Page2</Link>
    
    
      </div>
    )
  }
}
