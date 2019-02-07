const fs = require('fs');
const config = require('../config/params');

async function addHolder(holders, contract, tokenId) {
    await contract.methods.ownerOf(tokenId).call().then(async (holder) => {
        if (holders.indexOf(holder) === -1) {
            await fs.appendFile(config.FILE_NAME, `${holder.toString()}\n`, (err) => {
                if (err) {
                    return console.log(err);
                }
                return true;
            });
            holders.push(holder);
            console.log(holders.length > 1 ? '%d holders found...' : '%d holder found...', holders.length);
        }
    });
}

async function clearFile(path) {
    if (await fs.existsSync(path)) {
        await fs.unlink(path, (err) => {
            if (err) {
                return console.log(err);
            }
            return true;
        });
    }
    return true;
}

module.exports = {
    addHolder,
    clearFile,
};
