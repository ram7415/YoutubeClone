import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col'>
      <div className='flex'>
      <img 
      className='h-8'
      alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256'/>
      <img 
      className='h-8'
      alt='logo' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'/>   
      </div>
      <div>
      <input type='text'/>
      <button>Search</button>
      </div>
      <div>
        <img alt='user'
        className='h-8' src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'/>  
        </div>
    </div>
  )
}

export default Head