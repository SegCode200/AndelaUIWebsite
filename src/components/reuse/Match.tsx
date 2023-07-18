import React from 'react'
import styled from 'styled-components'
import pics from '../../assets/section-image-3.jpg'


interface IGroup{
    title?:string,
    sub?:string,
    image?:any,
}

const Match:React.FC<IGroup> = ({title,image,sub}) => {
  return (
    <div>
      <Container>
        <Main>
            <Left>
                <Text>{title}</Text>
                <Sub>{sub}</Sub>
            </Left>
            <Right>
                <Image src={image}/>
            </Right>
        </Main>
      </Container>
    </div>
  )
}

export default Match
const Image = styled.img`
height: 90%;
`
const Right = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Sub = styled.div`
font-size: 20px;
font-weight: 200;
`
const Text = styled.div`
font-size: 40px;
font-weight: 500;
margin: 20px  0 ;
`
const Left = styled.div`
width: 47%;
display: flex;
flex-direction: column;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
/* align-items: center; */
justify-content: space-between;
`
const Container = styled.div`
width: 100%;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
`
