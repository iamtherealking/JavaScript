$("document").ready(function(){
    // load data - JSON/fetch
    // $.getJSON() - jQUery
    // JSON(url, complete function(){}) - modern JS using Fetch API
    // Promise: what fetch returns
    // parse data - JSON.parse()
    // build the dom - framework

    //destructing array/object

    // const newThings = ["one","two", "three"];
    // const [user1, user2, user3] = newThings;
    // `p ${user1} p p ${user2} p p ${user3} p`
    // console.log(user1)

    const $iconContainer = $('.app-icons');
    const $iconTemplate = $('<img>');
    // const $template = $('template').html();
    // const $templateLiteral = `<img/>`;

    $.getJSON('data/icons.json', function(data){
        configUI(data)
    })

    function configUI(data)
    {
        // looping through the data building the dom
        data.forEach((icon,index)=>{
            const $newIcon = $iconTemplate.clone();
            const $iconURL = "img/" + icon.icon + ".svg";
            $newIcon.addClass('app-icon').attr('src', $iconURL).attr('data-key', index).addClass('hi');
            $newIcon.click(function(e){
                console.log($(e.target).attr('data-key'))
            })
            $iconContainer.append($newIcon);
        })
    }
})