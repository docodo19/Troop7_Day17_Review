namespace MyApp.Controllers {

    export class ProductsController {

        public products; // will contain a list of products

        constructor(
            private $uibModal: angular.ui.bootstrap.IModalService,
            private productsService: MyApp.Services.ProductsService) {

            this.products = productsService.getProducts();
        }

        public openModal(id: number) {
            // open a modal by calling $uibModal.open()
            this.$uibModal.open({
                // Specify which template to load
                templateUrl: '/ngApp/views/modal/product-details.html',
                controller: ProductModalController,
                controllerAs: 'vm',
                resolve: {
                    productId: ()=> id
                }
            });
        }
    }

    class ProductModalController {

        public product; // A product will be added to this public product

        constructor(
            private productId,
            private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance,
            private productsService: MyApp.Services.ProductsService) {

            // load this.product as soon as the modal is opened
            this.product = productsService.getProduct(productId);

        }

        public ok() {
            this.$uibModalInstance.close();
        }


    }
    



}