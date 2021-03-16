const post = require('../../models').post;

class Read {
    readPost(body){
        return new Promise((resolve, reject) => {  
            post.findAll({
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