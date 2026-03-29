import { useState } from 'react'                                                                                                                                      
 import './App.css'                                                                                                                                                    

 interface Product {
   id: number;
   name: string;
   price: number;
   category: string;
 }

 const INITIAL_PRODUCTS: Product[] = [
   { id: 1, name: "Wireless Mouse", price: 25.99, category: "Electronics" },
   { id: 2, name: "Mechanical Keyboard", price: 89.99, category: "Electronics" },
   { id: 3, name: "Coffee Mug", price: 12.50, category: "Home" },
   { id: 4, name: "Desk Lamp", price: 45.00, category: "Office" },
 ];

 function App() {
   const [products] = useState<Product[]>(INITIAL_PRODUCTS)

   return (
     <div className="product-app">
       <h1>Product Inventory</h1>
       <div className="product-grid">
         {products.map(product => (
           <div key={product.id} className="product-card">
             <h3>{product.name}</h3>
             <p className="category">{product.category}</p>
             <p className="price">${product.price.toFixed(2)}</p>
           </div>
         ))}
       </div>
     </div>
   )
 }

 export default App
