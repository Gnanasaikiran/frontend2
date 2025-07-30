import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import'./css/page2.css';
export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
        <h1> welcome to page 2</h1>
        <br/><br/>
        <div></div>
        <Link to ="/page1">Go to page1</Link>
        <br/><br/>
        <Link to ="/">Go to Homepage</Link>
        <br/><br/>
      </div>
    )
  }
}
