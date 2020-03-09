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
