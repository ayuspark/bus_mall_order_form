'use strict';

var orderedProduct = [];
var productAll = []; //equals myOrders from index.html
if(localStorage){
  orderedProduct = JSON.parse(localStorage.getItem('myOrders'));
  productAll = JSON.parse(localStorage.getItem('Product.all'));
}
//USER INFO
for(var n = 0; n < orderedProduct.length; n++){
  var liEl = document.createElement('li');
  var spEl = document.createElement('span');
  var imgEl = document.createElement('img');
  liEl.textContent = 'Hello: ' + orderedProduct[n].name + '!';
   orderedProduct[n].address;
  document.getElementById('city_etc').innerHTML = orderedProduct[n].city + ' ' + orderedProduct.state + ' ' + orderedProduct[n].zipCode;
  document.getElementById('phone').innerHTML = orderedProduct[n].phone;


//ORDERS
  for(var i = 0; i < orderedProduct.length; i++){
    liEl = document.createElement('li');
    spEl = document.createElement('span');
    imgEl = document.createElement('img');

    productAll.forEach(function(element){
      if(element.name === orderedProduct[i].productList){
        imgEl.setAttribute("src", element.source);
        imgEl.setAttribute("alt", element.name);
        spEl.textContent = element.name.toUpperCase() + ', ' + 'Quantity: ' + orderedProduct[i].qty + ' Price: $' + Math.floor(Math.random()*100);
        liEl.appendChild(imgEl);
        liEl.appendChild(spEl);
        document.getElementById('order_list').appendChild(liEl);
      }
    });
  }
}
