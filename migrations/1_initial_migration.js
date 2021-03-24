const MGCToken = artifacts.require("MGCToken");

module.exports = function(deployer) {
  deployer.deploy(MGCToken);
};
