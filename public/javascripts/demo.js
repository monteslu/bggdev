// Not great code, just a working example.
// Use dojo or angular or react or even ember for front end work :)

$(function(){
  $.get( '/api/user', { name: 'monteslu', guilds: 1 } )
    .done(function( data ) {
      $('#output').html(JSON.stringify(data, null, ' '));
    });
});
