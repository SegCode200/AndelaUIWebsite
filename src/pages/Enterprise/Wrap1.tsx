import React from 'react'
import ButtonProps from '../../components/reuse/ButtonProps'
import styled from 'styled-components'
import pics from '../../assets/section-image-7-1024x897.png'




const Wrap1 = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                    <Image src={pics}/>
                </Left>
                <Right>
                    <Div>
                    <Title>Hire Individuals</Title>
                    <Sub>Find the right technologist to complement your existing team and hit the ground running on impactful initiatives.</Sub>
                    </Div>
                    <Div>
                    <Title>Build Teams</Title>
                    <Sub>Scale rapidly with a full team of technologists embedded at your company to unlock more growth and potential.</Sub>
                    </Div>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <ButtonProps title='Discover Talent' bg='jj'  trans='jj'/>
                    </div>
                </Right>
            </Main>
        </Container>
      
    </div>
  )
}

export default Wrap1
const Sub = styled.div`
font-size: 17px;
font-weight: 300;
margin: 10px 0;
`
const Title = styled.div`
font-size: 30px;
font-weight: 500;
`
const Div = styled.div`
display: flex;
flex-direction: column;
margin: 30px 0;
`
const Right = styled.div`
width: 45%;
height: 100%;
display: flex;
flex-direction: column;
`
const Image = styled.img`
width: 100%;

`
const Left = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
/* align-items: center; */
`
const Container = styled.div`
width: 100%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;

`
