// $() - selector
// jQuery selector is greedy
// nth-child()
// app start
$("document").ready(function(){
  // javascript
/*
  var obj = {a:1, b:2}
  const aasdf = Object.keys(obj);

  console.log(aasdf)
  const something = aasdf.map((key)=>{
    console.log(obj[key])
  })
  */
 const dataLoader = $.getJSON("data/icons.json",function(data){
     console.log(data)
     //does not return a value
     data.forEach(function(value,index){
        console.log(value.icon)
     })

     //map returns a value
     let icons = data.map((value) =>{
        return value.icon
     })
     console.log(icons)


     //explicit
     /* array.map((key)=>{

        }) 
     
        
     
     
     */
 })
  


})