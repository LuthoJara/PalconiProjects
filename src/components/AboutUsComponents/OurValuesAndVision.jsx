///Routes for the react app
// import { Link, useLocation} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`

` 
const Wrapper = styled.div`

`
const Heading = styled.h1`

`
const Description = styled.p`

`
const OurValues = styled.div`

`
const OurVision = styled.div`

`
const OurValuesAndVision = () => {
  return (
    <Container>
      <Wrapper>
        <OurValues>
          <Heading>Our Values</Heading>
          <Description>
          We pride ourselves on our integrity, operating in an open and transparent way, treating people fairly and with respect.
          We recognise our responsibility to all aspects of Health and Safety.
          We want to make a positive contribution to society through social investment, uplifting our people through training, mentorship, education, and opportunity.
          We build long term relationships with all our stakeholders.
          We aim for excellence through innovation and collaboration to drive improved performance and deliver the best possible outcomes from our clients, our projects, our people, partners, and their wider community.
          </Description>
        </OurValues>
        <OurVision>
        <Heading>Our Vision</Heading>
          Strive to be a highly capable, diversified construction company that will grow through opportunities that employ our core expertise and partnerships.
          Growth will continue to be organic and controlled around our Tri-Star Construction core management, to ensure our values are infused and our culture entrenched.
          Through good Corporate Governance, risk, and fiscal management we will ensure sustainability.
        </OurVision>
      </Wrapper>
    </Container>
 )
}

export default OurValuesAndVision