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
const Services = styled.div`

`
const OurServices = () => {
  return (
    <Container>
      <Wrapper>
        <Pic />
         <Services>
         <Heading> Our Services </Heading>
         Tri-Star Construction has a very experienced and highly skilled management team and workforce that adopts a collaborative and hands-on approach to our relationships, delivering safe, high-quality products and services that respond to clients and industry.
         Our extensive experience in the construction industry has enabled us to offer:
         Traditional Building Contracts
         Full Turnkey (Design and Build) Solutions
         Development Management and Property Development
         Client Partnerships, Public Private Partnerships (PPP), etc.

         We have the experience and ability to construct Multi-Unit Housing projects, High Rise Residential, 
         Commercial, Industrial, and Retail as well as Specialised projects.
        </Services>
      </Wrapper>
    </Container>
 )
}

export default OurServices