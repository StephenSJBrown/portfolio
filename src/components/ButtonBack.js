import React from 'react'

import styled from 'styled-components'

const ButtonBack = ({x, y, width=78, height=60}) => {

const ButtonBack = styled.div`
background-color: #c4c4c4;
mix-blend-mode: difference;
z-index: -1;
position: absolute;
left: ${x}px;
top: ${y}px;
width: 78px;
height: 60px;
transition-duration: 0.5s;

&:hover {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

`
return (
    <ButtonBack/>
)

}

export default ButtonBack