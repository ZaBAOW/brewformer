const BREW_KEY= "bb5091fd74b7944bb27ac0fd535524ef";
function search(){
    var region = $("#Region").val();
    var city = $("City").val();
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
    for(var i = 0; i <= list.data.length; i++){
        var brewery = list.data[i].name;
        console.log(brewery);
    }
    console.log(contents);
}