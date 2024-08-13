import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    desc: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_APP_SERVICE,
      import.meta.env.VITE_APP_TEMPLATE,
      e.target,
      import.meta.env.VITE_APP_USER
    ).then(
      (result) => {
        setResponseMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', desc: '' });
      },
      (error) => {
        setResponseMessage('Failed to send message.');
      }
    );
  };

  return (
    <div className='contact' id='contactme'>
      <div className="contactMain">
        <h1>Contact Me</h1>
        <form className='contactForm' onSubmit={handleSubmit}>
          <div className="formSection">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formSection">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formSection">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="How can I help you!"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formSection">
            <label htmlFor="desc">Message:</label>
            <textarea
              id="desc"
              name="desc"
              placeholder="Tell us more about it..."
              rows="10"
              value={formData.desc}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formSubmit">
            <button type='submit'>Submit</button>
          </div>
          {responseMessage && <div className="responseMessage">{responseMessage}</div>}
        </form>
      </div>
    </div>
  );
}
