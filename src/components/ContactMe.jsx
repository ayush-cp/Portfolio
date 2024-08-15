import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useElementOnScreen } from './intersectionObserver';

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
  const contacts = ['name', 'email', 'subject','description']
  const refs = useRef(contacts.map(() => React.createRef()));
  const isContactVisible = refs.current.map((ref) =>
    useElementOnScreen(ref, { threshold: 0.5, rootMargin: "0px 0px 0px 0px" })
  );
  const headerRef = useRef(null);
  const buttonRef = useRef(null)
  const isHeaderVisible = useElementOnScreen(headerRef, {
    threshold: 0.5,
    rootMargin: '0px'
  })
  const isButtonVisible = useElementOnScreen(buttonRef, {
    threshold: 0.5,
    rootMargin: '0px'
  })
  return (
    <div className='contact' id='contactme'>
      <div className="contactMain">
        <h1 ref={headerRef} className={`popup ${isHeaderVisible? 'visible' :''}`}>Contact Me</h1>
        <form className='contactForm' onSubmit={handleSubmit}>
          <div className={`formSection slideLeft ${isContactVisible[0] ? 'visible' :'' }`} ref={refs.current[0] }>
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
          <div className={`formSection slideLeft ${isContactVisible[1] ? 'visible' :'' }`} ref={refs.current[1] }>
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
          <div className={`formSection slideLeft ${isContactVisible[2] ? 'visible' :'' }`} ref={refs.current[2] }>
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
          <div className={`formSection slideLeft ${isContactVisible[3] ? 'visible' :'' }`} ref={refs.current[3] }>
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
          <div ref={buttonRef} className={`formSubmit popup ${isButtonVisible? 'visible':''}`}>
            <button type='submit' >Submit</button>
          </div>
          {responseMessage && <div className="responseMessage">{responseMessage}</div>}
        </form>
      </div>
    </div>
  );
}
