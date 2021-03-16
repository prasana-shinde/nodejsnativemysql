const user = require('../../models').user;

class Read {
    readUser(body){
        return new Promise((resolve, reject) => {  
            user.findAll({
                offset: parseInt(body.offset) , limit: parseInt(body.limit)
            }).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            })
        });
    }
}

module.exports = {
    ReadClass : Read
}