import React from 'react'
import ButtonProps from '../../components/reuse/ButtonProps'
import styled from 'styled-components'
import pics from "../../assets/african-american-young-programmer-working-remote-f-2022-03-25-18-49-53-utc.jpg"

const EndindDown = () => {
  return (
    <div>
        <Container style={{backgroundImage: `url(${pics})`,objectFit:"contain"}}>
            <Transparent/>
            <Main>
                <Div>
                    <Text>Connecting your brilliance with opportunity</Text>
                    <ButtonProps title='Apply to the Talent Network' trans='j' bg='jj'/>
                </Div>
            </Main>
        </Container>
        
      
    </div>
  )
}

export default EndindDown
const Text = styled.div`
font-size: 40px;
width: 70%;
text-align: center;
margin-bottom: 30px;
color: white;
font-weight: 500;
`
const Div = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const Main = styled.div`
display: flex;
justify-content: center;
width: 90%;
align-items: center;
z-index: 2;
`
const Transparent = styled.div`
background: rgba(0,0,0,0.4);
position: absolute;
width: 100%;
height: 100%;
z-index: 1;
`
const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
object-fit: cover;
position: relative;
background-size: cover;
background-attachment: fixed;

`
