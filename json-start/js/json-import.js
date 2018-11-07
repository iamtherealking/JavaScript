window.addEventListener("load",function(){
    const getDataButton = document.querySelector(".get-data-btn");
    const dataRequestObj = new XMLHttpRequest();

    dataRequestObj.addEventListener("load", onDataReturn)

    const jsonDataURL = "data/data.json"
    let applicationData = [];

    getDataButton.addEventListener("click",function(e){
        //open connection to the data
        dataRequestObj.open("GET",jsonDataURL)
        //request the data
        dataRequestObj.send();
    })

    function onDataReturn(e){
        if(dataRequestObj.status === 200)
        {
            // being we are using json we use json.parse();
            applicationData = JSON.parse(dataRequestObj.response)
            console.log(applicationData)
        }else{
            
        }
    }
})