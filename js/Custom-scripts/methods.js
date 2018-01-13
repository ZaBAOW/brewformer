//methods.js contains only the code responsible to creating the search button in index-good.html.
//because of how finicky tooltips are, this was the only way i was able to get the tooltip to appear error free.

require(['jquery', 'materialize', 'search', 'auto', 'hammer'], function($,Velocity,search,auto){

    $('.section-input').append("<button id='submit' class='btn tooltipped red darken-4' data-position='right' data-delay='50' data-tooltip='Click Me!' onclick='search()''>Search</button>");
});
