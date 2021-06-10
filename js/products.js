const productsJson =
`[
    {
        "id": "1",
        "title": "Garnet",
        "image": "granat.jpg"
        "description": "Garnet",
        "price": 4.99
    },
    {
        "id": "2",
        "title": "Banana",
        "image": "1402862895_banana2.jpg",
        "description": "Banana",
        "price": 2.99
    },
    {
        "id": "3",
        "title": "Cat",
        "image": "https://placekitten.com/200/287",
        "description": "Cat",
        "price": 1.000 000
    }
    
]`;

function renderProducts(products, sortOrder) {
    const sortedProducts = [...products].sort( (a, b) => sortOrder === 'ascending' ? a.price - b.price : b.price - a.price );
    const productsContainer = document.querySelector('.products-list');
    let html = '';
    for (const product of sortedProducts) {
        html += ` <article class="product">
                    <img src="img${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <div class="buttons">
                        <button>Info</button>
                        <button>Buy - ${product.price}</button>
                    </div>
                </article>`;
    }
    productsContainer.innerHTML = html;
}

renderProducts(JSON.parse(productsJson), 'ascending');

const buttonSortAscending = document.querySelector('.sort-ascending');
const buttonSortDescending = document.querySelector('.sort-descending');

buttonSortAscending.addEventListenr('click', sortAscending);
buttonSortDescending.addEventListenr('click', sortDescending);

function sortAscending() {
    renderProducts(JSON.parse(productsJson), 'ascending');
}
function sortAscending() {
    renderProducts(JSON.parse(productsJson), 'descending');
}
