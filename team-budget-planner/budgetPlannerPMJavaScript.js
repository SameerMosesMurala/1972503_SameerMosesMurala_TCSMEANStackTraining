
//Budget Details Array
var budgetStringArray =[];
var budgetStringArrayJSON;

function onFormSubmit(){
    //alert("Event generated...")
    //read form data
    var data = readFormData();
    //create JSON object and store in  session
    insertSessionArray(data);
    //empObj.push(data);      //in empObj
}
//read form data
function readFormData() {
    var obj = {}    // empty object
    obj.clientName = document.getElementById("clientName").value;
    obj.projectName = document.getElementById("projectName").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);
    //totalCost=totalCost+parseInt(obj.age);
    //displayCost(totalCost);//displaying total cost 
    return obj; 
}
//create JSON object and store in  session
function insertSessionArray(data)
{
    //Logic to add existing object array to object array if session not empty
    var objEmptyCheckJSON= sessionStorage.getItem("budgetStringArrayInfo");
    var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
    //if
    if(objEmptyCheckArray!=null)
    {
        budgetStringArray=objEmptyCheckArray;
    }
     //   console.log("Empty");
    //}
    
    //Push new object into array
    budgetStringArray.push(data);
    console.log(budgetStringArray);
     budgetStringArrayJSON=JSON.stringify(budgetStringArray);
    console.log(budgetStringArrayJSON);
    sessionStorage.setItem("budgetStringArrayInfo",budgetStringArrayJSON)
}
//Reset Values of the Budget Text Box
function resetData() {
    document.getElementById("clientName").value="";
    document.getElementById("projectName").value="";
    document.getElementById("budget").value="";
}

