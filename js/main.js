const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title = 'Notebook', price = '20000', img = 'https://picsum.photos/300/200') => {
    return `<div class="product-item">
                <h3 class="product-item__title">${title}</h3>
                <img src="${img}" alt="${title}" class="product-item__img">
                <p class="product-item__price">${price}</p>
                <button class="product-item__button">Добавить в корзину</button>
            </div>`;
};

const renderProducts = list => document.querySelector('.products').insertAdjacentHTML("beforeend", list.map((item) => renderProduct(item.title, item.price)).join(''));

renderProducts(products);




