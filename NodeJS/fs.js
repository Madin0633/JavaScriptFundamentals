const fs = require('fs')

fs.readFile('test.txt',(err, data)=>{
        if(err){
            console.log("Error", err);
        }else{
            console.log(data.toJSON());
            return data;
        }
})