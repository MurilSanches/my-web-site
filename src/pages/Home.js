import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Container/Container'

const Image = styled.img`

`

const Text = styled.p`
  font-size: 16px;
  margin:0;
  padding-right: 30px;
`

const Home = () => {
    return(
        <Container direction='row'>
            <Image alt='picture_of_me' src={require('../images/me.jpg')} />
            <Text>
                Home! Hello, my name is Murilo! I'm 18 years old. I am a Software Analyst Junior. 
                This site was made for learning reasons  
            </Text>
        </Container>
    )
}

export default Home