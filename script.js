function solve(){
    var hours = parseFloat(document.getElementById('hoursWorked').value);
    var extraHour = parseFloat(document.getElementById('extraHour').value);
    
    if (hours <= 4){
        wage = (hours * 1000);
        document.getElementById('final').innerHTML = "Your total wage is" + wage + "Naira only.";
    }else{
        wage = (hours * 1000) ;
        extra = (extraHour * 1200);
        newWage = (wage + extra);
        document.getElementById('final').innerHTML = `Your total wage is${newWage}Naira only.`;
    }
}


var submit = document.getElementById('submit');
submit.onclick = function (){
    solve();
}