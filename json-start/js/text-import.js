window.addEventListener("load",function(e){
    const getDataButton = document.querySelector(".get-data-btn");
    const dataURL = "data/data.txt"

    getDataButton.addEventListener("click",function(e){
        let request = new XMLHttpRequest();

        request.open("GET", dataURL);

        //call back function
        request.onload = function(e){
            if(request.status === 200)
            {
                console.log(request.responseText);
            }else{
                
            }
        }

        request.send();
    })
})