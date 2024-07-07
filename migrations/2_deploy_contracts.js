const FlashLoanArbitrage = artifacts.require("FlashLoanArbitrage");

module.exports = async function (deployer, network, accounts) {
    const addressesProvider = '0x...'; // Replace with Aave LendingPoolAddressesProvider address for your network
    await deployer.deploy(FlashLoanArbitrage, addressesProvider);
};
