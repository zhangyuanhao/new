angular.module('myApp', [])
.controller('userCtrl', function($scope) {
$scope.fName = '';
$scope.lName = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.users = [
{id:1, fName:'Hege', lName:"Pege" },
{id:2, fName:'Kim',  lName:"Pim" },
{id:3, fName:'Sal',  lName:"Smith" },
{id:4, fName:'Jack', lName:"Jones" },
{id:5, fName:'John', lName:"Doe" },
{id:6, fName:'Peter',lName:"Pan" }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false;
$scope.save1 = true;
$scope.shanc = false;
$scope.less_than_6 = false;
$scope.backgroung1 = false;


$scope.editUser = function(id) {
  if (id == 'new') {
    $scope.fName = '';
    $scope.lName = '';
    $scope.passw2 = '';
    $scope.passw1 = '';
    $scope.save1 = true;
    $scope.xiugai = false;
    $scope.less_than_6 = false;
    } else {
    $scope.less_than_6 = false;
    $scope.incomplete = true;
    $scope.edit = true;
    $scope.xiugai = true;
    $scope.save1 = false;
    $scope.fName = $scope.users[id-1].fName;
    $scope.lName = $scope.users[id-1].lName;
    $scope.idd=id;
  }
};

$scope.remove = function(id) {
    for (var i = 0; i < $scope.users.length; i++) {
    if (id == $scope.users[i].id)
      $scope.users.splice(i,1);
    };
};

$scope.addUser = function() {
  var i = $scope.users.length;
  var aaa = {id:++i, fName:$scope.fName, lName:$scope.lName }
  var password1 = $scope.passw1.length;
    if (password1 < 6) {
      $scope.cl = "color-red";
      $scope.less_than_6 = true;
      $scope.error = true;
    }else {
        $scope.cl = "";
        $scope.less_than_6 = false;
        $scope.backgroung1 = true;
        $scope.users.push(aaa);
    };
};

$scope.shanchu = function() {
  $scope.shanc = !$scope.shanc;
};

// $scope.xiugaiUser = function() {
//   var aaa = {id:7, fName:$scope.fName, lName:$scope.lName }
//   $scope.users.push(aaa)
// };

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('fName', function() {$scope.test();});
$scope.$watch('lName', function() {$scope.test();});


$scope.test = function() {
  if ($scope.passw1 !== $scope.passw2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
  $scope.incomplete = false;
  if (!$scope.fName.length ||
  !$scope.lName.length ||
  !$scope.passw1.length || !$scope.passw2.length) {
     $scope.incomplete = true;
  }
};

$scope.passwo = function() {
    for (var i = 0; i < $scope.users.length; i++) {
      if ($scope.users[i].id == $scope.idd) {
        $scope.users[i].fName = $scope.fName;
        $scope.users[i].lName = $scope.lName;};
    if ($scope.passw1.length >=6) {$scope.less_than_6 = false};
    };
};

});


