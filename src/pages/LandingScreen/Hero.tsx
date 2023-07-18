import React from 'react'
import ButtonProps from '../../components/reuse/ButtonProps'
import styled from 'styled-components'
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
             <Top w=''>
                <Top w='kk'>
             <Text>Andela Launches New Platform<br/>
to Power the Future of Customized Work</Text>
                <ButtonProps weight='' bg='kk' title='Find out more' trans='kk'/>
             </Top>
             </Top>
             <Bottom  w=''>
             <Bottom  >
                <Text1>Trusted by</Text1>
                <Holder>
                   {
                    Images.map((props, i )=>(
                        <Image key={i} src={props}/>
                    ))
                   }
                </Holder>
             </Bottom>
             </Bottom>
            </Main>
        </Container>
      
    </div>
  )
}

export default Hero
const Image = styled.img`
margin: 0 30px;
width: 100px;

`
const Holder = styled.div`
display: flex;
align-items: center;
width: 100%;
overflow: hidden;
`
const Text1 = styled.div`
margin-top: 30px;
font-size: 40px;
margin-bottom: 70px;
`
const Text = styled.div`
font-size: 40px;
font-weight: 500;
font-style: italic;
color: white;
width: 70%;


`
const Bottom = styled.div<{w?:string}> `
width: 100%;
height: 250px;
background-color: #E0F1EB;
width: ${({w})=> w ? "90%" : "100%"};
display: flex;
flex-direction: column;
align-items: center;

`
const Top = styled.div<{w:string}>`
display: flex;
align-items: center;
justify-content: ${({w})=> w ? "space-between" : "center"};
width: ${({w})=> w ? "90%" : "100%"};
height: 150px;
background-color: #28656B;
`
const Main = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
flex-direction: column;
`
const Container = styled.div`
width:100% ;
height: 400px;
display: flex;
align-items:center;
justify-content: center;
`
