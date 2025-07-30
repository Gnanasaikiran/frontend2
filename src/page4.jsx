import React, { Component } from 'react'
import'./css/page4.css';
export default class page4 extends Component {
menuClick(){
    const navlist =document.getElementById("navlist");
    navlist.classList.toggle("active");
}


  render() {
    return (
      <div>

      <header>
        <nav>
            <ul id="navlist">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
            <div className='menu'onClick={()=>this.menuClick()}>&#9776;</div>
        </nav>
            </header> 
        <section>
            <h1> Welcome to responsive webpage</h1>
            <p>This is an example page which can addopt my screen size</p>
            </section> 

            <footer>
                copyright @ 2025.all rights reserved

            </footer>
      </div>
    )
  }
}
