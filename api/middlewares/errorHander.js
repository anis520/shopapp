 
export const errorHandle =(error,req,res,next)=>{


const errorStatus=error.status||500;
const errorMessage=error.message||'Unknown error'



return res.status(errorStatus).json({
    message:errorMessage,
    status:errorStatus
})
 
}