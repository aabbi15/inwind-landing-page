'use client';
import HeroIcons from './icons';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { IoDocumentText } from 'react-icons/io5';

import { useEffect, useState } from 'react';
import { BsPhoneFill } from 'react-icons/bs';
import CTAButton from '../common/ctabutton';
export default function Hero({ locale, CTALocale }) {
	const [tilt, setTilt] = useState(45);
	const [duration, setDuration] = useState(0.8);

	useEffect(() => {
		const handleScroll = () => {
			const maxTilt = 45; // 最大倾斜角度
			const scrollY = window.scrollY;
			const tiltValue = Math.max(maxTilt - scrollY / 8, 0); // 根据滚动值调整
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
				className='relative z-10 flex flex-col items-start md:items-center py-10 md:py-20 overflow-hidden'
				style={{ perspective: '800px' }}
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
				>
					<div className='font-bold text-5xl flex flex-col md:text-7xl bg-gradient-to-r from-base-content from-70% to-[#7124ff] text-center bg-clip-text text-transparent !leading-[1.25em] mb-5'>
					{/* <div className='flex flex-col text-base-content/80'> */}
				{/* <h2 className='ml-3 font-bold leading-5'>EXPO ESSENTIALS</h2> */}
				{/* <p className='ml-3 text-xs'>BOOTH CONSTRUCTION</p> */}
				{/* </div> */}
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
					<h2 className='w-full font-[550] md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/90 md:text-center mb-5 md:mb-10'>
					
					{/* {locale.h2} */}
					Elevate Your Brand with Our Custom Expo Booths—Where First Impressions Count.
					</h2>

					<div className='w-full md:w-8/12 mx-auto flex flex-col  md:flex-row md:items-center justify-center gap-y-5'>
						{/* <HeroIcons /> */}

						<div className='flex flex-col md:flex-row gap-2'>
							{/* <a
								title='get source code'
								className='btn btn-sm md:btn-md btn-base border-none hover:ring-1 ring-base-content text-3xl text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full'
								href='https://github.com/huglemon/inwind-landing-page'
							>
								<SiGithub />
								<BsPhoneFill/>
								{CTALocale.btn1}
								Book a Call
							</a> */}
							<CTAButton/>
							{/* <a
								title='get source code'
								className='btn btn-sm md:btn-md btn-base text-xl rounded-full'
								href='https://huglemon.com/blog/i-open-sourced-a-saas-landing-page'
							>
								<IoDocumentText /> 
								{/* {CTALocale.btn2} 

								Book a Call
							</a> */}
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 100, rotateX: '0deg' }}
					animate={{ opacity: 1, y: 0, rotateX: `${tilt}deg` }}
					transition={{
						delay: duration == 0.8 ? 0.4 : 0,
						duration: duration,
					}}
					className='w-full justify-center items-center flex relative'
				>
					<Image
						width={800}
						height={900}
						src={'/hero3.jpg'}
						className='hidden md:flex w-[100%] -mt-10 rounded-lg '
						alt='app demo'
					/>

				</motion.div>
			</section>

			<div className='absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[300px]'>
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
