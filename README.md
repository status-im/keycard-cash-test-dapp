# Keycard Cash Test Dapp

This is an example dapp that signs some typed data with the Keycard Cash applet using a call to `keycard_signTypedData`.

## Keycard setup

Download the latest [Keycard CLI](https://github.com/status-im/keycard-cli/releases).

Rename the executable and set the right permissions:

```
cd Downloads
mv keycard-darwin-10.6-amd64 keycard
chmod +x keycard
```

Download the latest [Keycard applet .cap file](https://github.com/status-im/status-keycard/releases).

Install the applet:

!!! EVERY TIME AN INSTALLATION IS PERFERMED, THE KEYS INSIDE THE CARD ARE DELETED !!!

```
keycard install -f -a keycard_v3.0.cap
```

## Testing the cash applet

Open the Status browser and go to [https://status-im.github.io/keycard-cash-test-dapp/](https://status-im.github.io/keycard-cash-test-dapp/).

Click the sign button and follow the request screen asking to tap the keycard to sign the typed data.

The page logs the result or any error occurred during the calls to the web3 methods.

