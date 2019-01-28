$button = $("#searchButton");
$button.on("click", getUser);
$usersList = $("#usersList");

function getUser(event) {
    event.preventDefault();
    $searchInput = $("#searchInput").val();

    var request = $.ajax({
        url: "https://api.github.com/search/users?q=" + $searchInput,
        method: "GET",
    });

    request.done(function (objectData) {
        // console.log(objectData.items);
        objectData.items.forEach(element => {
            $card = $("<section>");
            $slika = $("<img>");
            $slika.attr("src", element.avatar_url);
            $user = $("<p>");
            $user.text(element.login);
            $usersList.append($card);
            $card.append($slika);
            $card.append($user);
        });

    });
    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

}