const mysql = require('../../config/mysql')

class Destroy {
    deleteUser(body){
        return new Promise((resolve, reject) => {  
            const prepared_statement = 'delete from user where user_name = ?'
            mysql.query(prepared_statement,[body.user_name],(err,result)=>{
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
    DestroyClass : Destroy
}