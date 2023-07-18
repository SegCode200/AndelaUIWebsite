import React, { useState } from 'react'
import styled from 'styled-components'
import pics from '../../assets/AND-Logo-Lockup-Green-Black-RGB--b1sdRi.svg'
import pics1 from '../../assets/AND-Logo-Lockup-White-RGB-300x79.png'
import ButtonProps from '../reuse/ButtonProps'
import {IoIosArrowDown} from "react-icons/io"
import {Link} from "react-router-dom"


const RealHeader = () => {
    const [Hover, setHover] = useState<boolean>(false)
    const ShowHover = ()=>{
        setHover(!Hover)
    }
    const [Scroll, setScroll] = useState<boolean>(false)
    const ShowScroll =()=>{
        if (window.scrollY >=70) {
            setScroll(true)
            
        } else {
            setScroll(false)
            
        }
    }
    window.addEventListener("scroll", ShowScroll)
  return (
    <div>
      {
        Scroll ?   <Container bg=''>
        <Main>
            <Logo src={pics}/>
            <NavHolder>
                <Nav bg='' to="/forengineer" >For Technolgy Experts</Nav>
                <Nav bg=''  to="#">Business</Nav>
                <Nav bg='' to="/enterprise"  >Enterprise</Nav>
            </NavHolder>
            <Register>
                <Nav bg='' to="#" >Apply for Jobs</Nav>
                <ButtonProps weight='ee' title='Hire Talent' trans='' bg='jj'/>
                <Nav bg='' to="#"
                onMouseEnter={()=>{
                    ShowHover()
                }}
                onMouseLeave={()=>{
                    ShowHover()
                }}
                >Login <Icon bg=''/>
                {
                    Hover ? <Div bg=''>
                        <Text bg=''>Client Login</Text>
                        <Text bg=''>Talent Login</Text>
                    </Div> : null
                }
                </Nav>
            </Register>
        </Main>
    </Container> 
    
    :  
    ( <Container bg='hh'>
            <Main>
                <Logo src={pics1}/>
                <NavHolder>
                    <Nav bg='hh' to="/forengineer" >For Technolgy Experts</Nav>
                    <Nav bg='hh'  to="#">Business</Nav>
                    <Nav bg='hh' to="/enterprise" >Enterprise</Nav>
                </NavHolder>
                <Register>
                    <Nav bg='hh'  to="#">Apply for Jobs</Nav>
                    <ButtonProps weight='ee' title='Hire Talent' trans='' bg='jj'/>
                    <Nav bg='hh' to="#"
                    onMouseEnter={()=>{
                        ShowHover()
                    }}
                    onMouseLeave={()=>{
                        ShowHover()
                    }}
                    >Login <Icon bg='hh' />
                    {
                        Hover ? <Div bg='hh' >
                            <Text bg='hh' >Client Login</Text>
                            <Text bg='hh' >Talent Login</Text>
                        </Div> : null
                    }
                    </Nav>
                </Register>
            </Main>
        </Container>)
      }
      
    </div>
  )
}

export default RealHeader
const Text = styled.div<{bg: string}>`
font-weight: 300;
padding: 15px 6px;
:hover{
    background-color: ${({bg})=>bg ? "#DFEEF0" : "#28656B"} 
}

`
const Div = styled.div<{bg: string}>`
position: absolute;
top: 23px;
width: 140px;
height: 105px;
background-color: ${({bg})=>bg ? "white" : "#173B3F"}  ;
color: ${({bg})=>bg ? "black" : "white"};
left: -20px;
`
const Icon = styled(IoIosArrowDown) <{bg: string}>`
margin-left: 5px;
color: ${({bg})=>bg ? "white" : "black"};

`
const Register = styled.div`
display: flex;
align-items: center;
`
const Nav = styled(Link)<{bg?: string}>`
margin: 0 20px;
font-weight: 500;
font-size: 18px;
display: flex;
text-decoration: none;
align-items:center;
position: relative;
cursor: pointer;
color: ${({bg})=>bg ? "white" : "black"};


`
const NavHolder = styled.div`
display: flex;

`
const Logo = styled.img`
width: 200px;
cursor: pointer;
`
const Main = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
height: 100%;
`
const Container = styled.div<{bg: string}>`
width: 1350px;
height: 100px;
background-color: ${({bg})=>bg ? "transparent" : "white"};
z-index: 10;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
left: 0px;

`
