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
    // var btnSelected = (this.id);
    switch(this.id){
    case 'student-gender':
      console.log("student-gender", "click");
      new PieChart(studentData);
      break;
    case 'student-houses':
      console.log("student-houses", 'click');
      new ColumnChart(studentData);
      break;
    case 'studentvsStaff':
      console.log("staff-student-ratio", "click");
      break;
    };
  };

  var genderBtn = document.querySelector('#student-gender').onclick = buttonHandler;
  var studentvsStaff = document.querySelector('#staff-student-ratio').onclick = buttonHandler;
  var studentHouses = document.querySelector('#student-houses').onclick = buttonHandler;

};



var app = function(){
 var url = 'http://hp-api.herokuapp.com/api/characters/students'
 var data = makeRequest(url, requestComplete);
};

window.onload = app;