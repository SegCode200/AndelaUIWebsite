import React from 'react'
import styled from 'styled-components'

const Data =[
    {Text: "Technologist first culture", More: "Ensuring a seamless experience for technologists is our top priority. You can rest assured there is always someone looking out for your interests and career."},
    {Text: "Trusted platform", More: "We only work with trusted and vetted companies. No matter what, we’ll ensure you are paid for the work you do, and on time."},
    {Text: "Global support", More: "Wherever you are, and whatever issues you may face, we’re here to help solve any disputes, fast!"},
]

const Lead = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                    <Text>Our commitment to your success</Text>
                </Left>
                <Right>
                {
                    Data.map((props)=>(
                        <Div>
                        <BigText>{props.Text}</BigText>
                        <SmallText>{props.More}</SmallText>
                        </Div>

                    ))
                }
                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default Lead
const Div = styled.div`
display: flex;
flex-direction: column;
`
const SmallText = styled.div`
font-size: 18px;
font-weight: 200;
margin-bottom: 50px;
`
const BigText = styled.div`
font-size: 30px;
font-weight: 500;
margin-bottom: 10px;
`
const Right = styled.div`
width: 50%;
display: flex;
flex-direction: column;
`
const Text = styled.div`
font-size: 40px;
font-weight: 500;
font-style: italic;
`
const Left = styled.div`
width: 30%;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
`
const Container = styled.div`
padding: 50px 0;
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
`