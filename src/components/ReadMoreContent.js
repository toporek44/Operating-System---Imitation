import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
min-width: 400px;
  width:90%;
  height: 100%;
  margin: 8rem 0 2rem;
  
  textarea {
  background: #032639 ;
  color:#fff;
  width:100%;
  height: 100%;
  resize: none;
  border:none;
  box-shadow: inset 0 0 5px 1px #212121;
  padding: 1.5rem;
  font-weight: 300;
  font-size: 1.4rem;

  
  
      &:focus {
      outline: none;
      }
      
      ::-webkit-scrollbar {
  width: 10px;
  &-track{
    background: #fff;
  }
      &-thumb{
        border-radius: 5px;
      background: #1D83D4;
          
          &:hover{
            cursor: pointer;
            background: #176daf;
          }
      }
  }
  }
  

`

const ReadMoreContent = () => {
    return (
        <Wrapper>
            <textarea type="text"  autoComplete="false" autoCapitalize="false" spellCheck="false" autoCorrect="false" defaultValue="

=====================
 Introducing LCORE
 =====================

LCORE is a fork token of original CORE protocol. Therefore, no one should be surprised that the assumptions of the project are almost the same. 10% of all profits generated from these strategies are used to auto market-buy the LCORE token. (Not 5% like in CORE)


=====================
LCORE is a non-inflationary cryptocurrency that is designed to execute profit-generating strategies autonomously with a completely decentralized approach. In existing autonomous strategy-executing platforms a team or single developer is solely responsible for determining how locked funds are used to generate ROI. This is hazardous to the health of the fund as it grows, as it creates flawed incentives, and invites mistakes to be made. LCORE does away with this dynamic and instead opts for one with decentralized governance.
 LCORE tokens holders will be able to provide strategy contracts and vote on what goes live and when, in order to decentralize autonomous strategy execution.

=====================
 Initial Distribution
 =====================
The LCORE team will kickstarting the initial distribution with a liquidity event. Contribute ETH to the LCORE Fair Launch smart contract to receive tokens, and the contributed ETH will be matched and added to the Uniswap liquidity pool. Note that once added, liquidity tokens can not be removed from the LCORE Uniswap LP pools. This is by design. Read on to learn about why..
 =====================
 Powered by Real Yield
 =====================
 To encourage real value and TVL to flow into LCORE, LCORE smart contracts employ interchangeable strategies that farm the coins inside the pools. This gives a great incentive to anyone who wants to farm LCORE with coins other than LCORE/ETH LP. All the yield from staked funds will go to market-buy LCORE. This creates a positive relationship for both parties. LCORE holders will always benefit from yield bearing activities done on the LCORE smart contracts. Even when farmers sell, a transfer fee on sales of LCORE tokens are returned to the farming pools. This means buying pressure will generally be more intense than selling pressure.
 Bottom line - Governance ensures APY is higher in LCORE Vault pools.
 Many believe that the act of adding additional pools is disincentivized by the fact that it can dilute the rewards for the pools people are currently farming. In our model, this is lessened by the nature of LCORE fees being paid out by additional farming pools. Although farmers are diluted in their rewards, the LCORE they have appreciate in value due to the positive market pressure.
 =====================
 Deflationary Farming
 =====================
 Farming tokens have a problem for their owners. To keep users farming, they have to mint ever more coins. This completely destroys the value of the underlying token, due to excessive inflation. It's easy to find examples of this across the DeFi ecosystem.
 Our solution is called deflationary farming, and it is quite simple in only two steps:
 1. Charge a fee on token transfers
 2. Users can earn the fee by farming
 This simple process means that those holding tokens are able to farm without infinite inflation.
 =====================
 Keeping Liquidity Liquid
 =====================
 All transfers have to be approved by the LCORE Transfers smart contract, which will block all
 liquidity withdrawals from Uniswap. This will guarantee a stable market, giving holders and farmers skin in the game.
 =====================
 Real Governance
 =====================
 LCORE is designed for great community governance. The community decides everything, from developer fees, to deciding on the fee approver contract, adding new pools, rebalancing, and even disabling pools in the LCORE Transfer contract.
 If the holders decide LCOREVault should have a YFI pool, we can set
 the ratio of fees it will be able to distribute, as well as when people should be
 able to withdraw YFI tokens from it.

This creates an incentive to hold even more LCORE by the holders of YFI tokens. Let the governance begin.
 =====================
 10000 LCORE Forever
 =====================
 Theres absolutely no way to create new LCORE tokens. This means the
 circulating supply can only ever go down, period.
            ">


            </textarea>
        </Wrapper>
    );
};

export default ReadMoreContent;