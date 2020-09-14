import { recoverTypedSignature } from 'eth-sig-util';
import Web3 from "web3";
const ethereum = window.ethereum;
const ROPSTEN = 3;
let web3;

function paymentParams(chainId, amount) {
  const message = {
    blockNumber: 1,
    blockHash: "0x0000000000000000000000000000000000000000",
    currency: "0xc55cf4b03948d7ebc8b9e8bad92643703811d162",
    to: "0x0000000000000000000000000000000000000000",
    amount: "1000000000000000000",
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

function redeemParams(chainId, receiver) {
  const message = {
    blockNumber: 1,
    blockHash: "0x0000000000000000000000000000000000000000",
    code: "0x0000000000000000000000000000000000000000",
    receiver: receiver,
  }

  const domain = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" }
  ];

  const redeem = [
    { name: "blockNumber", type: "uint256" },
    { name: "blockHash", type: "bytes32" },
    { name: "receiver", type: "address" },
    { name: "code", type: "bytes32" },
  ];

  const domainData = {
    name: "KeycardERC20Bucket",
    version: "1",
    chainId: chainId,
    verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
  };

  const data = {
    types: {
      EIP712Domain: domain,
      Redeem: redeem,
    },
    primaryType: "Redeem",
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

export const signRedeem = async (log) => {
  try {
    log("calling net_version")
    const result = await web3.eth.net.getId();
    const netID = parseInt(result);
    if (netID !== ROPSTEN) {
      throw("you can use this test app only on ropsten")
      return
    }

    log("network id", netID)
    log("calling eth_accounts")

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    log("accounts", accounts.join(", "));
    log("calling keycard_signTypedData");

    const data = redeemParams(netID, account);
    const sig = await ethereum.send("keycard_signTypedData", JSON.stringify(data));
    log("signature: ", sig);

    const signer = recoverTypedSignature({
      data,
      sig
    });
    log("signer: ", signer);
  } catch(err) {
    log("error", err, err.message);
  }
}

export const signPayment = async (log) => {
  try {
    log("calling net_version")
    const result = await web3.eth.net.getId();
    const netID = parseInt(result);
    if (netID !== ROPSTEN) {
      throw("you can use this test app only on ropsten")
      return
    }

    log("network id", netID)
    log("calling eth_accounts")

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    log("accounts", accounts.join(", "));
    log("calling keycard_signTypedData");

    const amount = "1000000000000000000";
    const data = paymentParams(netID, amount);
    const sig = await ethereum.send("keycard_signTypedData", JSON.stringify(data));
    log("signature: ", sig);

    const signer = recoverTypedSignature({
      data,
      sig
    });
    log("signer: ", signer);
  } catch(err) {
    log("error", err, err.message);
  }
}
