# BrewFormer

BrewFormer documentation outline:

Synopsis:
Brewformer is a brewery search application that informs users of every
berwery located in a location provided by the user, along with a list
of beers respective to each brewery that is displayed.  Form more about
this site visit the [about page](/https://zabaow.github.io/brewformer/about.html "about page").

Getting to BrewFormer:
BrewFormer is currently only on github pages at,
[Brewformer](/https://zabaow.github.io/brewformer "Brewformer")

How to use BrewFormer:
instructions on how to use BrewFormer and understand the information
that it displays can be found on the BrewFormer instruction page at,
[BrewFormer Instructions](/https://zabaow.github.io/brewformer/help.html "BrewFormer Instructions")

How BrewFormer Retrieves Information from BreweryDB:
BrewFormer sends an api request to BrewryDB through a proxyurl.  This
is neccessary since BreweryDB does not optomize CORS (cross origin
resource sharing).  After recieving the request BreweryDB will send
the user every brewery in its database with location attributes that
match the location attributes found in the api request.  Once the
response from BrewryDB has been recieved by BrewFormer, the information
is then parsed and displayed for the user to view.  Each brewery that
is retrieved has its ID used to retrieve every beer made by said brewery.
Each beer retrieved is then parsed for its name and description.  These
two attributes are then input into a beer-list-item element and displayed
underneath its respective brewery.

URL for API request:
The querey string sent to brewerydb by this app is:
```
url = "http://api.brewerydb.com/v2/locations?region=texas&locality=dallas&isPrimary=Y&isClosed=N&key="+BREW_KEY+"&callback="+function(){
	    	return true;
	    }+"?";
```

This allows for the retrieval of all primary brew locations, removing all secondary locations and twin peaks restaurants.

Code Examples:
(Screen Shots of Site in action)

Motivation

API Reference:
BrewFormer utilizes two api's, BreweryDB and Materialize.  BreweryDB
is a database for breweries in the united states.  Materialize is a
website design api.

License:
[MIT License](/https://github.com/ZaBAOW/brewformer/blob/master/LICENSE.txt "MIT License")
