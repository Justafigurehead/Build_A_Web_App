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
  var buttons = document.querySelectorAll('button');
  buttonHandler(buttons);
};

var buttonHandler = function(buttons){
  buttons.forEach(function(button){
   if button.click
  })
  };
});

};


var app = function(){
 var url = 'http://hp-api.herokuapp.com/api/characters/students'
 var data = makeRequest(url, requestComplete);
};

window.onload = app;