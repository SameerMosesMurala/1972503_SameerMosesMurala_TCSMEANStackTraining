let http = require("http");
let url = require("url");
var obj=require("readline-sync");
let fs=require("fs");
let port=9999;
var taskArray=new Array();
//task form
let taskForm=
`
<h3><u>Add Task</u></h3>
<form action="/store" method="GET">
        <label>Employee ID</label>
        <input type="text" name="empId"/><br/>
        <label>Task ID</label>
        <input type="text" name="taskId"/><br/>
        <label>Task</label>
        <input type="text" name="task"/><br/>
        <label>DeadLine</label>
        <input type="text" name="deadline"/><br/>
        <input type="submit" value="Add Task">
        <input type="reset" value="reset">
    </form>
` 

//Delete task form
let deleteTask=
`
<h3><u>Delete Task</u></h3>
<form action="/delete" method="GET">
        <label>Task ID</label>
        <input type="text" name="taskId"/><br/>
        <input type="submit" value="Delete Task">
        <input type="reset" value="reset">
    </form>
`
//Creating records to display task details 
let taskData=fs.readFileSync("task-records.json");
let readData=JSON.parse(taskData);
taskArray=readData;
var tableStart = `<h3><u>List Tasks</u></h3><table><tr><th>EmployeeID</th><th>TaskID</th><th>Task</th><th>Deadline</th></tr>`;
var tableEnd = `</table>`;
var tableData=`${taskArray.map(rowTemplate).join("")}`;
var finalTable=tableStart+tableData+tableEnd;


