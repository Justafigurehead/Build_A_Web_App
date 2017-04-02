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
  // return studentData;
  // new PieChart(studentData);
  var buttonHandler = function(){
    // var btnSelected = (this.id);
    switch(this.id){
    case 'student-gender':
      console.log("student-gender", "click");
      new PieChart(studentData);
      break;
    case 'student-houses':
      console.log("student-houses", 'click');
      break;
    case 'studentvsStaff':
      console.log("staff-student-ratio", "click");
      break;
    };
  };

  var genderBtn = document.querySelector('#student-gender').onclick = buttonHandler;
  var studentvsStaff = document.querySelector('#staff-student-ratio').addEventListener('click', buttonHandler);
  var studentHouses = document.querySelector('#student-houses');

};



var app = function(){
 var url = 'http://hp-api.herokuapp.com/api/characters/students'
 var data = makeRequest(url, requestComplete);
};

window.onload = app;