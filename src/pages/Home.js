import React from 'react'
import {Link} from "react-router-dom";
import "../styles/Home.css";
import Pizza from "../assets/pizza.jpeg";

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${Pizza})`}}>
      <div className="head">
        <h1>Pizza Parlour</h1>
        <p>GOOD TIME CALLS FOR PIZZA....</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
