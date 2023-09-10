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
const TransformationBBBEE = () => {
    return (
      <Container>
        <Wrapper>
          <Heading>Transformation & BBBEE</Heading>
          <Description>
          Transformation is a SA Government initiative driven by the Department of Trade and Industry. It aims to facilitate the involvement and participation of all historically disadvantaged individuals, broadening the country’s economic base and stimulating economic growth within the country.
          We are proud to participate in this deliberate initiative focusing on transforming and bringing about substantial change in the racial and gender composition of ownership, control and management within our company. As a result of this active and aggressive drive towards true transformation, we have been accredited with a B-BBEE level 1 status.
          This is further underpinned by ownership transforming to 51% black compromising (25,5% black women, 25,5% black male).
          Our Health and Safety division played an instrumental role during the Covid-19 pandemic in assisting the MBA in developing strict protocols and an industry standard.
          </Description>
          <Pic />
        </Wrapper>
      </Container>
   )
  }
  
  export default TransformationBBBEE