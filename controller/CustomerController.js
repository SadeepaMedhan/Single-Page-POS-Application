
$("#btnSaveCustomer").click(function () {
    saveCustomer();
    clearAll();
    loadAllCustomers();
});

function loadAllCustomers() {
    $("#customerTable").empty();
    for (var i of customerDB) {
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.tp}</td></tr>`;
        $("#customerTable").append(row);
    }
}

function saveCustomer() {
    let customerID = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerTP = $("#txtCusTP").val();

    //create Object
    var customerObject = {
        id:customerID,
        name:customerName,
        address:customerAddress,
        tp:customerTP
    }

    customerDB.push(customerObject);


}

function searchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            return customerDB[i];
        }
    }
}

// search customer
$("#btnSearchCus").click(function () {

    var searchID = $("#txtSearchCusID").val();

    var response = searchCustomer(searchID);
    console.log(response);

    if (response) {
        $("#cusDetailPopup").modal('show');

        $("#txtCusID").val(response.id);
        $("#txtCusName").val(response.name);
        $("#txtCusAddress").val(response.address);
        $("#txtCusTP").val(response.tp);
    }else{
        clearAll();
        alert("No Such a Customer");
    }
});

//validation
//customer regular expressions
const regExCusID = /^C[0-9]{3,4}$/;
const regExCusName = /^[A-z]{5,25}$/;
const regExCusAddress = /^[0-9/A-z. ,]{5,}$/;
const regExCusTP = /^(071|077|078|075|076)[-]?[0-9]{7}$/;


$('#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$('#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP').on('blur', function () {
    formValid();
});

//focusing events
$("#txtCusID").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }

    if (eventOb.key == "Control") {
        var typedCustomerID = $("#txtCusID").val();
        var srcCustomer = searchCustomer(typedCustomerID);
        // $("#txtCusID").val(srcCustomer.getCustomerID());
        // $("#txtCusName").val(srcCustomer.getCustomerName());
        // $("#txtCusAddress").val(srcCustomer.getCustomerAddress());
        // $("#txtCusTP").val(srcCustomer.getCustomerSalary());
    }
});

$("#txtCusName").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtCusAddress").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtCusTP").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});
// focusing events end

$("#btnSaveCustomer").attr('disabled', true);

function clearAll() {
    $('#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP').val("");
    $('#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP').css('border', '2px solid #ced4da');
    $('#txtCusID').focus();
    $("#btnSaveCustomer").attr('disabled', true);
    loadAllCustomers();
    $("#lblcusid,#lblcusname,#lblcusaddress,#lblcustp").text("");
}

function formValid() {
    var cusID = $("#txtCusID").val();
    $("#txtCusID").css('border', '2px solid green');
    $("#lblcusid").text("");
    if (regExCusID.test(cusID)) {
        var cusName = $("#txtCusName").val();
        if (regExCusName.test(cusName)) {
            $("#txtCusName").css('border', '2px solid green');
            $("#lblcusname").text("");
            var cusAddress = $("#txtCusAddress").val();
            if (regExCusAddress.test(cusAddress)) {
                var cusTP = $("#txtCusTP").val();
                var resp = regExCusTP.test(cusTP);
                $("#txtCusAddress").css('border', '2px solid green');
                $("#lblcusaddress").text("");
                if (resp) {
                    $("#txtCusTP").css('border', '2px solid green');
                    $("#lblcustp").text("");
                    return true;
                } else {
                    $("#txtCusTP").css('border', '2px solid red');
                    $("#lblcustp").text("Cus Telephone is a required field : Pattern 07********");
                    return false;
                }
            } else {
                $("#txtCusAddress").css('border', '2px solid red');
                $("#lblcusaddress").text("Cus Address is a required field : Mimum 5");
                return false;
            }
        } else {
            $("#txtCusName").css('border', '2px solid red');
            $("#lblcusname").text("Cus Name is a required field : Minimum 5, Max 25, Spaces Allowed");
            return false;
        }
    } else {
        $("#txtCusID").css('border', '2px solid red');
        $("#lblcusid").text("Cus ID is a required field : Pattern C001");
        return false;
    }
}

function checkIfValid() {
    var cusID = $("#txtCusID").val();
    if (regExCusID.test(cusID)) {
        $("#txtCusName").focus();
        var cusName = $("#txtCusName").val();
        if (regExCusName.test(cusName)) {
            $("#txtCusAddress").focus();
            var cusAddress = $("#txtCusAddress").val();
            if (regExCusAddress.test(cusAddress)) {
                $("#txtCusTP").focus();
                var cusTp = $("#txtCusTP").val();
                var resp = regExCusTP.test(cusTp);
                if (resp) {
                    let res = confirm("Do you really need to add this Customer..?");
                    if (res) {
                        saveCustomer();
                        clearAll();
                    }
                } else {
                    $("#txtCusTP").focus();
                }
            } else {
                $("#txtCusAddress").focus();
            }
        } else {
            $("#txtCusName").focus();
        }
    } else {
        $("#txtCusID").focus();
    }
}

function setButton() {
    let b = formValid();
    if (b) {
        $("#btnSaveCustomer").attr('disabled', false);
    } else {
        $("#btnSaveCustomer").attr('disabled', true);
    }
}

$('#btnSaveCustomer').click(function () {
    checkIfValid();
});
