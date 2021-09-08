import React, { Component } from 'react'
import Web3 from 'web3'
import Orange from '../abis/Orange.json'
import TokenFarm from '../abis/TokenFarm.json'
import Navbar from './Navbar'
import Footer from './Footer'
import Main from './Main'
import './App.css'

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
 

    // Load Rewards tokens 
    const rewardTokenData = Orange.networks[networkId]
    if(rewardTokenData) {
      const rewardsTokens = new web3.eth.Contract(Orange.abi, rewardTokenData.address)
      this.setState({ rewardsTokens })
      let rewardTokenBalance = await rewardsTokens.methods.balanceOf(this.state.account).call()
      this.setState({ rewardTokenBalance: rewardTokenBalance.toString() })
    } else {
      window.alert('OrangeToken contract not deployed to detected network.')
    }

    // Load DappToken
    const dappTokenData = Orange.networks[networkId]
    if(dappTokenData) {
      const dappToken = new web3.eth.Contract(Orange.abi, dappTokenData.address)
      this.setState({ dappToken })
      let dappTokenBalance = await dappToken.methods.balanceOf(this.state.account).call()
      this.setState({ dappTokenBalance: dappTokenBalance.toString() })
    } else {
      window.alert('OrangeToken contract not deployed to detected network.')
    }

    // Load TokenFarm
    const tokenFarmData = TokenFarm.networks[networkId]
    if(tokenFarmData) {
      const tokenFarm = new web3.eth.Contract(TokenFarm.abi, tokenFarmData.address)
      this.setState({ tokenFarm })
      let stakingBalance = await tokenFarm.methods.stakingBalance(this.state.account).call()
      this.setState({ stakingBalance: stakingBalance.toString() })
    } else {
      window.alert('TokenFarm contract not deployed to detected network.')
    }

    this.setState({ loading: false })
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  stakeTokens = (amount) => {
    this.setState({ loading: true })
    this.state.dappToken.methods.approve(this.state.tokenFarm._address, amount).send({ from: this.state.account }).on('transactionHash',(hash) => {
   })

   setTimeout(() => {  
     this.state.tokenFarm.methods.stakeTokens(amount).send({ from: this.state.account }).on('transactionHash', (hash) => {
     this.setState({ loading: false })
     })},25000);
  }

  unstakeTokens = (amount) => {
    this.setState({ loading: true })
    this.state.tokenFarm.methods.unstakeTokens().send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      rewardsTokens: {},
      dappToken: {},
      tokenFarm: {},
      rewardTokenBalance: '0',
      dappTokenBalance: '0',
      stakingBalance: '0',
      loading: true
    }
  }

  render() {
    let content
    if(this.state.loading) {
      content = <p id="loader" className="text-center">Loading...</p>
    } else {
      content = <Main
        rewardTokenBalance={this.state.rewardTokenBalance}
        dappTokenBalance={this.state.dappTokenBalance}
        stakingBalance={this.state.stakingBalance}
        stakeTokens={this.stakeTokens}
        unstakeTokens={this.unstakeTokens}
      />
    }

    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>

                {content}

              </div>
            </main>
          </div>
        </div>
         <Footer account={this.state.account}/>      
        
      </div>
    );
  }
}

export default App;
