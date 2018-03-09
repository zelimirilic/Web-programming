$button = $("#searchButton");

$button.on("click", getUser);

// $searchInput = $searchInputNode.toString();

function getUser(event) {
    event.preventDefault();
    $searchInput = $("#searchInput").val();
    var input = String($searchInput);
    var requestData = `"https://api.github.com/search/users?q=${input}"`
    
    var newRequest = new XMLHttpRequest();
    newRequest.open("GET",requestData);
    newRequest.send();

    newRequest.onload = function () {
        var response = newRequest.responseXML;
        var data = JSON.parse(response.responseText);

        console.log(data);
    }
 
    console.log(requestData);
}