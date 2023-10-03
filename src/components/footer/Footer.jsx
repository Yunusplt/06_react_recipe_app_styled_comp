import React from 'react'
import { StyledFoot } from './FooterStyles'

const Footer = () => {
  return (
    <StyledFoot>
      <p> Copyright {new Date().getFullYear()}</p>
    </StyledFoot>
  )
}

export default Footer
