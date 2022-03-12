function ItemDTO(id, name, description, qty, price){
    var __id=id;
    var __name=name;
    var __description=description;
    var __qty =qty;
    var __price = price;

    this.setItemID=function (id){
        __id=id;
    }
    this.setItemName=function (name){
        __name=name;
    }
    this.setItemDescription=function (description){
        __description=name;
    }
    this.setItemQty=function (qty){
        __qty=qty;
    }
    this.setItemPrice=function (price){
        __price=price;
    }
    this.getItemId=function (){
        return __id;
    }
    this.getItemName = function(){
        return __name;
    }
    this.getItemDescription = function(){
        return __description;
    }
    this.getItemQty = function (){
        return __qty;
    }
    this.getItemPrice = function (){
        return __price;
    }
}