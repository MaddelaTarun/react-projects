const App = () => {
  const products = [
    {
      name: "Laptop",
      price: "$1200"
    },
    {
      name: "Phone",
      price: "$600"
    },
    {
      name: "Monitor",
      price: "$100"
    },
  ];

  return (
    <div>
      <h1>Product List:</h1>
      {products.map((product) => (
        <div key={product.name}>
          {product.name} - {product.price}
        </div>
      ))}
    </div>
  )
}

export default App
