import React from 'react'
import styled from 'styled-components'

const Data =[
    {name: "Source", sub: "We’ll work with you to fully understand your technical gaps, culture, industry regulations, and strategic route. Instantly view a curated selection of technologist profiles that meet your needs."},
    {name: "Access", sub: "Our proprietary assessments are designed to find you the best talent by role, no matter where they are in the world. Based on your team’s goals, meet vetted technologists you can trust."},
    {name: "Match", sub: "Connect within hours, with vetted technologists who can easily align with your existing teams, tools, and workflows. Our matching times are consistently twice as fast compared to industry standards."},
    {name: "Delivery", sub: "With a focus on sustainable growth, we’re with you every step of the way. From rapid onboarding and seamless integration to global payroll solutions and compliance support."},
]
const Wrapper = () => {
  return (
    <div>
        <Container>
            <Main>
                <Top>
                    <BigText>We create winning teams</BigText>
                    <SmallText>We help you source, evaluate, and hire specialized talent compliant with local laws in 100 countries.</SmallText>
                </Top>
                <Bottom>
                    <Holder>
                       {
                        Data.map((props)=>(
                            <Card>
                            <Title>{props.name}</Title>
                            <Sub>{props.sub}</Sub>
                        </Card>
                        ))
                       }
                    </Holder>
                </Bottom>
            </Main>
        </Container>
      
    </div>
  )
}

export default Wrapper
const Sub = styled.div`
font-size: 15px;
font-weight: 400;
font-style: italic;
`
const Title = styled.div`
font-size: 20px;
font-weight: 500;
margin: 20px 0;
`
const Card = styled.div`
width: 220px;
height: 250px;
border-radius: 10px;
padding: 10px 30px;
background-color: white;
margin: 0 10px;
`
const Holder = styled.div`
margin-top: 20px;
display: flex;
width: 100%;
flex-wrap: wrap;

`
const Bottom = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const SmallText = styled.div`
font-size: 20px;
font-weight: 300;
`
const BigText = styled.div`
font-size: 40px;
font-weight: 500;
margin: 30px 0;
`
const Top = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
/* justify-content: center; */
flex-direction: column;
`
const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f0ecec;
`
