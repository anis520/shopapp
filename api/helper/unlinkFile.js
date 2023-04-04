import fs from'fs'


export const FileUnlink=(path)=>{

    
    fs.unlink(path,function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
    }); 
}