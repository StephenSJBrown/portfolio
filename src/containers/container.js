import styled from "styled-components"

const Container = styled.div`
position: relative;
top: 96px;
display: flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;
width: 100%;
max-width: 900px;
margin: 0 auto;

@media (max-width: 1024px) {
  padding: 0 20px;
}
@media (min-width: 1024px) {
  max-width: 65vw;;
}

&.workheading {
    align-items: flex-start;
}
`;

export default Container