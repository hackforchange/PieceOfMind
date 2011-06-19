$(function() {
  image = new Image(piles_flat_array);
  
  $('body').keypress(function(event) {
    zoom = parseInt($('#container').css('zoom') * 100, 10);
    switch(event.keyCode) {
      case 43:
        zoom += 5;
        break;
      case 45:
        zoom -= 5;
        break;
    }
    
    if (zoom > 100) zoom = 100;
    if (zoom < 5) zoom = 5;
    $('#container').css('zoom', zoom / 100); 
  });
  
  $(document.body).clickNScroll({
    allowThrowing: false
  });
});