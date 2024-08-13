import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch=useDispatch();

  const toggleMenuHandler=(e)=>{
    e.preventDefault()
    dispatch(toggleMenu())
    console.log('update');
    
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 '>

      <a href='/'><img onClick={toggleMenuHandler}
      className='h-8 cursor-pointer'
      alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256'/></a>
      <img 
      className='h-8 mx-2'
      alt='logo' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'/>   
      </div>
      <div className='col-span-10  px-10'>
      <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'/>
      <button className='border border-gray-400 p-2 rounded-r-full'>Search</button>
      </div>
      <div className='col-span-1'>
        <img alt='user'
        className='h-8' src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'/>  
        </div>
    </div>
  )
}

export default Head