//Basic empty pie-chart

 var PieChart = function(data){
  this.data = data;

  var container = document.querySelector('#pie-chart');

    var chart = new Highcharts.Chart({
      chart:{
        type:'pie',
        renderTo: container
      }, 
      title: {
        text: "", 
        align: 'center'
      }, 
      plotoptions: {

        pie: {
          dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
          startAngle: -90,
          endAngle: 90, 
          center: ['50%', '75%']
        }
      },
      series: [{
        name: "Student's Gender", 
        data: [
        {
          name: "Male", 
          y: this.getAllMalesCount(data),
          color:"tomato"
        }, 
        {
          name: "Female", 
          y: this.getAllFemalesCount(data),
          color: "mistyrose"
        }
        ]
      }]
    });
 };

 PieChart.prototype = {
    getAllFemalesCount: function(students){
      var i = 0;
      students.forEach(function(student){
        if (student.gender == "female"){
          i++
        };
      });
      return i;
    }, 
    getAllMalesCount: function(students){
      var i = 0;
      students.forEach(function(student){
        console.log(student)
        if (student.gender == "male"){
          i++
        };
      });
      return i;
    }
 };