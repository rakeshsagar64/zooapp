var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
$routeProvider.when("/",{
    templateUrl:"template/aboutus.html"
}).when("/animals",{
    templateUrl:"template/animalList.html"
}).when("/addAnimal",{
    templateUrl:"template/addAnimal.html"
}).when("/adopt:animalId",{
    controller:"adoptController",
    templateUrl:"template/adopt.html"
});
});



app.controller("animalController",function($scope,$http){
$scope.add=function(){
    let data={
        "animal":$scope.animalName,
        "age":$scope.animalAge,
        "gender":$scope.animalGender
    }

    $http.post("http://localhost:3000/addAnimal",data)
    .then(function(response){
        console.log("post request sent");
    });
    console.log(data);
}

});






app.controller("myController",function($scope,$http){

    $scope.title="welcome";
    $http.get("http://localhost:3000/animals").then(function(response){
        $scope.data=response.data;
        console.log(response.data);
    });
    
})





app.controller("adoptController",function($scope,$http,$routeParams){
    console.log("inside adopt controller");
     let data={"animalId":$routeParams.animalId}
    $http.post("http://localhost:3000/fetchById",data).then(function(response){
        $scope.list=response.data;
    });

 
    });
 