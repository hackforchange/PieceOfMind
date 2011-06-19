$(function() {
  if (typeof piles_flat_array != 'undefined') image = new Image(piles_flat_array);
  

  
  $('#find_my_tile').click(function() {
    var tile = $(this).data('tile').split(',');
    if (! $('#my_tile').length) {
      var canvas = $('<canvas id="my_tile" width="100" height="100"/>').appendTo('#container');
      canvas.css({
        left: tile[0] * 100 + 'px',
        top:  tile[1] * 100 + 'px'
      });
      
      new Image(canvas, tile[2]);
    }
    
    zoom = 100;
    $('#container').css({zoom: '100%'});
    location.hash = '#random';
    location.hash = '#my_tile';
    return false;
  });
  if(location.hash == '#find_my_tile') {
    $('#find_my_tile').click();
  }
  
  $(document.body).clickNScroll();
  $(document.body).clickNScroll();
  
  $('#zoom_in').click(zoom_in);
  $('#zoom_out').click(zoom_out);
  zoom = parseInt($('#container').css('zoom') * 100, 10);
  
  $('#canvas').dblclick(function(event) {
    var x = Math.ceil(event.offsetX / zoom),
        y = Math.ceil(event.offsetY / zoom);
    
    $('#story-explorer').fadeIn();
  });
  $('#story-explorer').click(function() {
    $(this).fadeOut();
  });
});

var zoom;
function zoom_to(zoom) {
  if (zoom > 100) zoom = 100;
  if (zoom < 5) zoom = 5;
  
  $('#container').css('zoom', zoom / 100);
} // zoom_to(zoom)

function zoom_in() {
  zoom += 5;
  
  zoom_to(zoom);
  return false;
} // zoom_in()

function zoom_out() {
  zoom -= 5;
  zoom_to(zoom);
  return false;
} // zoom_in()