import React, { useState, useEffect } from 'react'
import CategoryCard from '../../components/CategoryCard';
import { getCategories } from '../../requests/categories'
import style from './index.module.css'


export default function CategoriesPage() {

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <div className={style.categories}>
      {
        categories.map((el, index) => <CategoryCard key={index} category={el} />)
      }
    </div>
  )
}