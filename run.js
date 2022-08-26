const Web3 = require("web3");
const Tx = require('ethereumjs-tx');

// Create connection with test net
var web3=new Web3("Infura API endpoint);

var contractAbi = ABI //ABI in JSON format
var contractAddress = Contract_Address

var sender = Sender_Address
var private = Sender_privatekey

var receiver = Reciever_Address
var amountInDecimal = 1 //Amount of token
const myContract = new web3.eth.Contract(contractAbi, contractAddress);
var privateKey = new Buffer(private, 'hex')

var txObject = {};
txObject.nonce = web3.utils.toHex(result);
txObject.gasLimit = web3.utils.toHex(90000);

txObject.gasPrice = web3.utils.toHex(10);
txObject.to = contractAddress;
txObject.from = sender;
txObject.value = '0x';
// Calling transfer function of contract and encode it in AB format
txObject.data = myContract.methods.transfer( receiver, web3.utils.toHex(
web3.utils.toWei(amountInDecimal.toString(), "ether"))).encodeABI();

//Sign transaction before sending
var tx = new Tx(txObject);
tx.sign(privateKey);
var serializedTx = tx.serialize();
web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
.on('transactionHash', ((data) => {
         console.log(data);
   }));
}).catch(err => {
   console.log(err);
})
