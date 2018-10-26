
  /* 
    ON SUBMIT
     create a data object  
      first:
      last:
      place the data objects into an array
  */                  

 window.addEventListener("load", function(){
    // this will hold the data objects.
    let createdItems = []
    //form input 
    const inputForm = document.querySelector(".data-entry");
    const displayButton = document.querySelector(".display-btn");
    const displayItems = document.querySelector(".show-items");
    
    //submit event
    // prevent default behaviour
    // list of the form input fields .elements
    inputForm.addEventListener('submit', function(e){
        e.preventDefault();
        // FormCollection map/filter Array.from(inputItems)
        const inputItems = (e.currentTarget.elements);
        // creating a data object with the first and last properties and
        // assigning value.
        const dataObj ={
            first: inputItems[0].value,
            last: inputItems[1].value
        }
        console.log(dataObj)
        createdItems.push(dataObj)
      
    })
    
    displayButton.addEventListener('click', function(){
         
         createdItems.forEach((item,index)=>{
             const listElm = document.createElement('li');
             listElm.classList.add('cart-item')
             listElm.innerHTML =  createdItems[index].first + " " + createdItems[index].last;
             displayItems.appendChild(listElm)
         })
    })
    
    // end of code
    })