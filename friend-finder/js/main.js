// Your code here...

$(document).ready(function(){
    const $friends = $('ul.pure-menu-list li:last-of-type');
    const $home = $('ul.pure-menu-list li:first-of-type');

    $friends.click(function(e){
        $.getJSON('friends/friends.json', function(data){
            displayData(data)
        })
    })

    function displayData(data)
    {
        
    }
})