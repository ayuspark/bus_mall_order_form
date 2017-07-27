'use strict';

var myOrders = [];

var Order = function(productList, qty, name, address, city, state, zipcode, phone, creditCard){
  this.productList = productList;
  this.qty = qty;
  this.Name = name;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
  this.phone = phone;
  this.creditCard = creditCard;
  this.order = [];
  // this.calcOrderTotal = function(){
  //   for(var i = 0; i < myOrders.length; i++){
  //     this.order.push(Math.ceil(this.quantity[i] * 2));
  //     this.orderTotal += this.order[i];
  //   }
  // };
  this.orderTotal = 0;
  myOrders.push(this);
};
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//PRODUCT CONSTRUCTOR
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Product(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';
  this.qty = 0;
  Product.all.push(this);
}

Product.all = [];
Product.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
Product.allQty = [];

for(var i = 0; i < Product.allNames.length; i++){
  new Product(Product.allNames[i]);
} //MAKING 20 INSTANCES

for(var n = 0; n < Product.allNames.length; n++){
  var optionEl = document.createElement('option');
  optionEl.textContent = Product.allNames[n];
  document.getElementById('productList').appendChild(optionEl);
}//POPULATE DROPDOWN PRODUCT LIST
