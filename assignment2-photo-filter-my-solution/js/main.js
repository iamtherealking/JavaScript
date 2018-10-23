// Enter your JavaScript for the solution here...

window.addEventListener("load", function(e){
    const nodeThumbnail = document.querySelectorAll(".thumb-display");
    const inputTags = document.querySelector(".frm-control")
    
    nodeThumbnail.forEach(function(elm,index){
        let tempThumbnailObj ={
            id: index,
            tags: elm.querySelector(".tags").innerHTML.replace(/[#]/g, "").split(" ")
        }
        // set attribute so u can use it
        tempThumbnailObj.tags.forEach(function(val){
            let wordTagArray = val.split("");
            
            inputTags.addEventListener("input",function(e){
                
            })
        })
        
        


    })
})