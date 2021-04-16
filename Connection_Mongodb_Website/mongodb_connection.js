let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

let obj =require("mongoose");
let courseSchema=obj.Schema({
    _id:Number,
    courseName:String,
    description:String,
    amount:String,
    });


app.get("/",(req,res)=>{
    
    res.sendFile(__dirname+"/index.html");
})

app.get("/addCourse",(req,res)=>{
    
    res.sendFile(__dirname+"/addCourse.html");
})

app.post("/addCourseDetails",(req,res)=> {
       let courseId = req.body.courseId;
       let courseName = req.body.courseName;
       let description = req.body.description;
       let amount = req.body.amount;
       //
       obj.Promise=global.Promise;
       let url="mongodb://localhost:27017/meanstack";
       const mongoDbOption={
            useNewUrlParser: true,
             useUnifiedTopology: true 
       }
       //
       obj.connect(url,mongoDbOption);
      let db=obj.connection;
      db.on("error",(err)=>{
      console.log(err)
        });
        db.once("open",()=>{
        let Product=obj.model("courseDetails",courseSchema);

        let p1=new Product({_id:courseId,courseName:courseName,description:description,amount:amount});
            p1.save((err,result)=>{
               if(!err)
               {
                   console.log("record inserted sucessfully"+result);
               }else{
                   console.log(err);
               }
               obj.disconnect();
            })
        })
        res.sendFile(__dirname+"/index.html");

})

app.get("/updateCourse",(req,res)=> {
    res.sendFile(__dirname+"/updateCourse.html");
})

app.post("/updateCourseDetails",(req,res)=> {
        let courseId = req.body.courseId;
        let amount = req.body.amount;
        //
        obj.Promise=global.Promise;
        let url="mongodb://localhost:27017/meanstack";
        const mongoDbOption={
             useNewUrlParser: true,
              useUnifiedTopology: true 
        }
        //
        obj.connect(url,mongoDbOption);
       let db=obj.connection;
       db.on("error",(err)=>{
       console.log(err)
         });
         db.once("open",()=>{
         let Product=obj.model("courseDetails",courseSchema);
 
         Product.updateMany({_id:courseId},{$set:{amount:amount}},(err,result)=>{
            if(!err)
            {
            if(result.nModified>0)
            {
           console.log("Record Updated");
            }
            else{
        console.log("Record not present")
            }
            }
            obj.disconnect();
             })
         })
         res.sendFile(__dirname+"/index.html");
})

app.get("/deleteCourse",(req,res)=> {
    res.sendFile(__dirname+"/deleteCourse.html");
})

app.post("/deleteCourseDetails",(req,res)=> {
        let courseId = req.body.courseId;
        //
        obj.Promise=global.Promise;
        let url="mongodb://localhost:27017/meanstack";
        const mongoDbOption={
             useNewUrlParser: true,
              useUnifiedTopology: true 
        }
        //
        obj.connect(url,mongoDbOption);
       let db=obj.connection;
       db.on("error",(err)=>{
       console.log(err)
         });
         db.once("open",()=>{
         let Product=obj.model("courseDetails",courseSchema);
 
         Product.deleteOne({_id:courseId},(err,result)=>{
            if(!err)
            {
                
                if(result.deletedCount>0)
                {
                    console.log("Record deleted sucessfully"+result);
                
                }
                else{
                    console.log("Record not present");
                }
            }
            obj.disconnect();
             })
         })
         res.sendFile(__dirname+"/index.html");
})


app.get("/fetchCourse",(req,res)=> {
    res.setHeader("content-type","text/html");
    let courseDetailsArray=[];
    obj.Promise=global.Promise;
    let url="mongodb://localhost:27017/meanstack";
    const mongoDbOption={
         useNewUrlParser: true,
          useUnifiedTopology: true 
    }
    //
    obj.connect(url,mongoDbOption);
   let db=obj.connection;
   db.on("error",(err)=>{
   console.log(err)
     });
     db.once("open",()=>{
     let Product=obj.model("courseDetails",courseSchema);


            Product.find({},(err,result)=>{
        if(!err){
            result.forEach(doc=>{
                console.log(doc);
                courseDetailsArray.push(doc);
            });
        }
        console.log(courseDetailsArray);
       
        var tableStart = `<h1><u>Course Lists: </u></h1><br/><table><tr><th>CourseID</th><th>CourseName</th><th>Description</th><th>Amount</th></tr>`;
        var tableEnd = `</table> <a href="/">Back</link>`;
        var tableData=`${courseDetailsArray.map(rowTemplate).join("")}`;
        var finalTable=(courseDetailsArray.length>0)?tableStart+tableData+tableEnd:"No Records Available";
        obj.disconnect();
        res.write(finalTable);
        res.end();
        
    })
        })
        
        
})












function rowTemplate(task) {
    return `
        <tr>
          <td>${task._id}</td>
          <td>${task.courseName }</td>
          <td>${task.description}</td>
          <td>${task.amount}</td>
        </tr>
    `;
  }


app.listen(9090,()=>console.log("App running on local host 9090"));