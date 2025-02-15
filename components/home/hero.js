'use client';
import HeroIcons from './icons';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { IoDocumentText } from 'react-icons/io5';

import { useEffect, useState } from 'react';
import { BsPhoneFill } from 'react-icons/bs';
import CTAButton from '../common/ctabutton';
import Carousel from './carousel';
export default function Hero({ locale, CTALocale }) {
	const [tilt, setTilt] = useState(45);
	const [duration, setDuration] = useState(0.8);

	useEffect(() => {
		const handleScroll = () => {
			const maxTilt = 60; 
			const scrollY = window.scrollY;
			const tiltValue = Math.max(maxTilt - scrollY / 8, 0); 
			setTilt(tiltValue);
			setDuration(0.3);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<section
				className='relative z-10 flex flex-col items-center py-10 md:py-20 overflow-hidden'
				style={{ perspective: '800px' }}
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
				>
					<div className='font-bold text-4xl flex flex-col md:text-[66px] text-center text-gray-700  !leading-[1.25em] mb-5'>
				
				<div> EXPO ESSENTIALS</div>
				<div className='text-2xl'>BOOTH CONSTRUCTION</div>
					</div>
					
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 0.2,
						duration: 1,
					}}
				>
					<h2 className='w-full font-[550] text-gray-700  mx-auto text-xl md:text-2xl text-base-content/90 text-center mb-5 md:mb-10'>
					
					{/* {locale.h2} */}
					Beyond Expectation, Beyond Essentials 
					</h2>

					<div className='w-full md:w-full mx-auto flex flex-col  md:flex-row items-center justify-center gap-y-5'>
						{/* <HeroIcons /> */}

						<div className=''>
							
							<CTAButton/>
							
						</div>
					</div>
				</motion.div>

				{/* <motion.div
					initial={{ opacity: 0, y: 100, rotateX: '45deg' }}
					animate={{ opacity: 1, y: 0, rotateX: `${tilt}deg` }}
					transition={{
						delay: duration == 0.8 ? 0.4 : 0,
						duration: duration,
					}}
					className='w-full justify-center items-center flex relative'
				>
					<Image
						width={900}
						height={600}
						src={'/home.png'}
						className='hidden md:flex  -mt-10 rounded-lg '
						alt='app demo'
					/>

				</motion.div> */}

				{/* <div className='my-16 bg-red-200'> */}
				<Carousel />
				{/* </div> */}

				
			</section>

			<div className='absolute w-[100%] left-[0] top-[50%] md:top-[10%] h-[300px]'>
    <svg
        xmlns='http://www.w3.org/2000/svg'
        id='patternId'
        width='100%'
        height='100%'
    >
        <defs>
            <pattern
                id='a'
                patternUnits='userSpaceOnUse'
                width='20'
                height='20'
                patternTransform='scale(3) rotate(0)'
            >
                <rect
                    x='0'
                    y='0'
                    width='100%'
                    height='100%'
                    fill='hsla(0, 0%, 100%, 0)'
                ></rect>
                <path
                    d='M 10,0 V 20 Z M 0,10 H 20 Z'
                    strokeWidth='0.15'
                    stroke='#7124ff'  
                    fill='none'
                ></path>
            </pattern>
        </defs>
        <rect
            width='800%'
            height='800%'
            transform='translate(0,0)'
            fill='url(#a)'
        ></rect>
    </svg>
    <div className='bg-gradient-to-b from-base-100 from-20% to-transparent absolute inset-0'></div>
    <div className='bg-gradient-to-l from-base-100 from-1% to-transparent to-30% absolute inset-0'></div>
    <div className='bg-gradient-to-r from-base-100 from-1% to-transparent to-30% absolute inset-0'></div>
    <div className='bg-gradient-to-t from-base-100 from-1% to-transparent to-30% absolute inset-0'></div>
</div>
		</>
	);
}
