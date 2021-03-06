angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$stateParams) {
  $scope.firmalar = [
    { adi: 'Akbank',kategory:'Bank',tel:'4440444',logo:'https://www.akbank.com/SiteAssets/img/akbfa.jpg', id: 0 },
    { adi: 'Vakfkbank',kategory:'Bank',tel:'4440444',logo:'https://lh3.googleusercontent.com/proxy/AhuO2rCy-kWAufe8tl0SH4nCtiFWa17I_Hq4UTTQ9ppem9nEb-_XVmBahqeeDF9Mmomhq-UMh-pCv2zlhl8eSaPo7tbxBHsG-A0MJwGrt1UHWkYrsJikI7nQIb8ZKmBdZA', id: 1 },
    { adi: 'Yıldız Teknık',kategory:'Üniversite',tel:'4440444',logo:'https://upload.wikimedia.org/wikipedia/commons/3/37/Y%C4%B1ld%C4%B1z_Technical_University_Logo.png', id: 2 },
    { adi: 'Mersin Üniversite',kategory:'Üniversite',tel:'4440444',logo:'https://pbs.twimg.com/profile_images/549926078228094976/eUvFnR_c_400x400.png', id: 3 },
    { adi: 'Jandarma',kategory:'Acil',tel:'4440444',logo:'https://iconape.com/wp-content/files/lf/257545/svg/257545.svg', id: 4 },
    { adi: 'Elektrik arzı',kategory:'Acil',tel:'4440444',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfTq-yPk0JBXa-NCHr8w65-GSwyA9p4_usQ&usqp=CAU', id: 5 },
    { adi: 'abc hastanesi',kategory:'Hastane',tel:'4440444',logo:'https://lh3.googleusercontent.com/proxy/9O1ATxU9pbxEJLO4mcv7KGN5a691TefMxaKdfbuPmvOGaPSc9oETrGhDkgUjugvQnTfopszLHvwUjLKEBo0IAxs2J-1DkrlC9tncAQ', id: 6 },
    { adi: 'Defne Hastanesi',kategory:'Hastane',tel:'4440444',logo:'https://yellow.place/file/image/thumb/0/0/3631/nzqgrwoqzxibfmyo.jpg', id: 7 },  
  ];

  console.log("id" + $stateParams.firmaId);
  if($stateParams.firmaId){
    $scope.bilgi = $scope.firmalar[$stateParams.firmaId];
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
