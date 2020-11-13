import React, {useContext} from 'react';
import Accordion, {StyledTabContent} from "./Accordion";
import Tab from "react-bootstrap/Tab";
import styled from 'styled-components'
import {Info, SwapBtn} from "./RouterContent";
import WindowContext from "../Contexts/WindowContext";

const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CryptoContainer = styled.div`
    margin:2rem 0 5rem;
    display: flex;
    justify-content: space-between;
    position:relative;
    width:300px;
    background: transparent;
    border:2px solid #032639; 
`
const Title = styled.p`
    display: block;
    height: 30px;
    font-size: 1.5rem;
    line-height: 30px;
    background: #032639;
    color:#fff;
    position: absolute;
    top:-30px;
    padding: 0 .8rem;
    left:50%;
    transform: translateX(-50%);
    font-family: "Montserrat", sans-serif;
`

const ValuesContainer = styled.div`
  padding: 1rem;
`
const Values = styled.div`

`

const GetBtn = styled.button`
    background: #1D83D4;
    border:none;
    color:#fff;
    width:70px;
    transition: .3s all ease-in-out;

    &:hover {
    background: #1f8ce3;
    transition: .3s all ease-in-out;
    }
    
    &:focus {
    outline: none;
    }
`


const FarmContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-bottom: 2rem;
      font-size: 2rem;
`
const FarmTitle = styled.h2`
        text-align: center;
        width:100%;
        margin-bottom: 1rem;
        font-weight: 600;
`

const UniSwapContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PairInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`
const BoxTitle = styled.h2`
    width: 100%;
    text-align: center;
    height: 25px;
    line-height: 25px;
    font-size: 1.7rem;
    padding: 0 1rem;
    background: #032639;
    color:#fff;
    font-weight: 300;
    margin:1rem 0;
`

const BalanceContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin:1rem 0;
`
const Balance = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    span {
    margin:0;
    text-align: center;
    line-height: 1.8rem;
    }
`

const PriceTitle = styled.p`
    margin:0;
    font-size: 1.7rem;
`

const WalletContent = () => {
const { setRouterOpen} = useContext(WindowContext)


    return (
        <Accordion>
            <Tab eventKey="home" title="Summary" >
                <StyledTabContent>
                    <SummaryWrapper>
                        <CryptoContainer>
                            <Title>LCORE</Title>
                            <ValuesContainer>
                                <Values>
                                    Total: 0.00000
                                </Values>
                                <Values>
                                    Wallet: 0.00000
                                </Values>
                                <Values>
                                    Claimable: 0.00000
                                </Values>
                            </ValuesContainer>
                            <GetBtn>Get</GetBtn>
                        </CryptoContainer>

                        <CryptoContainer>
                            <Title>LCORE/WETH LP</Title>
                            <ValuesContainer>
                                <Values>
                                    Total: 0.00000
                                </Values>
                                <Values>
                                    Wallet: 0.00000
                                </Values>
                                <Values>
                                    Claimable: 0.00000
                                </Values>
                            </ValuesContainer>
                            <GetBtn>Get</GetBtn>
                        </CryptoContainer>
                    </SummaryWrapper>
                </StyledTabContent>
            </Tab>
            <Tab eventKey="farm" title="Farm">
                <StyledTabContent>
                    <FarmContainer>
                            <FarmTitle>LCORE x WETH UNIv2 LP</FarmTitle>
                        <span>Staked 0.00000</span>
                        <span>new APY claculation WIP</span>
                        <span>Claimble 0.00000</span>
                    </FarmContainer>

                    <SwapBtn onClick={() => setRouterOpen(true)}>Buy/Stake Lp</SwapBtn>

                    <Info>
                        <p>APY calculation is calculated as an average of fees over the last 11.52 days, current TVL and LCORE price.</p>
                        <p>
                            All future pools will be carefully picked to maximise opportunities for the LCORE community.
                        </p>
                    </Info>
                </StyledTabContent>
            </Tab>
            <Tab eventKey="uniswap" title="Uniswap" >
                <StyledTabContent>
                    <UniSwapContainer>
                        <BoxTitle>Pair Info</BoxTitle>
                        <PairInfo>
                            <BalanceContainer>
                                <Balance>Balance LCORE <span>0000</span></Balance>
                                <Balance>Balance WETH <span>0000</span></Balance>
                            </BalanceContainer>
                            <PriceTitle>LCORE Price</PriceTitle>
                            <span>7.4503 ETH = $3037.69</span>
                        </PairInfo>

                        <BoxTitle>Token Info</BoxTitle>
                        <PairInfo>
                            <PriceTitle>Total Supply</PriceTitle>
                            <span>9734 LCORE/WETH UNIv2 LP</span>
                            <BalanceContainer>
                                <Balance>Value In LP tokens <span>59,300 ETH </span> <span>=</span> <span> $24,333,751.57</span></Balance>
                                <Balance>LP token value <span>6.09 ETH</span> <span>=</span> <span> $2,499.82</span></Balance>
                            </BalanceContainer>
                        </PairInfo>
                    </UniSwapContainer>
                </StyledTabContent>

            </Tab>

            <Tab eventKey="govern" title="Govern" >
                <StyledTabContent>
                    Governance Coming Soon.
                </StyledTabContent>

            </Tab>
        </Accordion>
    );
};

export default WalletContent;