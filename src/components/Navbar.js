import React from 'react'
import styled from 'styled-components'
import logo from './../images/logo.svg'

const Background = styled.div`
max-width: 100vw;
background-color: $this;
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
const Link = styled.a`
margin-left: 60px;
&:hover {
color: red;
cursor: pointer;
}
`

const Navbar = () => {

    return (
        <Background>
        <img src={logo} alt="logo"/>
        <Right>
            <Link>about</Link>
            <Link>work</Link>
            <Link>contact</Link>
        </Right>
        </Background>
    )
}

export default Navbar