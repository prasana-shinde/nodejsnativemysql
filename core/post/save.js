const post = require('../../models').post;

class Save {
    savePost(body){
        return new Promise((resolve, reject) => {  
            post.create({
                message : body.message,
                user_id : body.userid
            }).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            });
        });
    }
}

module.exports = {
    SaveClass : Save
}