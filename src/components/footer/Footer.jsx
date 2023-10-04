import React from 'react'
import { StyledFoot } from './FooterStyles'

const Footer = () => {
  return (
    <StyledFoot>
      <span> Copyright {new Date().getFullYear()}</span>
    </StyledFoot>
  )
}

export default Footer
