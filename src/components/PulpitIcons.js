import React from 'react';
import styled from "styled-components";
import Draggable from "react-draggable";
import {ReactComponent as UniSwapIcon} from "../assets/uniswap.svg"
import {ReactComponent as UniCryptIcon} from "../assets/unicrypt.svg"
import {ReactComponent as TwitterIcon} from "../assets/twitter.svg"
import {ReactComponent as TelegramIcon} from "../assets/telegram.svg"
import {device} from "../device";

const PulpitIcon = styled.a`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100px;
padding: .5rem;
font-weight: 300;
font-size: 1.5rem;
color:#fff;
height: 80px;
position: absolute;
top:${( {top} ) => top? top : "initial"};
left:20px; 
border-radius: 5px;
text-decoration: none;
transition: .2s background ease-in-out;

 @media ${device.laptop} {
      display: none;
    }


&:hover {
 color: #fff;
 text-decoration: none;
 background: rgba(0,119,160,0.4);
 cursor: pointer;
 transition: .2s background ease-in-out;
}
`



const PulpitIcons = () => {
    return (
        <>
            <Draggable bounds="parent" >

                <PulpitIcon  top="70px" href="#" target="_blank" rel="noopener noreferrer" className="dragging">
                    <TelegramIcon/>
                    Telegram
                </PulpitIcon>
            </Draggable>
            <Draggable bounds="parent" >

                <PulpitIcon  top="175px" href="#" target="_blank" rel="noopener noreferrer" className="dragging">
                    <TwitterIcon/>
                    Twitter

                </PulpitIcon>
            </Draggable>
            <Draggable bounds="parent">
                <PulpitIcon  top="280px" href="#" target="_blank" rel="noopener noreferrer" className="dragging">
                    <UniSwapIcon/>
                    Uniswap
                </PulpitIcon>
            </Draggable>
            <Draggable bounds="parent" >
                <PulpitIcon top="375px" href="#"  target="_blank" rel="noopener noreferrer" className="dragging">
                    <UniCryptIcon/>
                    Unicrypt
                </PulpitIcon>
            </Draggable>

            <PulpitIcon  top="70px" href="#" target="_blank" rel="noopener noreferrer" >
                <TelegramIcon/>
                Telegram
            </PulpitIcon>
            <PulpitIcon  top="175px" href="#" target="_blank" rel="noopener noreferrer" >
                <TwitterIcon/>
                Twitter
            </PulpitIcon>

            <PulpitIcon  top="280px" href="#" target="_blank" rel="noopener noreferrer" >
                <UniSwapIcon/>
                Uniswap
            </PulpitIcon>

            <PulpitIcon top="375px" href="#"  target="_blank" rel="noopener noreferrer" >
                <UniCryptIcon/>
                Unicrypt
            </PulpitIcon>
        </>
    );
};

export default PulpitIcons;