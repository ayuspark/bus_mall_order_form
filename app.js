'use strict';

var myOrders = [];

var Order = function(productList, qty, name, address, city, state, zipcode, phone, creditCard){
  this.productList =
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
