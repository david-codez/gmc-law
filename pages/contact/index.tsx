import React from 'react'
import NavBar from '../../componenents/Layout/NavBar'
import ContactForm from '../../componenents/ContactForm'

type Props = {}

function Contact({}: Props) {
  return (
    <div>
      <NavBar />
      <ContactForm />
    </div>
  )
}

export default Contact
