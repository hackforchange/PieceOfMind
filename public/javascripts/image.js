var Image = function(piles_flat_array) {
  var  context = $('#canvas').get(0).getContext("2d"),
       pi = Math.PI,
       half_pi = Math.PI/2,
       pi2 = Math.PI*2,
       factor = 1;
  
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
      shapes[10-t](x*factor,y*factor);

      i+=3;
    }
  };
  
  var shapes = [
    // 0
    function(x,y) {
			context.beginPath();
      context.arc(x+50*factor,y+50*factor,4*factor,0,pi2,true);
      context.fill();
    },
    
    // 1
    function(x,y) {
			context.moveTo(x+50*factor,y+35*factor);
			context.lineTo(x+35*factor,y+50*factor);
			context.lineTo(x+50*factor,y+65*factor);
			context.lineTo(x+65*factor,y+50*factor);
      context.fill();
    },
    
    // 2
    function(x,y) {
			context.moveTo(x+ 10 * factor, y+  0 * factor);
			context.lineTo(x+  0 * factor, y+ 10 * factor);
			context.lineTo(x+ 90 * factor, y+100 * factor);
			context.lineTo(x+100 * factor, y+ 90 * factor);
      context.fill();
    },
    
    // 3
    function(x,y) {
			context.moveTo(x+ 0 * factor, y+15 * factor);
			context.lineTo(x+70 * factor, y+15 * factor);
			context.lineTo(x+70 * factor, y+30 * factor);
			context.lineTo(x+ 0 * factor, y+30 * factor);
			context.fill();
			context.moveTo(x+100 * factor, y+70 * factor);
			context.lineTo(x+ 30 * factor, y+70 * factor);
			context.lineTo(x+ 30 * factor, y+85 * factor);
			context.lineTo(x+100 * factor, y+85 * factor);
      context.fill();
    },
    
    // 4
    function(x,y) {
      context.beginPath();
			context.arc(x+30 * factor,y+30 * factor,15 * factor,0,pi2,true);
			context.fill();
			context.beginPath();
			context.arc(x+60 * factor,y+60 * factor,25 * factor,0,pi2,true);
      context.fill();
    },
    
    // 5
    function(x,y) {
      context.arc(x,y+100 * factor,95 * factor,-half_pi,0,false);
      context.lineTo(x,y+100 * factor);
      context.fill();
      context.fillStyle = "#FFFFFF";
      context.beginPath();
      context.arc(x,y+100 * factor,20 * factor,-half_pi,0,false);
      context.lineTo(x,y+100 * factor);
      context.fill();
      context.fillStyle = "#000000";
    },
    
    // 6
    function(x,y) {
      context.fillStyle = "#FFFFFF";
      context.arc(x+50 * factor,y,50 * factor,0,pi,false);
			context.fill();
			context.fillStyle = "#000000";
			context.beginPath();
			context.arc(x+50 * factor,y+100 * factor,50 * factor,0,pi,true);
      context.fill();
    },
    
    // 7
    function(x,y) {
			context.moveTo(x+ 40 * factor,y+  0  * factor);
			context.lineTo(x+  0 * factor,y+ 70  * factor);
			context.lineTo(x+  0 * factor,y+100  * factor);
			context.lineTo(x+ 60 * factor,y+100  * factor);
			context.lineTo(x+100 * factor,y+ 30  * factor);
      context.fill();
    },
    
    // 8
    function(x,y) {
      context.moveTo(x+  0  * factor,y+ 10 * factor);
			context.lineTo(x+ 90  * factor,y+  0 * factor);
			context.lineTo(x+100  * factor,y+  0 * factor);
			context.lineTo(x+100  * factor,y+ 90 * factor);
			context.lineTo(x+ 10  * factor,y+100 * factor);
			context.lineTo(x+  0  * factor,y+100 * factor);
			context.fill();
			context.fillStyle = "#FFFFFF";
			context.beginPath();
			context.arc(x+60 * factor,y+40 * factor,15 * factor,0,pi2,true);
			context.fill();
      context.fillStyle = "#000000";
    },
    
    // 9
    function(x,y) {
      context.moveTo(x+  0 * factor,y+  0 * factor);
			context.lineTo(x+  0 * factor,y+100 * factor);
			context.lineTo(x+100 * factor,y+100 * factor);
			context.lineTo(x+100 * factor,y+  0 * factor);
			context.fill();
			context.fillStyle = "#FFFFFF";
			context.beginPath();
			context.arc(x+40 * factor,y+60 * factor,15 * factor,0,pi2,true);
      context.fill();
      context.fillStyle = "#000000";
    },
    
    // 10
    function(x,y) {
			context.beginPath();
			context.moveTo(x+ 10 * factor,y+  0 * factor);
			context.lineTo(x+ 90 * factor,y+  0 * factor);
			context.lineTo(x+100 * factor,y+ 10 * factor);
			context.lineTo(x+100 * factor,y+ 90 * factor);
			context.lineTo(x+ 90 * factor,y+100 * factor);
			context.lineTo(x+ 10 * factor,y+100 * factor);
			context.lineTo(x+  0 * factor,y+ 90 * factor);
			context.lineTo(x+  0 * factor,y+ 10 * factor);
			context.closePath();
    }
  ];
  
  draw();
};