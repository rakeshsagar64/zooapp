var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
$routeProvider.when("/",{
    templateUrl:"template/aboutus.html"
}).when("/animals",{
    templateUrl:"template/animalList.html"
}).when("/addAnimal",{
    templateUrl:"template/addAnimal.html"
});
});



app.controller("animalController",function($scope,$http){
$scope.add=function(){
    let data={
        "animal":$scope.animalName,
        "age":$scope.animalAge,
        "gender":$scope.animalGender
    }

    $http.post("http://localhost:3000/addAnimal",data).then(function(response){
        console.log("post request sent");
    });
    console.log(data);
}

});




app.controller("myController",function($scope,$http){

    $scope.title="welcome";
    $http.get("http://localhost:3000/animals").then(function(response){
        $scope.data=response.data;
    });
    
})