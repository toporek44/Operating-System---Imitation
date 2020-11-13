import React, {useContext, useEffect, useRef} from 'react';
import styled from 'styled-components'
import logo from "../assets/logo.png"
import WindowContext from "../Contexts/WindowContext";
import {device} from "../device";

const Wrapper = styled.div`
width:100%;
height: 70px;
background:#032639;
position:absolute;
bottom: 0;
display: flex;
align-items:  center;
z-index: 1111;
`

const Menu = styled.button`
  background: transparent;
  border:none;
  color:#fff;
  font-size: 2.2rem;
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 50px;
  color: #75ABC8;
  img { 
  width:45px;
  height: 45px;
  

  }
  
  // &:hover {
  //cursor: pointer;
  //background:#05344e ;
  //transition: .3s background ease-in-out;
  //}
  //
   &:focus {
    outline: none;
  }
    @media ${device.laptop} {
    margin:0 1rem;

}
    span {
  display: none ;
  
  @media ${device.laptop} {
    display: block;

}
  }
`

const TaskbarItem = styled.button`
  background: #052C42;
  width:200px;
  height: 45px;
  border:none;
  color:#fff;
  margin:0 .6rem;
  font-size: ${({secondary}) => secondary? "1.3rem" : "1.6rem"};
  position:relative;
  text-align: left;
  padding-left: 1rem;
   transition: .3s all ease-in-out;
  box-shadow: 0 0 10px -3px #212121;
  
    @media ${device.tablet} {
      padding-left: 2rem;
      margin:0 2rem;
      font-size: 2.2rem;

}
  
  &::before {
    content: "";
    position:absolute;
    top:0;
    left:0;
    height: 100%;
    width:2px;
    background: #75ABC8;
  }
  
  &:hover {
  cursor: pointer;
  background:#053a58 ;
  transition: .3s all ease-in-out;
  }
  
  &:focus {
    outline: none;
  }
  

`

const Time = styled.div`
  display: none ;
  color:#fff;
  width:110px;
  text-align: center;
  position:absolute;
  right:20px;
  
      @media ${device.tablet} {
       display: block;
    }
  
`

const Taskbar = () => {
        const {isRouterOpen, setRouterOpen, isWalletOpen, setWalletOpen, isInfoOpen, setInfoOpen} = useContext(WindowContext)

            const time = useRef(null)

useEffect(()=> {
    function refreshTime() {
        const dateString = new Date().toLocaleString("en-US", {timeZone: "GMT"});
        let formattedString = dateString.replace(", ", " ");
        if(time!=null) {
            time.current.innerHTML = formattedString
            setTimeout(refreshTime, 1000)

        }

    }
refreshTime()
})




    return (
        <Wrapper>
            <Menu><img src={logo} alt="lcore logo"/></Menu>
            <TaskbarItem onClick={() => setRouterOpen(!isRouterOpen)}>Router</TaskbarItem>
            <TaskbarItem onClick={() => setWalletOpen(!isWalletOpen)}>Wallet</TaskbarItem>
            <TaskbarItem secondary onClick={() => setInfoOpen(!isInfoOpen)}>Read More</TaskbarItem>
            <Time ref={time}></Time>
        </Wrapper>
    );
};

export default Taskbar;