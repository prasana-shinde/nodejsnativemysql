const post = require('../../models').post;

class Destroy {
    deletePost(body){
        return new Promise((resolve, reject) => {  
            post.destroy({
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
    DestroyClass : Destroy
}