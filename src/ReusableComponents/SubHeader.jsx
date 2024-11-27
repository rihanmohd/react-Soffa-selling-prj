import React from 'react'
import bgimg from '../assets/images/bg2.png'


const SubHeader = ({tittle,descr,url}) => {
  return (
    <div className='h-[316px] mx-auto bg-cover bg-center text-center relative'
    style={{
        backgroundImage: `url(${bgimg})` }} >
<img className='absolute left-[47%] top-10' src={url}></img>
<p className='text-4xl text-black font-semibold pt-32'>{tittle}</p>
<p className='text-black text-xl font-semibold mt-2 tracking-wider'>{descr}</p>
    </div>
  )
}

export default SubHeader