import {useState,} from 'react';

import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';


import './Footer.scss'

export const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [FormSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const { name , email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setFormSubmitted(true);
    })

  }



  return (
    <>
    <h2 className='head-text'>Take a coffe & Chat with me</h2>

    <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt="email"/>
        <a href='mailto:marioestrano@gmail.com' className='p-text'>marioestrano@gmail.com</a>
      </div>
      <div className='app__footer-card'>
        <img src={images.mobile} alt="mobile"/>
        <a href='tel: +58 (412) 1593673' className='p-text'>+58(412)1593673</a>
      </div>
    </div>

    {!FormSubmitted ? 
    (<div className='app__footer-form app__flex'>
      <div className='app__flex'>
        <input className='p-text' type='text' name='name' placeholder='Your name' value={name} onChange={handleChangeInput}/>
      </div>
      <div className='app__flex'>
        <input className='p-text' type='email' name='email' placeholder='Your email' value={email} onChange={handleChangeInput}/>
      </div>
      <div>
        <textarea className="p-text" placeholder='Your message'
        value={message} name="message" onChange={handleChangeInput}/>
      </div>
      <button type='button' className='p-text' onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>

    </div>)
    : (<div>
      <h3 className='head-text'>
        thank you for getting in touch

      </h3>
    </div>)}
    
    </>

    )
}


export const WrapFooter = AppWrap( MotionWrap( Footer, 'app__footer'),
'contact', 'app__whitebg')