import React from 'react'

import { Container } from './style'
import { DropdownOption } from './../Dropdown'
import { DropdownProvider } from './../Dropdown/Provider'
import { Products, Developers, Company } from './../Content'

const NavBar: React.FC = () => {
  return (
    <Container>
      <DropdownProvider>
        <ul>
          <li>
            <DropdownOption
              name="Produtos"
              content={ Products }
            />
          </li>
          <li>
            <DropdownOption
              name="Desenvolvedores"
              content={ Developers }
            />
          </li>
          <li>
            <DropdownOption
              name="Empresa"
              content={ Company }
            />
          </li>
        </ul>
      </DropdownProvider>
    </Container>
  )
}

export default NavBar
