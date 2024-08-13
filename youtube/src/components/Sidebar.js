import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  if(!isMenuOpen) return null //early return
  return (
    <div className='p-5 w-48 shadow-lg'>
       <h1 className='font-bold'>SubsCriptions</h1>
      <ul>
        <li>Subscription</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    <h1 className='font-bold pt-5'>SubsCriptions</h1>
      <ul>
        <li>Subscription</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>SubsCriptions</h1>
      <ul>
        <li>Subscription</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar