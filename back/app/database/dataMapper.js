const database = require('./database');
const path = require('path');
const fs = require('fs');

const dataMapper = {
    resetDataTable: ()=>{

        fs.readFile(path.join(process.cwd() + '/data/createDatabase.sql'), 'utf8', function read(err, data) {
            if (err) {
                throw err;
            }            

            const query =data;

            database.query(query,(err,result)=>{

                if(err){
                    throw new Error(err);
                }

                console.log(result);

            });

        });  
    },
};
module.exports = dataMapper;
