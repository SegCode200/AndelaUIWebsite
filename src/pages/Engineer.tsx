import React from 'react'
import RealHeader from '../components/static/RealHeader'
import styled from 'styled-components'
import Backhold from './cover/Backhold'
import pics from "../assets/green-wash.jpg"
import Hero from './EngineerPages/Hero'
import Wrapper2 from './LandingScreen/Wrapper2'
import Wrap from './EngineerPages/Wrap'
import CardProps from '../components/reuse/CardProps'
import pics1 from "../assets/shutterstock_1660490494-1024x683.jpg"
import pics2 from "../assets/shutterstock_1696088776-1024x683.jpg"
import pics4 from '../assets/shutterstock_1241581108-1-1024x683.jpg'
import pics3 from "../assets/shutterstock_1653288229-1024x683.jpg"

import Text from '../components/reuse/Text'
import Card1 from '../components/reuse/Card1'
import Back from '../components/reuse/Back'
import Holder from './LandingScreen/Holder'
import Space from './EngineerPages/Space'
import Lead from './EngineerPages/Lead'
import Wrapper4 from './LandingScreen/Wrapper4'
import EndindDown from './EngineerPages/EndindDown'

const Engineer = () => {
  return (
    <div>

<Container style={{backgroundImage: `url(${pics})`}}>
            <Transparent/>
                <Main1>
                <RealHeader/>
                <Hero/>
                
                </Main1>
                


          
        </Container>
        <Wrapper2 title='We’re in the business of changing lives'/>
        <Wrap/>
        <Text title='Find what you’re looking for and more' display='j' />
        <CardProps image={pics1} title='Grow your career with us' text='Find meaningful, long-term work with interesting organizations' Text1='Work with an internationally distributed team and company' Text2='Gain additional skills through exclusive learning opportunities' Text3='Network with other technologists to develop your expertise'/>
        <Card1 image={pics2} title='Set your own rate' text='Only work with companies we trust' Text1='Receive payments on time in your local currency, USD, or in Crypto' Text2='Discover salaries that match your skills and experience' Text3='Network with other technologists to develop your expertise'/>
        <CardProps image={pics3} title='Work anytime, anywhere' text='Ditch the commute and work from anywhere' Text1='With roles across different time zones, you choose when you work' Text2='Create a healthy, flexible work-life balance' Text3='Network with other technologists to develop your expertise'/>
        <Back image={pics4} text='Spark a thousand connections' sub='Becoming part of a community has never been easier.' text1='Demonstrate your skills' text2='Join our expert community by completing a short assessment to showcase your skills.' text3='Personalized matching' text4='You’ve done the work to build your experience and knowledge. Now we’ll find your dream role through enhancing your profile, career coaching, and introducing you to the world’s most innovative companies.' text5='Unlock your potential' text6='Once you land your perfect role, Andela is here to support you to hone your craft and achieve your goals.'/>
      
        <Holder title='The future is yours to create.' sub='Your skills are in demand ' note='Apply to Andela Talent Network'/>
        <Space/>
        <Lead/>
        <Wrapper4 title='Insights to inspire' small='The latest articles from Andela.' width=''/>
        <EndindDown/>
    </div>
  )
}

export default Engineer
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
background-color: rgba(58, 53, 53, 0.5);
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
object-fit: cover;
margin-bottom: 30px;
position: relative;
background-attachment: fixed;
background-size: cover;
`