class Goods {
    constructor () {
        this.name = name,
        this.price = price
    }
}

const goods = [
    { title: 'Штаны', price: 150 },
    { title: 'Куртка', price: 50 },
    { title: 'Жакет', price: 350 },
    { title: 'Джинсы', price: 250 },
];

const $goodsList = document.querySelector('.goods-list');
  
const renderGoodsItem = ({ title, price }) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price} рублей</p><button class="button">Купить</div></div>`;
};
  
const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
            item => renderGoodsItem(item)
        ).join('\n');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}
  
renderGoodsList();