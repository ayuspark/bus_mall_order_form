'use strict';

var productAll = [];
var orderedProduct = [];
var userOrder = [];

if(localStorage){
  orderedProduct = JSON.parse(localStorage.getItem('myOrders'));
  productAll = JSON.parse(localStorage.getItem('Product.all'));
}

var userName = prompt('What\'s your name?').toLowerCase();

orderedProduct.forEach(function(element){
  if(userName === element.name.toLowerCase()){
    userOrder.push(element);
  }
});

document.getElementById('user_name').textContent = 'Hello, ' + userOrder[0].name.toUpperCase() + '!';
document.getElementById('address').textContent = userOrder[0].address;
document.getElementById('city_etc').textContent = userOrder[0].city + ' ' + userOrder[0].state + ' ' + userOrder[0].zipcode;
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
  document.getElementById('order_list').removeChild(document.getElementById(e.target.id));
  for(var i = 0; i < userOrder.length; i++){
    if(userOrder[i].productList === e.target.id){
      userOrder.splice(i, 1);
    }
  }
  localStorage.setItem('myOrders', JSON.stringify(userOrder))
}

document.getElementById('order_list').addEventListener('click', deleteItem);
