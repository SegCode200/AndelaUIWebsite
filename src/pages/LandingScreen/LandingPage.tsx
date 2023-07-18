import React from 'react'
import styled from 'styled-components'
import pics from "../../assets/header-jpeg-webp.webp"
import RealHeader from '../../components/static/RealHeader'
import Backhold from '../cover/Backhold'
import Hero from './Hero'
import Wrapper from './Wrapper'
import Wrapper1 from './Wrapper1'
import Wrapper2 from './Wrapper2'
import Wrapper3 from './Wrapper3'
import Wrapper4 from './Wrapper4'
import Holder from './Holder'

const LandingPage = () => {
  return (
    <div>
        <Container style={{backgroundImage: `url(${pics})`}}>
          <Transparent/>
        
                <Main1>
                <RealHeader/>
                <Backhold text='Discover brilliant talent around the world' sub='Join Andela to build your team with developers, engineers, product designers, and the best remote technology experts.' name='Hire Talent' name1='Apply for Jobs'bg="jj" bg1=''/>
                </Main1>
                


          
        </Container>
        <Hero />
        <Wrapper/>
        <Wrapper1/>
        <Wrapper2 title='Brilliant minds and companies come together to build the future'/>
        <Wrapper3/>
        <Wrapper4 title='Anytime, anywhere – with Andela, the future of work is here' small='Discover how leading companies have built impactful global teams with Andela' width='jj'/>
        <Holder title='Scale faster with Andela' sub='What skills will drive your vision?' note='Tech Talent you can Imagine' />
       
      
    </div>
  )
}

export default LandingPage
const Main1 = styled.div`
position: absolute;
z-index: 10;
top: 0;
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
color: white;
height: 100%;
`
const Transparent = styled.div`
position: absolute;
left: 0;
top: 0;
background-color: rgba(225, 225, 225,0.07);
z-index: 1;
width: 100%;
height: 100%;
`
const Main = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
background-attachment: fixed;
background-position: top;

`
const Container = styled.div`
width: 100%;
height: calc(100vh - 50px);
position: relative;
display: flex;
justify-content: center;
align-items: center;
top: 50px;
margin-bottom: 30px;
background-attachment: fixed;
background-size: cover;
position: relative;


`
