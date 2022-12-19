'use client'

import { useContext } from 'react'
import { FilterContext } from '../contexts/FilterProvider'

export default function Categories() {

  const filterContext = useContext(FilterContext)

  return(
    <div className="flex mt-1 justify-center flex-wrap">
      <button onClick={() => filterContext?.setFilter('')} className="m-2 p-1 bg-[beige] hover:bg-[#cac3b7] text-black rounded-lg">
        <p>All</p>
      </button>
      <button onClick={() => filterContext?.setFilter('Baking')} className="m-2 p-1 bg-[beige] hover:bg-[#cac3b7] text-black rounded-lg">
        <p>Baking</p>
      </button>
      <button onClick={() => filterContext?.setFilter('Sauces')} className="m-2 p-1 bg-[beige] hover:bg-[#cac3b7] text-black rounded-lg">
        <p>Sauces</p>
      </button>
      <button onClick={() => filterContext?.setFilter('Vietnamese')} className="m-2 p-1 bg-[beige] hover:bg-[#cac3b7] text-black rounded-lg">
        <p>Vietnamese</p>
      </button>
      <button onClick={() => filterContext?.setFilter('Chinese')} className="m-2 p-1 bg-[beige] hover:bg-[#cac3b7] text-black rounded-lg">
        <p>Chinese</p>
      </button>
      <button onClick={() => filterContext?.setFilter('Desserts')} className="m-2 p-1 bg-[beige] hover:bg-[#cac3b7] text-black rounded-lg">
        <p>Desserts</p>
      </button>
    </div>
  )
}