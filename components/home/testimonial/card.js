'use client';
import React from 'react';
import Image from 'next/image';
// import styles from './TestimonialCard.module.css'; // Assuming you have this CSS module file

export default function TestimonialCard({ testimonialItem = {}, langName = 'en' }) {
    return (
        <div className={`break-inside-avoid-column mb-5 w-full p-5 border-2 border-base-content rounded-xl flex flex-col ${langName === 'ar' ? 'items-end' : 'items-start'} gap-2 transition-all duration-100 shadow-none hover:shadow-2xl bg-base-100`}>
            <div className='avatar-container' style={{ position: 'relative', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image
                    alt='avatar'
                    width={50}
                    height={50}
                    src={testimonialItem.avatar}
                    className='object-cover'
                />
            </div>

            <p className={`text-base-content/90 line-clamp-10 hover:line-clamp-none transition-none ${langName === 'ar' && 'text-right'}`}>{testimonialItem.content}</p>

            <h2 className='text-xl font-bold text-center'>{testimonialItem.nickname}</h2>
            <p className='-mt-1 text-center text-sm text-base-content/50'>{testimonialItem.description}</p>
        </div>
    );
}
