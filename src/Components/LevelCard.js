import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom'

const LevelCard = (props) => {
    return (
        <>
            <CardContainer to='/content'>
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

const CardContainer = styled(Link)`
    text-decoration:none;
    padding:5px;
    margin:5px;
    border-radius:50%50%;
    border:0.5px solid rgba(26, 35, 126,0.5);
`

const Card = styled(Paper)`
    background-color:rgba(255,255,255,0.1);
    border-radius:50%;
    max-width:140px;
    max-height:140px;
    width:140px;
    height:140px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:0.5px solid rgba(26, 35, 126,0.5);
    transition:all 0.4s;

    &:hover{
        cursor:pointer;
        background-color:rgba(26, 35, 126,0.1);
        transition:all 0.4s;
    }
`
const Content = styled.p`
    color:rgba(26, 35, 126,0.8);
    font-size:18px;
    font-weight:bold;
    border-bottom:0.5px solid rgba(26, 35, 126,0.2);
    border-top:0.5px solid rgba(26, 35, 126,0.2);

`

