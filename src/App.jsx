import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await axios.get('http://localhost:3000/products');
    setProducts(response.data);
  }

  const createProduct = async () => {
    await axios.post('http://localhost:3000/products', {
      name: 'tennis',
      price: 70
    });
    getProducts();
  }

  return (
    <>  
      <div>
        {
          products.map((product) => {
            return (
              <Card style={{ width: '18rem' }} key={product.id}>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Link href="#">{product.price}</Card.Link>
                </Card.Body>
              </Card>
            )
          })
        }
        <button onClick={createProduct}>Create Product</button>
      </div>
    </>
  )
}

export default App
