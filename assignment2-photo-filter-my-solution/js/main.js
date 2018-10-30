// Enter your JavaScript for the solution here...

window.addEventListener("load", function(e){
    const nodeThumbnail = document.querySelectorAll(".thumb-display");
    const inputTags = document.querySelector(".frm-control");

    nodeThumbnail.forEach(function(elm,index){
        let tagsArray = elm.querySelector(".tags").innerHTML.replace(/[#]/g, "").split(" ");

        inputTags.addEventListener("input", function(e){
            //filter
            let inputComp = String(inputTags.value);
            let inputlength = inputComp.length;

            nodeThumbnail[index].classList.add("hidden");
            let tags = tagsArray.filter(function(value,ind){
                if(inputTags.value == value.substring(0,inputlength))
                {
                    nodeThumbnail[index].classList.remove("hidden")
                }
            })

            if(inputTags.value !== "")
            {
                let resetClick = document.querySelector(".reset");
                resetClick.classList.remove("hidden");

                resetClick.addEventListener("click",function(e){
                    inputTags.value = ""
                    nodeThumbnail[index].classList.remove("hidden")

                    if(inputTags.value == "")
                    {
                        document.querySelector(".reset").classList.add("hidden");
                    }
                })

            }
        })
    })



})