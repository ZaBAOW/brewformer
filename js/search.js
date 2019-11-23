const BREW_KEY= "c606eb818e8a3792eac264e108d50593";
function search(){
    $('#brewery-list').empty();
    var region = $("#Region").val();
    var city = $("#City").val();
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    url = `https://sandbox-api.brewerydb.com/v2/locations?region=${region}&locality=${city}&isPrimay=Y&isClosed=N&key=${BREW_KEY}&callback=`function() {
        return true;
    }`?`;
    fetch(proxyurl + url).then(respones=> respones.text()).then(contents=>getBreweries(contents)).catch(console.log("can't access "+ url + "response. Blocked by browser?"));

}

//Use JSON.parse() to comb through data object created by
//berwerydb to get names of breweries.

function getBreweries(contents){
    var list = JSON.parse(contents);
    for(var i = 0; i < list.data.length; i++){
        var brewery = list.data[i].brewery.name;
        var item = "<div id='item-container' class='col-3'><span class='list-item'>"+brewery+"</span></div>"
        $('#brewery-list').append(item);
        console.log(brewery);
    }
}