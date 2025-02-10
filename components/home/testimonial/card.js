'use client';
import React from 'react';
import Image from 'next/image';
// import styles from './TestimonialCard.module.css'; // Assuming you have this CSS module file

export default function TestimonialCard({ testimonialItem = {}, langName = 'en' }) {
    return (
        <div className={`break-inside-avoid-column mb-5 w-full p-5 border-2 border-base-content rounded-xl flex flex-col ${langName === 'ar' ? 'items-end' : 'items-start'} gap-2 transition-all duration-100 shadow-none hover:shadow-2xl bg-base-100`}>
           
           <div className='flex items-center gap-2'>
            <div className='avatar-container' style={{ position: 'relative', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image
                    alt='avatar'
                    width={50}
                    height={50}
                    
                    src={testimonialItem.avatar}
                    className='object-cover'
                />

                
            </div>

            <div className='flex flex-col gap-2 ml-4'>
            <div className='text-xl font-bold '>{testimonialItem.nickname}</div>
            <p className='-mt-1  text-sm text-base-content/50'>{testimonialItem.description}</p>
       
            </div>
            
            </div>

            <p className={`text-base-content/90 line-clamp-10 hover:line-clamp-none transition-none ${langName === 'ar' && 'text-right'}`}>{testimonialItem.content}</p>

             </div>
    );
}
