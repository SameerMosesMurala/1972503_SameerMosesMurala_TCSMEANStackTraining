(function () {
    selectedItemsDisplay();
    cartSize();
})();
//item class
var ItemClass = /** @class */ (function () {
    function ItemClass(name, price) {
        this.name = name;
        this.price = price;
    }
    return ItemClass;
}());
//Item Array
var itemObjectArray = [];
var itemObjectArrayJSON;
var totalNumberOfItems = 0;
//Item Quantity List
var Item1AddedQuantity = 0;
var Item2AddedQuantity = 0;
var Item3AddedQuantity = 0;
var Item4AddedQuantity = 0;
var Item5AddedQuantity = 0;
var Item6AddedQuantity = 0;
function cartSize() {
    var cartItemsSize = 0;
    var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
    if (objEmptyCheckArray != null) {
        itemObjectArray = objEmptyCheckArray;
        cartItemsSize = itemObjectArray.length;
        document.getElementById("cartSizeNumber").innerHTML = "Cart Size: " + cartItemsSize.toString();
    }
    else {
        document.getElementById("cartSizeNumber").innerHTML = "Cart Size: " + cartItemsSize.toString();
    }
}
function selectedItemsDisplay() {
    var item1JSON = sessionStorage.getItem("Item1AddedQuantityJSONInfo");
    var Item1AddedQuantityFromJSON = JSON.parse(item1JSON);
    if (Item1AddedQuantityFromJSON == 1) {
        var elementItem1 = document.getElementById("Item1Selected");
        elementItem1.innerHTML = "Selected";
    }
    var item2JSON = sessionStorage.getItem("Item2AddedQuantityJSONInfo");
    var Item2AddedQuantityFromJSON = JSON.parse(item2JSON);
    if (Item2AddedQuantityFromJSON == 1) {
        var elementItem2 = document.getElementById("Item2Selected");
        elementItem2.innerHTML = "Selected";
    }
    var item3JSON = sessionStorage.getItem("Item3AddedQuantityJSONInfo");
    var Item3AddedQuantityFromJSON = JSON.parse(item3JSON);
    if (Item3AddedQuantityFromJSON == 1) {
        var elementItem3 = document.getElementById("Item3Selected");
        elementItem3.innerHTML = "Selected";
    }
    var item4JSON = sessionStorage.getItem("Item4AddedQuantityJSONInfo");
    var Item4AddedQuantityFromJSON = JSON.parse(item4JSON);
    if (Item4AddedQuantityFromJSON == 1) {
        var elementItem4 = document.getElementById("Item4Selected");
        elementItem4.innerHTML = "Selected";
    }
    var item5JSON = sessionStorage.getItem("Item5AddedQuantityJSONInfo");
    var Item5AddedQuantityFromJSON = JSON.parse(item5JSON);
    if (Item5AddedQuantityFromJSON == 1) {
        var elementItem5 = document.getElementById("Item5Selected");
        elementItem5.innerHTML = "Selected";
    }
    var item6JSON = sessionStorage.getItem("Item6AddedQuantityJSONInfo");
    var Item6AddedQuantityFromJSON = JSON.parse(item6JSON);
    if (Item6AddedQuantityFromJSON == 1) {
        var elementItem6 = document.getElementById("Item6Selected");
        elementItem6.innerHTML = "Selected";
    }
}
function Item1Add() {
    var item1JSON = sessionStorage.getItem("Item1AddedQuantityJSONInfo");
    var Item1AddedQuantityFromJSON = JSON.parse(item1JSON);
    var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
    if (objEmptyCheckArray != null) {
        itemObjectArray = objEmptyCheckArray;
    }
    Item1AddedQuantity = Item1AddedQuantityFromJSON + 1;
    if (Item1AddedQuantity < 2) {
        var item1 = { name: "DELL Laptop", price: 70000 };
        itemObjectArray.push(item1);
        itemObjectArrayJSON = JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
        var Item1AddedQuantityJSON = JSON.stringify(Item1AddedQuantity);
        sessionStorage.setItem("Item1AddedQuantityJSONInfo", Item1AddedQuantityJSON);
        var elementItem1 = document.getElementById("Item1Selected");
        elementItem1.innerHTML = "Selected";
        cartSize();
    }
}
function Item1Delete() {
    var item1JSON = sessionStorage.getItem("Item1AddedQuantityJSONInfo");
    var Item1AddedQuantityFromJSON = JSON.parse(item1JSON);
    if (Item1AddedQuantityFromJSON != null) {
        var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
        itemObjectArray = objEmptyCheckArray;
        for (var i = 0; i < itemObjectArray.length; i++) {
            if (itemObjectArray[i].name == "DELL Laptop") {
                itemObjectArray.splice(i, 1);
                itemObjectArrayJSON = JSON.stringify(itemObjectArray);
                sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
                var Item1AddedQuantityJSON = JSON.stringify(0);
                sessionStorage.setItem("Item1AddedQuantityJSONInfo", Item1AddedQuantityJSON);
            }
        }
        var elementItem1 = document.getElementById("Item1Selected");
        elementItem1.innerHTML = "";
        cartSize();
    }
}
function Item2Add() {
    var item2JSON = sessionStorage.getItem("Item2AddedQuantityJSONInfo");
    var Item2AddedQuantityFromJSON = JSON.parse(item2JSON);
    var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
    if (objEmptyCheckArray != null) {
        itemObjectArray = objEmptyCheckArray;
    }
    Item2AddedQuantity = Item2AddedQuantityFromJSON + 1;
    if (Item2AddedQuantity < 2) {
        var item2 = { name: "Iphone", price: 100000 };
        itemObjectArray.push(item2);
        itemObjectArrayJSON = JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
        var Item2AddedQuantityJSON = JSON.stringify(Item2AddedQuantity);
        sessionStorage.setItem("Item2AddedQuantityJSONInfo", Item2AddedQuantityJSON);
        var elementItem2 = document.getElementById("Item2Selected");
        elementItem2.innerHTML = "Selected";
        cartSize();
    }
}
function Item2Delete() {
    var item2JSON = sessionStorage.getItem("Item2AddedQuantityJSONInfo");
    var Item2AddedQuantityFromJSON = JSON.parse(item2JSON);
    if (Item2AddedQuantityFromJSON != null) {
        var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
        itemObjectArray = objEmptyCheckArray;
        for (var i = 0; i < itemObjectArray.length; i++) {
            if (itemObjectArray[i].name == "Iphone") {
                itemObjectArray.splice(i, 1);
                itemObjectArrayJSON = JSON.stringify(itemObjectArray);
                sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
                var Item2AddedQuantityJSON = JSON.stringify(0);
                sessionStorage.setItem("Item2AddedQuantityJSONInfo", Item2AddedQuantityJSON);
            }
        }
        var elementItem2 = document.getElementById("Item2Selected");
        elementItem2.innerHTML = "";
        cartSize();
    }
}
function Item3Add() {
    var item3JSON = sessionStorage.getItem("Item3AddedQuantityJSONInfo");
    var Item3AddedQuantityFromJSON = JSON.parse(item3JSON);
    Item3AddedQuantity = Item3AddedQuantityFromJSON + 1;
    var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
    if (objEmptyCheckArray != null) {
        itemObjectArray = objEmptyCheckArray;
    }
    if (Item3AddedQuantity < 2) {
        var item3 = { name: "IWatch", price: 50000 };
        itemObjectArray.push(item3);
        itemObjectArrayJSON = JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
        var Item3AddedQuantityJSON = JSON.stringify(Item3AddedQuantity);
        sessionStorage.setItem("Item3AddedQuantityJSONInfo", Item3AddedQuantityJSON);
        var elementItem3 = document.getElementById("Item3Selected");
        elementItem3.innerHTML = "Selected";
        cartSize();
    }
}
function Item3Delete() {
    var item3JSON = sessionStorage.getItem("Item3AddedQuantityJSONInfo");
    var Item3AddedQuantityFromJSON = JSON.parse(item3JSON);
    if (Item3AddedQuantityFromJSON != null) {
        var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
        itemObjectArray = objEmptyCheckArray;
        for (var i = 0; i < itemObjectArray.length; i++) {
            if (itemObjectArray[i].name == "IWatch") {
                itemObjectArray.splice(i, 1);
                itemObjectArrayJSON = JSON.stringify(itemObjectArray);
                sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
                var Item3AddedQuantityJSON = JSON.stringify(0);
                sessionStorage.setItem("Item3AddedQuantityJSONInfo", Item3AddedQuantityJSON);
            }
        }
        var elementItem3 = document.getElementById("Item3Selected");
        elementItem3.innerHTML = "";
        cartSize();
    }
}
function Item4Add() {
    var item4JSON = sessionStorage.getItem("Item4AddedQuantityJSONInfo");
    var Item4AddedQuantityFromJSON = JSON.parse(item4JSON);
    Item4AddedQuantity = Item4AddedQuantityFromJSON + 1;
    var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
    if (objEmptyCheckArray != null) {
        itemObjectArray = objEmptyCheckArray;
    }
    if (Item4AddedQuantity < 2) {
        var item4 = { name: "FitBit", price: 20000 };
        itemObjectArray.push(item4);
        itemObjectArrayJSON = JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
        var Item4AddedQuantityJSON = JSON.stringify(Item4AddedQuantity);
        sessionStorage.setItem("Item4AddedQuantityJSONInfo", Item4AddedQuantityJSON);
        var elementItem4 = document.getElementById("Item4Selected");
        elementItem4.innerHTML = "Selected";
        cartSize();
    }
}
function Item4Delete() {
    var item4JSON = sessionStorage.getItem("Item4AddedQuantityJSONInfo");
    var Item4AddedQuantityFromJSON = JSON.parse(item4JSON);
    if (Item4AddedQuantityFromJSON != null) {
        var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
        itemObjectArray = objEmptyCheckArray;
        for (var i = 0; i < itemObjectArray.length; i++) {
            if (itemObjectArray[i].name == "FitBit") {
                itemObjectArray.splice(i, 1);
                itemObjectArrayJSON = JSON.stringify(itemObjectArray);
                sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
                var Item4AddedQuantityJSON = JSON.stringify(0);
                sessionStorage.setItem("Item4AddedQuantityJSONInfo", Item4AddedQuantityJSON);
            }
        }
        var elementItem4 = document.getElementById("Item4Selected");
        elementItem4.innerHTML = "";
        cartSize();
    }
}
function Item5Add() {
    var item5JSON = sessionStorage.getItem("Item5AddedQuantityJSONInfo");
    var Item5AddedQuantityFromJSON = JSON.parse(item5JSON);
    Item5AddedQuantity = Item5AddedQuantityFromJSON + 1;
    var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
    if (objEmptyCheckArray != null) {
        itemObjectArray = objEmptyCheckArray;
    }
    if (Item5AddedQuantity < 2) {
        var item5 = { name: "FossilWatch", price: 50000 };
        itemObjectArray.push(item5);
        itemObjectArrayJSON = JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
        var Item5AddedQuantityJSON = JSON.stringify(Item5AddedQuantity);
        sessionStorage.setItem("Item5AddedQuantityJSONInfo", Item5AddedQuantityJSON);
        var elementItem5 = document.getElementById("Item5Selected");
        elementItem5.innerHTML = "Selected";
        cartSize();
    }
}
function Item5Delete() {
    var item5JSON = sessionStorage.getItem("Item5AddedQuantityJSONInfo");
    var Item5AddedQuantityFromJSON = JSON.parse(item5JSON);
    if (Item5AddedQuantityFromJSON != null) {
        var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
        itemObjectArray = objEmptyCheckArray;
        for (var i = 0; i < itemObjectArray.length; i++) {
            if (itemObjectArray[i].name == "FossilWatch") {
                itemObjectArray.splice(i, 1);
                itemObjectArrayJSON = JSON.stringify(itemObjectArray);
                sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
                var Item5AddedQuantityJSON = JSON.stringify(0);
                sessionStorage.setItem("Item5AddedQuantityJSONInfo", Item5AddedQuantityJSON);
            }
        }
        var elementItem5 = document.getElementById("Item5Selected");
        elementItem5.innerHTML = "";
        cartSize();
    }
}
function Item6Add() {
    var item6JSON = sessionStorage.getItem("Item6AddedQuantityJSONInfo");
    var Item6AddedQuantityFromJSON = JSON.parse(item6JSON);
    Item6AddedQuantity = Item6AddedQuantityFromJSON + 1;
    var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
    if (objEmptyCheckArray != null) {
        itemObjectArray = objEmptyCheckArray;
    }
    if (Item6AddedQuantity < 2) {
        var item6 = { name: "Lenovo ThinkPad", price: 40000 };
        itemObjectArray.push(item6);
        itemObjectArrayJSON = JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
        var Item6AddedQuantityJSON = JSON.stringify(Item6AddedQuantity);
        sessionStorage.setItem("Item6AddedQuantityJSONInfo", Item6AddedQuantityJSON);
        var elementItem6 = document.getElementById("Item6Selected");
        elementItem6.innerHTML = "Selected";
        cartSize();
    }
}
function Item6Delete() {
    var item6JSON = sessionStorage.getItem("Item6AddedQuantityJSONInfo");
    var Item6AddedQuantityFromJSON = JSON.parse(item6JSON);
    if (Item6AddedQuantityFromJSON != null) {
        var objEmptyCheckJSON = sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray = JSON.parse(objEmptyCheckJSON);
        itemObjectArray = objEmptyCheckArray;
        for (var i = 0; i < itemObjectArray.length; i++) {
            if (itemObjectArray[i].name == "Lenovo ThinkPad") {
                itemObjectArray.splice(i, 1);
                itemObjectArrayJSON = JSON.stringify(itemObjectArray);
                sessionStorage.setItem("articleObjectArrayJSONInfo", itemObjectArrayJSON);
                var Item6AddedQuantityJSON = JSON.stringify(0);
                sessionStorage.setItem("Item6AddedQuantityJSONInfo", Item6AddedQuantityJSON);
            }
        }
        var elementItem6 = document.getElementById("Item6Selected");
        elementItem6.innerHTML = "";
        cartSize();
    }
}
