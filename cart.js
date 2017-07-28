'use strict';

var orderedProduct = [];
var productAll = [];
if(localStorage){
  orderedProduct = JSON.parse(localStorage.getItem('myOrders'));
  productAll = JSON.parse(localStorage.getItem('Product.all'));
}
//USER INFO
// for(var n = 0; n < orderedProduct.length; n++){
var userOrder = [];
var userName = prompt('What\'s your name?').toLowerCase();

orderedProduct.forEach(function(element){
  if(userName === element.name.toLowerCase()){
    userOrder.push(element);
  }
});
  // var liEl = document.createElement('li');
  // var spEl = document.createElement('span');
  // var imgEl = document.createElement('img');

document.getElementById('user_name').textContent = 'Hello: ' + userOrder[0].name.toUpperCase() + '!';
document.getElementById('address').textContent = userOrder[0].address;
document.getElementById('city_etc').textContent = userOrder[0].city + ' ' + userOrder[0].state + ' ' + userOrder[0].zipCode;
document.getElementById('phone').textContent = userOrder[0].phone;

//ORDERS
for(var i = 0; i < userOrder.length; i++){
  var liEl = document.createElement('li');
  var spEl = document.createElement('span');
  var imgEl = document.createElement('img');
  var btnEl = document.createElement('button');

  productAll.forEach(function(element){
    if(element.name === userOrder[i].productList){
      liEl.setAttribute('id', element.name);
      imgEl.setAttribute('src', element.source);
      imgEl.setAttribute('alt', element.name);
      spEl.textContent = element.name.toUpperCase() + ', ' + 'Quantity: ' + orderedProduct[i].qty + ' Price: $' + Math.floor(Math.random() * 100);
      btnEl.setAttribute('id', element.name);
      btnEl.textContent = 'Delete Item';
      liEl.appendChild(imgEl);
      liEl.appendChild(spEl);
      liEl.appendChild(btnEl);
      document.getElementById('order_list').appendChild(liEl);
    }
  });
}

function deleteItem(e){
  // userOrder.forEach(function(el){
    // if(e.target.id = el.name){
      document.getElementById('order_list').removeChild(document.getElementById(e.target.id));
    // }
  // })
}

document.getElementById('order_list').addEventListener('click', deleteItem);
