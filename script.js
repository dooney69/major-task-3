function solve(){
    var hours = document.getElementById('hoursWorked').value;
    var extraHour = document.getElementById('extraHour').value;
  var extra = extraHour * 1200
    
    if (hours <= 4){
        wage = (hours * 1000);
    } 
  else{
        wage = (hours * 1000) 
        extra = (extraHour * 1200)
        newWage = (wage + extra);
    }
   
  console.log(wage);
  console.log(newWage = wage + extra);
   document.getElementById('final').innerHTML = ` Your wage is ${newWage} Naira only `;
}
var submitButton = document.getElementById('submit');
submitButton.onclick = function (){
    solve();
}

 