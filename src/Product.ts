export class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name
        this.price = price;
    }
    getDiscountPrice(discount: number): number {
        return (this.price - (this.price * (discount/100)));
    }
}

