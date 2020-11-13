import React, {forwardRef, useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import {ReactComponent as CloseBtn} from '../assets/closeBtn.svg'
import Draggable from "react-draggable";
import {device} from "../device";

const DragWrapper = styled.div`
height: 385px;
width: 320px;
display: flex;
justify-content: center;
align-items: center;
margin:4rem 0;
box-shadow: 0 0 10px -4px #212121;
position: relative;

    @media ${device.tablet} {
        margin:0;
    }
    @media ${device.laptop} {
        display: none;
        position:absolute;
        width:${( {secondary} ) => secondary? "700px" : "450px"};
        height: ${( {secondary} ) => secondary? "450px" : "550px"};
        top:${( {top} ) => top? top : "initial"};
        left:${( {left} ) => left? left : "initial"}; 
        z-index:${( {isDragActive, index} ) => isDragActive? index+1 : index-1};
        

    }
`



const Wrapper = styled.div`
width:450px;
height: 550px;
background: #ABD0E1 ;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position:relative;
z-index: 10;
transform:  scale(.8);


@media ${device.laptop} {

transform: initial;
width:${( {secondary} ) => secondary? "700px" : "450px"};
height: ${( {secondary} ) => secondary? "450px" : "550px"};
}
`



const ControlBar = styled.div`
width:100%;
background: #032639;
position:absolute;
padding: .5rem;
top:0;
left:0;
padding-left: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
color:#fff;
user-select: none;

cursor: ${ ( {isDragActive} ) => isDragActive? "grab" : "initial" };
z-index: ${ ( {isDragActive} ) => isDragActive? "200" : "-20" } ;




svg {
position:relative;
z-index: 999;
}
`

const StyledCloseBtn = styled(CloseBtn)`

&:hover {
  cursor: pointer;

  rect{
    fill:#ffbd9e;

  }
}
`



const WindowElement = forwardRef( ({children, title, handleClosing, secondary, top, left}, ref,...props)  => {
    const [isDragActive, setDragActive] = useState(false)
    const [index, setIndex] = useState(1)

    return (

        <>
            <Draggable  bounds="parent" onMouseDown={() => setDragActive(!isDragActive)} allowAnyClick={false}  handle=".handle-1" >
                <DragWrapper secondary={secondary} top={top} left={left} isDragActive={isDragActive} index={index} className="dragging">

                                <Wrapper {...props}  secondary={secondary}  >
                                    <ControlBar  isDragActive={isDragActive} className="handle-1">
                                        {title}
                                        <StyledCloseBtn onClick={handleClosing} />
                                    </ControlBar>
                                    {children}
                                </Wrapper>

                </DragWrapper>
            </Draggable>


                <DragWrapper secondary={secondary} top={top} left={left} isDragActive={isDragActive} index={index}>

                    <Wrapper {...props}  secondary={secondary}  >
                            <ControlBar  isDragActive={isDragActive}>
                                {title}
                                <StyledCloseBtn onClick={handleClosing} />
                            </ControlBar>
                        {children}
                    </Wrapper>

                </DragWrapper>
        </>
    );
});

export default WindowElement;