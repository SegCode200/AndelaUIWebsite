import React from 'react'
import styled from 'styled-components'
import ButtonProps from '../../components/reuse/ButtonProps' 

const Hero = () => {
  return (
    <div>
        <Container>
            <Main>
                <Text>Find work that you love with companies you can trust</Text>
                <SubText>Join the Andela Talent Network to experience the joy of long-term work, with vetted companies and competitive compensation.</SubText>
                <Div>
                    <ButtonProps title='Apply to acess exclusive jobs' weight='' trans='' bg='dj'/>
                   
                </Div>

            </Main>
        </Container>
      
    </div>
  )
}

export default Hero
const Div = styled.div`
display: flex;
`
const SubText = styled.div`
width: 80%;
font-size: 15px;
font-weight: 500;
text-align: center;
margin: 40px;
`
const Text = styled.div`
font-size: 50px;
font-weight: 500;
text-align: center;
`
const Main = styled.div`
width: 100%;
justify-content: center;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Container = styled.div`
position: absolute;
top: 200px;
display: flex;
align-items: center;
width: 1000px ;
justify-content: center;
flex-direction: column;
left: 15%;


`
