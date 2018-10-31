"use-strict"

/*
    1. Read in templates
    2. Load data
    3. Parse data/set display
*/

window.addEventListener("load", function(e){
    const productTemplate = document.querySelector("template").content.children[0];
    
    /*
    // we will create a function to get_Data(url)
    // menthod returns a parsed json string

    const productItemData = singleDataObject[0];


    // set up a single product component
    setDisplay()


    //set up a single template item    
    function setDisplay(){
        // log to the console make sure the title updates
        // fill in the rest of the objects with the contents of the data obj
        // appendchild to said newly created product to the dom
        const productTitle = productTemplate.querySelector(".card-title");
        const productURL = productTemplate.querySelector(".card-thumbnail");
        const productDescription = productTemplate.querySelector(".card-details");

        productTitle.innerHTML = productItemData.title;
        productURL.src = productItemData.url;
        productDescription.innerHTML = productItemData.descrption;
        productTemplate.firstElementChild.dataset.id = productItemData.id;

        const product = document.querySelector(".products-container");
        product.appendChild(productTemplate);
    }

    product.addEventListener("click",function(e){
        console.log(e.currentTarget)
    })

    */
    //for multiple things: clone node

    const multipleProductItemData = severalDataObjects;
    const product = document.querySelector(".products-container");

    setMutipleProductsDisplay()

    function setMutipleProductsDisplay(){
        console.log(multipleProductItemData)

        multipleProductItemData.forEach(function(elm, index){
            let newItem = productTemplate.cloneNode(true);
            
            const productTitle = newItem.querySelector(".card-title");
            const productURL = newItem.querySelector(".card-thumbnail");
            const productDescription = newItem.querySelector(".card-details");

            productTitle.innerHTML = elm.title;
            productURL.src = elm.url;
            productDescription.innerHTML = elm.descrption;
            

            product.appendChild(newItem);
        
        })

        // check out completed version on moodle

    }
})