// Enter your JavaScript for the solution here...

window.addEventListener("load", function(e){
    const nodeThumbnail = document.querySelectorAll(".thumb-display");
    const inputTags = document.querySelector(".frm-control")

    nodeThumbnail.forEach(function(elm,index){
        let tempThumbnailObj ={
            id: index,
            tags: elm.querySelector(".tags").innerHTML.replace(/[#]/g, "").split(" ")
        }
        elm.dataset.id = tempThumbnailObj.id;
        elm.dataset.tags = tempThumbnailObj.tags;


        inputTags.addEventListener("input", function(e){
            let tempWord = "";
            let i = 0;
            tempThumbnailObj.tags.forEach(function(val){
                let wordTagArray = val.split("");
                tempWord = wordTagArray[i];
                if(tempWord == inputTags.value)
                {
                    nodeThumbnail[index].classList.toggle("hidden")
                }
            })
        })
    })



    function onSetDisplay(num, ind)
    {
        console.log(num, ind)
    }


})