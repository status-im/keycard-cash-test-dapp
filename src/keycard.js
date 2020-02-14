const Web3 = require("web3");
const ethereum = window.ethereum;
const MAINNET = 1;
let web3;

const params = (chainId) => ({
    "domain": {
        "chainId": chainId,
        "name": "Ether Mail",
        "verifyingContract": "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
        "version": "1"
    },
    "message": {
        "contents": "Hello, Bob!",
        "amount": "123.04",
        "currency": "SNT",
        "from": {
            "name": "Cow",
            "wallet": "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"
        },
        "to": {
            "name": "Bob",
            "wallet": "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"
        }
    },
    "primaryType": "Mail",
    "types": {
        "EIP712Domain": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "version",
                "type": "string"
            },
            {
                "name": "chainId",
                "type": "uint256"
            },
            {
                "name": "verifyingContract",
                "type": "address"
            }
        ],
        "Mail": [
            {
                "name": "from",
                "type": "Person"
            },
            {
                "name": "to",
                "type": "Person"
            },
            {
                "name": "contents",
                "type": "string"
            },
            {
                "name": "amount",
                "type": "string"
            },
            {
                "name": "currency",
                "type": "string"
            }
        ],
        "Person": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "wallet",
                "type": "address"
            }
        ]
    }
});

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
    if (chainId === MAINNET) {
      throw("you can't use this test app on mainnet")
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

    log("sending test transaction");
    await web3.eth.sendTransaction({
      from: account,
      to: account,
      value: 0,
    });
  } catch(err) {
    log("error", err, err.message);
  }
}
