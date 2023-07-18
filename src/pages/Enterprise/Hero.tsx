import React from 'react'
import pics from "../../assets/github-logo.svg"
import pics1 from "../../assets/invision-logo.svg"
import pics2 from "../../assets/coursera-logo.svg"
import pics3 from "../../assets/Kraft-Heinz-Logo.svg"
import pics4 from "../../assets/seismic-logo.svg"
import pics5 from "../../assets/goldman-sachs-logo.svg"
import pics6 from "../../assets/logo-mindshare-1.png"
import pics7 from "../../assets/logo-pluralsight-1.png"
import pics8 from "../../assets/logo-viacomcbs.png"
import pics9 from "../../assets/logo-cloudflare-1.png"
import styled from 'styled-components'




const Images= [
    pics,
    pics1,
    pics2,
    pics3,
    pics4,
    pics5,
    pics6,
    pics7,
    pics8,
    pics9,

]

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
            <Text>We’re trusted by the best</Text>
            <Holder>
            {
                Images.map((props)=>(
                    <Image src={props}/>
                ))
            }
            </Holder>

        </Main>
      </Container>
    </div>
  )
}

export default Hero
const Holder = styled.div`
    display: flex;
align-items: center;
width: 100%;
height: 100%;
overflow: hidden;
`
const Image = styled.img`
margin: 0 30px;
width: 100px;
color: white;
`
const Text = styled.div`
margin-top: 30px;
font-size: 50px;
text-align: center;
`
const Main = styled.div`
width: 90%;
height: 100%;
align-items:center;
flex-direction: column;
display: flex;
justify-content: center;
`
const Container = styled.div`
background-color: #B0D6CE;
height: 300px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
