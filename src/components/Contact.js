import React from 'react'
import '../styles/Contact.css'
import BannerImage from '../assets/banner.png'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${BannerImage})` }}>

      </div>
      <div className='rightSide'>
        <h1>Contact Us
        </h1>
        <form>
          <label>Ad Soyad</label>
          <input type='text' name='name' placeholder='Please enter your name and surname...' />
          <label>Email</label>
          <input type='email' name='email' placeholder='Please enter your email...' />
          <label>Message</label>
          <textarea ows='6' type='message' name='message' placeholder='Please enter your message...'></textarea>
        </form>
      </div>
    </div>
  )
}