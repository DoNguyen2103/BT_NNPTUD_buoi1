// =======================
// CÂU 1: Constructor Product
// =======================
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// =======================
// CÂU 2: Mảng products
// =======================
const products = [
  new Product(1, "iPhone 15", 35000000, 10, "Phone", true),
  new Product(2, "Samsung S24", 28000000, 5, "Phone", true),
  new Product(3, "MacBook Pro", 52000000, 3, "Laptop", true),
  new Product(4, "AirPods Pro", 6500000, 20, "Accessories", true),
  new Product(5, "Magic Mouse", 2500000, 0, "Accessories", true),
  new Product(6, "iPad Air", 18000000, 7, "Tablet", false)
];

console.log("Danh sách sản phẩm:", products);

// =======================
// CÂU 3: Mảng name + price
// =======================
const nameAndPrice = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3:", nameAndPrice);

// =======================
// CÂU 4: Sản phẩm còn hàng
// =======================
const inStock = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStock);

// =======================
// CÂU 5: Có SP > 30.000.000?
// =======================
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensiveProduct);

// =======================
// CÂU 6: Accessories đang bán?
// =======================
const accessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);

console.log("Câu 6:", accessoriesAvailable);

// =======================
// CÂU 7: Tổng giá trị kho
// =======================
const totalValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);
console.log("Câu 7 - Tổng giá trị kho:", totalValue);

// =======================
// CÂU 8: for...of
// =======================
console.log("Câu 8:");
for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${p.name} - ${p.category} - ${status}`);
}

// =======================
// CÂU 9: for...in
// =======================
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// =======================
// CÂU 10: SP đang bán & còn hàng
// =======================
const sellingInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10:", sellingInStockNames);
