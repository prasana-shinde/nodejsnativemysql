const mysql = require('../../config/mysql')
class Save {
    saveUser(body){
        return new Promise((resolve, reject) => {  
            const prepared_statement = 'insert into user values(?,?)';        //prepared statement to insert data into user table
            mysql.query(prepared_statement,[body.user_name,body.password],(err,result)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(result)
                }
            });
        });
    }
}

module.exports = {
    SaveClass : Save
}