import React, { Component } from 'react'
import dai from '../dai.png'
import App from './App.css'

class Main extends Component {

  render() {
    return (
      <div id="content" className="maintx mt-3">

        <table className="table table-borderless text-muted text-center">
          <thead>
            <tr>
              <th className="col-md-2  button" scope="col-md-2">Balance Stake</th>
              <th  className="col-md-2 button" scope="col-md-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tex"><img src={dai} height='32' alt=""/> {window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')}</td>
              <td className="tex"><img src={dai} height='32' alt=""/> {window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')}</td>
            </tr>
          </tbody>
        </table>

        <div className="card mb-4" >

          <div className="card-body">

            <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.stakeTokens(amount)
              }}>
              <div>
                <label className="float-left"><b>Stake Tokens</b></label>
              
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  ref={(input) => { this.input = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={dai} height='32' alt=""/>
                    &nbsp;&nbsp;&nbsp; $Tangerine
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-lg">STAKE!</button>
            </form>
            <button
              type="submit"
              className="btn btn-link btn-block btn-sm"
              onClick={(event) => {
                event.preventDefault()
                this.props.unstakeTokens()
              }}>
                UN-STAKE...
              </button>
          </div>
        </div>

      </div>
    );
  }
}

export default Main;
