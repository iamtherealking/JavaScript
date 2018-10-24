// Enter your JavaScript for the solution here...

window.addEventListener("load", function(e){
    const nodeThumbnail = document.querySelectorAll(".thumb-display");
    const inputTags = document.querySelector(".frm-control");
    
    nodeThumbnail.forEach(function(elm,index){
        let tagsArray = elm.querySelector(".tags").innerHTML.replace(/[#]/g, "").split(" ")

        inputTags.addEventListener("input", function(e){
            
            tagsArray.forEach(function(val){
                let wordTagArray = val.split("");
                let i = 0;
                tempWord = wordTagArray[i];
                if(tempWord == inputTags.value)
                {
                   console.log("oof")
                }
            })
        })
    })



})