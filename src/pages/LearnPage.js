import React from 'react'
import styled from 'styled-components';
import LevelCard from '../Components/LevelCard';

const LearnPage = () => {
    return (
        <>
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
        </>
    )
}

export default LearnPage

const Header = styled.div`
    background-color:#3f51b5;
    padding:20px;
`

const Head = styled.h1`
    color:white;
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
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:#f5f5f5;
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


