import React,{FC} from 'react'
import styled from 'styled-components'
import ButtonProps from '../../components/reuse/ButtonProps' 


interface IButton {
  text?: string,
  sub?:string,
  name?:string,
  name1?:string,
  bg?:string
  bg1?:string

}

const Backhold:FC<IButton> = ({text,bg,name,sub,name1,bg1}) => {
  return (
    <div>
        <Container>
            <Main>
                <Text>{text}</Text>
                <SubText>{sub}</SubText>
                <Div>
                    <ButtonProps title={name} weight='' trans='' bg={bg}/>
                    <ButtonProps title={name1} weight='' trans='' bg={bg1} />
                </Div>

            </Main>
        </Container>
      
    </div>
  )
}

export default Backhold
const Div = styled.div`
display: flex;
`
const SubText = styled.div`
width: 80%;
font-size: 15px;
font-weight: 500;
text-align: center;
margin: 40px;
color: white;
`
const Text = styled.div`
font-size: 50px;
font-weight: 500;
color: white;
text-align: center;
`
const Main = styled.div`
width: 100%;
justify-content: center;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Container = styled.div`
position: absolute;
top: 200px;
display: flex;
align-items: center;
width: 1000px ;
justify-content: center;
flex-direction: column;
left: 15%;


`
