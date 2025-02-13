'use client';
import { motion } from 'framer-motion';
import FeatureCard from './feature/card';
import { FeaturesList } from '@/lib/featuresList';
import { MdFeaturedPlayList, MdOutlineFeaturedPlayList, MdWork } from 'react-icons/md';
import ProjectCard from './pricing/card2';


const Services = [
	{
		name: 'BESPOKE EXHIBITION STANDS',
		imagesrc: '/main/bespoke.jpg',
		color :'#5DA5A4',
		link: '/en/services#1'
	},
	{
		name: ' MODULAR TRADE SHOW BOOTH  ',
		imagesrc: '/main/modular.jpg',
		color :'#D98880',
		link: '/en/services#2'
	},
	{
		name: 'POP UP & FOLDABLE EXHIBITION STAND',
		imagesrc: '/main/popup.jpg',
		color :'#7A9EAB',
		link: '/en/services#3'
	},
	{
		name: 'SMALL DISPLAY STANDS ',
		imagesrc: '/main/small.jpg',
		color :'#A58B6F',
		link: '/en/services#4'
	},
	{
		name: 'LARGE DISPLAY STANDS',
		imagesrc: '/main/large.jpg',
		color :'#8A9A5B',
		link: '/en/services#5'
	},
	{
		name: 'CUSTOM DISPLAY PLINTHS AND PEDESTALS ',
		imagesrc: '/main/plinth.jpg',
		color :'#9D94B7',
		link: '/en/services#6'
	},
	{
		name: 'Others ',
		imagesrc: '/main/guide.jpg',
		color :'#9D94B7',
		link: '/en/guide'
	}



]
	

export default function Feature({ locale, langName = 'en' }) {
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
				<div className='relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto'>
					<div className='relative inline-flex items-center justify-center gap-2 border-2 border-base-content px-5 md:px-10 py-1 md:py-3 rounded-full text-lg md:text-2xl font-semibold overflow-hidden hover:bg-base-content hover:text-base-100 transition-all'>
						<div className='inline-flex items-center justify-center gap-2 z-10'>
							<MdWork /> <h2>
								
								{/* {locale.h2} */}
								Our Sevices
								
								</h2>
						</div>
						<div className='absolute w-0 h-full bg-base-content z-[0]'></div>
					</div>

					{/* <h3 className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] md:text-center bg-clip-text text-transparent !leading-[1.25em]'>
						
						Services of ExpoEssentials Booth Design Service
					</h3> */}

					<h4 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center'>
						{/* {locale.description1} */}
						Premier booth design templates, specifically crafted for expos and trade shows.

						<br />
						{/* {locale.description2} */}
						Dedicated to delivering innovative booth designs that stand out and attract visitors.
						<br />
						{/* {locale.description3} */}
					</h4>
				</div>
			</motion.div>

			<div className='relative z-10 w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
				{Services.map((item, index) => {
					return (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
							}}
						>
							{/* <FeatureCard featureItem={item} /> */}

							<ProjectCard service={item}/>
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
