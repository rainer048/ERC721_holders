const config = {
    HTTP_PROVIDER: 'https://mainnet.infura.io/v3/4161ec5436de4608be5ddf1101c1d0a5',
    CONTRACT_ADDRESS: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
    FILE_NAME: 'holders.txt',
    ABI_ARRAY: [{
        "constant": true,
        "inputs": [{"name": "interfaceId", "type": "bytes4"}],
        "name": "supportsInterface",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "tokenId", "type": "uint256"}],
        "name": "getApproved",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "to", "type": "address"}, {"name": "tokenId", "type": "uint256"}],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "_totalSupply",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_to", "type": "address"}, {"name": "_amount", "type": "uint256"}],
        "name": "mint",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "tokenId", "type": "uint256"}],
        "name": "ownerOf",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "to", "type": "address"}, {"name": "approved", "type": "bool"}],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {
            "name": "tokenId",
            "type": "uint256"
        }, {"name": "_data", "type": "bytes"}],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "owner", "type": "address"}, {"name": "operator", "type": "address"}],
        "name": "isApprovedForAll",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
            "indexed": true,
            "name": "to",
            "type": "address"
        }, {"indexed": true, "name": "tokenId", "type": "uint256"}],
        "name": "Transfer",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "owner", "type": "address"}, {
            "indexed": true,
            "name": "approved",
            "type": "address"
        }, {"indexed": true, "name": "tokenId", "type": "uint256"}],
        "name": "Approval",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "owner", "type": "address"}, {
            "indexed": true,
            "name": "operator",
            "type": "address"
        }, {"indexed": false, "name": "approved", "type": "bool"}],
        "name": "ApprovalForAll",
        "type": "event"
    }],
};

module.exports = config;

// HTTP_PROVIDER: 'https://mainnet.infura.io/v3/4161ec5436de4608be5ddf1101c1d0a5',
//     CONTRACT_ADDRESS: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',