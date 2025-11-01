import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductGrid } from './ProductsGrid';
import './HomePage.css';


export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="../public/home-favicon.png" />


      <Header cart={cart} />
      <title>Ecommers Project</title>

      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>

  );
}