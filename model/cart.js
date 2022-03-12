function Cart(code,qtyForSale){
    var __code=code;
    var __qtyForSale =qtyForSale;

    this.setCode=function (code){
        __code=code;
    }
    this.setQtyForSale=function (qty){
        __qtyForSale=qty;
    }

    this.getCItemCode=function (){
        return __code;
    }
    this.getQtyForSale = function (){
        return __qtyForSale;
    }

}