const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// request с промисами
let getRequestPromise = (url) => {
  let xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
     
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject(xhr.statusText);
        } else {
          resolve(xhr.responseText);
        }
      }
    }
      xhr.send();
  });
}

getRequestPromise(`${API}/catalogData.json`)
      .then(products =>  console.log(JSON.parse(products)))
      .catch(error => console.log('Error!', error));


class ProductItem {
    constructor(product, img='https://picsum.photos/300/200') {
      this.title = product.product_name;
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
      this._getProducts()
        .then(data => {
          this.goods = [...data];
          this.render();
        });
    }

    _getProducts() {
      return fetch(`${API}/catalogData.json`)
          .then(result => result.json())
          .catch(error => {
            console.log('Error:', error);
          });
    }
    // _fetchProducts() {
    //   this.goods = [
    //     {id: 1, title: 'Notebook', price: 1000},
    //     {id: 2, title: 'Mouse', price: 100},
    //     {id: 3, title: 'Keyboard', price: 250},
    //     {id: 4, title: 'Gamepad', price: 150},
    //   ];
    // }

    calcSum() {
      return this.allProducts.reduce((sum, product) => sum + product.price, 0);
    }

    render() {
      const block = document.querySelector(this.container);
      
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    
  }
  
  new ProductList();
  
class ShoppingCart {
    constructor(container = '.shopping-cart') {
      this.container = container;
      this.productsInCart = [];
    }

    totalCount() {
      return this.productsInCart.reduce((sum, count) => sum += count.quantity, 0);
    } 

    removeItem(productId, quantity = 1) {
      quantity == 1 ? delete this.productsInCart[productId] : this.productsInCart[productId] -= quantity 
  }

    totalPrice() {
      return this.productsInCart.reduce((sum, item) => sum += item.price, 0);
    } 

    clearAll() {
      return this.productsInCart = [];
    } 

}

class ShoppingCartItem {
    constructor(product, img='https://picsum.photos/300/200', quantity = 1) {
      this.id_product = product.id_product;
      this.product_name = product.product_name;
      this.price = product.price;
      this.img = img;
      this.quantity = quantity;
    }

    itemTotalPrice() {
      return this.price * this.quantity;
    } 

}