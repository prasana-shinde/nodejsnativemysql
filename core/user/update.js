const user = require('../../models/user');

class Update {
    updateUser(body){
        return new Promise((resolve, reject) => {  
            user.update({
                username : body.newusername
            },
            {
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
    UpdateClass : Update
}