//search.js contains the main functionality of the search button on BrewFormer.

const BREW_KEY= "c606eb818e8a3792eac264e108d50593";

//search is the fist method to fire after the user clicks the search button.
//all existing content in both brewery-list and error-container class elements
//are deleted.  A url is generated including the text input given by the user.
//A request is sent to breweryDB through th proxyurl.
function search(){
    $('#brewery-list').empty();
    $('#error-container').empty();
    var region = $("#Region").val();
    var city = $("#City").val();
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    url = `https://sandbox-api.brewerydb.com/v2/locations?region=${region}&locality=${city}&isPrimay=Y&isClosed=N&key=${BREW_KEY}&callback=`function() {
        return true;
    }`?`;
    fetch(proxyurl + url).then(response=> response.text()).then(contents=>getBreweries(contents)).catch(error => errorMessage(error));

}

//Use JSON.parse() to comb through data object created by
//berwerydb to get names of breweries.
//function creates variable for recieved information from brewerydb in JSON format.
//function parses through the length of the list.
//creates a list-item class element that displays on the webpage for the viewer.
function getBreweries(contents){
    var list = JSON.parse(contents);
    for(var i = 0; i < list.data.length; i++){
        var brewery = list.data[i].brewery.name;
        var breweryClass = brewery.replace(/ |'|&|\.|\s|\+/g, '');
        //insert brewery id into template
        var item = "<div class='card yellow lighten-3 col-3 item-container'><span class='list-item' aria-live='assertive'>"+brewery+"</span><hr class='separator'><ul class='"+breweryClass+"-list'></ul></div>";
        $('#brewery-list').append(item).fadeIn(999);
        getBeers(list, i, breweryClass);
    }
}

//function get the id of the brewrey that is currently being parsed in the for loop
//of getBrewries().  Uses the id in a request to the brewerydb api.  Sends info
//recieved to displayBeers().
function getBeers(list, i, breweryClass){
    var brewery_id = list.data[i].brewery.id;
    console.log(brewery_id);
    var url = "http://api.brewerydb.com/v2/brewery/"+brewery_id+"/beers?key="+BREW_KEY;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url).then(response=> response.text()).then(contents=> displayBeers(contents, brewery_id, breweryClass));
}

//function checks if brewery being parsed has any beers listed under it.
//if there are no beer found, a premade message is displayed to the user under
//the brewery name.
//beers that are found are then parsed for for their name and description one at a time via a for loop.
//beers are displayed under the brewery.
function displayBeers(contents, brewery_id, breweryClass){
    var info = JSON.parse(contents);
    if(info.data === undefined){
        $('.'+breweryClass+'-list').append('<li class="noBeers">There were no beers found in the databased that are brewed by this brewery.</li>');
    }else{
    for(var j = 0; j < info.data.length; j++){
        var brew = info.data[j].name;
        var beerDescription = info.data[j].description;
        if(beerDescription === undefined){
            beerDescription = "Sorry there is no description for this beer yet."
        }
        var beerDescriptionEdit = beerDescription.replace("'", "&#39")
        var searchBeer = brew.replace(/ /g, '+');
        var searchUrlTemplate = "https://www.google.com/search?q="+searchBeer;
        var brewTemplate = "<li class='beer-list-item'><a href='"+searchUrlTemplate+"' class='tooltipped' data-position='right' data-delay='50' title='"+beerDescriptionEdit+"'>"+brew+"</a></li>";
        //append beer item to element with corresponding brewery id.
            $('.'+breweryClass+'-list').append(brewTemplate);
        }
    }
}

//function only fires if there is a typo that is found in the text input fields that the user interacts with.
function errorMessage(error){
    console.log(error);
    var message = "<span class='error-message'>There seems to be something wrong with your search entry.  Check to see if you have left either field blank or mispelled either your entered state and/or city. Alternatively some cities might not have any breweries yet submitted to the BreweryDB database.</span>"
    $('#error-container').append(message).fadeIn(999);
}
