import React from 'react'

import styled from 'styled-components'

const ButtonBack = ({x=0, y=0, width=100, wunit="%", height=100, hunit="%"}) => {

const ButtonBack = styled.div`
background-color: #c4c4c4;
mix-blend-mode: difference;
z-index: -1;
position: absolute;
left: ${x}px;
top: ${y}px;
width: ${width}${wunit};
height: ${height}${hunit};
transition-duration: 0.5s;

&:hover {
    left: -10%;
    top: 0;
    width: 120%;
    height: 100%;
}

`
return (
    <ButtonBack/>
)

}

export default ButtonBack