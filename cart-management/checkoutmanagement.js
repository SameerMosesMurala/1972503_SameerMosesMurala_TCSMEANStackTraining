(function () {
    cartItemDisplay();
    getTotalBudget();
})();
var itemObjectArray = [];
function cartItemDisplay() {
    var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
    if (objEmptyCheckArray == null) {
        console.log("No Items To display");
    }
    else {
        itemObjectArray = objEmptyCheckArray;
        var table = document.getElementById("checkoutTable");
        var body = table.getElementsByTagName("tbody")[0];
        for (var i = 0; i < itemObjectArray.length; i++) {
            var newRow = body.insertRow(-1); // row created 
            var cell1 = newRow.insertCell(0); // cell created 
            cell1.innerHTML = itemObjectArray[i].name; // value placed 
            var cell2 = newRow.insertCell(1); // cell created 
            cell2.innerHTML = itemObjectArray[i].price; // value placed
        }
    }
}
function getTotalBudget() {
    var totalCost = 0;
    var obj = sessionStorage.getItem("articleObjectArrayJSONInfo");
    var obj1 = JSON.parse(obj);
    for (var i = 0; i < obj1.length; i++) {
        totalCost = totalCost + parseInt(obj1[i].price);
    }
    console.log(totalCost);
    document.getElementById("totalCost").innerHTML = totalCost.toString();
}
