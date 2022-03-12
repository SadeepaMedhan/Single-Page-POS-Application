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
        let newItemToCart = new Cart(itemCode,orderQty);
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
        let price = item.getItemPrice();
        let qtyForSale = i.getQtyForSale();
        let total = price*qtyForSale;
        let row = `<tr><td>${i.getCItemCode()}</td><td>${item.getItemName()}</td><td>${item.getItemPrice()}</td><td>${i.getQtyForSale()}</td><td>${total}</td></tr>`;
        $("#tableCart").append(row);
    }
}

function clearOrderItem(){
    $('#txtOrderItemCode,#txtOrderItemName,#txtOrderItemPrice,#txtOrderQtyOnHand,#txtOrderQty').val("");
    loadAllItemID();
}