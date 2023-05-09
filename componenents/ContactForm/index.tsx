import React from 'react'
import { Button, Form, Input } from 'reactstrap'

type Props = {}

function ContactForm({}: Props) {
  return (
    <div>
      <Form>
        <Input type='text' name='Name' placeholder='Name' />
        <Input type='email' name='email' placeholder='Email' />
        <Input type='text' name='phone' placeholder='Phone Number' />
        <Input type='textarea' name='message' placeholder='Message' />
        <Button type='submit' color='primary'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
