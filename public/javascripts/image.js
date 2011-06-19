var Image = function(piles_flat_array) {
  
  var context = $('#canvas').get(0).getContext("2d"),
      len = piles_flat_array.length,
      i = 0,
      x,y,r;
  
  context.fillStyle = '#000000';
  
  while (i < len) {
    x = (piles_flat_array[i] * 10) - 5,
    y = (piles_flat_array[i+1] * 10) - 5,
    r = 6 - piles_flat_array[i+2] / 2;
    
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,true);
    context.closePath();
    context.fill();
    
    i+=3;
  }
};