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
  new PieChart(studentData);
};



var app = function(){
 var url = 'http://hp-api.herokuapp.com/api/characters/students'
 var data = makeRequest(url, requestComplete);
};

window.onload = app;