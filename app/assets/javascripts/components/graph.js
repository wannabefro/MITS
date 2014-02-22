App.GraphComponent = Ember.Component.extend({
  drawPieChart: function(){
    var dataset = this.get('data'),
    completions = this.sortData(dataset),
    width = 460,
    height = 300,
    radius = Math.min(width, height) / 2;

    var color = d3.scale.category20();

    var pie = d3.layout.pie()
    .sort(null);

    var arc = d3.svg.arc()
    .innerRadius(radius - 100)
    .outerRadius(radius - 50);

    var svg = d3.select("#completion-pie-chart").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var text = svg.append("text")
    .attr("text-anchor", "middle")
    .attr("dy", ".35em")
    .text(Math.floor(completions[0] / d3.sum(completions) * 100) + '%');

    var path = svg.selectAll("path")
    .data(pie(completions))
    .enter().append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", arc);
},
drawLineChart: function(){
    var parseDate = d3.time.format("%Y-%m-%d").parse;
    var data = this.get('data');
    data = data.map(function(d){
      d.count = d.reduce(function(a,b){
        if (b.count){
          return a + b.count;
      }
  }, 0);
      d.date = parseDate(d.pop().date);
      return {"Date": d.date, "Count": d.count};
  })
    var svg = dimple.newSvg("#total-mit-line-chart", 590, 400);
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 505, 305);
      var x = myChart.addCategoryAxis("x", "Date");
      x.addOrderRule("Date");
      myChart.addMeasureAxis("y", "Count");
      var s = myChart.addSeries(null, dimple.plot.line);
      myChart.draw();
  },
  sortData: function(data){
    completions = [0,0];
    data.forEach(function(day){
      day.forEach(function(group){
        if (group.complete){
          completions[0] += group.count
        } else {
          completions[1] += group.count
        }
      });
    });
    return completions;
  },
  didInsertElement: function(){
    this.drawPieChart();
    this.drawLineChart();
  }
});
