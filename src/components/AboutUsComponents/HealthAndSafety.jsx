import styled from "styled-components";

const Container = styled.div`

` 
const Wrapper = styled.div`

`
const Heading = styled.h1`

`
const Description = styled.p`

`
const Pic = styled.img`
  height: auto;
  width: 10vw;
  cursor: pointer;
`
const HealthAndSafety = () => {
    return (
      <Container>
        <Wrapper>
          <Heading>Health & Safety</Heading>
          <Description>
          Tri-Star Construction has its own well-established Health and Safety division. Constant attention and diligence to our health and safety protocols has seen us achieve very high standards and win numerous awards. 
          Our Health and Safety division played an instrumental role during the Covid-19 pandemic in assisting the MBA in developing strict protocols and an industry standard.
          </Description>
          <Pic />
        </Wrapper>
      </Container>
   )
  }
  
  export default HealthAndSafety