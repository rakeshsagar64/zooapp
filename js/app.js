var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
$routeProvider.when("/",{
    templateUrl:"template/aboutus.html"
}).when("/animals",{
    templateUrl:"template/animalList.html"
});
});


app.controller("myController",function($scope){
    $scope.title="welcome";
    $scope.data=[{
        "animal":"Lion",
        "age":23,
        "gender":"male"

    },{
        "animal":"Lion",
        "age":23,
        "gender":"female"
        
    },{
        "animal":"Tiger",
        "age":23,
        "gender":"male"
        }]
})