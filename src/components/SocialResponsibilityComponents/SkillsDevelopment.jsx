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

const SkillsDevelopment = () => {
    return (
      <Container>
        <Wrapper>
          <Heading>Training & Skills Development</Heading>
          <Description>
          Our people are the most important assets we have.

          Our inhouse bursary scheme continues to assist employees to acquire higher qualifications which improves efficiencies and quality product service.

          We also run mentorship programs which aims at ensuring deliberate transfer of critical skills to Jnr professionals within the organisation and our delivery partners.

          We boasts a Training Academy which has opened its doors for the 1st time in 2020 by welcoming 21 learners on an apprenticeship program funded by Construction Education and Training Authority (CETA) for the next 3 years. We recently welcomed 15 new Electrical and 15 plumbing apprentices through CETA funded programme. It is important to mention that a significant number of these apprentices consist of young women aspiring to become artisans.

          These learners are sourced /recruited from previously disadvantaged communities such as Diepsloot, Clayville, Ivory Park, Soweto, Roodepoort and Fleurhof where Tri-Star Construction implements projects.
          </Description>
          <Pic />
        </Wrapper>
      </Container>
   )
  }
  
  export default SkillsDevelopment