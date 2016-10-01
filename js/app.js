(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {
    <!-- green is alert-success -->
    var green = "alert-success";
    var red = "alert-danger";
      // $scope.alertStyle;
      // $scope.message;
      // $scope.lunchItems;
      // $scope.count;

      $scope.countItems = function() {
        var itemCount = itemCounter($scope.lunchItems);
        $scope.count = itemCount;
        setMessage(itemCount);
      };

      function itemCounter(string) {
        var x = 0;
        if(string != null){
          var itemArray = string.split(",");
          for(var i = 0; i < itemArray.length; i++){
              if(itemArray[i] != "" && itemArray[i] !== " "){
                  x++;
              }
          }
        }
        return x;
      }

      function setMessage(num){
        var msg;
        var type;
        if(num === 0){
          type = "warning";
          msg = num + "! Please enter data first."
        }else if(num <= 3){
          type = "success";
          msg = num + ". Enjoy!";
        } else {
          type = "danger";
          msg = num + "! Too Much!";
        }
        $scope.alertStyle = type;
        $scope.message = msg;
      }


  }

})();
