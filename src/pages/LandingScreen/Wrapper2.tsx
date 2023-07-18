import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import pics from "../../assets/Adetola-Ahmed-talent-profile-150x150.jpg"
import pics1 from "../../assets/Adeyinka-Alabi-2-Talent-homepage-150x150.jpg"
import pics2 from "../../assets/Rafael-Henrique-talent-profile-150x150.jpg"
import pics3 from "../../assets/branch-logo-kale-1.png"
import pics4 from "../../assets/attune-1024x343.png"
import pics5 from "../../assets/gopuff.png"
import pics6 from "../../assets/Logitech-Logo-2015-present-copy-1024x576.png"
import pics7 from "../../assets/Nebula-color-stacked-kale.png"
import pics8 from "../../assets/ibm.png.webp"


interface iGobal {
    title?:string
}



const Data = [
    {Image: pics, Name: "Adetola", Country: "Nigeria", color: "#B0D6CE", Opacity: "jj", Border: "ff"},
    {Image: pics1, Name: "Adeyinka", Country: "Nigeria", color: "#FCE1E1", Opacity: "jj",Border: "jj" },
    {Image: pics2, Name: "Ahmed", Country: "Brazil", color: "#EBE0FF", Opacity: "jj", Border: "ff"},
    {Image: pics3, Name: "", Country: "", color: "#B0D6CE", Opacity: "", Border: ""},
    {Image: pics4, Name: "", Country: "", color: "#EBE0FF", Opacity: "", Border: ""},
    {Image: pics5, Name: "", Country: "", color: "#FCE1E1", Opacity: "", Border: ""},
    {Image: pics6, Name: "", Country: "", color: "#B0D6CE", Opacity: "", Border: ""},
    {Image: pics7, Name: "", Country: "", color: "#FCE1E1", Opacity: "", Border: ""},
    {Image: pics8, Name: "", Country: "", color: "#B0D6CE", Opacity: "", Border: ""},
]

const Wrapper2:React.FC<iGobal> = ({title}) => {
    const Settings ={
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        vertical: false,
        rows:1
      
    }
  return (
    <div>
        <Container>
            <Main>
                <Text>{title}</Text>
                <Bottom >

             
                <Holder >
                   {
                    Data.map((props)=>(
                        <Card bg={props.color}>
                        <Div>
                        <Image src={props.Image} br={props.Border}/>
                        <Dave opac={props.Opacity}>
                        <Title>{props.Name} </Title>
                        <Sub>{props.Country}</Sub>
                        </Dave>
                        </Div>
                        <About>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore minus accusantium dolor commodi obcaecati fugit voluptates quis possimus nesciunt omnis voluptatem enim odio rerum velit, odit.</About>

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

export default Wrapper2
const Dave = styled.div<{opac:string}>`
opacity: ${({opac})=> opac ? "1" : "0" };
`
const About = styled.div`
font-size: 15px;
font-weight: 400;
font-style: italic;
`
const Sub = styled.div`
font-size: 11px;
font-weight: 200;
`
const Title = styled.div`
font-size: 15px;
font-weight: 500;

`
const Image = styled.img<{br:string}>`
width: ${({br})=> br ? "50px" : "120px"} ;
border-radius: ${({br})=> br ? "50%" : ""};
margin-right: 15px;
`
const Div = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const Card = styled.div<{bg:string}>`
width: 200px;
height: 200px;
padding: 35px;
border-radius: 10px;
background-color: ${({bg})=>bg };
margin: 10px;


`
const Bottom = styled.div`
/* margin-: 20px ; */

`
const Holder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;


  /* align-items: center; */
  /* justify-content: space-between; */
  overflow: hidden;
  cursor: grab;
  /* margin-top: 50px; */
`
const Text = styled.div`
font-size: 40px;
width: 50%;
text-align: center;
font-weight: 500;
margin-bottom: 60px;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
`
const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
margin-top: 100px;
`
