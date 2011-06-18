var Image = function(json) {
  var context = $('#canvas').get(0).getContext("2d");
  
  
  
  for (var i = json.piles.length - 1; i >= 0; i--){
    context.fillStyle = '#' + json.piles[i].shape_kind + json.piles[i].shape_kind + json.piles[i].shape_kind;
    context.fillRect(json.piles[i].x, json.piles[i].y,1,1);
    
    console.log('#' + json.piles[i].shape_kind + json.piles[i].shape_kind + json.piles[i].shape_kind);
    console.log(json.piles[i].x, json.piles[i].y,1,1);
  };
};