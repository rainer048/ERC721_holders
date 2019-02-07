const fs = require('fs');
const Web3 = require('web3');
const config = require('./config/config');

const web3 = new Web3(new Web3.providers.HttpProvider(config.HTTP_PROVIDER));
const contract = new web3.eth.Contract(config.ABI_ARRAY, config.CONTRACT_ADDRESS);

(async () => {
    await contract.methods.totalSupply().call().then(async (total) => {
        const holders = [];
        for (let i = 0; i < total; i += 1) {
            await contract.methods.ownerOf(i).call().then((holder) => {
                if (holders.indexOf(holder) === -1) {
                    holders.push(holder);
                    console.log(holders.length > 1 ? `%d holders found...` : `%d holder found...`, holders.length);
                }
            });
        }
        return holders;
    }).then(async (holders) => {
        await fs.unlink(config.FILE_NAME, (err) => {
            if (err) {
                return console.log(err);
            }
            return true;
        });
        for (let holder of holders) {
            await fs.appendFile(config.FILE_NAME, holder.toString() + '\n', (err) => {
                if (err) {
                    return console.log(err);
                }
                return true;
            });
        }
    });
})();
