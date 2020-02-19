class ProductItem {
    constructor(product, img='https://picsum.photos/300/200') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;
    }
  
    render() {
      return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img"  class="product-item__img">
                <div class="desc">
                    <h3 class="product-item__title">${this.title}</h3>
                    <p class="product-item__price">${this.price} \u20bd</p>
                    <button class="product-item__button">Купить</button>
                </div>
            </div>`
    }
}


  
  class ProductList {
    constructor(container = '.products') {
      this.container = container;
      this.goods = [];
      this.allProducts = [];
      this._fetchProducts();
      this.render();
      this.calcSum();
    }
  
    _fetchProducts() {
      this.goods = [
        {id: 1, title: 'Notebook', price: 1000},
        {id: 2, title: 'Mouse', price: 100},
        {id: 3, title: 'Keyboard', price: 250},
        {id: 4, title: 'Gamepad', price: 150},
      ];
    }

    render() {
      const block = document.querySelector(this.container);
      
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    calcSum() {
        const totalPrice = this.allProducts.reduce((sum, product) => sum + product.price, 0);
        console.log('Total Price: ', totalPrice);
    }
  }
  
  new ProductList();
  
class ShoppingCart {
    constructor() {}

    totalCount() {} // Считает общее количество товаров

    totalPrice() {} // Считает общую сумму

    clearAll() {} // Очищает корзину

    payment() {} // оплата
}

class ShoppingCartItem {
    constructor() {}

    itemCount() {} // Считает количество 

    updateItemCount() {} // изменяет количество товара

    itemTotalPrice() {} // Считает сумму

    clearItem() {} // Удаляет товар

    
}