import React from 'react';
import Card from "./Card";
import{FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { useState } from 'react';

const Testimonials=(props)=>{
let reveiws = props.reveiws;
const[index,setIndex]= useState(0);

function leftShiftHandler(){
        if(index-1<0){
            setIndex(reveiws.length-1)
        }
        else{
            setIndex(index-1);
        }
}

function rightShiftHandler(){
    if(index+1>=reveiws.length){
        setIndex(0)
    }
    else{
        setIndex(index+1);
    }
}

function surpriseHandler(){
      let randomIndex =Math.floor (Math.random()*reveiws.length);
      setIndex(randomIndex);
}
    return(
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
            <Card reveiw={reveiws[index]}></Card>

            <div className='flex-text-3xl mt-11 gap-3 text-violtet-400 font-bold'>

            <button 
            onClick={leftShiftHandler}
            className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft/>
            </button>
            <button 
             onClick={rightShiftHandler}
            className='cursor-pointer hover:text-violet-500'>
               <FiChevronRight/>
            </button>
            
            <div className='mt-4'>
            <button 
             onClick={surpriseHandler}
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
            cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                Suprise me
            </button>
            </div>
        </div>
        </div>
    )
}

export default Testimonials;