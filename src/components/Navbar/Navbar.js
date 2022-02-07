import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Parent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: white;
`

const Title = styled.h1`
    margin:0;
    padding: 10px 0 0 30px;
    font-weight: normal;
`

const Menu = styled.nav`
  display: flex;
  padding: 10px 0 0 30px;
`

const Item = styled(Link)`
    text-decoration: none;
    color: black;

    & + & {
        margin-left: 15px;
    }

    &:hover {
        color: gray;
    }
`

const Navbar = () => {
    return (
        <Parent>
            <Container>
                <Title>Murilo</Title>
                <Menu>
                    <Item to='/home'>Home</Item>
                    <Item to='/about'>About</Item>
                    <Item to='/moreabout'>More about</Item>
                    <Item to='/contacts'>Contacts</Item>
                </Menu>
                
            </Container>
        </Parent>
    )
}

export default Navbar