import styled from 'styled-components'

import Sub from './sub'

const Title = styled(Sub)`
margin-bottom: 48px;
margin-left: 252px;

@media (max-width: 425px) {
    margin-left: 0;
    margin-bottom: 24px;
}
`

export default Title