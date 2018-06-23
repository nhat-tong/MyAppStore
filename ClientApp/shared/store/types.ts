export class Product {
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
    readonly gtinCode: string
}

export class CartItem {
    readonly name: string;
    readonly price: number;
    quantity: number;
    readonly code: string;

    constructor(product: Product) {
        this.name = product.name;
        this.price = product.price;
        this.quantity = product.quantity;
        this.code = product.gtinCode;
    };
}