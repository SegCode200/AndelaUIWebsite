import React from 'react'
import ButtonProps from './ButtonProps'
import styled from 'styled-components'


interface iData {
    text?: string,
    sub?: string,
    name?: string,
    text1?:string,
    text2?:string,
    text3?:string,
    text4?:string,
    text5?:string,
    text6?:string,
    image?:any
}

const Back:React.FC<iData> = ({text,image,name,text1,sub,text2,text3,text4,text5,text6}) => {
  return (
    <div>
        <Container>
            <Image src={image}/>
            <Transparent/>
            <Main>
                <Left>
                    <BigText>{text}</BigText>
                    <SmallText>{sub}.</SmallText>
                    <div style={{display:"flex"}}>
                        <ButtonProps title='Get Started' bg='jj' trans='kk' />
                    </div>
                    <SmallText>{name}</SmallText>
                </Left>
                <Right>
                    <Div>
                    <Circle>1</Circle>
                    <Line/>
                    <Circle>2</Circle>
                    <Line/>
                    <Circle>3</Circle>
                    </Div>
                    <Div1>
                    
                    <Div1>
                        <Title>{text1}</Title>
                        <Subtitle>{text2}</Subtitle>
                    </Div1>
                    <Div1>
                        <Title>{text3}</Title>
                        <Subtitle>{text4}</Subtitle>
                    </Div1>
                    <Div1>
                        <Title>{text5}</Title>
                        <Subtitle>{text6}</Subtitle>
                    </Div1>
                    </Div1>
                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default Back
const Subtitle =  styled.div`
font-size: 18px;
font-weight: 300;
`
const Title =  styled.div`
font-size: 20px;
font-weight: 600;
margin: 15px 0;
`
const Div1 =  styled.div`
display: flex;
flex-direction: column;
margin-bottom: 50px ;
`
const Line =  styled.div`
width: 2px;
height: 100px;
background-color: white;
`
const Circle =  styled.div`
padding:20px  30px;
border-radius: 50%;
border: 2px solid white;
`
const Div =  styled.div`
display: flex;
flex-direction: column;
margin-right: 10px;
align-items: center;
font-size: 30px;

`
const Right =  styled.div`
width: 50%;
display: flex;
`
const SmallText =  styled.div`
font-size: 20px;
margin: 20px 0;
font-weight: 300 ;
`
const BigText =  styled.div`
font-size: 60px;
font-weight: 500;

`
const Left =  styled.div`
width: 30%;
height: 100%;
display: flex;
/* align-items: center; */
justify-content: center;
flex-direction: column;
`
const Main =  styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 2;
color: white;
`
const Transparent =  styled.div`
width: 100%;
position: absolute;
height: 100%;
top: 0;
left: 0;
object-fit: cover;
z-index: 1;
background-color: rgba(63, 93, 97,0.82);
`
const Image =  styled.img`
width: 100%;
position: absolute;
height: 100%;
top: 0;
left: 0;
object-fit: cover;
`
const Container =  styled.div`

background-attachment: fixed;
width: 100%;
height: 700px;
display: flex;
justify-content: center;
align-items: center;
object-fit: cover;
position: relative;

`