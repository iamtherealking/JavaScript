// https://greensock.com/gsap

window.addEventListener("load", function(e){
    const navButton = document.querySelector(".mobile-menu-btn");
    const menuPanel = document.querySelector(".mobile-menu-panel");
    const mobileMenuItems = document.createElement("ul");
    let menuState = true;

    configUI();

    //menu setup
    function configUI(){
        //data coming in
        let menuItemObj = {
            ref: "http://www.google.com",
            txt: "google"
        }

        //place the data into the array
        let info = [];
        info.push(menuItemObj);

        // take the data from the array and build the display
        info.forEach(function(item,index){
            /*
            let elm = document.createElement("li");
            elm.innerHTML = `menu item ${index}`
            mobileMenuItems.appendChild(elm);
            */

            // build the markup using js:
            // create element, append and others
            // use classlist if there's a class already 
            let listElm = document.createElement("li");
            let anchorElm = document.createElement("a");

            //put anchor element in the list
            listElm.appendChild(anchorElm);
            mobileMenuItems.appendChild(listElm);

            //setting up the attributes
            anchorElm.setAttribute("href",item.ref);
            anchorElm.innerHTML = item.txt;
        })
        menuPanel.appendChild(mobileMenuItems);
        console.log(mobileMenuItems);
    }

    navButton.addEventListener("click", function(e){
        menuState = !menuState // start: menu is closed (false)

        if(menuState)
        {
            TweenLite.to(menuPanel, 0.25, {left:"0vh"});
        }
        else
        {
            TweenLite.to(menuPanel, 0.35, {left:"-100vh"});
        }
    })
})