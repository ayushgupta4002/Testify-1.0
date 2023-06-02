const userModel = require("../db");



exports.keyverification = function (req, res, next) {

    try {
        const reqkey = req.params.key;
        console.log(reqkey);
         userModel.findOne({ key: reqkey })
        .then((data)=>{
            console.log(data)
            if(data){
                console.log(data);
               
                next()
            }
            if(data==null){
                console.log("no api key found");
                res.json({
                    message:"no api key found"  
                })
                
            }
            if(!data && data ==!null){
                console.log("incorrect api key");
                res.json({
                    message:"incorrect api key"  
                })
            }
          
        })
        .catch((error) => console.log(error));
      } catch (err) {
        console.log(err);
      }


    




}