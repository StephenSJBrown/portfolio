import React from 'react'
import styled from 'styled-components'
import logo from './../images/logo.svg'

const Background = styled.div`
max-width: 100vw;
background-color: #F5D1D1;
height: 48px;
padding: 36px;
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
font-size: 1em;
&:hover {
color: red;
cursor: pointer;
}
`

const Navbar = () => {

    return (
        <Background>
        <img src={logo}/>
        <Right>
            <Link>about</Link>
            <Link>work</Link>
            <Link>contact</Link>
        </Right>
        </Background>
    )
}

export default Navbar