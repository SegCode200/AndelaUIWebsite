import React from 'react'
import styled from 'styled-components'
interface iButton {
    weight?:string,
    title?:string,
    trans?:string,
    bg?:string,
}

const ButtonProps:React.FC<iButton> = ({weight,title,trans,bg}) => {
  return (
    <div>
      <Container weight={weight} trans={trans}  bg={bg}>
            {title}

      </Container>
    </div>
  )
}

export default ButtonProps
const Container = styled.div<{weight?:string, trans?:string, bg?:string}>`
padding: ${({weight}) =>weight ? "10px 20px" : "30px 30px"};
border-radius: 40px;
color: black;
background-color: ${({bg}) =>bg ? "#56C870" : "white"};
font-weight: ${({weight})=> weight ? "500" : "400"};
transition: all 380ms;
font-size: 20px;
cursor: pointer;
border :  ${({bg}) =>bg ? "" : "1px solid black"}; ;
margin-right: 10px;
:hover{
    transform: ${({trans})=> trans ? "scale(1.09)" : "scaleX(1.09)"};
}
`
