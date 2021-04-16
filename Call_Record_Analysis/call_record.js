let fs=require("fs");
let obj =require("mongoose");
obj.Promise=global.Promise;
let url="mongodb://localhost:27017/meanstack";
const mongoDbOption={
     useNewUrlParser: true,
     useUnifiedTopology: true 
    
}

let logData=fs.readFileSync("call_data.json");
let jsonDataArray=new Array();
let readData=JSON.parse(logData);
jsonDataArray=readData;

console.log(jsonDataArray);

obj.connect(url,mongoDbOption);
let db=obj.connection;
db.on("error",(err)=>{
    console.log(err)
});
db.once("open",()=>{
    let CallSchema=obj.Schema({
        _id:Number,
        source:String,
        destination:String,
        sourceLocation:String,
        destinationLocation:String,
        callDuration:String,
        roaming:String,
        callCharge:String,
        
    });
    let Product=obj.model("callRecords",CallSchema);
    for(let i=0;i<jsonDataArray.length;i++)
    {
     let p1=new Product({_id:jsonDataArray[i]._id,source:jsonDataArray[i].source,destination:jsonDataArray[i].destination,sourceLocation:jsonDataArray[i].sourceLocation,destinationLocation:jsonDataArray[i].destinationLocation,
     callDuration:jsonDataArray[i].callDuration,roaming:jsonDataArray[i].roaming,callCharge:jsonDataArray[i].callCharge});
     p1.save((err,result)=>{
        if(!err)
        {
            console.log("record inserted sucessfully"+result);
        }else{
            console.log(err);
        }
        obj.disconnect();
    })
    }
    
})
    
