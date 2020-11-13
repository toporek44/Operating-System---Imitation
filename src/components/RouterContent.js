import React, {useContext, useState} from 'react';
import Tab from "react-bootstrap/Tab";
import Accordion, {StyledTabContent} from "./Accordion";
import ethIcon from "../assets/ethereumIcon.png";
import transferIcon from "../assets/transferICon.png";
import warningIcon from "../assets/warningIcon.png";
import styled from "styled-components";
import WindowContext from "../Contexts/WindowContext";


const InsertValueContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

img {
margin-right: 1rem;
}

label {
position:absolute;
top:12px;
left:210px;
}
`

const StyledInput = styled.input`
border:2px solid #032639;
width:220px;
height: 40px;
margin-left: 3rem;
padding-left: 1rem;
position:relative;


`

const SwapPreview = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.8rem;


img {
margin:4rem 3rem;
}

`
const SwapItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

span {
text-align: center;
}
`

const OptionsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1.4rem;
margin: 1rem 0 3rem 0;
`
const CheckBox = styled.input.attrs({type: 'checkbox'})`
width:15px;
height: 15px;
margin-right: 1rem;

`

const SubmitInput = styled.input.attrs({type: 'submit'})`
  width:55px;
  position: absolute;
  right: 35px;
  background:transparent;
  border:none;
  text-align: center;
  height: 60px;
  &:focus {
  outline: none;
  }
`

const CheckboxContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const FeeInfo = styled.p`
margin:0;
font-size: 1.1rem;
`

export const SwapBtn = styled.button`
background:  ${({disabled}) => disabled ? "#515151" : "#1D83D4"};
border:none;
box-shadow: 2px 2px 10px -8px #212121;
color:#fff;
width:250px;
font-size: 2.1rem;
font-family: "Montserrat", sans-serif;
height: 40px;
position:relative;
left:50%;
transform: translateX(-50%);
transition: .2s all ease-in-out;

&:hover {
background:  ${({disabled}) => disabled ? "#515151" : "#1995f4"}
transition: .2s all ease-in-out;
}

&:focus {
outline: none;
}
`

const WarningContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 2rem;
font-size: .9rem;
text-align: center;

img {
margin-bottom: .7rem;
}
`

const SmallHeading = styled.h2`
font-size: 2.5rem;
margin-bottom: 3rem;
`

const TinyHeading = styled.h2`
font-size: 2rem;
margin:0;
text-align: center;
background: #032639;
padding:1rem 0;
color:#fff;
`


export const Info = styled.div`
text-align: center;
font-size: 1.5rem;
font-weight: 300;
margin-top: 3rem;

p {
    margin: 1rem 0;
    font-size:1.3rem;
}
`


const RouterContent = () => {
    const [ethValue, setEthValue] = useState(0.000)
    const {isMetamaskInstalled} = useContext(WindowContext)
    const corePrice = 0.1625
    const handleInput = (e) => {
        setEthValue(e.target.value)
    }

    return (
        <Accordion>
            <Tab eventKey="home" title="Liquidity">
                <StyledTabContent>
                    <InsertValueContainer>
                        <img src={ethIcon} alt="eth"/> ETH
                        <label>ETH - LCORE</label>
                        <StyledInput type="text" placeholder="0.0000" onChange={handleInput}/>
                        <SubmitInput type="submit" value="MAX"/>
                    </InsertValueContainer>
                    <SwapPreview>
                        <SwapItems>
                            <span>Swap</span>
                            <span>{ethValue ? ethValue : "0.0000"} ETH</span>
                        </SwapItems>
                        <img src={transferIcon} alt="transfer"/>
                        <SwapItems>
                            <span>Estiamted</span>
                            <span>{ethValue ? (ethValue * corePrice).toFixed(5) : "0.0000"} LCORE</span>
                        </SwapItems>
                    </SwapPreview>
                    <OptionsContainer>
                        <CheckboxContainer><CheckBox/> auto stake</CheckboxContainer>
                        <FeeInfo>Estimated gas cost 0.0206 ETH</FeeInfo>
                    </OptionsContainer>
                    <SwapBtn disabled={!isMetamaskInstalled}>Swap</SwapBtn>
                    <WarningContainer>
                        <img src={warningIcon} alt="warning "/>
                        All LCORE liquidity provider tokens are locked. It is impossible to liquidate these LP tokens in
                        to their underlying assets. However, LP tokens do allow you to participate in the LP farming
                        pool in our LCORE smart contract, in exchange for your service provided to traders as a
                        liquidity provider.
                    </WarningContainer>
                </StyledTabContent>
            </Tab>
            <Tab eventKey="swap" title="Swap">
                <StyledTabContent>
                    <SmallHeading>Coming with LCORE Router v2.0</SmallHeading>
                    Direct access to all supported LCORE pair contracts.
                </StyledTabContent>
            </Tab>
            <Tab eventKey="wrap" title="Wrap">
                <StyledTabContent>
                    <TinyHeading>cBTC ↔ wBTC</TinyHeading>
                    <SwapPreview>
                        <SwapItems>
                            <span>From</span>
                            <span>0.0000 cBTC </span>
                        </SwapItems>
                        <img src={transferIcon} alt="transfer"/>
                        <SwapItems>
                            <span>To</span>
                            <span>0.0000 wBTC </span>
                        </SwapItems>
                    </SwapPreview>
                    <SwapBtn>Approve</SwapBtn>
                    <Info>cBTC is a wrapped version of wBTC. You can wrap and unwrap between them at will. Always 1:1,
                        and without any fees.</Info>
                </StyledTabContent>

            </Tab>
        </Accordion>
    );
};

export default RouterContent;