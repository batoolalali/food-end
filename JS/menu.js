'use strict';

var mealsItalian = [];
var italianDishs = ['Cioppino: ', 'Minestra di ceci: ', 'Pizza: ', 'Veal Milanese: ', 'Cannoli: '];
var italy1 = [' Dungeness crab', ' shrimp', ' scallops', ' fish', ' tomatoes'];
var italy2 = [' salt cod', ' chestnuts', ' artichoke', ' potato', ' tomato', ' pasta', ' cabbage'];
var italy3 = [' Dough', ' sauce', ' cheese', ' pepper'];
var italy4 = [' dry bread crumbs', ' dried thyme', ' sliced veal', ' lemon'];
var italy5 = [' fried pastry dough', ' ricotta filling', ' butter'];
var extraToItalian = [' Drink', ' Potato', ' Agliata Sauce']

function MealItalian(dish, imgPath, ingredients) {
    this.dish = dish;
    this.price;
    this.imgPath = `IMG/${imgPath}`;
    this.ingredients = ingredients;
    this.extraPrice=0;
    mealsItalian.push(this);
}
MealItalian.prototype.randomPrice = function () {

    this.price = Math.floor(Math.random() * (12 - 5 + 1) + 5);
}
var c=mealsItalian.length;
console.log(c);

var counter = 0;
var inputCounter=0;
var formCounter=0;
MealItalian.prototype.render = function () {

    this.randomPrice();
    var myMenu = document.getElementById('italianDish');
    var ul1 = document.createElement('ul');
    myMenu.appendChild(ul1);

    var li1 = document.createElement('li');
    ul1.appendChild(li1);
    li1.textContent = `${this.dish} `;

    var addDish2 =document.createElement('input');
    addDish2.setAttribute('type','checkbox');
    li1.appendChild(addDish2);

    var myImg = document.createElement('img');
    myMenu.appendChild(myImg);
    myImg.setAttribute('src', this.imgPath);
    myImg.setAttribute('alt', "img");

    var span1 = document.createElement('span');
    li1.appendChild(span1);
    span1.textContent = this.ingredients;

    var span2 = document.createElement('span');
    li1.appendChild(span2);
    span2.textContent = `  ${this.price} $`;

    var numDish2 =document.createElement('input');
    numDish2.setAttribute('type','number');
    numDish2.setAttribute('name','points');
    numDish2.setAttribute('step','1');
    li1.appendChild(numDish2);

    var myform = document.createElement('form');
    myform.setAttribute('id', `form${formCounter}`);
    li1.appendChild(myform);

    for (var i = 0; i < extraToItalian.length; i++) {
        var input1 = document.createElement('input');
        myform.appendChild(input1);
        input1.setAttribute('type', 'checkbox');
        input1.setAttribute('id', `extraToItalian${counter}`);
        var label1 = document.createElement('label');
        label1.setAttribute('for', `extraToItalian${counter}`);
        label1.textContent = extraToItalian[i];
        myform.appendChild(label1);
        counter++;
        console.log(this.imgPath, 'hi');

    }
 
    
   
   
    var theForm = document.getElementById(`form${formCounter}`);
    theForm.addEventListener('submit', function(event){
        event.preventDefault();
         for(var i=0;i<mealsItalian.length;i++){
            for(var j=(i*3) ;j<(i*3+3);j++){
                var checked1 = document.getElementById(`extraToItalian${j}`).checked;

                if(checked1 == true){
                    
                    mealsItalian[i].price =mealsItalian[i].price + 2;
                   
                   
                   
                }
            }          

        }
             
console.log(mealsItalian[0].price, "price");
console.log(mealsItalian[0].dish);
console.log(mealsItalian[1].price, "price");
console.log(mealsItalian[1].dish);
console.log(mealsItalian[2].price, "price");
console.log(mealsItalian[2].dish);
console.log(mealsItalian[3].price, "price");
console.log(mealsItalian[3].dish);
console.log(mealsItalian[4].price, "price");
console.log(mealsItalian[4].dish);
    
   });

formCounter++;
    console.log(this.ingredients);


}



