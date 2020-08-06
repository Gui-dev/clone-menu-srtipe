import React from 'react'

import { Button } from './style'

interface IDropdownOption {
  name: string,
  content: React.FC,
}

const DropdownOption: React.FC<IDropdownOption> = ( { name, content: Content } ) => {
  return (
    <Button>{name}</Button>
  )
}

export default DropdownOption
