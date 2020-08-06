import React from 'react'

import { Container } from './style'
import Dropdown from './../Dropdown'
import { Products, Developers, Company } from './../Content'

const NavBar: React.FC = () => {
  return (
    <Container>
        <ul>
          <li>
            <Dropdown
              name="Produtos"
              content={ Products }
            />
          </li>
          <li>
            <Dropdown
              name="Desenvolvedores"
              content={ Developers }
            />
          </li>
          <li>
            <Dropdown
              name="Empresa"
              content={ Company }
            />
          </li>
        </ul>
    </Container>
  )
}

export default NavBar
