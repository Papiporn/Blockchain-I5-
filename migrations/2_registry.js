var Registry = artifacts.require("./Registry.sol");

module.exports = function(deployer, accounts, network) {
  deployer.deploy(Registry);
};