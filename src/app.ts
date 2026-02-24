import {Product} from "./Product";

const product = new Product("IPhone", 1000);

const displayProduct = (product: Product) => {
    console.log(`Product: ${product.name} price with discount 10%: ${product.getDiscountPrice(10)}`);
}
displayProduct(product);