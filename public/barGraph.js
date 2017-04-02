var ColumnChart = function(data){
  var container = document.querySelector('#charts');
  this.data = data;
  var char = new Highcharts.Chart({
    chart: {
      type: 'column', 
      renderTo: container
    },
    title: {
      text: "Student House Numbers"
    },
    series: [{
      name: "Houses", 
      data: this.getHouseCount(data),
      colors: ['red', 'green', 'goldenrod', 'navy']
    }],
    xAxis: {
      categories: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
    }, 
    yAxis: {
      min: 0,
      title: {
        text: "Number of Students"
      }
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    }
  });
};

ColumnChart.prototype = {
  getHouseCount: function(students){
    var studentCount = [];
    var gry = 0;
    var sly = 0;
    var huff = 0;
    var raven = 0;
    students.forEach(function(student){
      switch(student.house){
        case "Gryffindor":
          gry++;
          break;
        case "Slytherin": 
          sly++;
          break;
        case "Hufflepuff":
          huff++;
          break;
        case "raven":
          raven++;
          break;
        default:
          break;
      }
    })
    studentCount.push(gry);
    studentCount.push(sly);
    studentCount.push(huff);
    studentCount.push(raven);
    return studentCount;
  }
}