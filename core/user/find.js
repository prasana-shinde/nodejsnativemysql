const mysql = require('../../config/mysql')

class Read {
    readUser(body){
        return new Promise((resolve, reject) => {  
            var prepared_statement = 'select * from user limit ? offset ?';
            mysql.query(prepared_statement,[parseInt(body.limit),parseInt(body.offset)],(err,result)=>{
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
    ReadClass : Read
}