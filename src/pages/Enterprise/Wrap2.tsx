import React from 'react'
import ButtonProps from '../../components/reuse/ButtonProps'
import styled from 'styled-components'
const Data= [
    "React",
    "Php",
    "Node.js",
    "Kotlin",
    "Flask",
    "Django",
    "JavaScript",
    "React Native",

]

const Wrap2 = () => {
  return (
    <div>
      <Container>
        <Main>
            <Left>
                <Title>Elevate your business with in demand skills</Title>
                <Small>We will help you find the right fit for your business.</Small>
                <div style={{display:"flex", alignItems:"center"}}>
                    <ButtonProps title='Choose Andela' bg='jj'  trans='jj'/>
                    </div>
            </Left>
            <Right>
                <Bottom>
                    <Hold>
                        {
                            Data.map((props)=>(
                                <Button>{props}</Button>
                            ))
                        }
                        
                    </Hold>
                </Bottom>
                    
 
            </Right>
        </Main>
      </Container>
    </div>
  )
}

export default Wrap2
const Button = styled.div`
width: 250px;
height: 30px;
font-size: 18px;
color: black;
background-color: white;
border-radius: 30px;
display: flex;
align-items: center;
padding: 10px;
transition: all 350ms;
cursor: pointer;
margin:  15px;
:hover{
    transform: scale(1.09);
    color: #56C870;
}
`
const Hold = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
`
const Bottom = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`
const Holder = styled.div`

`
const Right = styled.div`
width: 50%;
height: 100%;
`
const Small = styled.div`
font-size: 20px;
font-weight: 300;
margin: 20px 0;

`
const Title = styled.div`
font-size: 50px;
font-weight: 500;
width: 100%;
font-style: italic;

`
const Left = styled.div`
width: 40%;
height: 100%;
display: flex;
justify-content: center;

flex-direction: column;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
background-color: #ECEFF0;
`
