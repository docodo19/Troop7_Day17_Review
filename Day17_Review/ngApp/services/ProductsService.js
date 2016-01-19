var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ProductsService = (function () {
            function ProductsService($resource) {
                this.$resource = $resource;
                this.productResource = $resource('/api/products/:id');
            }
            // Returns a list of products
            ProductsService.prototype.getProducts = function () {
                return this.productResource.query();
            };
            // Returns a single product
            ProductsService.prototype.getProduct = function (id) {
                return this.productResource.get({ id: id });
            };
            // Save a product
            ProductsService.prototype.saveProduct = function (product) {
                return this.productResource.save(product).$promise;
            };
            return ProductsService;
        })();
        Services.ProductsService = ProductsService;
        // Add ProductsService to "MyApp" module
        angular.module("MyApp").service("productsService", ProductsService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
