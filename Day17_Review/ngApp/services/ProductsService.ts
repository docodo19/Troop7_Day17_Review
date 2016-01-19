namespace MyApp.Services {

    export class ProductsService {
        private productResource;  // Will contain resource connection to /api/products

        constructor(private $resource: ng.resource.IResourceService) {
            this.productResource = $resource('/api/products/:id');
        }

        // Returns a list of products
        public getProducts() {
            return this.productResource.query();
        }
        // Returns a single product
        public getProduct(id) {
            return this.productResource.get({ id: id });
        }
        // Save a product
        public saveProduct(product) {
            return this.productResource.save(product).$promise;
        }


    }

    // Add ProductsService to "MyApp" module
    angular.module("MyApp").service("productsService", ProductsService);
}