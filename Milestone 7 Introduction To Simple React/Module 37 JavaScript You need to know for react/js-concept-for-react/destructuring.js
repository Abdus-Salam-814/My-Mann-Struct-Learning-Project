// console.log(99);

// for(let i = 0; i <= 100; i++){
//     // console.log(i)
// }



// const array = [  12, 34, 33, 89, 10, 78, 100];


// const found = array.find(element => element > 10);

// console.log(found);


// const result = array.filter(element => element > 33);
// console.log(result); // [12, 11, 33, 89, 78, 100]


// const names = ['salam', 'sokim', 'sobin', 'soris', 'kalia']


// const foundede = names.filter(person => person.includes('l'))

// console.log(foundede);


// const products = [
//   { id: 1, name: "Wireless Mouse", category: "Electronics", price: 799, stock: 25, rating: 4.5 },
//   { id: 2, name: "Bluetooth Keyboard", category: "Electronics", price: 1299, stock: 40, rating: 4.6 },
//   { id: 3, name: "Gaming Headset", category: "Electronics", price: 2499, stock: 15, rating: 4.7 },
//   { id: 4, name: "USB-C Charger", category: "Accessories", price: 499, stock: 60, rating: 4.3 },
//   { id: 5, name: "Laptop Stand", category: "Accessories", price: 899, stock: 35, rating: 4.4 },
//   { id: 6, name: "Smart Watch", category: "Wearable", price: 3499, stock: 20, rating: 4.2 },
//   { id: 7, name: "Fitness Tracker", category: "Wearable", price: 2299, stock: 22, rating: 4.1 },
//   { id: 8, name: "Phone Tripod", category: "Accessories", price: 699, stock: 50, rating: 4.5 },
//   { id: 9, name: "LED Desk Lamp", category: "Home", price: 999, stock: 28, rating: 4.6 },
//   { id: 10, name: "Portable Speaker", category: "Audio", price: 1899, stock: 30, rating: 4.7 },
//   { id: 11, name: "Power Bank", category: "Electronics", price: 1599, stock: 42, rating: 4.5 },
//   { id: 12, name: "Noise Cancelling Earbuds", category: "Audio", price: 2799, stock: 18, rating: 4.8 },
//   { id: 13, name: "Smartphone Case", category: "Accessories", price: 299, stock: 100, rating: 4.4 },
//   { id: 14, name: "Screen Protector", category: "Accessories", price: 199, stock: 150, rating: 4.3 },
//   { id: 15, name: "Wireless Charger", category: "Electronics", price: 899, stock: 26, rating: 4.4 },
//   { id: 16, name: "Mechanical Keyboard", category: "Electronics", price: 2799, stock: 17, rating: 4.7 },
//   { id: 17, name: "HDMI Cable", category: "Accessories", price: 399, stock: 70, rating: 4.5 },
//   { id: 18, name: "External Hard Drive", category: "Storage", price: 4499, stock: 14, rating: 4.6 },
//   { id: 19, name: "SSD 512GB", category: "Storage", price: 5899, stock: 10, rating: 4.8 },
//   { id: 20, name: "USB Flash Drive", category: "Storage", price: 499, stock: 90, rating: 4.5 },
//   { id: 21, name: "Smart TV Remote", category: "Electronics", price: 699, stock: 22, rating: 4.2 },
//   { id: 22, name: "Mini Projector", category: "Electronics", price: 6499, stock: 12, rating: 4.6 },
//   { id: 23, name: "Bluetooth Speaker", category: "Audio", price: 1599, stock: 25, rating: 4.7 },
//   { id: 24, name: "VR Headset", category: "Electronics", price: 9999, stock: 8, rating: 4.8 },
//   { id: 25, name: "Smart Light Bulb", category: "Home", price: 499, stock: 60, rating: 4.3 },
//   { id: 26, name: "Electric Kettle", category: "Home", price: 1499, stock: 32, rating: 4.5 },
//   { id: 27, name: "Air Purifier", category: "Home", price: 8999, stock: 5, rating: 4.7 },
//   { id: 28, name: "Robot Vacuum", category: "Home", price: 15999, stock: 3, rating: 4.8 },
//   { id: 29, name: "WiFi Router", category: "Electronics", price: 2599, stock: 20, rating: 4.6 },
//   { id: 30, name: "Ethernet Cable", category: "Accessories", price: 299, stock: 80, rating: 4.4 },
//   { id: 31, name: "Laptop Backpack", category: "Accessories", price: 1799, stock: 30, rating: 4.5 },
//   { id: 32, name: "Wireless Printer", category: "Electronics", price: 12499, stock: 7, rating: 4.6 },
//   { id: 33, name: "Smart Door Lock", category: "Home", price: 4999, stock: 10, rating: 4.5 },
//   { id: 34, name: "USB Hub", category: "Accessories", price: 799, stock: 45, rating: 4.4 },
//   { id: 35, name: "Laptop Cooling Pad", category: "Accessories", price: 899, stock: 25, rating: 4.5 },
//   { id: 36, name: "WiFi Adapter", category: "Electronics", price: 599, stock: 50, rating: 4.3 },
//   { id: 37, name: "Bluetooth Dongle", category: "Accessories", price: 349, stock: 70, rating: 4.2 },
//   { id: 38, name: "Smartphone Gimbal", category: "Accessories", price: 3999, stock: 12, rating: 4.6 },
//   { id: 39, name: "Action Camera", category: "Electronics", price: 6999, stock: 10, rating: 4.7 },
//   { id: 40, name: "Digital Camera", category: "Electronics", price: 14999, stock: 6, rating: 4.8 },
//   { id: 41, name: "Tripod Stand", category: "Accessories", price: 1099, stock: 35, rating: 4.4 },
//   { id: 42, name: "Ring Light", category: "Accessories", price: 1299, stock: 40, rating: 4.5 },
//   { id: 43, name: "Drone Camera", category: "Electronics", price: 29999, stock: 3, rating: 4.8 },
//   { id: 44, name: "Smart Plug", category: "Home", price: 999, stock: 20, rating: 4.4 },
//   { id: 45, name: "Portable Fan", category: "Home", price: 799, stock: 45, rating: 4.5 },
//   { id: 46, name: "Coffee Maker", category: "Home", price: 2999, stock: 15, rating: 4.6 },
//   { id: 47, name: "Rice Cooker", category: "Home", price: 3299, stock: 12, rating: 4.7 },
//   { id: 48, name: "Toaster", category: "Home", price: 1499, stock: 25, rating: 4.4 },
//   { id: 49, name: "Hair Dryer", category: "Beauty", price: 1899, stock: 18, rating: 4.5 },
//   { id: 50, name: "Electric Trimmer", category: "Beauty", price: 1599, stock: 22, rating: 4.6 },
//   { id: 51, name: "Face Steamer", category: "Beauty", price: 899, stock: 25, rating: 4.3 },
//   { id: 52, name: "Straightener", category: "Beauty", price: 2199, stock: 15, rating: 4.4 },
//   { id: 53, name: "Makeup Mirror", category: "Beauty", price: 699, stock: 40, rating: 4.2 },
//   { id: 54, name: "Table Fan", category: "Home", price: 1599, stock: 28, rating: 4.5 },
//   { id: 55, name: "Ceiling Fan", category: "Home", price: 3599, stock: 10, rating: 4.6 },
//   { id: 56, name: "Water Heater", category: "Home", price: 4999, stock: 7, rating: 4.6 },
//   { id: 57, name: "Electric Iron", category: "Home", price: 1399, stock: 30, rating: 4.4 },
//   { id: 58, name: "Table Lamp", category: "Home", price: 999, stock: 20, rating: 4.3 },
//   { id: 59, name: "Desk Organizer", category: "Office", price: 599, stock: 40, rating: 4.4 },
//   { id: 60, name: "Office Chair", category: "Office", price: 8499, stock: 8, rating: 4.6 },
//   { id: 61, name: "Study Table", category: "Office", price: 10499, stock: 6, rating: 4.7 },
//   { id: 62, name: "Notebook", category: "Stationery", price: 99, stock: 200, rating: 4.2 },
//   { id: 63, name: "Pen Set", category: "Stationery", price: 199, stock: 150, rating: 4.3 },
//   { id: 64, name: "Marker Set", category: "Stationery", price: 249, stock: 120, rating: 4.4 },
//   { id: 65, name: "Whiteboard", category: "Office", price: 1499, stock: 25, rating: 4.5 },
//   { id: 66, name: "File Holder", category: "Office", price: 399, stock: 60, rating: 4.3 },
//   { id: 67, name: "Back Cushion", category: "Office", price: 699, stock: 30, rating: 4.4 },
//   { id: 68, name: "Mouse Pad", category: "Accessories", price: 299, stock: 100, rating: 4.5 },
//   { id: 69, name: "Printer Paper Pack", category: "Office", price: 599, stock: 80, rating: 4.3 },
//   { id: 70, name: "Router Extender", category: "Electronics", price: 1699, stock: 20, rating: 4.5 },
//   { id: 71, name: "Smart Scale", category: "Health", price: 2499, stock: 15, rating: 4.4 },
//   { id: 72, name: "Thermometer", category: "Health", price: 699, stock: 50, rating: 4.2 },
//   { id: 73, name: "Oximeter", category: "Health", price: 999, stock: 40, rating: 4.5 },
//   { id: 74, name: "Electric Toothbrush", category: "Health", price: 1999, stock: 18, rating: 4.6 },
//   { id: 75, name: "Water Bottle", category: "Home", price: 499, stock: 60, rating: 4.4 },
//   { id: 76, name: "Lunch Box", category: "Home", price: 799, stock: 45, rating: 4.3 },
//   { id: 77, name: "Mixer Grinder", category: "Home", price: 3999, stock: 10, rating: 4.6 },
//   { id: 78, name: "Blender", category: "Home", price: 2999, stock: 12, rating: 4.5 },
//   { id: 79, name: "Juicer", category: "Home", price: 3499, stock: 15, rating: 4.6 },
//   { id: 80, name: "Smart Refrigerator", category: "Home", price: 49999, stock: 2, rating: 4.9 },
//   { id: 81, name: "Microwave Oven", category: "Home", price: 8999, stock: 5, rating: 4.7 },
//   { id: 82, name: "Dishwasher", category: "Home", price: 29999, stock: 3, rating: 4.8 },
//   { id: 83, name: "Washing Machine", category: "Home", price: 25999, stock: 4, rating: 4.7 },
//   { id: 84, name: "Air Conditioner", category: "Home", price: 45999, stock: 3, rating: 4.8 },
//   { id: 85, name: "Ceiling Light", category: "Home", price: 1299, stock: 25, rating: 4.4 },
//   { id: 86, name: "Smart Thermostat", category: "Home", price: 4999, stock: 8, rating: 4.6 },
//   { id: 87, name: "Security Camera", category: "Home", price: 3499, stock: 10, rating: 4.7 },
//   { id: 88, name: "Doorbell Camera", category: "Home", price: 2799, stock: 12, rating: 4.6 },
//   { id: 89, name: "Gaming Console", category: "Electronics", price: 49999, stock: 2, rating: 4.9 },
//   { id: 90, name: "Game Controller", category: "Accessories", price: 2999, stock: 18, rating: 4.6 },
//   { id: 91, name: "VR Controller", category: "Accessories", price: 4999, stock: 10, rating: 4.8 },
//   { id: 92, name: "Laptop 14-inch", category: "Computers", price: 64999, stock: 5, rating: 4.8 },
//   { id: 93, name: "Laptop 15.6-inch", category: "Computers", price: 79999, stock: 4, rating: 4.9 },
//   { id: 94, name: "Desktop PC", category: "Computers", price: 55999, stock: 3, rating: 4.7 },
//   { id: 95, name: "Monitor 24-inch", category: "Computers", price: 12999, stock: 8, rating: 4.6 },
//   { id: 96, name: "Monitor 27-inch", category: "Computers", price: 16999, stock: 6, rating: 4.7 },
//   { id: 97, name: "Graphics Card", category: "Computers", price: 29999, stock: 5, rating: 4.8 },
//   { id: 98, name: "RAM 16GB", category: "Computers", price: 7999, stock: 15, rating: 4.6 },
//   { id: 99, name: "Motherboard", category: "Computers", price: 12499, stock: 6, rating: 4.7 },
//   { id: 100, name: "CPU Processor", category: "Computers", price: 18999, stock: 7, rating: 4.8 }
// ];

// let filterPush = [];


// const filterProducts = products.filter(product => product.name.includes('s'));

// filterPush.push(...filterProducts);


// console.log(filterPush)
// console.log(filterPush.length)


// // console.log(filterProducts);

// const myObject = [{
//   name: 'Abdus Salam',
//   phone: '017437847',
//   emai: 'abc@gmi.io',
//   addricess: 'raj shahi'
// }]


// // console.log(myObject.phone)
// // console.log(myObject.emai)
// // console.log(myObject.name)



// const myFilterHere = myObject.filter(item => item.name.includes('u'))


// console.log(myFilterHere)




console.log('7497372')

console.log(typeof(88))

console.log(typeof('salam'))
console.log(Array.isArray([33, 55]))


const inputFild = 3;


for(let i = 1; i <= inputFild; i++ ){
  console.log(i);
}


let i = 0;

console.log(i)

 