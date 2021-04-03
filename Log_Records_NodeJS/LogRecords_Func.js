var obj=require("readline-sync");
let fs=require("fs");

function writeLogData(){
if(fs.existsSync("log-records.json"))
{
    let obj=require("readline-sync");
    let logData=fs.readFileSync("log-records.json");
    let jsonDataArray=new Array();
    let readData=JSON.parse(logData);
    jsonDataArray=readData;
    let recordNumber=obj.question("How many records you want to store");
    for(let i=0;i<recordNumber;i++)
    {
        
        let obj=require("readline-sync");
        let firstName=obj.question("Enter the First Name :");
        let lastName=obj.question("Enter the Last Name :");
        let gender=obj.question("Enter the Gender :");
        let email=obj.question("Enter the Email :");
        let d=new Date();
        let logDate=d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear();
        let logTime=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
        var jsonData1={"firstName":firstName,"lastName":lastName,"gender":gender,"email":email,"logDate":logDate,"logTime":logTime};
        debugger;
        jsonDataArray.push(jsonData1);
    }
    let jsonDataString=JSON.stringify(jsonDataArray);
    fs.writeFileSync("log-records.json",jsonDataString);

}
else
{
    let recordNumber=obj.question("How many records you want to store");
    let jsonDataArray=new Array();
    for(let i=0;i<recordNumber;i++)
    {
        
        let obj=require("readline-sync");
        let firstName=obj.question("Enter the First Name :");
        let lastName=obj.question("Enter the Last Name :");
        let gender=obj.question("Enter the Gender :");
        let email=obj.question("Enter the Email :");
        let d=new Date();
        let logDate=d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear();
        let logTime=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
        var jsonData1={"firstName":firstName,"lastName":lastName,"gender":gender,"email":email,"logDate":logDate,"logTime":logTime};
        debugger;
        jsonDataArray.push(jsonData1);
    }
    let jsonDataString=JSON.stringify(jsonDataArray);
    fs.writeFileSync("log-records.json",jsonDataString);
}

}

function displayLogData(){
    if(fs.existsSync("log-records.json"))
    {
        let obj=require("readline-sync");
    let logData=fs.readFileSync("log-records.json");
    let jsonDataArray=new Array();
    let readData=JSON.parse(logData);
    jsonDataArray=readData;
    debugger;
    for(let record of jsonDataArray)
    {
      console.log("The FirstName is : "+record.firstName);
      console.log("The LastName is : "+record.lastName);
      console.log("The Gender is : "+record.gender);
      console.log("The Email is : "+record.email);
      console.log("The date of entry  is : "+record.logDate);
      console.log("The time of entry  is : "+record.logTime);
      console.log();
    }
    }
    else{
        console.log("There are no entries yet");
    }   
    
}

module.exports={writeLogData,displayLogData}

