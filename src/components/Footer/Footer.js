import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: black;
  padding: 30px 0 30px 30px;
  color: white;
`

const Title = styled.h1`
    margin:0;   
    font-weight: normal;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Footer = () => {
    return(
        <Container>
            <Title>MURILO</Title>
            <Info>
                <label>EMAIL: murilosanchesp@gmail.com</label>
                <label>CELULAR: (19) 98955-8647</label>
            </Info>
        </Container>
    )
}

export default Footer