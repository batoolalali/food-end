'use strict';

var mealsItalian = [];
var italianDishs = ['Cioppino: ', 'Minestra di ceci: ', 'Pizza: ', 'Veal Milanese: ', 'Cannoli: '];
var italy1 = [' Dungeness crab', ' shrimp', ' scallops', ' fish', ' tomatoes'];
var italy2 = [' salt cod', ' chestnuts', ' artichoke', ' potato', ' tomato', ' pasta', ' cabbage'];
var italy3 = [' Dough', ' sauce', ' cheese', ' pepper'];
var italy4 = [' dry bread crumbs', ' dried thyme', ' sliced veal', ' lemon'];
var italy5 = [' fried pastry dough', ' ricotta filling', ' butter'];
var extra = [' Drink', ' Potato', ' Agliata Sauce']

function MealItalian(dish, imgPath, ingredients) {
    this.dish = dish;
    this.price;
    this.imgPath = `../IMG/${imgPath}`;
    this.ingredients = ingredients;
    // this.extraPrice;
    mealsItalian.push(this);
}
MealItalian.prototype.randomPrice = function () {

    this.price = Math.floor(Math.random() * (25 - 10 + 1) + 10);
}
var counter = 0;

MealItalian.prototype.render = function () {

    this.randomPrice();
    var myMenu = document.getElementById('italianDish');
    var ul1 = document.createElement('ul');
    myMenu.appendChild(ul1);

    var li1 = document.createElement('li');
    ul1.appendChild(li1);
    li1.textContent = `${this.dish} `;
    // for (var i=0; i<)
    var myImg = document.createElement('img');
    li1.appendChild(myImg);
    myImg.setAttribute('src', this.imgPath);
    myImg.setAttribute('alt', "img");

    var span1 = document.createElement('span');
    li1.appendChild(span1);
    span1.textContent = this.ingredients;

    var span2 = document.createElement('span');
    li1.appendChild(span2);
    span2.textContent = `  ${this.price} $`;

    var myform = document.createElement('form');
    li1.appendChild(myform);

    for (var i = 0; i < extra.length; i++) {
        var input1 = document.createElement('input');
        myform.appendChild(input1);
        input1.setAttribute('type', 'checkbox');
        input1.setAttribute('id', `extra${counter}`);
        var label1 = document.createElement('label');
        label1.setAttribute('for', `extra${counter}`);
        label1.textContent = extra[i];
        myform.appendChild(label1);
        counter++;
        console.log(this.imgPath, 'hi');
    }

    console.log(this.ingredients);
}

var italyDish1 = new MealItalian(italianDishs[0], 'Cannolo.jpg', italy1);
var italyDish2 = new MealItalian(italianDishs[1], 'Minestra di ceci.png', italy2);
var italyDish3 = new MealItalian(italianDishs[2], 'italianFood.jpg', italy3);
var italyDish4 = new MealItalian(italianDishs[3], 'pizza.jpg', italy4);
var italyDish5 = new MealItalian(italianDishs[4], 'Veal Milanese.jpg', italy5);

function popUp() {

    for (var i = 0; i < mealsItalian.length; i++) {
        mealsItalian[i].render();
    }
}
console.log(mealsItalian);
	
// indian food
var mealsIndian = [];
var indianDishs = ['Biryani: ', ' Chaat: ', 'Aloo shimla mirch: ', 'Poha: ', 'Paratha: '];
var indian1 = [' Mixed rice', ' spices', ' vegetables', ' meats', ' plain yogurt'];
var indian2 = [' Potato patty fried', ' oil', ' sweet yogurt', ' sauces', ' tomato', ' spices'];
var indian3 = [' Green capsicum', ' potatoes sautéed', ' cumin seeds', ' onions', 'ginger-garlic paste', 'red chilli powder'];
var indian4 = [' Flattended rice', '  potato', 'turmeric', ' lemon'];
var indian5 = [' Wheat flour', ' potato mixture', ' paneer'];
var extra = [' Drink', ' Potato', ' Hot Sauce']

function MealIndian(dish, imgPath, ingredients) {
    this.dish = dish;
    this.price;
    this.imgPath = `../IMG/${imgPath}`;
    this.ingredients = ingredients;
    // this.extraPrice;
    mealsIndian.push(this);
}
MealIndian.prototype.randomPrice = function () {

    this.price = Math.floor(Math.random() * (25 - 10 + 1) + 10);
}
var counter = 0;

MealIndian.prototype.render = function () {

    this.randomPrice();
    var myMenu = document.getElementById('indianFood');
    var ul1 = document.createElement('ul');
    myMenu.appendChild(ul1);

    var li1 = document.createElement('li');
    ul1.appendChild(li1);
    li1.textContent = `${this.dish} `;
    // for (var i=0; i<)
    var myImg = document.createElement('img');
    li1.appendChild(myImg);
    myImg.setAttribute('src', this.imgPath);
    myImg.setAttribute('alt', "img");

    var span1 = document.createElement('span');
    li1.appendChild(span1);
    span1.textContent = this.ingredients;

    var span2 = document.createElement('span');
    li1.appendChild(span2);
    span2.textContent = `  ${this.price} $`;

    var myform = document.createElement('form');
    li1.appendChild(myform);

    for (var i = 0; i < extra.length; i++) {
        var input1 = document.createElement('input');
        myform.appendChild(input1);
        input1.setAttribute('type', 'checkbox');
        input1.setAttribute('id', `extra${counter}`);
        var label1 = document.createElement('label');
        label1.setAttribute('for', `extra${counter}`);
        label1.textContent = extra[i];
        myform.appendChild(label1);
        counter++;
        console.log(this.imgPath, 'hi');
    }

    console.log(this.ingredients);
}

var indianDish1 = new MealItalian(indianDishs[0], 'biryani.jpg', indian1);
var indianDish2 = new MealItalian(indianDishs[1], 'cheat.png', indian2);
var indianDish3 = new MealItalian(indianDishs[2], 'Alooshimlamirch.jpg', indian3);
var indianDish4 = new MealItalian(indianDishs[3], 'poha.jpg', indian4);
var indianDish5 = new MealItalian(indianDishs[4], 'Mintparatha.jpg', indian5);

function popUp() {

    for (var i = 0; i < mealsIndian.length; i++) {
        mealsIndian[i].render();
    }
}
console.log(mealsIndian);
