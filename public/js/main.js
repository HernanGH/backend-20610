const socket = io.connect();


const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const articulo = document.getElementsByName('articulo')[1].value;
  const precio = document.getElementsByName('precio')[1].value;
  const imagen = document.getElementsByName('imagen')[1].value;
  
  socket.emit('new-product', {articulo, precio, imagen});
});

socket.on('products', (products) => {
  console.log(products);
  
  const productList = products.map((product) => `
    <li>Articulo: ${product.articulo} - Precio: ${product.precio}</li>
  `).join(' ');

  const list = document.getElementById('real-time-products');

  list.innerHTML = `<ul>${productList}</ul>`;
})
// io
// console.log(io);