

var customerDB = new Array();
var itemDB = new Array();



function saveCustomer(customer) {
    console.log(customer);
    customerDB.push(customer);
    $("#customerTable > tr").click(function () {
        $("#txtCusID").val($(this).children(":eq(0)").text());
        $("#txtCusName").val($(this).children(":eq(1)").text());
        $("#txtCusAddress").val($(this).children(":eq(3)").text());
        $("#txtCusTP").val($(this).children(":eq(4)").text());
    });
}

function updateCustomer(id, name, address , tp){
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCusId() === id) {
            customerDB[i].setCusName(name);
            customerDB[i].setCusAddress(address);
            customerDB[i].setCusTP(tp);
            return true;
        }
    }
    return false;
}

function searchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCusId() === id) {
            return customerDB[i];
        }
    }
    return false;
}

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCusId() === id) {

            customerDB.splice(i, 1);
            $("#customerTable").empty();
            loadAllCustomers();
            clearAll();
        }
    }
    return false;
}


function saveItem(item) {
    //console.log(item);
    itemDB.push(item);
    $("#itemTable > tr").click(function () {
        $("#txtItemCode").val($(this).children(":eq(0)").text());
        $("#txtItemName").val($(this).children(":eq(1)").text());
        $("#txtItemQty").val($(this).children(":eq(3)").text());
        $("#txtItemPrice").val($(this).children(":eq(4)").text());
    });
}

function updateItem(code, name, qty , price){
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemId() === code) {
            itemDB[i].setItemName(name);
            itemDB[i].setItemQty(qty);
            itemDB[i].setItemPrice(price);
            return true;
        }
    }
    return false;
}

function searchItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemId() === code) {
            return itemDB[i];
        }
    }
    return false;
}

function deleteItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemId() === code) {

            itemDB.splice(i, 1);
            $("#itemTable").empty();
            loadAllItems();
            clearAllItem();
        }
    }
    return false;
}