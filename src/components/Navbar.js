import React, { Component } from 'react'
import orange from '../logo.png'
class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
         <img className="logo" src={orange} height='50' alt=""/>

         <li className="navlink"><a href="https://tangerinecoin.com/">Website</a></li>
         <li className="navlink"><a href="https://pancakeswap.finance/">Buy Tangerine </a></li>
         <li className="navlink"><a href="#">About </a></li>
         <li className="navlink"><a href="https://tangerinecoin.com/">WhitePaper </a></li>


        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-wallet">
              <small id="account"><strong>Wallet: </strong>{this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
