var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var CreateProductController = (function () {
            function CreateProductController(productsService, $location) {
                this.productsService = productsService;
                this.$location = $location;
            }
            CreateProductController.prototype.createProduct = function () {
                var _this = this;
                this.productsService.saveProduct(this.product).then(function () {
                    // go back to the '/products' route
                    _this.$location.path('/products');
                }).catch(function () {
                    // if there is an error then run this block of code
                    console.log("There was an error");
                });
            };
            return CreateProductController;
        })();
        Controllers.CreateProductController = CreateProductController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
