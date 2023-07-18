import React from 'react'
import ButtonProps from '../../components/reuse/ButtonProps'
import styled from 'styled-components'
const Data = [
    {Number: "110+", Text: "Countries represented on 6 continents"},
    {Number: "96%", Text: "Successful placements"},
    {Number: "84%", Text: "Increased income for Andelans"},
    {Number: "175,000+", Text: "Technologists represented"},
    {Number: "18+", Text: "Months Average engagement"},
]

const Wrapper3 = () => {

  return (
    <div>
        <Container>
            <Main>
             <Top>
             <Text>Welcome to the future of meaningful, sustainable work</Text>
                <Sub>We believe that the sum is greater than our parts – our impact can be seen globally. We specialize in helping our highly-skilled, global technology talent community in emerging markets, connect with hundreds of leading companies</Sub>
             </Top>
             <Bottom>
                <Holder>
                  {
                    Data.map((props)=>(
                        <Card>
                        <Title>{props.Number}</Title>
                        <SmallTitle>{props.Text}</SmallTitle>
                        
                    </Card>

                    ))
                  }
                </Holder>
                <Div>
                <ButtonProps bg='' title='Apply for Remote Jobs' trans='dd'/>
                <ButtonProps bg='jj' title='Hire Talent' trans='jj' />
                </Div>
             </Bottom>
            </Main>
        </Container>
      
    </div>
  )
}

export default Wrapper3
const SmallTitle = styled.div`
width: 50%;
text-align: center;
font-style: italic;
font-size: 15spx;
`
const Title = styled.div`
font-size: 60px;
font-style: italic;
margin-bottom: 20px;
`
const Div = styled.div`
display: flex;
margin: 20px 0;
align-items: center;
justify-content: center;
width: 100%;
`
const Card = styled.div`
width: 350px;
height: 250px;
border-radius: 20px;
background-color: #B0D6CE;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 10px;

`
const Holder = styled.div`
display: flex;
flex-wrap: wrap;
margin: 15px 0;
align-items: center;
justify-content: center;
`
const Bottom = styled.div``
const Sub = styled.div`
width: 100%;
text-align: center;
`
const Text = styled.div`
font-size: 40px;
width: 70%;
text-align: center;
margin: 20px 0px;
font-weight: 500;
`
const Top = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Container = styled.div`
width: 100%;
height: 1000px;
display: flex;
align-items: center;
justify-content: center;
`
