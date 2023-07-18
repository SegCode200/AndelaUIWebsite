import React from 'react'
import ButtonProps from '../../components/reuse/ButtonProps'
import styled from 'styled-components'
import pics from "../../assets/circle-accent-purple.svg"
import pics1 from "../../assets/circle-accent-red.svg"
import pics2 from "../../assets/circle-accent-yellow.svg"
const Data = [
    {Image: pics, color: "#4A1476" },
    {Image: pics1, color: "#C95227"},
    {Image: pics2, color: "#701340"},
]

interface IData {
    title?:string,
    small?:string,
    width?:string,
}

const Wrapper4:React.FC<IData> = ({small,title,width}) => {
  return (
    <div>
        <Container>
            <Main>
                <Top>
                    <Text w={width}>{title}</Text>
                    <SmallText>{small}</SmallText>
                </Top>
                <Bottom>
                    <Holder>
                       {
                        Data.map((props)=>(
                            <Card color={props.color}>
                            <Left>
                                <Title>Case Title</Title>
                                <Sub>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consectetur blanditiis quibusdam eaque.</Sub>
                                <Button>Learn More</Button>
                            </Left>
                            <Right>
                                <Image src={props.Image}/>
                            </Right>
                        </Card>
                        ))
                       }
                    </Holder>
                    <div style={{display: "flex", alignItems:"center", marginTop: "30px" }}>
                    <ButtonProps title='All Case Studies' bg='' trans='' />
                    </div>
                </Bottom>
            </Main>
        </Container>
      
    </div>
  )
}

export default Wrapper4
const Image= styled.img`
object-fit: cover;
width: 96%;
`
const Right= styled.div`
height: 100%;
align-items: center;
display: flex;
`
const Button= styled.button`
background-color: transparent;
border: 1px solid white;
color: white;
width: 150px;
height: 35px;
border-radius: 30px;
font-size: 17px;
`
const Sub= styled.div`
font-size: 20px;
margin: 10px 0;
font-weight: 500;
`
const Title= styled.div`
font-size: 15px;
font-weight: 400;
font-style: italic;

`
const Left= styled.div`
color: white;
width: 50%;
display: flex;
justify-content: center;
/* align-items: center; */
height: 100%;
margin-left: 10px;
flex-direction: column;
`
const Card= styled.div<{color:string}>`
width: 690px;
border-radius: 20px;
height: 350px;
background-color: ${({color})=> color};
display: flex;
margin: 0 20px;
`
const Holder= styled.div`
overflow: hidden;
display: flex;

`
const Bottom= styled.div`
margin: 20px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const SmallText= styled.div`
width: 100%;
text-align: center;
font-size: 20px;
font-weight: 200;
`
const Text= styled.div<{w?:string}>`
font-size: 50px;
width: ${({w}) => w ? "80%" : "100%"};
text-align: center;
margin: 20px 0px;
font-weight: 500;
font-style: italic;
`
const Top= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 40px;
`
const Main= styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
`
const Container= styled.div`
width: 100%;
height: 800px;
display: flex;
align-items: center;
justify-content: center;
`
