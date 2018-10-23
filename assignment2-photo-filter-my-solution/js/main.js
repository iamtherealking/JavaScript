// Enter your JavaScript for the solution here...

window.addEventListener("load", function(e){
    const nodeThumbnail = document.querySelectorAll(".thumb-display");
    const inputTags = document.querySelector(".frm-control")
    
    let emptyarray = []

    nodeThumbnail.forEach(function(elm,index){
        let tempThumbnailObj ={
            id: index,
            tags: elm.querySelector(".tags").innerHTML.replace(/[#]/g, "").split(" ")
        }
        elm.dataset.id = tempThumbnailObj.id;

        tempThumbnailObj.tags.forEach(function(val){
            let wordTagArray = val.split("");
            let i = 0;
            let tempWord = wordTagArray[i];

            inputTags.addEventListener("input",function(e){
                if(tempWord == inputTags.value)
                {
                    onDisplay(elm.dataset.id)
                }
                else
                {

                }
            })
        })
       emptyarray.push(elm.dataset.id);
    })

    


})