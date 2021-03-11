const user = require('../../models/user');

class Destroy {
    deleteUser(body){
        return new Promise((resolve, reject) => {  
            user.destroy({
                where : {
                    username : body.username
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