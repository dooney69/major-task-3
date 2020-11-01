function solve(){
    var hours = parseFloat(document.getElementById('hoursWorked').value);
    var extraHour = parseFloat(document.getElementById('extraHour').value);
    
    if (hours <= 4){
        wage = (hours * 1000);
    }else{
        wage = (hours * 1000) 
        extra = (extraHour * 200)
        newWage = (wage + extra);
    }
}


var submit = document.getElementById('submit');
submit.onclick = function (){
    solve();
}