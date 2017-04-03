//Basic empty pie-chart

 var BPieChart = function(data){
  this.data = data;

  var container = document.querySelector('#charts');
    var bloodtypes = this.getMuggles(data);
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
          name: "Pureblood", 
          y: bloodtypes[0],
          color:"plum"
        }, 
        {
          name: "Muggle-Borns", 
          y: bloodtypes[2],
          color: "teal"
        }, 
        {
          name:"Half-bloods", 
          y: bloodtypes[1],
          color: "saddlebrown",
          splice: true
        }
        ]
      }]
    });
 };


 BPieChart.prototype = {
   getMuggles: function(data){
      var studentCount = [];
      var hb = 0;
      var pb = 0;
      var mb = 0;
      data.forEach(function(student){
        switch(student.ancestry){
          case "half-blood":
            hb++;
            break;
          case "muggleborn":
            mb++;
            break;
          case "pure-blood":
            pb++;
            break;
        }; 
      })
      studentCount.push(pb);
      studentCount.push(hb);
      studentCount.push(mb);
      return studentCount;
   }

 };
