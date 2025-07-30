import { useState } from 'react'
import'./App.css'
import {Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>welcome to frontend class in klu</h1>
        <h2>Today's topic is introduction to react</h2>
        <h3>Today's Date is 29.07.25</h3>
        <h4>Gnana sai kiran</h4>
        <h5>2400031822</h5>
        <Link to="/page1">Go To page1</Link>
        <br/><br/><br/>
        <Link to="/page2">Go To page2</Link>
        <br/><br/><br/>
        <Link to="/page3">Go To page3</Link>
        <br/><br/><br/>
        <Link to="/page4">Go to page4</Link>
        <br/><br/><br/>
    </>
  )
}

export default App
