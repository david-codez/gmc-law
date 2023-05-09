import React, { useState } from 'react'
import {
  Nav,
  Collapse,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarText,
} from 'reactstrap'
import { RiScales3Fill } from 'react-icons/ri'

type Props = {}

function NavBar({}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='dark' dark container='fluid' fixed='top' expand='md'>
        <NavbarBrand href='/'>
          <p>
            <RiScales3Fill /> G.M.C. Law
          </p>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Bio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/contact'>Contact</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Call Now (561) 329 - 1147</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
