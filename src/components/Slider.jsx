// trying to make automatic and ridding the loopback: useeffect
import { useState, useEffect } from "react";
const Container = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Wrapper = styled.div`
    display: flex;
    /* transition: all 1.5s ease; */
    /* transform: translateX(-100%); */
    /* transform: translateX(props => props.className === "left" && "10px"); */
    background-image: ${props=> props.backgroundImg};
`
const Slide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100vw ;
    background-color: ${props=> props.bg};
    padding-bottom: 20px;
    /* transition: all 1.5s ease; */
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const ImgContainer = styled.div`
    flex: 1;
    height: 50%;
    padding-bottom: 10px; 
`
const Image = styled.img`
    height: auto;
    width: 25vw;
`
const Title = styled.h1`
    font-size: 60px;
    padding: 20px;
    text-decoration: underline;
`