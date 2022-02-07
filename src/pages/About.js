import React from 'react'
import styled from 'styled-components'

import { Container } from '../components/Container/Container'

const Title = styled.h1`
    margin:0;
    font-weight: normal;
    padding:
`

const Text = styled.p`
    margin:0;
  font-size: 16px;
  padding-right: 30px;
`

const About = () => {
    return(
        <Container direction='column'>
            <Title>About me</Title>
            <Text>
                As I said I'm a Software Analyst Junior, I graduated from techinical school named Colégio Técnico de Campinas,
                I started my career at Dextra Sistemas, was a IT enterprise in Brasil, months ago Dextra was bought by CI&T a big 
                brazilian enterprise    
             </Text>
        </Container>
    )
}

export default About