import React from 'react'
import "./Footer.css"
import logo1 from "../../assets/logo1.svg"
import user_icon from "../../assets/user_icon.svg"
import { useState } from 'react'

const Footer = () => {
    const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onClick = () => {
    if (email) {
      alert("Subscribed");
      setEmail("");
    } else {
      alert("Please enter your email.");
    }
  };
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo1}alt='' style={{height:"60px",width:"100px"}}/>
                <p>Im fullstack developer</p>
            </div>
            <div className="footer-top-right">
                
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='ur email' value={email} onChange={handleEmailChange} />
                </div>
                <div className="footer-subcribe" onClick={onClick}>Subcribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Spoorti Angadi.All right reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer