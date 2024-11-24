import React from 'react'
import bgimg from '../assets/images/bg2.png'


const SubHeader = ({tittle,descr}) => {
  return (
    <div className='h-[316px] mx-auto bg-cover bg-center text-center '
    style={{
        backgroundImage: `url(${bgimg})` }} >

<p className='text-4xl text-black font-semibold pt-32'>{tittle}</p>
<p className='text-black text-xl font-semibold mt-2 '>{descr}</p>
    </div>
  )
}

export default SubHeader