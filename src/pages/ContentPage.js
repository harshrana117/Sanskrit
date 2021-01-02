import React from 'react'
import styled from 'styled-components'
import LevelOne from '../images/level-1-back.png';

const ContentCard = () => {

    
    return (
        <MainContainer>
            <Header>
                <Head>Warm up</Head>
            </Header>
            <ContentContainer>
                <CardsContainer>
                    <Div></Div>
                    <Div></Div>
                    <Div></Div>
                    <Div></Div>
                    <Div></Div>
                </CardsContainer>
            </ContentContainer>
        </MainContainer>
    )
}

export default ContentCard
const MainContainer = styled.div`
    background-image:url(${LevelOne});
    background-size:800px;
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center bottom;
`
const Div = styled.div`
    width:40vw;
    height:70vh;
    background-color:rgba(63,81,181,0.05);
    border:2px solid rgba(63,81,181,0.1);
    border-radius:20px;
    padding:10px;
    margin:20px 10px;
    backdrop-filter: blur(15px) saturate(100%) contrast(55%) brightness(120%);

    @media screen and (max-width:900px)
    {
        width:450px;
    }

    @media screen and (max-width:700px)
    {
        width:60vw;
    }

    @media screen and (max-width:500px)
    {
        width:90vw;
    }

`
const Header = styled.div`
    background-color:rgba(63,81,181,0.05);
    backdrop-filter: blur(5px) saturate(100%) contrast(55%) brightness(120%);
    padding:10px 20px;
    border-bottom:1px solid rgba(63,81,181,0.1);
    position:fixed;
    width:100%;
    z-index:100;
`

const Head = styled.h1`
    color:rgba(63,81,181,0.9);
    font-weight:normal;
    font-size:36px;
`

const ContentContainer = styled.div`
    padding:80px 10px;
    background-color:rgba(0,0,0,0.1);
    min-height:100vh;
    display:flex;
    justify-content:center;
`

const CardsContainer = styled.div`
 
`