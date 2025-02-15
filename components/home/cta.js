'use client';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import Button from '../common/navButton';
import CTAButton from '../common/ctabutton';

export default function Cta({ locale, CTALocale }) {
	return (
		<section
			id='feature'
			className=' relative py-10 md:py-20'
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
				}}
			>
				<div className='relative z-10 flex flex-col gap-5 items-center mb-10 mx-auto'>
					<h2 className='font-bold  text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] text-center bg-clip-text text-transparent !leading-[1.25em]'>
						{/* {locale.h2} */}
						Launch Your Expo Booth Today
					</h2>

					<h3 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 text-center'>
					
					{/* {locale.h3} */}
					Set up your custom expo booth, showcase your offerings, and start connecting with your audience!					
					</h3>

					
					{/* <Button/> */}
					<CTAButton className='mt-5'/>
				</div>
			</motion.div>

			<div className='hidden md:block absolute left-[30%] top-0 z-0'>
				<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
			</div>
		</section>
	);
}
