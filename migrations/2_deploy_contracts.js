const Orange = artifacts.require('Token')
const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(deployer, network, accounts) {
  // Deploy Mock DAI Token
  await deployer.deploy(Orange)
  const orange = await Orange.deployed()

  // // Deploy TokenFarm
  // await deployer.deploy(TokenFarm, orange.address)
  // const tokenFarm = await TokenFarm.deployed()

}