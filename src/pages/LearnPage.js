import React from 'react'
import styled from 'styled-components';
import LevelCard from '../Components/LevelCard';
import LevelOne from '../images/level-1-back.png';

const LearnPage = () => {
    return (
        <Div>
            <Header>
                <Head>LEARN</Head>
            </Header>
            <LevelContainer>
                <LevelSection>
                    <LevelHeader>The Warmup Section</LevelHeader>
                    <LevelSectionContainer>
                        <LevelCard LevelTitle='Warmup Round' />
                        <LevelCard LevelTitle='Basic Words-1' />
                        <LevelCard LevelTitle='Basic Words-2' />
                        <LevelCard LevelTitle='Basic Words-3' />
                        <LevelCard LevelTitle='Basic Words-4' />
                        <LevelCard LevelTitle='Basic Words-5' />
                        <LevelCard LevelTitle='Wrap Up' />
                        <LevelCard LevelTitle='Final Test' />
                    </LevelSectionContainer>
                </LevelSection>
                <LevelSection>
                    <LevelHeader>The Warmup Section</LevelHeader>
                    <LevelSectionContainer>
                        <LevelCard LevelTitle='Warmup Round' />
                        <LevelCard LevelTitle='Basic Words-1' />
                        <LevelCard LevelTitle='Basic Words-2' />
                        <LevelCard LevelTitle='Basic Words-3' />
                        <LevelCard LevelTitle='Basic Words-4' />
                        <LevelCard LevelTitle='Basic Words-5' />
                        <LevelCard LevelTitle='Wrap Up' />
                        <LevelCard LevelTitle='Final Test' />
                    </LevelSectionContainer>
                </LevelSection>
            </LevelContainer>
        </Div>
    )
}

export default LearnPage
const Div = styled.div`
    background-image:url(${LevelOne});
    background-size:800px;
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center bottom;
`

const Header = styled.div`
    background-color:rgba(63,81,181,0.05);
    backdrop-filter: blur(10px) saturate(100%) contrast(55%) brightness(120%);
    padding:20px;
    border-bottom:2px solid rgba(63,81,181,0.1);
`

const Head = styled.h1`
    color:rgba(63,81,181,0.8);
    font-weight:normal;
    font-size:48px;
`
const LevelContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:20px 10px 100px 10px;
`
const LevelSection = styled.div`
    backdrop-filter: blur(10px) saturate(100%) contrast(55%) brightness(120%);
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:rgba(63,81,181,0.05);
    border-radius:20px;
    margin:20px 0px;
`
const LevelHeader = styled.h2`
    text-align:center;
    padding:50px 20px;
    color:#3f51b5;
    font-size:36px;
    font-weight:normal;
    text-transform:uppercase;
`
const LevelSectionContainer = styled.div`
    padding:10px;
    max-width:600px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`


