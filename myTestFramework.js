var MyTestFramework = {
  assertThat: function(actual, expected){
    var results = document.getElementById("testResults");
    if(actual === expected){
      results.innerHTML += "Pass</br>";
    }else{
      results.innerHTML += " Fail</br>";
    }
  }
};

(function () {
  var testResults = document.createElement("div");
  testResults.id = "testResults";
  document.body.appendChild(testResults);
})();

