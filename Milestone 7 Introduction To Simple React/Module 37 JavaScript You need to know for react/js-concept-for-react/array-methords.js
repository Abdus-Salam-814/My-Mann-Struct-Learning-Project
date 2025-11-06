const products =[
    {name: 'laptop', price: 32000, brand: 'Lenovo', color: 'black'},

    {name: 'mobile', price: 24443, brand: 'i-phone', color: 'golden'},

    {name: 'laptop', price: 52000, brand: 'samsung', color: 'green'},

    {name: 'watch', price: 72000, brand: 'Apple', color: 'gray'},
];


  const brands = products.map(product => product.brand)

  console.log(brands)

  const price = products.map(product => product.price);
  console.log(price);


  