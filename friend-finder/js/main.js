// Your code here...

$(document).ready(function(){
    const $friends = $('#menu ul.pure-menu-list li:last-of-type');
    const $home = $('#menu ul.pure-menu-list li:first-of-type');

    $friends.click(function(e){
        if($(".content").empty()){
        $.getJSON('friends/friends.json', function(data){
            displayFriends(data)
        })
        $friends.addClass("pure-menu-selected");
        $home.removeClass("pure-menu-selected");
        }
        else{
            $(".content").empty();
        }
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
        const $friendInformationContainer = $(".content").append('<div class="friend"> <div class="identity"> <img src="" class="photo" /> <h2 class="name"></h2> <ul> <li><span class="label">email: </span></li> <li><span class="label">hometown: </span></li> </ul> </div> <p class="bio"> </p> </div>');
        const $friendImg = $(".identity img");
        const $friendName = $(".identity h2");
        const $friendEmail = $(".identity ul li:first-of-type");
        const $friendHometown = $(".identity ul li:last-of-type");
        const $friendBio = $(".friend p");

        const $friendData = "friends/" + number + ".json";

        $.getJSON($friendData, function(data){
            $friendImg.attr("src","img/" + data.avatar);
            $friendName.append(data.firstName + " " + data.lastName);
            $friendEmail.append(data.email);
            $friendHometown.append(data.hometown);
            $friendBio.append(data.bio);
        })
    }

})