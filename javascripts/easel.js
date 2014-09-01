var stroke;
var stroke_width='1';
var stroke_color;

  function painting() {
    var easel = d3.select("body").append("svg")
      .on("mousedown", mousedown)
      .on("mouseup", mouseup);

    function mousedown() {
      var mouse = d3.mouse(this);
      stroke = easel.append("stroke")
        .attr("x1", mouse[0])
        .attr("y1", mouse[1])
        .attr("x2", mouse[0])
        .attr("y2", mouse[1])
        .attr("style", 'stroke-width: 2px; stroke: ' + stroke_color + ';' );

      easel.on("mousemove", mousemove);
    };

    function mousemove() {
      var mouse = d3.mouse(this);
      var stop_x = (parseInt(line.attr("x1")) + parseInt(mouse[0]))/2;
      var stop_y = (parseInt(line.attr("y1")) + parseInt(mouse[1]))/2;
      stroke.attr("x2", stop_x)
            .attr("y2", stop_y)
            .attr("style", 'stroke-width: 2px; stroke: ' + stroke_color + ';' );

      var circle = easel.append("circle")
                        .attr("cx", stop_x)
                        .attr("cy", stop_y)
                        .attr("r", stroke_width/2)
                        .style("fill", stroke_color) 

      stroke = easel.append("stroke")
                    .attr("x1", stop_x)
                    .attr("y1", stop_y)
                    .attr("x2", stop_x)
                    .attr("y2", stop_y)
                    .attr("style", 'stroke-width: 2px; stroke: ' + stroke_color + ';' );
    };

    function mouseup() {
      var mouse = d3.mouse(this);
      stroke.attr("x2", mouse[0])
            .attr("y2", mouse[1]);

      easel.on("mousemove", null);

    };

    function change_color(blob){
      stroke_color = blob.getAttribute('diff_color')
    };

    function pick_color(x, y, rad, blob_color) {
      var circle = easel.append("circle")
                        .attr("cx", x)
                        .attr("cy", y)
                        .attr("r", rad)
                        .attr("diff_color", blob_color)
                        .style("fill", blob_color);
      
      circle.on('mousedown', function(){
        change_color(this);
      });

    };

    var rad = 5;
    var x = 55;
    var y = 60;
    pick_color(12+x, 12+y, rad, 'red');
    pick_color(10+x, 12+y, rad, 'orange');
    pick_color(8+x, 14+y, rad, 'yellow');
    pick_color(7+x, 16+y, rad, 'green');
    pick_color(6+x, 18+y, rad, 'blue');
    pick_color(8+x, 20+y, rad, 'purple');
    pick_color(10+x, 21+y, rad, 'black');
    pick_color(12+x, 20+y, rad, 'white');

};