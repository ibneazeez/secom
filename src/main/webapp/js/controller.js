'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    $scope.login = DataService.login;
    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}


function loginController($scope, $routeParams, DataService) {

    // get store and cart from service
   

    $scope.login = DataService.login;
    // use routing to pick the selected product
   
}
