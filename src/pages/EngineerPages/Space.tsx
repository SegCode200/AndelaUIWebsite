import React from 'react'
import ButtonProps from '../../components/reuse/ButtonProps'
import styled from 'styled-components'

const Space = () => {
  return (
    <div>
        <Container>
            <Main>
                <BigText>Grow your potential beyond borders</BigText>
                <SmallText>Connect with a global network and land international opportunities.</SmallText>
                <ButtonProps title='Discover opportunities' bg='jj' trans='jj' />
            </Main>
        </Container>
    </div>
  )
}

export default Space
const SmallText = styled.div`
margin: 10px 0;
font-size: 17px;
font-weight: 300;
`
const BigText = styled.div`
font-size: 50px;
font-style: italic;
font-weight: 500;
margin: 10px 0;

`
const Main = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
color: white;
align-items: center;


`
const Container = styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
background-color: #3F5D61;
`