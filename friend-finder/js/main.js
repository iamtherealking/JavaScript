// Your code here...

$(document).ready(function(){
    const $friends = $('#menu ul.pure-menu-list li:last-of-type');
    const $home = $('#menu ul.pure-menu-list li:first-of-type');

    $friends.click(function(e){
        $.getJSON('friends/friends.json', function(data){
            displayFriends(data)
        })
        $friends.addClass("pure-menu-selected");
        $home.removeClass("pure-menu-selected");
    })

    $home.click(function(e){
        $(".content").empty();
        $home.addClass("pure-menu-selected");
        $friends.removeClass("pure-menu-selected");
    })
    
    function displayFriends(data)
    {
        const $friendsListContainer = $(".content").append('<div class="pure-menu custom-restricted-width"><span class="pure-menu-heading"></span> <ul class="pure-menu-list"></ul></div>');
        const $friendTemplate = $('<li class="pure-menu-item"></li>');
        const $friendsHeader = $(".content span");
        $friendsHeader.append("Friends");
        const $listTemplate = $('.content ul.pure-menu-list');
        data.forEach((friend) => {
            const $newFriend = $friendTemplate.clone();
            $newFriend.append(`<a href = "#" class="pure-menu-link" data-id="${friend.id}">${friend.firstName} ${friend.lastName}</a>`)
            $listTemplate.append($newFriend)
            $friendsListContainer.append($listTemplate);

            $newFriend.click(function(e){
                displayMoreAboutFriend($(e.target).attr('data-id'));
            })
        });
    }

    function displayMoreAboutFriend(number)
    {
        $(".content").empty();
    }

})