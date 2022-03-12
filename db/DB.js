

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

