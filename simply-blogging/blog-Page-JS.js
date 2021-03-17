
var articleObjectArray =[];
var articleObjectArrayJSON;
var count=0;
//executed on page load IIFE (Immediate Invoked Function Experrssion) function
(function(){
    displayExistingArticles();
})();
//On adding each blog
function onFormSubmit(){
    //Get the form details
    var data = readFormData();
    //create JSON object and store in  session
    insertSessionArray(data);
    //retrieve from session and display blogs
    insertRecordFromSession();
    resetData();
}
//read the values from form
function readFormData() {
    var obj = {}    // empty object
    obj.articleTitle = document.getElementById("articleTitle").value;
    obj.description = document.getElementById("description").value;
    obj.addImage = document.getElementById("addImage").files[0].name;
    return obj; 
}

//create JSON object and store in  session
function insertSessionArray(data)
{
    //Logic to add existing object array to object array if session not empty
    var objEmptyCheckJSON= localStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
    if(objEmptyCheckArray!=null)
    {
        articleObjectArray=objEmptyCheckArray;
    }    
    //Push new object into array
    articleObjectArray.push(data);
    articleObjectArrayJSON=JSON.stringify(articleObjectArray);
    localStorage.setItem("articleObjectArrayJSONInfo",articleObjectArrayJSON)
}
//retrieve from session and display blogs
function insertRecordFromSession(){
    //get the JSON Array and convert to Object Array
    var obj= localStorage.getItem("articleObjectArrayJSONInfo");
    var obj1=JSON.parse(obj);
    //Loop through the object array and display the elements in seperate divs
    const div = document.createElement('div');
    div.className = 'row';
    div.id='articleComplete';
    if(obj1!=null)
    {
    count=obj1.length-1;
    }
    //Create const elements for heading,description and image
    //Add the data and images required for each element created
    //Append each element to div
    //Append div to articleBlog elemnt
    const heading = document.createElement('div');
    const description = document.createElement('div');
    const image = document.createElement('img');
    heading.id="articleHeading";
    description.id="articledescription";
    image.id="articleimage";
    heading.innerHTML=obj1[count].articleTitle;
    console.log(obj1[count].articleTitle);
    description.innerHTML=obj1[count].description;
    console.log(obj1[count].description);
    image.src=obj1[count].addImage;
    console.log(obj1[count].addImage);
    div.appendChild(heading);
    div.appendChild(description);
    div.appendChild(image);
    document.getElementById('articleBlogs').appendChild(div);
    //count++;

}
//display the existing blogs on page load
function displayExistingArticles()
{
    var obj= localStorage.getItem("articleObjectArrayJSONInfo");
    var obj1=JSON.parse(obj);
    console.log(obj1);
//If there is no existing blogs ie null Object Array   
    if(obj1!=null)
    {
 //Loop through the object array and display the elements in seperate divs
        for(var i=0;i<obj1.length;i++){
            const div = document.createElement('div');
            div.className = 'row';
            div.id='articleComplete';
            const heading = document.createElement('div');
            const description = document.createElement('div');
            const image = document.createElement('img');
            heading.id="articleHeading";
            description.id="articledescription";
            image.id="articleimage";
            heading.innerHTML=obj1[i].articleTitle;
            console.log(obj1[i].articleTitle);
            description.innerHTML=obj1[i].description;
            console.log(obj1[i].description);
            image.src=obj1[i].addImage;
            console.log(obj1[i].addImage);
            div.appendChild(heading);
            div.appendChild(description);
            div.appendChild(image);
            document.getElementById('articleBlogs').appendChild(div);
            }
    }
    count=obj1.length-1;
    

}

function resetData() {
    document.getElementById("articleTitle").value="";
    document.getElementById("description").value="";
    document.getElementById("addImage").files[0].name="";
}