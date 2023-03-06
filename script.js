let products = [
  { name: 'Hearty beans', price: 1.99, market: 'Local Market' },
  { name: 'Humble Pizza', price: 3.99, market: 'Local Market' },
  { name: 'Biodegradable Beans', price: 7, market: 'Great Mall' },
  { name: 'Posh Pizza', price: 16.5, market: 'Great Mall' },
  { name: 'Just Beans', price: 0.5, market: 'Corner Shop' },
  { name: 'Just Pizza', price: 3.5, market: 'Corner Shop' },
];

const discountedProductsTen = products.map((product) => {
  return { ...product, price: product.price - product.price * 0.1 };
});

const discountedProductsOne = products.map((product) => {
  return { ...product, price: product.price - 1 };
});
console.log(discountedProductsOne);

const prices = document.querySelectorAll('.product-price');
console.log(prices);

const tenbtn = document.querySelector('.tenbtn');
const onebtn = document.querySelector('.onebtn');
console.log(tenbtn);

tenbtn.addEventListener('click', () => {
  discountedProductsTen.map((product, idx) => {
    console.log(idx);
    console.log(product);
    prices[idx].innerHTML = `${product.price}$`;
  });
});

onebtn.addEventListener('click', () => {
  discountedProductsOne.map((product, idx) => {
    console.log(idx);
    console.log(product);
    prices[idx].innerHTML = `${product.price}$`;
  });
});
