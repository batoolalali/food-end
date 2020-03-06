'use strict';

var mealsItalian = [];
var italianDishs = ['Cioppino: ', 'Minestra di ceci: ', 'Pizza: ', 'Veal Milanese: ', 'Cannoli: '];
var italy1=[' Dungeness crab', ' shrimp', ' scallops', ' fish', ' tomatoes'];
var italy2=[' salt cod', ' chestnuts', ' artichoke', ' potato',  ' tomato',  ' pasta', ' cabbage'];
var italy3=[' Dough' , ' sauce' , ' cheese' , ' pepper'];
var italy4=[' dry bread crumbs',' dried thyme', ' sliced veal', ' lemon'];
var italy5=[' fried pastry dough',' ricotta filling',' butter'];
var extra=[' Drink', ' Potato', ' Agliata Sauce']

function MealItalian(dish, imgPath, ingredients) {
    this.dish = dish;
    this.price;
    this.imgPath = imgPath;
    this.ingredients=ingredients;
    // this.extraPrice;
    mealsItalian.push(this);

}


MealItalian.prototype.randomPrice = function () {

    this.price = Math.floor(Math.random() * (50 - 10 + 1) + 10);
}



MealItalian.prototype.render = function () {

    this.randomPrice();
    var myMenu = document.getElementById('italianDish');
    var ul1 = document.createElement('ul');
    myMenu.appendChild(ul1);
    

    var li1 = document.createElement('li');
    ul1.appendChild(li1);
    li1.textContent = `${this.dish} `;
    // for (var i=0; i<)
    var myImg=document.createElement('img');
    li1.appendChild(myImg);
    myImg.setAttribute('scr', this.imgPath);
    var span1=document.createElement('span');
    li1.appendChild(span1);
    span1.textContent=this.ingredients;

    var span2=document.createElement('span');
    li1.appendChild(span2);
    span2.textContent=`  ${this.price} $`;

    var myform= document.createElement('form');
    li1.appendChild(myform);

    for (var i=0; i<extra.length;i++ ){
    var input1=document.createElement('input');
    myform.appendChild(input1);
    input1.setAttribute('type', 'checkbox');
    input1.setAttribute('id', 'extra1');
    var label1=document.createElement('label');
    label1.setAttribute('for', 'extra1');
    label1.textContent=extra[i];
    myform.appendChild(label1);
}

console.log(this.ingredients);

}



var italyDish1 = new MealItalian(italianDishs[0], '../IMG/Cannolo.jpg', italy1 );
var italyDish2 = new MealItalian(italianDishs[1], '../IMG/Minestra di ceci.png', italy2 );
var italyDish3 = new MealItalian(italianDishs[2], '../IMG/italianFood.jpg', italy3 );
var italyDish4 = new MealItalian(italianDishs[3], '../IMG/pizza.jpg', italy4 );
var italyDish5 = new MealItalian(italianDishs[4], '../IMG/Veal Milanese.jpg', italy5 );

function popUp(){

for (var i = 0; i < mealsItalian.length; i++) {
    mealsItalian[i].render();

}
}
console.log(mealsItalian);
