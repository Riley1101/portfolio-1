import { useRouter } from 'next/router'
import React from 'react'

function Blogs() {
  let history=useRouter()
  return (
    <div onClick={()=>history.push('/')} className='w-full h-screen relative '>
        <div className='absolute bg-transparent z-30 w-full h-full '></div>
        <iframe className='absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2' src="https://giphy.com/embed/kfR5iyQgmq7PoiFTAf" width="480" height="320" frameBorder="0"  allowFullScreen></iframe>
    </div>
  )
}

export default Blogs