import styled from 'styled-components'

const Grid = styled.div`

position: relative;
top: 48px;

width: 100vw;
padding: 36px 78px 0 78px;
box-sizing: border-box;
margin: 0 auto;

@media (max-width: 1100px) {
    padding: 32px;
}

@media (max-width: 425px) {
    max-width: 100vw;
    padding: 36px;
}

@media (min-width: 1441px) {
    max-width: 75vw;
}
`
export default Grid