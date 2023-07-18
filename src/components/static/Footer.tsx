import React from 'react'
import styled from 'styled-components'
import pics from "../../assets/AND-Logo-Lockup-White-RGB-300x79.png"
import pics1 from "../../assets/2022-LevelAccess_Icon_White.png--lxqevK.webp"
import {FaFacebook,FaYoutube} from "react-icons/fa"
import {BsTwitter,BsGithub,BsLinkedin,BsInstagram} from "react-icons/bs"

// const Images= [

// ]

const Footer = () => {
  return (
    <div>
        <Container>
            <Main>
                <Holder>
                    <Logo src={pics}/>
                    <Social>
                        <FaFacebook size={25}/>
                        <BsTwitter size={25}/>
                        <BsGithub size={25}/>
                        <BsInstagram size={25}/>
                        <FaYoutube size={25}/>
                        <BsLinkedin size={25}/>
                    </Social>
                    <Image src={pics1}/>
                    <Nav>© 2023 Andela. All rights reserved</Nav>
                </Holder>
                <Holder1>
            
                    <Title>Discover Talent</Title>
                    <Nav>For Compaines</Nav>
                    <Nav>Enterprise</Nav>
                    <Nav>Case studies</Nav>
                </Holder1>
                <Holder1>
                    <Title>Find Work</Title>
                    <Nav>For Technologists</Nav>
                    <Nav>Learning Community</Nav>
                    <Nav>Leadership Program</Nav>
                    <Nav>Resources</Nav>
                </Holder1>
                <Holder1>
                    <Title>Andela</Title>
                    <Nav>Events</Nav>
                    <Nav>Blog</Nav>
                    <Nav>Careers</Nav>
                </Holder1>
                <Holder1>
                    <Nav>Privacy Policy</Nav>
                    <Nav>Terms and Conditions</Nav>
                    <Nav>Modern Slavery Statement</Nav>
                    <Nav>Accessibility Statement</Nav>
                </Holder1>

            </Main>
        </Container>
      
    </div>
  )
}

export default Footer
const Nav = styled.div`
font-size: 13px;
font-weight: 300;
margin: 10px 0;
position: relative;
cursor: pointer;
:hover{
    ::after{
        content: "";
        height: 1px;
        width: 50%;
        border-radius: 10px;
        background-color: white;
        position: absolute;
        bottom: 0;
        left: 0;

    }
}
`
const Title = styled.div`
font-size: 18px;
font-weight: 500;
margin: 5px 0;

`
const Holder1 = styled.div`
width: 300px;
height: 300px;
`
const Image = styled.img`
width: 60px;
color: white;
margin-bottom: 50px;
`
const Social = styled.div`
display: flex;
margin-bottom: 20px;
justify-content: space-between;
width:80%
`
const Logo = styled.img`
width: 160px;
color: white;
margin-bottom: 50px;
`
const Holder = styled.div`
width: 30%;
display: flex;
flex-direction: column;
margin-top: 200px;
/* justify-content: center; */
/* align-items: center; */
height: 100%;
`
const Main = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
height: 100%;
`
const Container = styled.div`
width: 100%;
height: 500px;
background-color: #173B3F;
color: white;
display: flex;
justify-content: center;
align-items: center;
`
