import React, { useState } from 'react'
import styled from 'styled-components'
import pics from '../../assets/andela-commmunity-video-profile-play.jpg'
import {AiOutlineClose} from "react-icons/ai"
import vid from "../../assets/Video.mp4"

const Wrap = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    const showToggle = ()=>{
        setToggle(!toggle)
    }
  return (
    <div>
        
        <Container>
            <Main>
                <Top>
                    <Title>Our vibrant community</Title>
                    <SubTitle>Rizwan Jafri shares his Andela story from Lahore Pakistan.</SubTitle>
                </Top>
                <Bottom>
                    <Image src={pics} onClick={()=>{
                        showToggle()
                    }}/>
                    {
                        toggle? 
                        <BackHolder>
                            <Video src={vid} 
                            controls
                            />
                            <Icon 
                            onClick={()=>{
                                showToggle()
                            }}
                            />

                        </BackHolder> :null
                    }
                </Bottom>
            </Main>
        </Container>
        </div>
  )
}

export default Wrap
const Icon = styled(AiOutlineClose)`
font-size: 30px;
color: white;
position: absolute;
top: 18%;
z-index: 2;
right: 80px;
padding: 10px;
background-color: black;
cursor: pointer;
transition: all 350ms;
:hover{
    transform: scale(1.09);
}

`
const Video = styled.video`
position: absolute;
z-index: 3;
width: 700px;
top: 18%;
left: 25%;
border-radius: 10px;
`
const BackHolder = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 50;
background-color: rgba(0,0,0,0.7);
object-fit: cover;



`
const Image = styled.img`
width: 750px;
object-fit: cover;

`
const Bottom = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
`
const SubTitle = styled.div`
font-size: 15px;
font-weight: 300;
font-style: italic;
`
const Title = styled.div`
font-size: 50px;
font-weight: 500;
margin-bottom: 10px;
`
const Top = styled.div`
width: 100%;
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
justify-content: center;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 700px;
background-color: #173B3F;
color: white;
display: flex;
align-items: center;
justify-content: center;
position: relative;

`