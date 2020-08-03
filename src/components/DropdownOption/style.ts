import styled from 'styled-components'

export const Button = styled.div`
  font-size: 1.8rem;
  color: #FFF;
  padding: 2rem 2.5rem;
  background-color: none;
  outline: 0;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover, &:focus {
    opacity: 0.55;
  }
`
