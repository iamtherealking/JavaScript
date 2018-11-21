// $() - selector
// greedy
// selector based on css
// remember :: pseudo DOM
// make selector specific over
// adding css to markup

// $elm = var
// $eml() = custom function; $elm.methods()

// const $domElement = $('body')

// conditionals and loops
// let $onIt = true;

// if($onIt){

// }else{

// }
/*
let $onIt = document.querySelector('body');

$("main").animate({opacity:0});
*/

//creating dom content with jQuery

/* let $myForm = $("form");

console.log($myForm);

let inputelement  = $($myForm).find("input") //dom selection -> $()

console.log(inputelement)

$('form').submit(function()
{
  
})


*/

// 4 parameters : datatype, url, data storage variable, success function
/*const dataImport = $.ajax({
  dataType: "json",
  url: "../data/icons.json",
  success: onDataReceived
})

function onDataReceived(a, b, c){
  console.log(a) // contains data
}

*/

$.getJSON("../data/icons", function(){
  
})