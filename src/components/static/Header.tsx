import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
        <Container>
            <Main>
                <Text>Andela acquires Qualified.io and Codewars</Text>
                <Text1>Learn More</Text1>
            </Main>
        </Container>
        </div>
  )
}

export default Header
const Text1 = styled.div`
font-weight: 400;
font-size: 15px;
margin-left: 30px;
:hover{
  cursor: pointer;
}

`
const Text = styled.div`
font-weight: 500;
font-size: 20px;
`
const Main = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Container = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content:  center;
background-color: white;
position: fixed;
z-index: 20;
`