import React, {useState} from 'react';
import styled from 'styled-components'
import Tabs from 'react-bootstrap/Tabs'
import TabContent from 'react-bootstrap/TabContent'


const Wrapper = styled.div`
width:400px;
height: 100%;
margin:7rem 0 3rem 0;
background: #CFF0FF ;
user-select: none;


`

export const StyledTabs = styled(Tabs)`
width:100%;
background: #ABD0E1;
display: flex;
border:none;

.nav-link {
width:23%;
padding: .3rem 0;
margin-right: .2rem;
text-align: center;
border:none;
box-shadow: inset 0 0 10px -9px #212121;
color:#3C6276;
font-weight: 400;
background: #CFF0FF ;

}
 .nav-link.active {
      background: #CFF0FF;
      box-shadow: 0 -5px 10px -10px #212121;
      color:#032639;
      position:relative;
      
      &::before {
      content: "";
      position: absolute;
      top:0;
      left:0;
      width: 101%;
      height: 2px;
      background: #032639;
       }
    }
    
    

`

export const StyledTabContent = styled(TabContent)`
    height: 420px;
    padding: 4rem 3rem 3rem 3rem;
    box-shadow: 4px 6px 10px -8px #212121;
    position:relative;
    z-index: 99;
`


const Accordion = ({children}) => {
    const [key, setKey] = useState('home');

    return (
        <Wrapper>
        <StyledTabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            {children}
        </StyledTabs>

        </Wrapper>
    )

};

export default Accordion;