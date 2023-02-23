import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={style.nav}>
      <Link to='/'>
        <p>Main</p>
      </Link>
      <Link to='/categories'>
        <p>Categories</p>
      </Link>
    </nav>
  )
}