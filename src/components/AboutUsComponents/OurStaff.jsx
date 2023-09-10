import styled from "styled-components";

const Container = styled.div`

` 
const Wrapper = styled.div`

`
const Heading = styled.h1`

`
const Description = styled.div`

`
const Pic = styled.img`
  height: auto;
  width: 10vw;
  cursor: pointer;
`

const OurStaff = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Our Staff</Heading>
        <Description>Our people are our business – they are our most valuable asset. Management is always available to its staff and there is open and transparent communication channels that allow for queries and issues to be addressed and resolved at any time.

Paramount to our strategy is continued investment in the training and advancement of our greatest asset, our people. This embraces procedures for regularly reviewing all aspects of our business and the motivation of our people.

We recognise the value of our human capital and create value for our employees through:
A merit-based rewards system of competitive remuneration.
Recognition and career advancement through training, education, and mentorship to encourage a collaborative range of skills and solutions.</Description>
        <Pic/>
      </Wrapper>
    </Container>
  )
}

export default OurStaff