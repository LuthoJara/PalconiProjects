import styled from "styled-components";

const Container = styled.div`

` 
const Wrapper = styled.div`

`
const Leader = styled.div`

`
const Pics = styled.img`

`
const Name = styled.h2`

`
const Title = styled.h3`

`
const Description = styled.div`

`

const Leadership = () => {
  return (
    <Container>
        <Wrapper>
            <Leader>
                <Pics></Pics>
                <Name></Name>
                <Title></Title>
                <Description></Description>
            </Leader>
            <Leader>
                <Pics></Pics>
                <Name></Name>
                <Title></Title>
                <Description></Description>
            </Leader>            
            <Leader>
                <Pics></Pics>
                <Name></Name>
                <Title></Title>
                <Description></Description>
            </Leader>
        </Wrapper>
    </Container>
  )
}

export default Leadership