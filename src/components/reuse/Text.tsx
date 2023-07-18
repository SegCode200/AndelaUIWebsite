import React from 'react'
import styled from 'styled-components'
interface Itext{
  title?: string,
  display?: string
  text?: string
}

const Text:React.FC<Itext> = ({title,display,text}) => {
  return (
    <div>
        <Container>
            <Main>
                <Title>{title}</Title>
                <Sub display={display}>{text}</Sub>

            </Main>
        </Container>
    </div>
  )
}

export default Text
const Sub = styled.div<{display?:string}>`
  font-size: 20px;
  font-weight: 300;
  width: 70%;
  text-align: center;
  display: ${({display})=>display ? "none" : ""};
`
const Title = styled.div`
font-size: 40px;
font-weight: 300;
font-style: italic;

`
const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Container = styled.div`
width: 100%;
height: 150px;
display: flex;
align-items: center;
justify-content: center;
`