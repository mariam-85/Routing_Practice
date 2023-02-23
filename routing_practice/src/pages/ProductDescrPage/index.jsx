import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../requests/product_descr';
import style from './index.module.css'

export default function ProductDescrPage() {

  const [ product, setProduct ] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getProduct(setProduct, id)
  }, []);

  // console.log(product);

  const { title, description, price, images } = product;

  console.log(images);

  return (
    <div className={style.product_descr}>
      {
        images && <img src={images[0]} alt={title} /> 
      }
      <div className={style.info_block}>
        <p className={style.title}>{ title }</p>
        <p className={style.descr}>{ description }</p>
        <p className={style.price}>
          <span>Price:</span> { price }$
        </p>
      </div>
    </div>
  )
}
