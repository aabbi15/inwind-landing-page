'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsPatchQuestionFill } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';

import Testimonial from '@/components/home/testimonial';
import { TestimonialsList } from '@/lib/testimonialsList';
import { usePathname } from 'next/navigation';
import { defaultLocale, getDictionary } from '@/lib/i18n';

import Cta from '@/components/home/cta';

export default function Page({ params }) {
	const [dict, setDict] = useState({ About: {}, Testimonial: {}, CTA: {}, CTAButton: {} });

	useEffect(() => {
		const fetchDictionary = async () => {
			const d = await getDictionary(langName);
			setDict(d);
		};
		fetchDictionary();
	}, []);

	const pathname = usePathname();
	const [langName, setLangName] = useState(params.lang || defaultLocale);
	useEffect(() => {
		if (pathname === '/') {
			setLangName(defaultLocale);
		} else {
			setLangName(pathname.split('/')[1]);
		}
	}, [pathname, langName]);

	const list = TestimonialsList[`TESTIMONIAL_${langName.toUpperCase()}`] || [];

	return (
		<main className='container mx-auto px-5'>
			<section>
				<div className='relative z-10 flex flex-col items-start md:items-center pt-10 mb-5 overflow-hidden'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
					>
						<h1 className='font-bold text-gray-700 text-5xl md:text-7xl text-center !leading-[1.25em] mb-5'>
							{dict.About.h1}
						</h1>
					</motion.div>

			
				</div>
				<div className='absolute w-[100%] left-[0] top-[5%] md:top-[10%] h-[200px]'>
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
									d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'
									strokeWidth='0.5'
									className='stroke-base-content/50'
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
					<div className='bg-gradient-to-b from-base-100  from-20% to-transparent absolute inset-0 '></div>
					<div className='bg-gradient-to-l from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
					<div className='bg-gradient-to-r from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
					<div className='bg-gradient-to-t from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
				</div>
			</section>

			<div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
       
	   
        <p className=" text-gray-800 text-xl md:text-2xl text-center">
          We specialise in crafting bespoke exhibition spaces, pop-up installations, and innovative designs 
          that leave a lasting impression. From the very first idea to the final build, we offer end-to-end 
          project management and a fully integrated, turn-key service. Our team is committed to providing a 
          seamless, stress-free experience, bringing your vision to life with careful attention to detail at every step.
        </p>
		
      </section>

      {/* Who We Are Section */}
      <section className="bg-gray-950 ring-1 py-16 mb-14">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-7 items-start gap-12">
		<div className="col-span-7 md:col-span-4 text-gray-100">
          <h2 className="text-3xl font-bold  mb-8 ">Who We Are</h2>
          
            <p className=" text-gray-100 text-xl mb-4">
              We&apos;re a passionate team of project managers, joiners, and designers, committed to 
              delivering an exceptional service in the industry.
            </p>
            <p className=" text-gray-100 mb-4 text-xl">
              With years of experience and a creative approach, we ensure each project is customised 
              to your needs, and our growing portfolio of successful global projects speaks for itself.
            </p>
            <p className=" text-gray-100 text-xl">
              Driven by enthusiasm and a love for what we do, we thrive on taking on challenging 
              concepts and pushing boundaries—no matter what, we&apos;re determined to make your vision a reality.
            </p>
          </div>
		  <div className='col-span-7 md:col-span-3 relative rounded-2xl overflow-hidden shadow-xl'>
		  <Image 

src={'/ab1.png'}
width={600}
height={400}
layout='responsive'
objectFit='cover'
className='hover:scale-105 transition-all'
alt='about_1'
/>
		  </div>
        </div>

		
      </section>

	  <section className="bg-gray-950 ring-1 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-7 items-start gap-12">
		<div className="col-span-7 md:col-span-4 text-gray-100">
		{/* <a href='https://api.whatsapp.com/send?phone=917490070001'> */}
          <h2 className="text-3xl font-bold  mb-8 "> Tailored Solutions for Your Success</h2>
          {/* </a> */}
            <p className=" text-gray-100 text-xl mb-4">
			We dive deep into your brand&apos;s DNA and trade show objectives, crafting a vision that 
              aligns perfectly with your market domination goals. We&apos;re dedicated to providing our 
              clients with expert advice throughout the entire process, whether for exhibitions or 
              pop-up installations.
            </p>
            <p className=" text-gray-100 mb-4 text-xl">
			From guiding you through your budget and planning your installation to choosing the 
			ideal design, we&apos;re here to make it all run smoothly.
			</p>
            
          </div>
		  <div className='col-span-7 md:col-span-3 relative rounded-2xl overflow-hidden shadow-xl'>
		  <Image 

src={'/newguide.png'}
width={600}
height={400}
layout='responsive'
objectFit='cover'
className='hover:scale-105 transition-all'
alt='about_1'
/>
		  </div>
        </div>

		
      </section>

      {/* Tailored Solutions Section */}
	  <section className="container mx-auto px-8 py-16 text-gray-800 text-xl md:text-2xl text-center">
       
	  
	   <p className=" text-gray-800 mb-6">
            We prioritise building lasting relationships with our clients, which is why customer 
            satisfaction is of utmost importance to us. With our extensive expertise and personalised 
            approach, we ensure that every project receives the highest level of attention and care.
          </p>
          <p className=" text-gray-800 mb-6">
            When you work with us on your exhibition build, you&apos;ll be assigned a dedicated Project 
            Manager who will oversee the entire process, providing guidance and support from start to finish.
          </p>
          <p className=" text-gray-800 font-medium">
            But don&apos;t simply take our word for it—explore the testimonials from our satisfied clients 
            to see for yourself.
          </p>
	 </section>

      {/* Customer Satisfaction Section */}
    
    </div>
			<Testimonial
							locale={dict.Testimonial}
							langName={langName}
						/>

			

			<Cta
				locale={dict.CTA}
				CTALocale={dict.CTAButton}
			/>
		</main>
	);
}
