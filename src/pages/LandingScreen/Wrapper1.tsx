import React from 'react'
import styled from 'styled-components'
import ButtonProps from '../../components/reuse/ButtonProps'
import pics from "../../assets/Visual-2.png"
import pics1 from "../../assets/tick-green--oOd4y4.svg"

const Wrapper1 = () => {
  return (
    <div>
        <Container>
            <Main>
                
                <Right>
                    <Title>Empower your future</Title>
                    <Text>Why the world’s best talent prefers Andela</Text>
                    <Sub><Icon src={pics1}/>Long-term placements</Sub>
                    <Sub><Icon src={pics1}/>Trusted career partner</Sub>
                    <Sub><Icon src={pics1} />Career Guidance</Sub>
                    <Sub><Icon src={pics1}/>96% match success</Sub>
                    <div style={{width: "250px", display:"flex", alignItems: "center"}}>
                    <ButtonProps title='Find Tech Experts' weight='' bg='sk' trans='jj'
                    /> 
                    </div>
                  
                </Right>
                <Left>
                    <Image src={pics}/>
                </Left>
            </Main>
        </Container>
      
    </div>
  )
}

export default Wrapper1
const Icon = styled.img`
margin-right: 10px;
`
const Sub = styled.div`
font-weight: 200;
margin: 10px 0px;
line-height: 1.7;
display: flex;
align-items: center;
`
const Text = styled.div`
font-size: 40px;
font-weight: 300;
width: 60%;
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
width: 50%;
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
