import React from 'react'
import styled from 'styled-components'
import pics from "../assets/backgot.jpg"
import RealHeader from '../components/static/RealHeader'
import Backhold from './cover/Backhold'
import Hero from './Enterprise/Hero'
import Wrapper from './Enterprise/Wrapper'
import Text from '../components/reuse/Text'
import Match from '../components/reuse/Match'
import pics1 from "../assets/section-image-3.jpg"
import pics2 from "../assets/shutterstock_1241581108.jpg"
import pics3 from "../assets/shutterstock_1910023657-1-1024x683.jpg"
import Match1 from '../components/reuse/Match1'
import Back from '../components/reuse/Back'
import pics4 from "../assets/section-bg-image.jpeg"
import Wrap1 from './Enterprise/Wrap1'
import Wrap2 from './Enterprise/Wrap2'
import Wrapper2 from './LandingScreen/Wrapper2'
import Wrap3 from './Enterprise/Wrap3'
import Wrap4 from './Enterprise/Wrap4'

const Enterprise = () => {
  return (
    <div>
      <Container style={{backgroundImage: `url(${pics})`, width:"100%"}}>
        <Main>
          <Main1>
          <RealHeader/>
          <Backhold text='We’re here to help you build a world class team, today.' sub='Trusted by enterprise teams and growing startups alike, Andela’s onboarding times are 70% faster than the industry average.' name='Schedule a Call' name1='Watch an overview' bg='' bg1='jj'/>
          </Main1>

        </Main>
      </Container>
      <Hero/>
      <Wrapper/>
      <Text display='' title='Let’s help you add value to your business' text='Discover our global neighborhood of technologists'/>
      <Match title='Speed to match' sub='Move faster without sacrificing quality. Our team can radically reduce the time it takes to hire talent so you can find the right fit, quickly.' image={pics1}/>
      <Match1 title='Enterprise-ready' sub='Technologists with verified backgrounds, aligned to your time zones, and compliant with your company’s security practices so you can focus on making an impact' image={pics3}/>
      <Match title='Flexible teams' sub='Find niche expertise for various project lengths. Onboard solo engineers to fill gaps or hire full teams to accelerate your build. Any team, any timezone, any skills.' image={pics2}/>
      <Back image={pics4} text='Build a brilliant team quickly' sub='Save time and energy with instant access to thousands of technologists around the world in three easy steps' name='Get the Enterprise advantage >' text1='Smart skill matching' text2='Our intuitive machine learning and AI platform finds you the best match for any role.' text3='Meet the best talent' text4='Easily schedule interviews and connect with top technologists curated to fit your team’s needs.' text5='Continued excellence' text6='Integrate your new team members quickly and effectively. Let us manage payroll and compliance.'/>
      <Text title='Experts from around the world' display='' text='With flexibility in mind, we’ve built our matching process to easily scale up or down based on your team’s changing needs.'/>
      <Wrap1/>
      <Wrap2/>
      <Wrapper2 title='Brilliant minds and companies come together to build the future'/>
      <Wrap3/>
      <Wrap4/>


    </div>
  )
}

export default Enterprise
const Main1 = styled.div`
width: 100%;
margin-top: 50px;


`
const Main = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0,0.5);
display: flex;
justify-content: center;
/* align-items: center; */
`
const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
`