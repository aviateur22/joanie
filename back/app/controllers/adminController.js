const dataMapper = require('../database/dataMapper');

const adminController = {

    resetDatabase : (req,res)=>{
        const token = req.params.token;

        
        if(token === 'ghjklm'){
           
            try {
                console.log('token valide');
                dataMapper.resetDataTable(()=>{


                });
            } catch (error) {
                res.status(505).send(error);
                
            }
           
        }else{
            res.status(404).send('token inavalide');
        }
        
    }
};
module.exports = adminController;