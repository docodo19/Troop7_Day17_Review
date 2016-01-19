namespace MyApp {

    angular.module('MyApp', ['ngRoute', 'ngResource', 'ui.bootstrap']).config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: '/ngApp/views/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: '/ngApp/views/about.html',
                controller: MyApp.Controllers.AboutController,
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: '/ngApp/views/login.html',
                controller: MyApp.Controllers.LoginController,
                controllerAs: 'vm'
            })
            .when('/register', {
                templateUrl: '/ngApp/views/register.html',
                controller: MyApp.Controllers.RegisterController,
                controllerAs: 'vm'
            })
            .when('/externalLogin', {
                templateUrl: '/ngApp/views/externalLogin.html',
                controller: MyApp.Controllers.ExternalLoginController,
                controllerAs: 'vm'
            })
            .when('/externalRegister', {
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: MyApp.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            })
            .when('/confirmEmail', {
                templateUrl: '/ngApp/views/confirmEmail.html',
                controller: MyApp.Controllers.ConfirmEmailController,
                controllerAs: 'vm'
            })
            .when('/products', {
                templateUrl: '/ngApp/views/products.html',
                controller: MyApp.Controllers.ProductsController,
                controllerAs: 'vm'
            })
            .when('/product/create', {
                templateUrl: '/ngApp/views/product-create.html',
                controller: MyApp.Controllers.CreateProductController,
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/ngApp/views/notFound.html'
            });

        $locationProvider.html5Mode(true);
    });

    angular.module('MyApp').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                let token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        })
    );


    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

}