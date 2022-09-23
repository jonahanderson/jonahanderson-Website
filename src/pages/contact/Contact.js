import React, {useState} from "react";
import emailjs from 'emailjs-com'
import './Contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import InputGroup from "react-bootstrap/InputGroup";




function Contact() {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);



  const submit = () => {
    if (name && email && message) {
        const serviceId = 'servicekey';
        const templateId = 'templatekey';
        const userId = 'userkey';
        const templateParams = {
            name,
            email,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
  }

  // const isValidEmail = email => {
  //   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return regex.test(String(email).toLowerCase());
  // };
  
  return (
      <div className="contact-form">
        <div className="contact-wrapper">
          <div className="contact-wrapper1">

            <div className="sizing">

              <h2 className="title">Contact me:</h2>
              <InputGroup className="yourname"> <Form.Control type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)}/></InputGroup>
              <InputGroup className="youremail"> <Form.Control type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} /></InputGroup>
              <InputGroup className="yourmessage"> <Form.Control as="textarea" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)} /></InputGroup>
          
              <div className="ww">

              <Button className="bt2" onClick={submit}>Send Message</Button>

              </div>
              {emailSent ? <div className="response">Thank you for your message. I'll be in contact with you shortly!</div> : null}
            </div>
          </div>

        </div>
      </div>
    );
  }
  
  export default Contact;