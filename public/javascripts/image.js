var Image = function(json) {
  var context = $('#canvas').get(0).getContext("2d");
  
  context.fillStyle = '#000000';

  for (var i = json.piles.length - 1; i >= 0; i--){
    r = 6 - json.piles[i].shape_kind / 2;
    x = (json.piles[i].x * 10) - 5;
    y = (json.piles[i].y * 10) - 5;
    
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,true);
    context.closePath();
    context.fill();
  };
};