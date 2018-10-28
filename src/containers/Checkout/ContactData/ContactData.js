import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import './ContactData.css'

export class ContactData extends Component {
  state = {
    name: '',
    email: '',
    phone:'',
    address: {
      street: '',
      postalCode: ''
    }
  }
  render() {
    return (
      <div className='ContactData'>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input className='Input' type="text" name='name' placeholder='Your Name' />
          <input className='Input' type="email" name='email' placeholder='Your Email' />
          <input className='Input' type="text" name='phone' placeholder='Your Phone Number' />
          <input className='Input' type="text" name='street' placeholder='Street' />
          <input className='Input' type="text" name='postalcode' placeholder='Postal Code' />
          <Button btnType='Success' >ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData
