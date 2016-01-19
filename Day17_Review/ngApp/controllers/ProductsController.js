var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProductsController = (function () {
            function ProductsController($uibModal, productsService) {
                this.$uibModal = $uibModal;
                this.productsService = productsService;
                this.products = productsService.getProducts();
            }
            ProductsController.prototype.openModal = function (id) {
                // open a modal by calling $uibModal.open()
                this.$uibModal.open({
                    // Specify which template to load
                    templateUrl: '/ngApp/views/modal/product-details.html',
                    controller: ProductModalController,
                    controllerAs: 'vm',
                    resolve: {
                        productId: function () { return id; }
                    }
                });
            };
            return ProductsController;
        })();
        Controllers.ProductsController = ProductsController;
        var ProductModalController = (function () {
            function ProductModalController(productId, $uibModalInstance, productsService) {
                this.productId = productId;
                this.$uibModalInstance = $uibModalInstance;
                this.productsService = productsService;
                // load this.product as soon as the modal is opened
                this.product = productsService.getProduct(productId);
            }
            ProductModalController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return ProductModalController;
        })();
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
