import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import styled from 'styled-components'
import {toggle} from '../actions'

import logo_light from '../images/logo_light.svg'
import logo_dark from '../images/logo_dark.svg'

const Footer = () => {

const dispatch = useDispatch()
const dark = useSelector(state => state.dark)

const Changer = styled.img`
position: absolute;
bottom: 48px;
right: 48px;
cursor: pointer;
`

    return (
        <>
        <Changer src={ dark ? logo_dark : logo_light } onClick={() => dispatch(toggle())} />
        </>
    )
}

export default Footer