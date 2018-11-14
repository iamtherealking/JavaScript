// enter JavaScript for the exercise here...
'use strict'
import {template} from './Mod.js'

window.addEventListener("load", function(e){
    // references
    const transactionBody = document.querySelector(".transactions tbody")

    const submitButton = document.querySelector(".frm-group input[type='submit']")

    const description = document.querySelector(".frm-group input[type='text']")
    const transactionType = document.querySelector(".frm-group select")
    const currency = document.querySelector(".frm-group input[type='number']");

    let transactions = [];

    submitButton.addEventListener("click", function(e){
        e.preventDefault();

        if(transactionType.value === ""){
            document.querySelector(".error").innerHTML = "Please select a type";
        }
        else{
            let transactionData = {
                description: description.value,
                type: transactionType.value,
                currency: Number(currency.value)
            }

            transactions.push(transactionData);
            onSetDisplay();
        }
        
    })

    function onSetDisplay()
    {
        transactions.forEach(function(item,index){
            let transaction = template(item.description, item.type, item.currency);
            transactionBody.appendChild(transaction);
        })
    }

})