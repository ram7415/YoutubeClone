import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {

  const chatMessages=useSelector((store)=>store.chat.messages)
  const disptach=useDispatch();
useEffect(()=>{
  const i=setInterval(()=>{
    //api pollling
    disptach(
      addMessage({
        name:"Ram",
        message:"this is the msg from live"
      })
    )
  },2000)
  return()=>clearInterval(i)
})

  return (
    <div className='w-fill h-[600px] ml-2 p-2  border border-black bg-slate-100 rounded-lg'>
       {
       chatMessages.map((c,i)=>(<ChatMessage
        name={c.name} key={i}
        message={c.message}
      /> ))}
       </div>
  )
}

export default LiveChat