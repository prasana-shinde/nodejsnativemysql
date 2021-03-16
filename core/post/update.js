const post = require('../../models').post;

class Update {
    updatePost(body){
        return new Promise((resolve, reject) => {  
            post.update({
                message : body.message
            },
            {
                where : {
                    id : body.postid
                }
            }).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            })
        });
    }
}

module.exports = {
    UpdateClass : Update
}