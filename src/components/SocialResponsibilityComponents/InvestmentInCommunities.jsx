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
const InvestmentInCommunities = () => {
    return (
      <Container>
        <Wrapper>
          <Heading>Investment in Communities</Heading>
          <Description>
          We are committed to uplifting the quality of life in the communities where we work.
          Typically, we establish at the outset of each project, the needs of “impoverished” communities.
          
          Firstly, a community upliftment project is selected in conjunction with the community. Our Corporate Social Investment (CSI) Fund is utilized to implement the project for the benefit of the community. 
          
          Secondly, employment opportunities through the establishment of Small Medium and Micro Enterprises (SMMEs) for participation in the construction of the project are assembled. We provide them with all the tools and opportunities to establish their business (SMME) by providing mentorship and assistance in business skills, financial management, quality & production control, etc.
          
          Finally, we establish youth employment avenues for willing candidates. They get enrolled in our Tri-Star Training Academy for various learning paths i.e. apprenticeship programs in Construction to upskill and provide them with the knowledge and expertise to be employed in the Construction Industry (Tri-Star Construction partner).
          </Description>
          <Pic />
        </Wrapper>
      </Container>
   )
  }
  
  export default InvestmentInCommunities