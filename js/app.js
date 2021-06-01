'use strict'
let order = [];
let imgEl = ['img/shawarma.jpg', 'img/burger.jpg', 'img/pizza.jpg'];

let conta = document.getElementById('showTable');
let tableEl = document.createElement('table');
conta.appendChild(tableEl);
function Order(nameCust, foodType) {
    this.nameCust = nameCust;
    this.foodType = foodType;
    this.photo;
    this.price;
    order.push(this);
}

Order.prototype.render = function () {

    let tr1 = document.createElement('tr');
    tableEl.appendChild(tr1);
    let td = document.createElement('td');
    tr1.appendChild(td);
    td.textContent = document.createElement('img').setAttribute("src", `${this.photo}`);
    let td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent = document.createElement('p').textContent = `customer Name: ${this.nameCust}\n 
    Food Type:${this.foodType}\n Food Price ${this.price} JD`;
    btn=document.createElement('button');
    btn.addEventListener('onClick',deleteall)

}
function deleteall(){
    localStorage.removeItem('order');
}
Order.prototype.renderImg = function () {
    if (foodType === 'shawarma') {
        photo= imgEl[0];
    }
    if (foodType === 'burger') {
        photo=  imgEl[1];
    }
    if (foodType === 'pizza') {
        photo= imgEl[2];
    }
}
Order.prototype.randomPrice=function(){
price= Math.floor(Math.random() * (5 - 10) + 5); 
}
function hesderTable() {
    let tr = document.createElement('tr');
    tableEl.appendChild(tr);
    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = 'Order Image';

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'Order Ditails';
}
hesderTable();
function settingItems() {
    let order1 = JSON.stringify(order);
    localStorage.setItem('orders', order1);
}
function gettingItems() {
    let stringObject = localStorage.getItem('orders');
    let normalObject = JSON.parse(stringObject);
    if (order !== null) {
        order = normalObject;
    }
}
let foodFormEl = document.getElementById('foodForm');
foodFormEl.addEventListener('submit', foodOrder);
function foodOrder(event) {
    event.preventDefault();
    let nameCustomer = event.target.nameCust.value;
    //console.log(nameCustomer);
    let foodoType = event.target.foodType.value;
    let newOrder = new Order(nameCustomer, foodoType);
    //console.log(order);
    newOrder.render();
}
console.log(order);