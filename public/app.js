var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var requestComplete = function(){
  if (this.status !== 200){
    return;
  }

  var jsonString = this.responseText;
  var studentData = JSON.parse(jsonString);

  new PieChart(studentData);

  var buttonHandler = function(){
    switch(this.id){
    case 'student-gender':
      new PieChart(studentData);
      break;
    case 'student-houses':
      new ColumnChart(studentData);
      break;
    case 'studentvsStaff':
      new BPieChart(studentData);
      console.log("staff-student-ratio", "click");
      break;
    };
  };

  var genderBtn = document.querySelector('#student-gender').onclick = buttonHandler;
  var studentvsStaff = document.querySelector('#staff-student-ratio').onclick = buttonHandler;
  var studentHouses = document.querySelector('#student-houses').onclick = buttonHandler;

};



var app = function(){
 
};

window.onload = app;