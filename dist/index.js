"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_discount_1 = require("./Shopping Cart/default-discount");
const ecommerce_shopping_cart_1 = require("./Shopping Cart/ecommerce-shopping-cart");
const shoppingCart = new ecommerce_shopping_cart_1.ECommerceShoppingCart();
shoppingCart.discount = new default_discount_1.DefaultDiscount();
//shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: "Camiseta Polo", price: 50 });
shoppingCart.addProduct({ name: "Camiseta Jeans", price: 50 });
shoppingCart.addProduct({ name: "Calça Jeans", price: 180.5 });
console.log(`De: ${shoppingCart.getTotal()} R$`);
console.log(`Ficou para: ${shoppingCart.getTotalWithDiscount()} R$ com descontos!`);