let server = http.createServer((req,res)=> {
    var pathInfo=url.parse(req.url).pathname;
    console.log(req.url)
   //if(req.url != "/favicon.ico"){
        
        if(req.url=="/")
      {
        res.setHeader("content-type","text/html");
        //table data                
        var tableStart = `<h3><u>List Tasks</u></h3><table><tr><th>EmployeeID</th><th>TaskID</th><th>Task</th><th>Deadline</th></tr>`;
        var tableEnd = `</table>`;
        var tableData=`${taskArray.map(rowTemplate).join("")}`;
        var finalTable=(taskArray.length>0)?tableStart+tableData+tableEnd:"No Records Available";
        res.end(taskForm+deleteTask+finalTable);
      }
        else if(pathInfo=="/store"){
            //res.setHeader("content-type","text/html");
            let urlDetails=req.url;
            let data = url.parse(urlDetails,true).query;
            var empId=data.empId;
            var taskId=data.taskId;
            var task=data.task;
            var deadline=data.deadline;
            var taskObj={EmployeeID:empId,TaskID:taskId,Task:task,Deadline:deadline};
            //if json file exists
            if(fs.existsSync("task-records.json"))
            {
                let taskData=fs.readFileSync("task-records.json");
                let readData=JSON.parse(taskData);
                taskArray=readData;
                taskArray.push(taskObj);
                let jsonDataString=JSON.stringify(taskArray);
                fs.writeFileSync("task-records.json",jsonDataString);
                res.setHeader("content-type","text/html");
                 //table data                
                var tableStart = `<h3><u>List Tasks</u></h3><table><tr><th>EmployeeID</th><th>TaskID</th><th>Task</th><th>Deadline</th></tr>`;
                var tableEnd = `</table>`;
                var tableData=`${taskArray.map(rowTemplate).join("")}`;
                var finalTable=(taskArray.length>0)?tableStart+tableData+tableEnd:"No Records Available";
                res.end(taskForm+deleteTask+finalTable);
                //display
            }
            else
            {
                taskArray.push(taskObj);
                let jsonDataString=JSON.stringify(taskArray);
                fs.writeFileSync("task-records.json",jsonDataString);
                res.setHeader("content-type","text/html");
                //table data                
                var tableStart = `<h3><u>List Tasks</u></h3><table><tr><th>EmployeeID</th><th>TaskID</th><th>Task</th><th>Deadline</th></tr>`;
                var tableEnd = `</table>`;
                var tableData=`${taskArray.map(rowTemplate).join("")}`;
                var finalTable=(taskArray.length>0)?tableStart+tableData+tableEnd:"No Records Available";
                res.end(taskForm+deleteTask+finalTable);
                //display
            }
             
        }else if(pathInfo=="/delete"){
            //if json file exists
            if(fs.existsSync("task-records.json"))
            {
                res.setHeader("content-type","text/html");
                let taskData=fs.readFileSync("task-records.json");
                let readData=JSON.parse(taskData);
                taskArray=readData;
                //if there are records in the json file
                if(taskArray.length!=0)
                {
                    let urlDetails=req.url;
                    let data = url.parse(urlDetails,true).query;
                    var taskId=data.taskId;
                    let counter=0;
                    for(let i=0;i<taskArray.length;i++)
                    {
                      if(taskArray[i].TaskID==taskId)
                      {
                        taskArray.splice(i,1);
                        counter=1;
                        console.log("Deleted");
                      }
                    }
                    console.log("After Delete");
                    if(counter==0)
                    {
                    // res.setHeader("content-type","text/html");
                     //table data                
                var tableStart = `<h3><u>List Tasks</u></h3><table><tr><th>EmployeeID</th><th>TaskID</th><th>Task</th><th>Deadline</th></tr>`;
                var tableEnd = `</table>`;
                var tableData=`${taskArray.map(rowTemplate).join("")}`;
                var finalTable=(taskArray.length>0)?tableStart+tableData+tableEnd:"No Records Available";
                res.write(taskForm+deleteTask+finalTable);
                //display
                     res.end("There is no such record"); 
                    } 
                    let jsonDataString=JSON.stringify(taskArray);
                    fs.writeFileSync("task-records.json",jsonDataString);
                    //res.setHeader("content-type","text/html");
                    //table data                
                var tableStart = `<h3><u>List Tasks</u></h3><table><tr><th>EmployeeID</th><th>TaskID</th><th>Task</th><th>Deadline</th></tr>`;
                var tableEnd = `</table>`;
                var tableData=`${taskArray.map(rowTemplate).join("")}`;
                var finalTable=(taskArray.length>0)?tableStart+tableData+tableEnd:"No Records Available";
                res.end(taskForm+deleteTask+finalTable);
                //display
                }
                else
                {
                   // res.setHeader("content-type","text/html");
                    //table data                
                var tableStart = `<h3><u>List Tasks</u></h3><table><tr><th>EmployeeID</th><th>TaskID</th><th>Task</th><th>Deadline</th></tr>`;
                var tableEnd = `</table>`;
                var tableData=`${taskArray.map(rowTemplate).join("")}`;
                var finalTable=(taskArray.length>0)?tableStart+tableData+tableEnd:"No Records Available";
                res.write(taskForm+deleteTask+finalTable);
                //display
                    res.end("No records Available to delete");    
                }
                
            }
            else
            {
                //res.setHeader("content-type","text/html");
               //table data                
               var tableStart = `<h3><u>List Tasks</u></h3><table><tr><th>EmployeeID</th><th>TaskID</th><th>Task</th><th>Deadline</th></tr>`;
               var tableEnd = `</table>`;
               var tableData=`${taskArray.map(rowTemplate).join("")}`;
               var finalTable=(taskArray.length>0)?tableStart+tableData+tableEnd:"No Records Available";
               res.write(taskForm+deleteTask+finalTable);
               //display
                res.end("No records Available to delete");   
            }
        }
  //}
    
});
//function to process each json record into a table row
function rowTemplate(task) {
    return `
        <tr>
          <td>${task.EmployeeID}</td>
          <td>${task.TaskID }</td>
          <td>${task.Task}</td>
          <td>${task.Deadline}</td>
        </tr>
    `;
  }

server.listen(port,()=>console.log(`Server running on port number ${port}`));