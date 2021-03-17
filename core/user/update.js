const mysql = require('../../config/mysql')

class Update {
    updateUser(body){
        return new Promise((resolve, reject) => {  
            const prepared_statment = 'update user set user_name = ? where user_name = ?';
            mysql.query(prepared_statment,[body.new_user_name,body.user_name],(err,result)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    }
}

module.exports = {
    UpdateClass : Update
}