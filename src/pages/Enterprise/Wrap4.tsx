import React from 'react'
import ButtonProps from '../../components/reuse/ButtonProps'
import styled from 'styled-components'
import pics from "../../assets/1-1-1.png"

const Wrap4 = () => {
  return (
    <div>
        <Conatiner>
            <Main>
                <Left>
                    <Image src={pics}/>

                </Left>
                <Right>
                    <BigText>Scaling your team globally has never been this easy</BigText>
                    <SmallText>Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs. Cost-effective option for world-class expertise.</SmallText>
                    <div style={{display:"flex", alignItems:"center"}}>

                    
                    <ButtonProps title='Work with us' bg='k' trans='k'/>
                    </div>
                </Right>
            </Main>
        </Conatiner>
      
    </div>
  )
}

export default Wrap4
const SmallText = styled.div`
font-size: 20px;
font-weight: 200;
margin: 20px 0;
`
const BigText = styled.div`
font-size: 40px;
font-weight: 400;
font-style: italic;
`
const Right = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;

`
const Left = styled.div`
width: 45%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Conatiner = styled.div`
width: 100%;
height: 500px;
background-color: #B0D6CE;
display: flex;
align-items: center;
justify-content: center;
`
