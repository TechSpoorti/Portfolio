import React, { useState } from 'react';
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
  
    const { name, email, message } = formValues;
  
    if (!name || !email || !message) {
      alert('All fields are required.');
      return;
    }
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", "d90c5a3c-8473-45be-b98f-78c71e4b3955");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const result = await res.json();
  
      if (result.success) {
        alert(result.message);
        setFormValues({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently seeking job opportunities. If you have an opportunity that matches my skills and experience, please feel free to contact me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt='' /><p>spoortiangadi18@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt='' /><p>8971067385</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt='' /><p>Bengaluru, KA</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder='Your Name'
            name='name'
            value={formValues.name}
            onChange={handleChange}
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder='Your email'
            name='email'
            value={formValues.email}
            onChange={handleChange}
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder='Your message'
            value={formValues.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
