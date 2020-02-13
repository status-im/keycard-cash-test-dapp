const ethereum = window.ethereum;

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
      log("ethereum enabled");
    }).catch(err => {
      log(JSON.stringify(err.message));
    });
  }
}

export const sign = (log) => {
  log("calling net_version")
  ethereum.send("net_version", []).then(resp => {
    const chainId = parseInt(resp.result);
    log("network id", chainId)
    log("calling eth_accounts")
    ethereum.send("eth_accounts", []).then(resp => {
      const addresses = resp.result;
      log("eth_accounts", addresses.join(", "))
      log("calling keycard_signTypedData");
      ethereum.send("keycard_signTypedData", [addresses[0], JSON.stringify(params(chainId))]).then(res => {
        log("signature: ", res.result)
      }).catch(err => {
        log("error: ", err)
      })
    }).catch(err => {
      log("error: ", err)
    });
  }).catch(err => {
    log("error: ", err)
  });
}
