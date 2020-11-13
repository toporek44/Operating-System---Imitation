import MetaMaskOnboarding from '@metamask/onboarding';
import React, {useContext} from 'react';
import styled from "styled-components";
import {device} from "./device";
import {ReactComponent as PowerIcon} from "./assets/powerIcon.svg";
import WindowContext from "./Contexts/WindowContext";


const ConnectBtn = styled.button`
  background: #032639;
  color:${( {isConnected} ) => isConnected? "#00cdac" : "#FF7557"};
  width:100%;
  border: none;
  height: 60px;
  position: absolute;
  top:0;
  right:0;
  font-family: "Montserrat", sans-serif;
  font-size: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: .2s all ease-in-out;
  z-index: 2020;
  
  @media ${device.tablet} {
    width:220px;
    border-radius: 0 0 0 40px;


}
  
  svg {
  margin-left: 1rem;
  width:30px;
  
    path {
    fill:${( {isConnected} ) => isConnected? "#00cdac" : "#FF7557"};
    transition: .2s all ease-in-out;
    }
  }
  
  &:hover {
        color:${( {isConnected} ) => isConnected? "#00cdac" : "#ffd533"};

    transition: .2s all ease-in-out;
    
    path {
      fill:${( {isConnected} ) => isConnected? "#00cdac" : "#ffd533"};
      transition: .2s all ease-in-out;
    }
  }
`

const CONNECT_TEXT = 'Connect';
const CONNECTED_TEXT = 'Connected';

export function OnboardingButton() {
    const [buttonText, setButtonText] = React.useState(CONNECT_TEXT);
    const [isDisabled, setDisabled] = React.useState(false);
    const [accounts, setAccounts] = React.useState([]);
    const onboarding = React.useRef();
    const { setMetamaskInstalled } = useContext(WindowContext)

    React.useEffect(() => {
        if (!onboarding.current) {
            onboarding.current = new MetaMaskOnboarding();
        }
    }, []);

    React.useEffect(() => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            if (accounts.length > 0) {
                setMetamaskInstalled(true)
                setButtonText(CONNECTED_TEXT);
                setDisabled(true);
                onboarding.current.stopOnboarding();
            } else {
                setButtonText(CONNECT_TEXT);
                setDisabled(false);
            }
        }
    }, [accounts]);

    const connectWallet = () => {
        function handleNewAccounts(newAccounts) {
            setAccounts(newAccounts);
        }
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {

            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(handleNewAccounts);
            window.ethereum.on('accountsChanged', handleNewAccounts);
            return () => {
                window.ethereum.off('accountsChanged', handleNewAccounts);
            };
        }
    }




   const onClick = () => {

       connectWallet()
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((newAccounts) => setAccounts(newAccounts));
        } else {
            onboarding.current.startOnboarding();
        }
    };

    return (
                 <ConnectBtn disabled={isDisabled} isConnected={isDisabled} onClick={onClick}>{buttonText} <PowerIcon /></ConnectBtn>
    );
}


