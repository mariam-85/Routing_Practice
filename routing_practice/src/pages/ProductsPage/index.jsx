import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../requests/products';
import style from './index.module.css'

export default function ProductsPage() {

  const [ products, setProducts ] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    getProducts(setProducts, category)
  }, []);

  return (
    <div className={style.products}>
      { 
        products.map(el => <ProductCard key={el.id} {...el} />)
      }
    </div>
  )
}