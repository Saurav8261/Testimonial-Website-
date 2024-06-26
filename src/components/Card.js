import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';


 const Card = (props) => {
    let reveiw=props.reveiw;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img 
            className='aspect-square rounded-full w-[140px] h-[140px] z-10'
            src={reveiw.image}/>
            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute
            top-[-6px] z-[-10] left-[10px]'></div>
        </div>
        <div className='text-center mt-7'>
            <p className='tracking-wide 0.05em font-bold text-2xl capitalize'>{reveiw.name}</p>
            <p className='text-violet-300 uppercase text-sm'>{reveiw.job}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>
        <div className='text-center text-slate-500'>
            {reveiw.text}
        </div>
        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>


    </div>
  )
}

export default Card;
