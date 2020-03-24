const Web3 = require("web3");
const ethereum = window.ethereum;
const ROPSTEN = 3;
let web3;

function params(chainId, amount) {
  const message = {
    blockNumber: 1,
    blockHash: "0x0000000000000000000000000000000000000000",
    currency: "0x37491bee77c66cb1c4c2be92e4ba3a9eb5487801",
    to: "0x0000000000000000000000000000000000000000",
    amount: 1000000000000000000,
  }

  const domain = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" }
  ];

  const payment = [
    { name: "blockNumber", type: "uint256" },
    { name: "blockHash", type: "bytes32" },
    { name: "currency", type: "address" },
    { name: "amount", type: "uint256" },
    { name: "to", type: "address" }
  ];

  const domainData = {
    name: "KeycardWallet",
    version: "1",
    chainId: chainId,
    verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
  };

  const data = {
    types: {
      EIP712Domain: domain,
      Payment: payment
    },
    primaryType: "Payment",
    domain: domainData,
    message: message
  };

  return data;
}

export const init = (log) => {
  if (ethereum) {
    ethereum.enable().then(() => {
      web3 = new Web3(ethereum);
      log("ethereum enabled");
    }).catch(err => {
      log(JSON.stringify(err.message));
    });
  }
}

export const sign = async (log) => {
  try {
    log("calling net_version")
    const result = await web3.eth.net.getId();
    const chainId = parseInt(result);
    if (chainId !== ROPSTEN) {
      throw("you can use this test app only on ropsten")
      return
    }

    log("network id", chainId)
    log("calling eth_accounts")

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    log("accounts", accounts.join(", "));
    log("calling keycard_signTypedData");

    const res = await ethereum.send("keycard_signTypedData", [account, JSON.stringify(params(chainId))]);
    log("signature: ", res.result);
  } catch(err) {
    log("error", err, err.message);
  }
}
