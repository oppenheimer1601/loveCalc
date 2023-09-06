
function lovecalc(loverper){
    let name1 = document.getElementById("name-1").value;
    let name2 = document.getElementById("name-2").value;
    if(name1==="" || name2===""){
        document.getElementById("love-per").innerHTML= "PLEASE WRITE BOTH NAMES";
    }else{
        document.getElementById("love-per").innerHTML= name1+" loves "+ name2 + " "+ loveper + "%";
    }
}
var rand = Math.random();
var l = rand * 100;
var loveper = Math.floor(l)+1;
console.log(loveper);
lovecalc(loveper);