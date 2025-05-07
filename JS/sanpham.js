const products = [
    { name: 'Sản phẩm 2', image: '/IMG/maydohuyetap.jpg', description: 'Máy đo huyết áp.' },
    { name: 'Sản phẩm 3', image: '/IMG/kimkhauphauthuat.jpg', description: 'Kim khâu phẫu thuật.' },
    { name: 'Sản phẩm 4', image: '/IMG/20230128_may-tro-thinh-1.jpg', description: 'Máy trợ thính.' },
    { name: 'Sản phẩm 5', image: '/IMG/kiemtiem2.jpg', description: 'Kim tiêm.' },
    { name: 'Sản phẩm 6', image: '/IMG/ongnghe.jpg', description: 'Ống nghe.' }
];

const productList = document.querySelector('.product-list');
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="#" class="btn">Chi tiết</a>
    `;
    productList.appendChild(productItem);
});