var italyDish1 = new MealItalian(italianDishs[0], 'Cioppino.jpg', italy1);
var italyDish2 = new MealItalian(italianDishs[1], 'Minestra di ceci.png', italy2);
var italyDish3 = new MealItalian(italianDishs[2], 'pizza.jpg', italy3);
var italyDish4 = new MealItalian(italianDishs[3], 'Veal Milanese.jpg', italy4);
var italyDish5 = new MealItalian(italianDishs[4], 'Cannolo.jpg', italy5);
var pop=0;
function popUp() {

    if (pop==0){
    for (var i = 0; i < mealsItalian.length; i++) {
        mealsItalian[i].render();
        
    }
    var addOrder= document.createElement('input');
        addOrder.setAttribute('id', `add${inputCounter}`);
        addOrder.setAttribute('type', 'submit');
        var myform =document.getElementById("form4");
        myform.appendChild(addOrder);
        inputCounter++;
pop++;}
}
console.log(mealsItalian);
	
//indian food
var mealsIndian = [];
var indianDishs = ['Biryani: ', ' Chaat: ', 'Aloo shimla mirch: ', 'Poha: ', 'Paratha: '];
var indian1 = [' Mixed rice', ' spices', ' vegetables', ' meats', ' plain yogurt'];
var indian2 = [' Potato patty fried', ' oil', ' sweet yogurt', ' sauces', ' tomato', ' spices'];
var indian3 = [' Green capsicum', ' potatoes sautéed', ' onions', 'red chilli powder'];
var indian4 = [' Flattended rice', '  potato', 'turmeric', ' lemon'];
var indian5 = [' Wheat flour', ' potato mixture', ' paneer'];
var extraTOIndian = [' Rice', ' Squared onions', ' Hot Sauce'];

function MealIndian(dish, imgPath, ingredients) {

    this.dish = dish;
    this.price;
    this.imgPath = `IMG/${imgPath}`;
    this.ingredients = ingredients;
    mealsIndian.push(this);
}
MealIndian.prototype.randomPrice = function () {

    this.price = Math.floor(Math.random() * (12 - 5 + 1) + 5);
}

var formCounter1=0;



MealIndian.prototype.render1 = function () {

    this.randomPrice();
var myMenu1 = document.getElementById('indianDish');
var ul2 = document.createElement('ul');
myMenu1.appendChild(ul2);

    console.log('in Indian render');
    var li1 = document.createElement('li');
    ul2.appendChild(li1);
    li1.textContent = `${this.dish} `;
    
    var addDish =document.createElement('input');
    addDish.setAttribute('type','checkbox');
    li1.appendChild(addDish);


    var myImg = document.createElement('img');
    myMenu1.appendChild(myImg);
    myImg.setAttribute('src', this.imgPath);
    myImg.setAttribute('alt', "img");

    var span1 = document.createElement('span');
    li1.appendChild(span1);
    span1.textContent = this.ingredients;

    var span2 = document.createElement('span');
    li1.appendChild(span2);
    span2.textContent = `  ${this.price} $`;

    var numDish =document.createElement('input');
    numDish.setAttribute('type','number');
    numDish.setAttribute('name','points');
    numDish.setAttribute('step','1');
    li1.appendChild(numDish);

    var myform = document.createElement('form');
    myform.setAttribute('id', `formi${formCounter1}`);
    li1.appendChild(myform);


 
    for (var i = 0; i < extraTOIndian.length; i++) {
        var input1 = document.createElement('input');
        myform.appendChild(input1);
        input1.setAttribute('type', 'checkbox');
        input1.setAttribute('id', `extraTOIndian${counter}`);
        var label1 = document.createElement('label');
        label1.setAttribute('for', `extraTOIndian${counter}`);
        label1.textContent = extraTOIndian[i];
        myform.appendChild(label1);
        counter++;
        console.log(this.imgPath, 'hi');
    }

    var theForm = document.getElementById(`formi${formCounter1}`);
    console.log('here',`formi${formCounter1}`);
    theForm.addEventListener('submit', function(event){
        event.preventDefault();
         for(var i=0;i<mealsIndian.length;i++){
            for(var j=(i*3) ;j<(i*3+3);j++){
                var checked1 = document.getElementById(`extraTOIndian${j}`).checked;

                if(checked1 == true){
                    mealsIndian[i].price =mealsIndian[i].price + 2;
                   
                   
                   
                }
            }

        }
             
console.log(mealsIndian[0].price, "price");
console.log(mealsIndian[0].dish);
console.log(mealsIndian[1].price, "price");
console.log(mealsIndian[1].dish);
console.log(mealsIndian[2].price, "price");
console.log(mealsIndian[2].dish);
console.log(mealsIndian[3].price, "price");
console.log(mealsIndian[3].dish);
console.log(mealsIndian[4].price, "price");
console.log(mealsIndian[4].dish);
    
   });

formCounter1++;
    
}

