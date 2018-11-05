"use-strict"
window.addEventListener("load", function () {
 
  const productTemplate = document.querySelector("template").content.children[0];
  const productContainer = this.document.querySelector(".products-container"); 
  const productItemData = severalDataObjects;

  const itemContainer = this.document.querySelector(".items-container"); 
  const itemTemplate = document.querySelector("template").content.children[1];

  let shoppingList = [];

  configUI()
 
// create the display of items/products
  function configUI() {
    productItemData.forEach(function (product, index) {
      let newItem = productTemplate.cloneNode(true);
      newItem.querySelector(".add-to-cart-btn").setAttribute("data-index", index)

      // add event listener
      newItem.querySelector(".add-to-cart-btn").addEventListener("click",function(e){
        //does the element exist in the cart?
        if(shoppingList.length == 0)
        {
          console.log("firstadd")
          addItemToShoppingList(e)
        }
        else
        {

        }
      })

      const productTitle = newItem.querySelector('.card-title');
      const productImage = newItem.querySelector('.card-thumbnail');
      const productDescription = newItem.querySelector('.card-details');
      productTitle.innerHTML = product.title;
      productImage.src = product.url;
      productDescription.innerHTML = product.short;
      productContainer.appendChild(newItem)

    })

  }// close window event listener.


  function addItemToShoppingList(e)
  {
      let productData = productItemData[e.currentTarget.dataset.index];
      let newOrder = itemTemplate.cloneNode(true);

      const itemImage = newOrder.querySelector(".item-image");
      const itemTitle = newOrder.querySelector(".item-details h3");
      const itemDesc = newOrder.querySelector(".item-details p");

      itemImage.src = productData.url;
      itemTitle.innerHTML = productData.title;
      itemDesc.innerHTML = productData.short;

      itemContainer.appendChild(newOrder);

      shoppingList.push(newOrder);
      newOrder.querySelector(".remove-item").addEventListener("click",function(e){
        itemContainer.removeChild(newOrder)
      })
  }
    
 


})