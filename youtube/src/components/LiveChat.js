import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {

useEffect(()=>{
  const i=setInterval(()=>{
    //api pollling
  },2000)
  return()=>clearInterval(i)
})

  return (
    <div className='w-fill h-[600px] ml-2 p-2  border border-black bg-slate-100 rounded-lg'>
        <ChatMessage name='Ram' message='hello from chat'/></div>
  )
}

export default LiveChat