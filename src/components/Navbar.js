import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from './../images/logo.svg'

const Background = styled.div`
max-width: 100vw;
background-color: #F5D1D1;
height: 48px;
padding: 0 36px;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
`

const Right = styled.div`
display: flex;
justify-content: space-between;
`
const Linker = styled.a`
margin-left: 60px;
&:hover {
background-color: #C4C4C4;
background-blend-mode: difference;
cursor: pointer;
text-decoration: none;
}
`

const Logo = styled.img`
@keyframes spin {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}

transition-duration: 1s;

&:hover{
    animation-name: spin;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
`

const Navbar = () => {

    return (
        <Background>
        <Link to="/"><Logo src={logo} alt="logo"/></Link>
        <Right>
            <Link to="/about"><Linker>about</Linker></Link>
            <Link to="/work"><Linker>work</Linker></Link>
            <Link to="/contact"><Linker>contact</Linker></Link>
        </Right>
        </Background>
    )
}

export default Navbar