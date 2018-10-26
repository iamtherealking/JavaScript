/* on the submit
   create a data object
        first:
        last:
        place the data objects into an array
*/

window.addEventListener('load',function(e){
    let createdItems = [];
    const inputForm = document.querySelector(".data-entry");

    inputForm.addEventListener("submit", function(e){
        e.preventDefault();
        // htmlformscollection
        //if youre gonna use filter or map, use array.from(inputItems)
        const inputItems = (e.currentTarget.elements);
        const dataObj = {
            first: inputItems[0].value,
            last: inputItems[1].value
        }
        console.log(dataObj);
        createdItems.push(dataObj);
    })

    const outputbutton = document.querySelector(".output button");

    outputbutton.addEventListener("click",function(e){
        createdItems.forEach(function(elm){
            var node = document.createElement("li");
            var textnode = document.createTextNode(elm.first);

            node.appendChild(textnode)
            document.querySelector("ul.data-display").appendChild(node);
            console.log(elm.first)
        })

    })
})