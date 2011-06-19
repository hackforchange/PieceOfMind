var Image = function(piles_flat_array) {
  var context = $('#canvas').get(0).getContext("2d"),
       pi = Math.PI*2;
  
  var draw = function() {
    var len = piles_flat_array.length,
        i = 0,
        x,y,r;

    context.fillStyle = '#000000';

    while (i < len) {
      x = piles_flat_array[i] * 100;
      y = piles_flat_array[i+1] * 100;
      t = piles_flat_array[i+2];

      context.beginPath();
      shapes[t](x,y);
      context.closePath();
      context.fill();

      i+=3;
    }
  };
  
  var shapes = [
    // 0
    function(x,y) {
      context.arc(x+50,y+50,4,0,pi,true);
    },
    
    // 1
    function(x,y) {
			context.moveTo(x+50,y+35);
			context.lineTo(x+35,y+50);
			context.lineTo(x+50,y+65);
			context.lineTo(x+65,y+50);
    },
    
    // 2
    function(x,y) {
			context.moveTo(x+10,  y+0);
			context.lineTo(x+0,   y+10);
			context.lineTo(x+90,  y+100);
			context.lineTo(x+100, y+90);
    },
    
    // 3
    function(x,y) {
			context.moveTo(x+0,y+15);
			context.lineTo(x+70,y+15);
			context.lineTo(x+70,y+30);
			context.lineTo(x+0,y+30);
			context.fill();
			context.moveTo(x+100,y+70);
			context.lineTo(x+30,y+70);
			context.lineTo(x+30,y+85);
			context.lineTo(x+100,y+85);
    },
    
    // 4
    function(x,y) {
      context.beginPath();
			context.arc(x+30,y+30,15,0,pi,true);
			context.fill();
			context.beginPath();
			context.arc(x+60,y+60,25,0,pi,true);
    },
    
    // 5
    function(x,y) {
      context.arc(x+0,y+100,95,0,pi,true);
      context.fill();
      context.fillStyle = "#FFFFFF";
      context.beginPath();
      context.arc(x+0,y+100,20,0,pi,true);
      context.fillStyle = "#000000";
    },
    
    // 6
    function(x,y) {
      context.arc(x+0,y+100,95,0,pi,true);
      context.fill();
      context.fillStyle = "#FFFFFF";
      context.beginPath();
      context.arc(x+0,y+100,20,0,pi,true);
      context.fillStyle = "#000000";
    },
    
    // 7
    function(x,y) {
			context.moveTo(x+40,y+0);
			context.lineTo(x+0,y+70);
			context.lineTo(x+0,y+100);
			context.lineTo(x+60,y+100);
			context.lineTo(x+100,y+30);
    },
    
    // 8
    function(x,y) {
      context.moveTo(x+40,y+0);
			context.lineTo(x+0,y+70);
			context.lineTo(x+0,y+100);
			context.lineTo(x+60,y+100);
			context.lineTo(x+100,y+30);
    },
    
    // 9
    function(x,y) {
      context.moveTo(x+40,y+0);
			context.lineTo(x+0,y+70);
			context.lineTo(x+0,y+100);
			context.lineTo(x+60,y+100);
			context.lineTo(x+100,y+30);
    },
    
    // 10
    function(x,y) {
      context.fillStyle = "#000000";
			context.beginPath();
			context.arc(x+50,y+50,62,0,pi,true);
			context.closePath();
    }
  ];
  
  draw();
};