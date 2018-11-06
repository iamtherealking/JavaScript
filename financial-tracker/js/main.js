// Enter JavaScript for the exercise here...
window.addEventListener("load", function(e){
    //reference to the tbody: 
    const transactionBody = document.querySelector(".transactions tbody")
    
    //create template first:
    createTemplate()

    function createTemplate()
    {
        let rowElm = document.createElement("tr")
        let col = rowElm.insertCell(0)

        col = rowElm.insertCell(1)

        col = rowElm.insertCell(2)
        col.classList.add("amount")
        col = rowElm.insertCell(3)
        col.classList.add("tools")
         
        let colTool = document.createElement("i")
        colTool.setAttribute("class", "delete fa fa-trash-o")
        col.appendChild(colTool)

        transactionBody.appendChild(rowElm)
    }

    const addButton = document.querySelector(".frm-group input[type='submit']")
    const description = document.querySelector(".frm-group input[type='text']")
    const transactionType = document.querySelector(".frm-group select")
    const currency = document.querySelector(".frm-group input[type='number']")

    let transactions = [];

    addButton.addEventListener("click", function(e){
        e.preventDefault();

        let transactionData = {
            description: description.value,
            type: transactionType.value,
            currency: currency.value
        }
        
        transactions.push(transactionData)

        console.log(transactions)
        
    })

    console.log(transactionBody)

})