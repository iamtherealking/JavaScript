// enter JavaScript for the exercise here...
'use strict'

window.addEventListener("load", function(e){
    // references
    const transactionBody = document.querySelector(".transactions tbody")

    const submitButton = document.querySelector(".frm-group input[type='submit']")

    const description = document.querySelector(".frm-group input[type='text']")
    const transactionType = document.querySelector(".frm-group select")
    const currency = document.querySelector(".frm-group input[type='number']")

    const totalDebit = document.getElementsByClassName("total debits")[0]
    const totalCredit = document.getElementsByClassName("total credits")[0]

    let transactions = [];

    var idleTime = 0;

    var idleInterval = setInterval(timerIncrement, 60000);

    window.addEventListener("mousemove", function(e){
        idleTime = 0
    })
    window.addEventListener("keypress", function(e){
        idleTime = 0
    })

    function timerIncrement()
    {
        idleTime += 1
        if(idleTime > 1)
        {
            alert("you're gay")
            window.location.reload(true);
        }
    }


    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        let count = 0;

        if(transactionType.value === "" || currency.value === ""){
            document.querySelector(".error").textContent = "Please provide needed data.";
            description.value = "";
            currency.value = "";
            transactionType.value = "";
        }
        else{
            let transactionData = {
                index: transactions.length,
                description: description.value,
                type: transactionType.value,
                currency: Number(currency.value)
            }
            transactions.push(transactionData);
            transactionBody.insertAdjacentHTML('beforeend', addTransaction(transactionData.index, transactionData.description, transactionData.type, transactionData.currency));
            totalMoney();

            count += Number(transactions.length)
            
            let deleteButton = document.querySelectorAll("tbody tr .tools")
            deleteButton[count-1].addEventListener("click", onRemoveTransaction)

            description.value = "";
            currency.value = "";
            transactionType.value = "";
            idleTime = 0;
            
            document.querySelector(".error").textContent = "";
        }
        
    })


    function onRemoveTransaction(e)
    {
        let transactionIndex = Number(e.currentTarget.dataset.index);
        
        transactionBody.removeChild(transactionBody.children[transactionIndex]);
        transactions.splice(transactionIndex,1);    

        transactions.forEach(function(value,num){
            value.index = num
            transactionBody.children[num].querySelector(".tools").dataset.index = num
        })

        totalMoney();
    }
    

    function totalMoney()
    {
        let totalCredits = 0;
        let totalDebits = 0;

        transactions.forEach(function(value, index){
            if(value.type === 'credit')
            {
                totalCredits += value.currency
            }
            else
            {
                totalDebits += value.currency
            }
        })
        totalDebit.textContent = `$${totalDebits.toFixed(2)}`
        totalCredit.textContent = `$${totalCredits.toFixed(2)}`
    }
    
    function addTransaction(ind, desc, type, money){        
        const template = `
        <tr class="${type}" >
            <td>${desc}</td>
            <td>${type}</td>
            <td class="amount">$${money}</td>
            <td class="tools" data-index="${ind}">
                <i class="delete fa fa-trash-o"></i>
            </td>
        </tr>`
        return template;
    }
})