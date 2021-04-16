let app = require("express")();
let http = require("http").Server(app);  
let io = require("socket.io")(http);
let obj =require("mongoose");
let messageCount=1;


app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

let chatSchema=obj.Schema({
    _id:Number,
    name:String,
    message:String
});

io.on("connection",(socket)=> {
    socket.on("chat",(msg)=> {
        obj.Promise=global.Promise;
        let url="mongodb://localhost:27017/meanstack";
        const mongoDbOption={
        useNewUrlParser: true,
        useUnifiedTopology: true 
    
        }
        obj.connect(url,mongoDbOption);
        let db=obj.connection;
        db.on("error",(err)=>{
          console.log(err)
        });
        db.once("open",()=>{
            
            let chatMessage=obj.model("ChatLog",chatSchema);
            let message=msg.toString();
            let messageArray=message.split("content");
            let name=messageArray[0];
            let messageDetails=messageArray[1];
            let c1=new chatMessage({_id:messageCount,name:name,message:messageDetails});
            c1.save((err,result)=>{
                if(!err)
                {
                    console.log("Chat Log inserted sucessfully"+result);
                    messageCount++;
                }else{
                    console.log(err);
                }
                obj.disconnect();
            })
        })
        



    });
    

})
http.listen(9090,()=>console.log('server running on port number 9090'));





