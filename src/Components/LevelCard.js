import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';

const LevelCard = (props) => {
    return (
        <>
            <CardContainer>
                <Card elevation={4}>
                    <Content>
                        {props.LevelTitle}
                    </Content>
                </Card>
            </CardContainer>
        </>
    )
}

export default LevelCard

const CardContainer = styled.div`
    padding:10px;
`

const Card = styled(Paper)`
    background-color:rgba(63,81,181,1);
    border-radius:50%;
    max-width:140px;
    max-height:140px;
    width:140px;
    height:140px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:5px solid #1a237e;
`
const Content = styled.p`
    color:white;
    font-size:18px;
    font-weight:bold;
    border-bottom:1px solid white;
    border-top:1px solid white;

`