var indianDish1 = new MealIndian(indianDishs[0], 'biryani.jpg', indian1);
var indianDish2 = new MealIndian(indianDishs[1], 'cheat.jpg', indian2);
var indianDish3 = new MealIndian(indianDishs[2], 'Alooshimlamirch.jpg', indian3);
var indianDish4 = new MealIndian(indianDishs[3], 'poha.jpg', indian4);
var indianDish5 = new MealIndian(indianDishs[4], 'Mintparatha.jpg', indian5);
var pop1=0;
function popUp1() {
    if(pop1==0){
    for (var i = 0; i < mealsIndian.length; i++) {
        mealsIndian[i].render1();
    }
    var addOrder= document.createElement('input');
    addOrder.setAttribute('id', `add${inputCounter}`);
    addOrder.setAttribute('type', 'submit');
    var myform =document.getElementById("formi4");
    myform.appendChild(addOrder);
    inputCounter++;
        pop1++;}

}
console.log(mealsIndian);

var c;
var h=[];

// arabian food
var mealsArabian = [];
var ArabianDishs = ['Mansaf: ', ' Maqloba: ', 'Musakhan: ', 'Flafel: ', 'Makmura: '];
var Arabian1 = [' rice', ' lamb', ' bulgur', ' sauce', ' dried yogurt'];
var Arabian2 = [' chicken', ' rice', ' fried vegetables', ' sauces', ' spices'];
var Arabian3 = [' chicken baked', ' onions', ' sumac', ' allspice', 'saffron', 'taboon bread'];
var Arabian4 = [' ground chickpeas', ' fava beans', 'Herbs', ' spices', 'onion'];
var Arabian5 = [' Chicken', ' potato mixture', ' mixed spices','olive oil', 'flour'];
var extraToArabian = [' Drink', ' Yogurt', ' Arabian Salad']

function MealArabian(dish, imgPath, ingredients) {
    this.dish = dish;
    this.price;
    this.imgPath = `IMG/${imgPath}`;
    this.ingredients = ingredients;
    mealsArabian.push(this);
}
MealArabian.prototype.randomPrice = function () {

    this.price = Math.floor(Math.random() * (12 - 5 + 1) + 5);
}
var counter = 0;
var formCounter2=0;

