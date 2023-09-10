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
const PlantAndEquipment = () => {
    return (
      <Container>
        <Wrapper>
          <Heading>Plant & Equipment</Heading>
          <Description>
          In 2006 Tri-Star Plant and Equipment was established as a subsidiary of Tri-Star Construction. This was largely due to Tri-Star Construction’s expanding business and rapid growth.
          Its primary function is to provide a service to Tri-Star Construction whereby it supplies and maintains construction plant, equipment, and machinery to the highest standards. It also has its own premises and a dedicated management team.
          </Description>
          <Pic />
        </Wrapper>
      </Container>
   )
  }
  
  export default PlantAndEquipment