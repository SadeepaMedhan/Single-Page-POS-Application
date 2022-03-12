function loadCusIds(){
    var select = document.getElementById("inputCustomer");
    loadCusDetails(select.options[select.selectedIndex].value);
}

function loadItemCodes(){
    var select = document.getElementById("inputItem");
    loadItemDetails(select.options[select.selectedIndex].value);
}

$("#btnAddToCart").click(function () {
    var itemCode = $("#txtOrderItemCode").val();
    var itemName = $("#txtOrderItemName").val();
    var itemPrice = $("#txtOrderItemPrice").val();
    var itemQty = $("#txtOrderQtyOnHand").val();
    var orderQty = $("#txtOrderQty").val();

    if (regExItemQty.test(orderQty)) {

        var itemTotal = itemPrice*orderQty;
        let newItemToCart = new Cart(itemCode,orderQty,itemTotal);
        addCart(newItemToCart);
        loadCartAll();

        $("#txtOrderQty").css('border', '2px solid #ced4da');
        clearOrderItem();
    } else {
        $("#txtOrderQty").css('border', '2px solid red');
    }
});

function loadCartAll() {
    $("#tableCart").empty();
    for (var i of cartDB) {
        let item = searchItem(i.getCItemCode());
        let row = `<tr><td>${i.getCItemCode()}</td><td>${item.getItemName()}</td><td>${item.getItemPrice()}</td><td>${i.getQtyForSale()}</td><td>${i.getTotPrice()}</td></tr>`;
        $("#tableCart").append(row);
    }
    calculate();
}

function clearOrderItem(){
    $('#txtOrderItemCode,#txtOrderItemName,#txtOrderItemPrice,#txtOrderQtyOnHand,#txtOrderQty').val("");
    loadAllItemID();
}

function calculate(){
    var total = 0;
    for (var i of cartDB) {
        total += i.getTotPrice();
    }
   $("#lblTotalPrice").text("Total : "+total+".00 Rs/=");
   $("#lblSubTotal").text("SubTotal : "+total+".00 Rs/=");
}