MealArabian.prototype.render2 = function () {

    this.randomPrice();
    var myMenu3 = document.getElementById('arabianDish');
    var ul3 = document.createElement('ul');
    myMenu3.appendChild(ul3);

    var li1 = document.createElement('li');
    ul3.appendChild(li1);
    li1.textContent = `${this.dish} `;

    var addDish3 =document.createElement('input');
    addDish3.setAttribute('type','checkbox');
    addDish3.setAttribute('id', `check${formCounter2}`);
    li1.appendChild(addDish3);

    var myImg = document.createElement('img');
    myMenu3.appendChild(myImg);
    myImg.setAttribute('src', this.imgPath);
    myImg.setAttribute('alt', "img");

    var span1 = document.createElement('span');
    li1.appendChild(span1);
    span1.textContent = this.ingredients;

    var span2 = document.createElement('span');
    li1.appendChild(span2);
    span2.textContent = `  ${this.price} $`;

    var numDish3 =document.createElement('input');
    numDish3.setAttribute('type','number');
    numDish3.setAttribute('name','points');
    numDish3.setAttribute('step','1');
    numDish3.setAttribute('min','1');
    numDish3.setAttribute('id',`steps${formCounter2}`);

    li1.appendChild(numDish3);

    var myform = document.createElement('form');
    myform.setAttribute('id', `forma${formCounter2}`);
    li1.appendChild(myform);

    for (var i = 0; i < extraToArabian.length; i++) {
        var input1 = document.createElement('input');
        myform.appendChild(input1);
        input1.setAttribute('type', 'checkbox');
        input1.setAttribute('id', `extraToArabian${counter}`);
        var label1 = document.createElement('label');
        label1.setAttribute('for', `extraToArabian${counter}`);
        label1.textContent = extraToArabian[i];
        myform.appendChild(label1);
        counter++;
        console.log(this.imgPath, 'hi');
    }
    
    var theForm = document.getElementById(`forma${formCounter2}`);
    theForm.addEventListener('submit', function(event){
        event.preventDefault();
         for(var i=0;i<mealsArabian.length;i++){
var checked2 = document.getElementById(`check${i}`).checked;
var stepDish = document.getElementById(`steps${i}`).value;
if (checked2 ){
            for(var j=(i*3) ;j<(i*3+3);j++){
                var checked1 = document.getElementById(`extraToArabian${j}`).checked;


                if(checked1 == true){
                    
                    mealsArabian[i].price =mealsArabian[i].price + 2;
                  
                    mealsArabian[i].price*=parseInt(stepDish);
                    // console.log('step'+stepDish);
                    // console.log('type'+typeof(stepDish));

                }
                
                
            }
            // console.log(mealsArabian.price);
            console.log('mealsArabian[i].price'+mealsArabian[i].price);
            c = i;
            console.log('i = '+ i);
            console.log('mealsArabian[i]'+mealsArabian[i].price);
            console.log('mealsArabian[c]'+mealsArabian[c]);
            console.log('c= '+c);

        //    sentToLocal(mealsArabian[i]);
        h.push(mealsArabian[i]);
         
        }

            

        }
        sentToLocal(h);
             
// console.log(mealsArabian[0].price, "price");
// console.log(mealsArabian[0].dish);
// console.log(mealsArabian[1].price, "price");
// console.log(mealsArabian[1].dish);
// console.log(mealsArabian[2].price, "price");
// console.log(mealsArabian[2].dish);
// console.log(mealsArabian[3].price, "price");
// console.log(mealsArabian[3].dish);
// console.log(mealsArabian[4].price, "price");
// console.log(mealsArabian[4].dish);
    
   });

   formCounter2++;
    console.log(this.ingredients);
}

function sentToLocal (mealS){
    var mealsString =JSON.stringify(mealS);
    localStorage.setItem('meal',mealsString);
}



var ArabianDish1 = new MealArabian(ArabianDishs[0], '3_Mansaf-National-Dish.jpg', Arabian1);
var ArabianDish2 = new MealArabian(ArabianDishs[1], 'maqloba.jpg', Arabian2);
var ArabianDish3 = new MealArabian(ArabianDishs[2], 'Musakhan-Sumac-Chicken-Recipe-7.jpg', Arabian3);
var ArabianDish4 = new MealArabian(ArabianDishs[3], 'Falafel-Recipe-20.jpg', Arabian4);
var ArabianDish5 = new MealArabian(ArabianDishs[4], 'Makmura.jpg', Arabian5);

var secArbain=document.getElementById('arabian');
var pop2=0;
function popUp2() {
    if (pop2==0){
    for (var i = 0; i < mealsArabian.length; i++) {
        mealsArabian[i].render2();
    }
    var addOrder= document.createElement('input');
    addOrder.setAttribute('id', `add${inputCounter}`);
    addOrder.setAttribute('type', 'submit');
    var myform =document.getElementById("forma4");
    myform.appendChild(addOrder);
    inputCounter++;
    pop2=1;
}

}
console.log(mealsArabian);
