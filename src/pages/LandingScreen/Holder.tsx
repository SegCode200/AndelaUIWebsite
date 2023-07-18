import React from 'react'
import styled from 'styled-components'
import ButtonProps from '../../components/reuse/ButtonProps'
const Data= [
    "React",
    "Php",
    "Node.js",
    "Kotlin",
    "Flask",
    "Django",
    "JavaScript",
    "React Native",
    "Ruby",
    "C#",
    "DevOps",
    "Swift",
    "SalesForce",
    "Java",
    "GoLang",
    "Android",
    "Vue.js",
    "Data Scientific",

]
interface IHold{
    title?:string,
    sub?:string,
    note?:string,
}

const Holder:React.FC<IHold> = ({title,sub, note}) => {
  return (
    <div>
        <Container>
            <Main>
                <Top>
                    <Text>{title}</Text>
                    <Sub>{sub}</Sub>
                </Top>
                <Bottom>
                    <Hold>
                        {
                            Data.map((props)=>(
                                <Button>{props}</Button>
                            ))
                        }
                        
                    </Hold>
                </Bottom>
                <ButtonProps bg='' trans='k' title={note} />
            </Main>
        </Container>
        </div>
  )
}

export default Holder

const Button = styled.div`
width: 250px;
height: 30px;
font-size: 18px;
color: black;
background-color: white;
border-radius: 30px;
display: flex;
align-items: center;
padding: 10px;
transition: all 350ms;
cursor: pointer;
margin:  15px;
:hover{
    transform: scale(1.09);
    color: #56C870;
}
`
const Hold = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 20px;
`
const Bottom = styled.div`
`
const Sub = styled.div`
font-size: 40px;
font-weight: 200;
`
const Text = styled.div`
font-size: 15px;
font-weight: 500;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 90%;

`
const Container = styled.div`
width: 100%;
height: 650px;
background-color: #EDEFF1;
display: flex;
align-items: center;
justify-content: center;

`