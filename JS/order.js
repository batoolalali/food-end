var d = new Date();
document.getElementById("demo").innerHTML = d.getHours();
var d3 = new Date ();
if(d3.getMinutes() >30){
    document.getElementById("demo").innerHTML =d.getHours()+1;
    document.getElementById("demo1").innerHTML = d3.getMinutes()-30;
} else if (d3.getMinutes() <30){
    d3.setMinutes ( d3.getMinutes() +30 );
    document.getElementById("demo1").innerHTML = d3.getMinutes();
} else {
    document.write("no time");
}

var meals=[];

function getFromLocal()
{   var mealString=localStorage.getItem('meal');
    if (mealString){
        meals= JSON.parse(mealString);
        totalPrice();
        theRender();
       console.log(meals);
        
        
    }
   

}
function theRender(){

    var myelement=document.getElementById('p1');

    for (var i=0; i<meals.length; i++)
    {
        var l1=document.createElement('li');
        myelement.appendChild(l1);
        l1.textContent=`${meals[i].dish} ${meals[i].price} $ `
    }
    var l2=document.createElement('h2');
    myelement.appendChild(l2);
    l2.textContent=`Total  ${total} $ `


}

var total=0;
function totalPrice(){
    for (var i=0; i<meals.length; i++)
    {
        total=total+meals[i].price;
    }
}

getFromLocal();

var test=0;
var theForm = document.getElementById("theform");
theForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (test===0)
    {
    var firstName=document.getElementById('fName').value;
    var lastName=document.getElementById('lName').value;
    var phone=document.getElementById('phone').value;
    console.log(firstName);
    console.log(lastName);
    console.log(phone);
    if (firstName !=='' && lastName!=='' )
    {   var welcome=document.getElementById('field')
       var wel=document.createElement('span');
       wel.setAttribute('id', 'welMessage');
       wel.textContent=`Welcome ${firstName}`;
       welcome.appendChild(wel);
    }else{ alert("please enter your name");}
}
test++;

});
