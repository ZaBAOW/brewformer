require(['jquery', 'materialize', 'search', 'auto', 'hammer'], function($, Velocity,search,auto){
const BREW_KEY= "bb5091fd74b7944bb27ac0fd535524ef";
$('#City').on( "change", function(){
        var city = $("#City").val();
})
$('#Region').on( "change", function(){
        var region = $("#Region").val();
})
function search(){
    $('#brewery-list').empty();

    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    url = "http://api.brewerydb.com/v2/locations?region=texas&locality=dallas&isPrimary=Y&isClosed=N&key="+BREW_KEY+"&callback="+function(){
        return true;
    }+"?";
    fetch(proxyurl + url).then(respones=> respones.text()).then(contents=>getBreweries(contents)).catch(console.log("can't access "+ url + "response. Blocked by browser?"));

}

//Use JSON.parse() to comb through data object created by
//berwerydb to get names of breweries.

function getBreweries(contents){
    var list = JSON.parse(contents);
    for(var i = 0; i < list.data.length; i++){
        var brewery = list.data[i].brewery.name;
        var item = "<div class='col-3'><span id='list-item'>"+brewery+"</span></div>"
        $('#brewery-list').append(item);
        console.log(brewery);
    }
}
})