'use client';
import { motion } from 'framer-motion';
import FeatureCard from './feature/card';
import { FeaturesList } from '@/lib/featuresList';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import ProjectCard from './pricing/card2';


const Services = [
	{
		name: 'BESPOKE EXHIBITION STANDS',
		imagesrc: '/guidea.png',
		color :'#5DA5A4',
		link: '/en/services#1'
	},
	{
		name: ' EXHIBITION STAND CONTRACTORS',
		imagesrc: '/guidef.png',
		color :'#D98880',
		link: '/en/services#2'
	},
	{
		name: 'CUSTOM DISPLAY PLINTHS AND PEDESTALS',
		imagesrc: '/guidec.png',
		color :'#7A9EAB',
		link: '/en/services#3'
	},
	{
		name: 'Custom Plinth Design and Build Process',
		imagesrc: '/guided.png',
		color :'#A58B6F',
		link: '/en/services#4'
	},
	{
		name: 'SMALL DISPLAY STANDS',
		imagesrc: '/guidee.png',
		color :'#8A9A5B',
		link: '/en/services#5'
	},
	{
		name: 'OUR  GUIDE',
		imagesrc: '/guide.png',
		color :'#9D94B7',
		link: '/en/guide'
	},



]
	

export default function Feature2({ locale, langName = 'en' }) {
	let list = FeaturesList[`FRETURES_${langName.toUpperCase()}`] || [];

	return (
		<section
			id='feature'
			className='relative py-10 md:py-20'
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
				}}
			>
				<div className='relative z-10 flex flex-col gap-5 items-center mb-10 mx-auto'>
					<div className='relative inline-flex items-center justify-center gap-2 border-2 border-base-content px-5 md:px-10 py-1 md:py-3 rounded-full text-lg md:text-2xl font-semibold overflow-hidden hover:bg-base-content hover:text-base-100 transition-all'>
						<div className='inline-flex items-center justify-center gap-2 z-10'>
							<MdOutlineFeaturedPlayList /> <h2>
								
								{/* {locale.h2} */}
								Our Features
								
								</h2>
						</div>
						<div className='absolute w-0 h-full bg-base-content z-[0]'></div>
					</div>

					<h3 className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] text-center bg-clip-text text-transparent !leading-[1.25em]'>
						
						Expo Essentials Booth Design Service
					</h3>

					<h4 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 text-center'>
						{/* {locale.description1} */}
						Premier booth design templates, specifically crafted for expos and trade shows.

						<br />
						
					</h4>
				</div>
			</motion.div>

			<div className='relative z-10 w-full px-2 md:px-0 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
				{list.map((item, index) => {
					return (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
							}}
						>
							<FeatureCard featureItem={item} />

							{/* <ProjectCard service={item}/> */}
						</motion.div>
					);
				})}
			</div>

			<div className='hidden md:block absolute left-[20%] top-[10%] z-0'>
				<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
			</div>
		</section>
	);
}
