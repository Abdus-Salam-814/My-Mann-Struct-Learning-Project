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


//   return না করলে forEach ব্যাবহার করবা



products.forEach(product => console.log(product.color))


products.forEach(product =>{
    // যা ইচ্ছা করতে পারব
    // এখানে কি করতে পারব না ?
})

// 3. ফিল্টার filter


const cheep = products.filter(product => product.price <= 30000);

console.log(cheep);

const specificName = products.filter(product => product.name.includes('l') );

console.log(specificName)



// 4. find

const special = products.find(product => product.name.includes('l'))


console.log('---------------Last is on---------------------')

console.log(special)

