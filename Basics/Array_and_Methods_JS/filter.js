// filter() -- same as the find() but returns an array of all the elements that matches the condition instead of just the first one!



// let numbers = [10, 20, 30, 40, 50]

// let filterNum = numbers.filter(n => n > 20)
// console.log(filterNum);



// How production code looks


const products = [
  { name: "Wireless Mouse", category: "Electronics", price: 25, inStock: true,  rating: 4.5 },
  { name: "Desk Lamp", category: "Home", price: 40, inStock: false, rating: 4.0 },
  { name: "USB-C Hub", category: "Electronics", price: 55, inStock: true,  rating: 4.8 },
  { name: "Notebook", category: "Stationery", price: 5,  inStock: true,  rating: 3.9 },
  { name: "Backpack", category: "Fashion", price: 70, inStock: true, rating: 4.2 },
  { name: "Wireless Earbuds", category: "Electronics", price: 120,inStock: true, rating: 4.6 },
];

const filters = {
  category: "Electronics",
  minPrice: 20,
  maxPrice: 100,
  inStockOnly: true,
  minRating: 4.5,
};


function filterProducts(products, filters){
    return products.filter(product => {
        if(filters.category && product.category !== filters.category){
            return false;
        }

        if(filters.minPrice !== undefined &&  product.price < filters.minPrice){
            return false;
        }

        if(filters.maxPrice !== undefined && product.price > filters.maxPrice){
            return false
        }

        if(filters.inStockOnly && !product.inStock){
            return false;
        }
    return true; 
    })
}



const filteredProducts = filterProducts(products, filters);
console.log(filteredProducts);

// Expected output:
// [
//   { name: "Wireless Mouse", ...  price: 25, rating: 4.5 },
//   { name: "USB-C Hub", ...        price: 55, rating: 4.8 }
// ]