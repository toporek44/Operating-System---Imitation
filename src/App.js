import GlobalStyle from "./GlobalStyle";
import Taskbar from "./components/Taskbar";
import WindowElement from "./components/WindowElement";
import WindowContext from "./Contexts/WindowContext";
import React, {useState} from "react";
import styled from 'styled-components'
import RouterContent from "./components/RouterContent";
import WalletContent from "./components/WalletContent";
import {device} from "./device";
import bg from '../src/assets/background.png'
import {OnboardingButton} from "./Metamask";
import ReadMoreContent from "./components/ReadMoreContent";
import PulpitIcons from "./components/PulpitIcons";

const WindowWrapper = styled.div`
width:100%;
min-height: 100vh;
padding: 5rem 0 10rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
z-index: 0;
overflow-x: hidden;
background: #419bb3;
// background: url(${bg});
// background-repeat: no-repeat;
// background-size: cover;
// background-position: center;
// background-attachment: fixed;

@media (min-width:850px) {
  flex-direction: row;

}


@media ${device.laptop} {
  justify-content: space-around;
  flex-direction: row;
  padding-top:0;
  height: 100vh;

}

.dragging {
display: none !important;

@media ${device.laptop} {
  display: flex !important;

}
}

`


const App = () => {
    const [isRouterOpen, setRouterOpen] = useState(false)
    const [isWalletOpen, setWalletOpen] = useState(false)
    const [isInfoOpen, setInfoOpen] = useState(false)
    const [isMetamaskInstalled, setMetamaskInstalled] = useState(false)




    return (
      <>
          <WindowContext.Provider value={{isRouterOpen, setRouterOpen, isWalletOpen, setWalletOpen, isInfoOpen, setInfoOpen, isMetamaskInstalled, setMetamaskInstalled}}>
              <GlobalStyle/>
              <WindowWrapper>
                 <PulpitIcons/>
                  <OnboardingButton/>

                  {isRouterOpen?

                      <WindowElement
                          top="50px"
                          left="60px"

                          title="Router" handleClosing={() => setRouterOpen(!isRouterOpen)
                     }>
                            <RouterContent/>
                        </WindowElement>
                   : null}

                  {isWalletOpen?
                      <WindowElement
                          top="50px"
                          left="600px"
                          title="Wallet " handleClosing={() => setWalletOpen(!isWalletOpen)}>
                      <WalletContent/>
                  </WindowElement>: null}

                  {isInfoOpen?
                      <WindowElement secondary title="Read More " handleClosing={() => setInfoOpen(!isInfoOpen)}>
                          <ReadMoreContent/>
                      </WindowElement>: null}
              </WindowWrapper>
              <Taskbar/>
          </WindowContext.Provider>
      </>
  );
}

export default App;
