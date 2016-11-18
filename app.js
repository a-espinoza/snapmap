angular
  .module("snapmap", [])
  .controller("MapController", [
    "$scope",
    function($scope){
      $scope.test = "malaka"
    }
  ])

// Defines Map and sets it to sydney
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
