import React from 'react'
import "./Footer.css"
import logo1 from "../../assets/logo1.svg"
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
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
                    <input type="email" placeholder='ur email' />
                </div>
                <div className="footer-subcribe">Subcribe</div>
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