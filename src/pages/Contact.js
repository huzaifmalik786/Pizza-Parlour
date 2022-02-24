import React from 'react'
import "../styles/Contact.css";
import Pizza from "../assets/pizzaLeft.jpg";
function Contact() {
  return (
    <div className="contact">
      <div className="leftside" style={{backgroundImage: `url(${Pizza})`}}></div>
      <div className="rightside">
        <h1>Contact Us</h1>
        <form className="form" action='mailto:huzaifmalik7860@gmail.com' method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter full name"/>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Enter email"/>
          <label htmlFor="phone">Mobile Number</label>
          <input name="phone" type="tel" placeholder="Enter mobile number"/>
          <label name="message">Message</label>
          <textarea row="6" placeholder="Enter your message" name="message" required></textarea>
          <button type="submit" >Send Message</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
