import React, {useState} from 'react';
import './App.css';
import ProductTable from './component/ProductTable';
import NewProductForm from './component/NewProductForm';

function App() {

  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const [products, setProducts] = useState([
    {productId: 1, name: 'Coke 300 ml', price: '50'},
    {productId: 2, name: 'Coke 500 ml', price: '80'},
    {productId: 3, name: 'Coke 1000 ml', price: '100'},
    {productId: 4, name: 'Coke 1500 ml', price: '130'}
  ]
  )

  const addProduct = (name, price) => {
    let rowNumber = 0;
    if (products.length > 0) {
      rowNumber = products[products.length - 1].productId + 1;
    } else {
      rowNumber = 1;
    }
      const newProduct = {
        productId: rowNumber,
        name: name,
        price: price
      };
      setProducts(products => [...products, newProduct])
  }

  const deleteProduct = (deleteProductRowNumber) => {
    let filtered = products.filter(function (value) {
      return value.productId !== deleteProductRowNumber;
    });
    setProducts(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Product's
        </div>
        <div className="card-body">
          <ProductTable products={products} deleteProduct={deleteProduct}/>
          <button onClick={() => setShowAddProductForm(!showAddProductForm)} className='btn btn-primary'>
            {showAddProductForm ? 'Close New Product' : 'New Product'}
          </button>
        {showAddProductForm && 
          <NewProductForm addProduct={addProduct}/>
        }
        </div>
      </div>
    </div>
  );
}

export default App;