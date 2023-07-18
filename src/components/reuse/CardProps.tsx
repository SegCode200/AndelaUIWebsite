import React from 'react'
import styled from 'styled-components'

import icon from "../../assets/tick-green--oOd4y4.svg"

interface ICard {
    title?:string,
    text?:string,
    Text1?:string,
    Text2?:string,
    Text3?:string,
    image?:any,
    opac?:string

}

const CardProps:React.FC<ICard> = ({title,Text1,Text2,Text3,text,image}) => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                    <Image src={image}/>
                </Left>
                <Right>
                    <Text>{title}</Text>
                    <Nav ><Icon src={icon}/>{text}</Nav>
                    <Nav ><Icon src={icon}/>{Text1}</Nav>
                    <Nav ><Icon src={icon}/>{Text2}</Nav>
                    <Nav ><Icon src={icon}/>{Text3}</Nav>
                </Right>
            </Main>
        </Container>
        
        </div>
  )
}

export default CardProps
const Icon =styled.img`
margin-right: 10px;
`
const Nav =styled.div`
display: flex;
align-items: center;
font-size: 20px;
font-weight: 200;
margin: 10px 0;
`
const Text =styled.div`
font-size: 40px;
font-weight: 500;
margin: 10px 0px;
;
`
const Right =styled.div`
width: 50%;
margin-left: 30px;
height: 100%;
margin-top: 30px;

/* z-index: 10; */

`
const Image =styled.img`
width: 100%;

`
const Left =styled.div`
width: 50%;
height: 100%;
`
const Main =styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Container =styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
`