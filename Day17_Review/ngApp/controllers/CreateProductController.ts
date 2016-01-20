namespace MyApp.Controllers {

    export class CreateProductController {

        public product; // this will contain the product information that will be created

        constructor(private productsService: MyApp.Services.ProductsService,
                    private $location:ng.ILocationService) {
        }

        public createProduct() {
            // call the saveProduct() method inside of the products Service
            this.productsService.saveProduct(this.product).then((res) => {
                console.log(res);
                // go back to the '/products' route
                this.$location.path('/products');
            }).catch(() => {
                // if there is an error then run this block of code
                console.log("There was an error");
            });
        }
    }
}