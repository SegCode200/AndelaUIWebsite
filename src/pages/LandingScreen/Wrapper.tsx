import React from 'react'
import styled from 'styled-components'
import ButtonProps from '../../components/reuse/ButtonProps'
import pics from "../../assets/Andela_NewLogos.png"

const Wrapper = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                    <Image src={pics}/>
                </Left>
                <Right>
                    <Title>Build your team today</Title>
                    <Text>We’ve cracked the code on creating engineering teams</Text>
                    <Sub>Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to Subit your business needs. Start building your world-class team faster with talent from Andela.</Sub>
                    <div style={{width: "250px", display:"flex", alignItems: "center"}}>
                    <ButtonProps title='Build your team' weight='' bg='sk' trans='jj'
                    /> 
                    </div>
                  
                </Right>
            </Main>
        </Container>
      
    </div>
  )
}

export default Wrapper
const Sub = styled.div`
font-weight: 200;
margin: 15px 0px;
line-height: 1.7;
`
const Text = styled.div`
font-size: 40px;
font-weight: 100;
`
const Title = styled.div`
font-size: 15px;
font-weight: 500;
`
const Right = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`
const Image = styled.img`
object-fit: cover;
width: 100%;
height: 80%;
`
const Left = styled.div`
width: 45%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Main = styled.div`
display: flex;
align-items: center;
width: 90%;
height: 100%;
justify-content: space-between;
`
const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
`
