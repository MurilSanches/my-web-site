import React from 'react'
import styled from 'styled-components'

import { Container } from '../components/Container/Container'

const Title = styled.h1`
    margin:0;
    font-weight: normal;
`

const Subtitle = styled.h2`
    font-weight: normal;
    text-align: center;
`

const Topic = styled.h3`
    font-weight: normal;
    text-align: center;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    margin: 10px 50px 10px 50px;
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;

    width: 33%;

    @media(max-width: 600px){
        width: 100%;
    }
`

const MoreAbout = () => {
    return(
        <Container direction='column'>
            <Title>More about me</Title>
            <Subtitle>Some Project that I made</Subtitle>
            <Topic>These are the first projects that I made in techinical school</Topic>
            <Wrapper>
                <Wrap>
                    <img alt='asteroid_game'/> 
                    <h4>Asteroid game in Assembly</h4>
                </Wrap>
                <Wrap>
                    <img alt='music_player'/> 
                    <h4>Music Player in Android</h4>
                </Wrap>
                <Wrap>
                    <img alt='betting site'/> 
                    <h4>betting site in ASP.NET</h4>
                </Wrap>
                <Wrap>
                    <h4>entre outros</h4>
                </Wrap>
            </Wrapper>
            <p>
                See all porojects <a href="https://github.com/MurilSanches?tab=repositories">here</a>
            </p>
        </Container>
    )
}

export default MoreAbout