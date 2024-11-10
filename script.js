// A list of provinces
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/**
 * BASIC EXERCISES
 */

// 1.
// Use forEach to console.log each name
console.log('Exercise 1:')
names.forEach(name => console.log(name))
// Use forEach to console.log each province
provinces.forEach(province => console.log(province))
// Use forEach to console.log each name with matching province
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`))

// 2.
// Use map to create an array of province names in all uppercase
console.log('Exercise 2:')
const upperProvinces = provinces.map(province => province.toUpperCase())
console.log(upperProvinces)

// 3.
// Create a new array with map that contains the length of each name
console.log('Exercise 3:')
const nameLengths = names.map(name => name.length)
console.log(nameLengths)

// 4.
// Use sort to sort all provinces alphabetically
console.log('Exercise 4:')
const sortedProvinces = [...provinces].sort()
console.log(sortedProvinces)

// 5.
// Use filter to remove all provinces that have the word 'Cape' in them
console.log('Exercise 5:')
const filteredProvinces = provinces.filter(province => !province.includes('Cape'))
console.log(filteredProvinces.length)

// 6.
// Using map and some, create a boolean array by checking if a name contains 'S'
console.log('Exercise 6:')
const containsS = names.map(name => name.toLowerCase().includes('s'))
console.log(containsS)

// 7.
// Use reduce to create an object where the names are keys and the provinces are values
console.log('Exercise 7:')
const namesAndProvinces = names.reduce((obj, name, index) => {
    obj[name] = provinces[index]
    return obj
}, {})
console.log(namesAndProvinces)

/**
 *  * ADVANCED EXERCISES (Single console.log statements)
 */

// 1.
// Use forEach to console.log each product name
console.log('Advanced - Exercise 1:')
console.log(products.forEach(item => console.log(item.product)))

// 2.
// Use filter to create array with products that have names of 5 characters or less
console.log('Advanced - Exercise 2:')
console.log(products.filter(item => item.product.length <= 5))

// 3.
// Use filter to create array of prices that are numbers, convert string prices to numbers, and calculate total with reduce
console.log('Advanced - Exercise 3:')
console.log(products
    .filter(item => item.price !== '' && item.price !== ' ')
    .map(item => Number(item.price))
    .reduce((total, price) => total + price, 0))

// 4.
// Use reduce to concatenate all product names
console.log('Advanced - Exercise 4:')
console.log(products.reduce((str, item, index) => 
    index === 0 ? item.product : `${str}, ${item.product}`, ''))

// 5.
// Use reduce to find highest and lowest-priced items
console.log('Advanced - Exercise 5:')
console.log((() => {
    const validProducts = products.filter(item => item.price !== '' && item.price !== ' ')
    const highest = validProducts.reduce((max, item) => 
        Number(item.price) > Number(max.price) ? item : max, validProducts[0])
    const lowest = validProducts.reduce((min, item) => 
        Number(min.price) > Number(item.price) ? item : min, validProducts[0])
    return `Highest: ${highest.product}. Lowest: ${lowest.product}`
})())

// 6.
// Using Object.entries and reduce, recreate the products array with modified keys
console.log('Advanced - Exercise 6:')
console.log(products.map(item => ({
    name: item.product,
    cost: item.price
})))