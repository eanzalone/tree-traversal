$(document).ready(function() {
  console.log("ready!");

  var items;

  $.getJSON('data.json', function(data) {
      console.log('json grabbed');
    })
    .done(function(data) {
      items = data.children;
      console.log(items);
    })
    .fail(function(data) {
      console.log("Error!");
    });

}); // close document.ready