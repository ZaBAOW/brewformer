require(['jquery', 'materialize', 'search', 'auto', 'hammer'], function($,Velocity,search,auto){

    $('.section-input').append("<button id='submit' class='btn tooltipped red darken-4' data-position='right' data-delay='50' data-tooltip='Click Me!' onclick='search()''>Search</button>");
    // $('.section-input').append("<span class='tool-tip' data-toggle='tooltip' data-placement='top' title='Tooltip on top'><button disabled='disabled'>I am disabled</button></span>");
    // $(document).ready(function(){
    //     $('[data-toggle="tooltip"]').tlp();
    // });
// 	var autocomplete = $('#Region').materialize_autocomplete({
//     limit: 20,
//     multiple: {
//         enable: true,
//         maxSize: 10,
//         onExist: function (item) { /* ... */ },
//         onExceed: function (maxSize, item) { /* ... */ }
//     },
//     appender: {
//         el: '#Region'
//     },
//     getData: function (value, callback) {
//         // ...
//         callback(value, data);
//     }
// });

});
