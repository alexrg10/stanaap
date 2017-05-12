angular.module('registerModule')

.controller('registerController', function($http,$scope){
    
     $scope.correo="priscilaMadrigal@gmail.com";
     $scope.contrasenna="123"; 
     $scope.nombre="Priscila";
     ///= [{ email : "priscila@gmail.com", contrasenna : "123", nombre : "Priscila"}];
     
    $scope.register = function() {
     insertarUsuario($http,$scope);
    };
});

function insertarUsuario($http,$scope){
     var link = 'https://priscila-backendserve-juanmiguelar09.c9users.io/structure/routers/userRouter.php';
 
        $http.post(link, {method:'add', correo : $scope.correo, contrasenna : $scope.contrasenna, nombre : $scope.nombre}).then(function (result){
            
            $scope.response = result.data;
            console.log($scope.response);
        });
  }
  