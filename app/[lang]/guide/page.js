'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsGraphUpArrow, BsPatchQuestionFill } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';

import TestimonialCard from '@/components/home/testimonial/card';
import { TestimonialsList } from '@/lib/testimonialsList';
import { usePathname } from 'next/navigation';
import { defaultLocale, getDictionary } from '@/lib/i18n';

import Cta from '@/components/home/cta';
import { FaBrain } from 'react-icons/fa';
import { MdTravelExplore } from 'react-icons/md';

const exhibitionIdeas = [
    {
      title: "LED Lighting",
      description:
        "Use LED lights to create eye-catching effects, highlight key features, or add a sleek, futuristic vibe to your stand.",
      icon: "💡",
    },
    {
      title: "Digital Screens",
      description:
        "Incorporate digital screens to display compelling videos, dynamic product demos, or live social media feeds that keep your audience engaged.",
      icon: "📺",
    },
    {
      title: "Curved and Unique Shapes",
      description:
        "Embrace bold, non-traditional shapes like curves and arches to give your stand a distinctive, memorable look.",
      icon: "🔄",
    },
    {
      title: "Minimalist Design",
      description:
        "Go for a minimalist approach with clean lines and open spaces, creating a sophisticated and modern brand presence.",
      icon: "✨",
    },
    {
      title: "Custom Furniture",
      description:
        "Choose bespoke, branded furniture that complements your design and provides comfort and functionality for visitors.",
      icon: "🪑",
    },
    {
      title: "Greenery and Biophilic Design",
      description:
        "Add plants or living walls to bring a natural, calming element to your booth while boosting environmental appeal.",
      icon: "🌱",
    },
    {
      title: "Branding with Large-Scale Graphics",
      description:
        "Use large-format graphics or murals to showcase your brand’s story, products, or key messages in a visually striking way.",
      icon: "🎨",
    },
    {
      title: "Sound Design",
      description:
        "Integrate subtle background music or sound effects that complement your booth's theme and enhance the overall experience.",
      icon: "🎵",
    },
    {
      title: "Charging Stations",
      description:
        "Provide convenient charging stations for visitors' devices, which can encourage them to linger longer at your stand.",
      icon: "🔌",
    },
  ];

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


            {/* Heading section */}
            <section>
                <div className='relative z-10 flex flex-col items-start md:items-center pt-10 mb-5 overflow-hidden'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                    >
                        <h1 className='font-bold text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] mb-5'>
                            {/* {dict.About.h1} */}
                            Guide

                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 1,
                        }}
                    >
                        <h2 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center mb-5 md:mb-10'>
                            {/* {dict.About.h2} */}

                            Know how to get the perfect exhibition stand as per your requirements with Expo Essentials™.
                        </h2>
                    </motion.div>
                </div>


                <div className='absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[200px]'>
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



            <section className='flex flex-col gap-y-10 mb-32'>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                >
                    <div className='flex flex-col md:flex-row items-stretch justify-between gap-10'>

                        <div className='w-full  ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/60 shadow-xl'>
                            <div className='flex items-center justify-center py-5 text-center bgblue-500'>
                                <h2 className='text-3xl font-bold bgred-50'>

                                    {/* {dict.About.why} */}
                                    PLANNING YOUR EXHIBITION STANDS
                                </h2>
                                {/* <BsPatchQuestionFill size={48} /> */}
                                <div className='text-[36px] px-5'> <FaBrain /> </div>

                            </div>
                            <p className={`text-xl break-words ${langName === 'ar' && 'text-right'}`} >

                                {/* {dict.About.why_content} */}

                                The <span className='font-bold'>first and most important step </span>is to generate some creative ideas for your exhibition stand
                                design. It&apos;s the first thing your potential customers or clients will notice, so making it eye
                                catching and memorable is key!
                                <br /> <br />
                                Maximize the impact of your exhibition stand with these planning tips designed to help your
                                design shine from the start. Many businesses overlook the <span className='font-bold'>power of visual appeal </span>in creating
                                a standout stand—explore our simple yet effective exhibition stand ideas that can make all
                                the difference!

                                <br /> <br />
                                For example, using a bold backdrop with a single eye-catching graphic helped one of our
                                clients significantly increase foot traffic at their booth, proving that simple yet impactful
                                design choices can have a major effect. You don&apos;t need to spend hours staring at a blank
                                piece of paper to start planning your exhibition stand design inspiration - <span className='font-bold'>start with our
                                    amazing ideas, tips and tricks! </span>
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>

                    
                    {/* modular valuable */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className='py-5'
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            MODULAR EXHIBITION STAND IDEAS

                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-stretch justify-between gap-10'>
                            <div className='w-full md:w-2/5 relative rounded-2xl overflow-hidden shadow-xl'>
                                <Image
                                    src={'/guidea.png'}
                                    layout='fill'
                                    objectFit='cover'
                                    className='hover:scale-105 transition-all'
                                    alt='about_1'
                                />
                            </div>
                            <div className='w-full md:w-3/5 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200 shadow-xl'>
                                <div className='flex items-center justify-between py-5'>
                                    <h2 className='text-3xl font-bold'>

                                        {/* {dict.About.why} */}
                                        Benefits of Modular Exhibition Stands
                                    </h2>
                                    {/* <BsPatchQuestionFill size={48} /> */}
                                    <div className='text-[36px] px-5'> <BsGraphUpArrow /> </div>
                                </div>
                                <p className={`text-xl break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    One of the first things to consider when you&apos;re coming up with the best exhibition stand ideas
                                    for your business is the lifetime value of your display. Modular exhibition stands are the go-to
                                    option for companies who regularly exhibit at events and shows around the country, giving
                                    you a reusable stand to serve as the foundation for updated graphics, products, and other
                                    visual display elements!
                                </p>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-stretch justify-between gap-10'>
                            <div className='w-full md:w-3/5 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200 shadow-xl'>
                                <div className='flex items-center justify-between py-5'>
                                    {/* <RiTeamFill size={48} /> */}
                                    <div className='text-[36px] px-5'> <MdTravelExplore /> </div>
                                    <h2 className='text-3xl font-bold'>

                                        {/* {dict.About.team} */}
                                        Explore our modular exhibition stand examples
                                    </h2>
                                </div>
                                <p className={`text-xl break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.team_content} */}
                                    Modular exhibition stands offer a range of benefits, including cost efficiency, flexibility, and
                                    the ease of adapting your stand for various events. This smart approach can save you
                                    valuable time and money on future stand designs. However, opting for a fully bespoke stand
                                    can give your business that extra "wow" factor to stand out in a crowded event!
                                </p>
                            </div>
                            <div className='w-full md:w-2/5 relative rounded-2xl overflow-hidden shadow-xl'>
                                <Image
                                    src={'/guidec.png'}
                                    layout='fill'
                                    objectFit='cover'
                                    className='hover:scale-105 transition-all'
                                    alt='about_2'
                                />
                            </div>
                        </div>
                    </motion.div>

                    

                </div>

                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>

                   {/* popupp vala   */}

                   <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className=''
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            POP UP & FOLDABLE EXHIBITION STAND IDEAS

                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                            {/* <div className='w-full md:w-2/5 relative rounded-2xl overflow-hidden shadow-xl'>
                                <Image
                                    src={'/hero2.jpg'}
                                    layout='fill'
                                    objectFit='cover'
                                    className='hover:scale-105 transition-all'
                                    alt='about_1'
                                />
                            </div> */}
                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/30 shadow-xl'>
                                {/* <div className='flex items-center justify-between py-5'>
                                    <h2 className='text-3xl font-bold'>

                                        Benefits of Modular Exhibition Stands
                                    </h2>
                                    <div className='text-[36px] px-5'> <BsGraphUpArrow /> </div>
                                </div> */}
                                <p className={`text-xl py-5 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    Whatever you call them—foldable, collapsible, or pop-up displays—these innovative 
solutions elevate ease of installation to a whole new level, especially when you're short on 
exhibition stand ideas! With their compact design, these stands are incredibly portable, 
requiring minimal space for transport, quick installation, and effortless takedown when the 
event wraps up. Forget the hassle of multi-person specialist installation teams and embrace 
the freedom and efficiency these pop-up exhibition stands bring to your business. Save time, 
streamline your setup, and focus on what truly matters—exhibiting! 
                                </p>
                            </div>
                        </div>
                    </motion.div>


                  

                    <div className='grid my-10  gap-5 md:grid-cols-2 grid-cols-1'>
                        <div className=" relative h-[400px] overflow-hidden rounded-lg shadow-lg group transition-all duration-300 ease-in-out">

                            <motion.div
                                className="absolute inset-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/guided.png"
                                    alt="Example"
                                    layout='fill'
                                    objectFit='cover'
                                    className="w-full h-[400px] object-cover"

                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/40 bg-opacity-70 text-white text-lg font-bold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            >
                                <p>A visual rendering of a pop-up exhibition stand</p>
                            </div>
                        </div>

                        <div className=" relative h-[400px] overflow-hidden rounded-lg shadow-lg group transition-all duration-300 ease-in-out">

                            <motion.div
                                className="absolute inset-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/guidee.png"
                                    alt="Example"
                                    layout='fill'
                                    objectFit='cover'
                                    className="w-full h-[400px] object-cover"

                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/40 bg-opacity-70 text-white text-lg font-bold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            >
                                <p>We delivered a striking but simple design for this client</p>
                            </div>
                        </div>

                    </div>

                </div>
              

                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>

                {/* interactivity is key vala  */}

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className=''
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            INTERACTIVITY IS KEY

                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                            {/* <div className='w-full md:w-2/5 relative rounded-2xl overflow-hidden shadow-xl'>
                                <Image
                                    src={'/hero2.jpg'}
                                    layout='fill'
                                    objectFit='cover'
                                    className='hover:scale-105 transition-all'
                                    alt='about_1'
                                />
                            </div> */}
                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/30 shadow-xl'>
                                {/* <div className='flex items-center justify-between py-5'>
                                    <h2 className='text-3xl font-bold'>

                                        Benefits of Modular Exhibition Stands
                                    </h2>
                                    <div className='text-[36px] px-5'> <BsGraphUpArrow /> </div>
                                </div> */}
                                <p className={`text-xl py-5 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    One of the most overlooked yet essential elements of a successful display is interactivity. 
Without something engaging for potential clients or customers, you risk losing their attention 
to the competition. We believe your exhibition stand design should always focus on the 
experience—making it interactive is the key to becoming the 'must-see' stand at any 
exhibition or trade show. Time and again, we've seen the benefits of incorporating games, 
touchscreen displays, augmented reality, and more into your booth. By offering more than 
just a product showcase, your interactive exhibition stand ideas are sure to stand out! Once 
you&apos;ve captured their interest, it&apos;s smooth sailing—attendees will be much more open to your 
brand and services after having an engaging experience.
                                </p>
                            </div>
                        </div>
                    </motion.div>


                  

                   

                </div>


                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>


                {/* large ideas vala */}

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className=''
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            SPLASH OUT WITH LARGE EXHIBITION STAND IDEAS

                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                            {/* <div className='w-full md:w-2/5 relative rounded-2xl overflow-hidden shadow-xl'>
                                <Image
                                    src={'/hero2.jpg'}
                                    layout='fill'
                                    objectFit='cover'
                                    className='hover:scale-105 transition-all'
                                    alt='about_1'
                                />
                            </div> */}
                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/30 shadow-xl'>
                                {/* <div className='flex items-center justify-between py-5'>
                                    <h2 className='text-3xl font-bold'>

                                        Benefits of Modular Exhibition Stands
                                    </h2>
                                    <div className='text-[36px] px-5'> <BsGraphUpArrow /> </div>
                                </div> */}
                                <p className={`text-xl py-5 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    If space isn&apos;t a concern, why not make the most of it with a spacious and impressive large 
exhibition stand? With the extra room, you can get creative and design a multi-functional 
layout that maximizes every opportunity. Divide the space into distinct areas to showcase 
different products, highlight unique aspects of your service, or even create an interactive 
zone to captivate and engage visitors. Explore the exhibition stand images below for 
inspiration,whether you&apos;re envisioning a 6m x 6m, 8m x 4m, or 10m x 10m stand that 
perfectly fits your brand! 
                                </p>
                            </div>
                        </div>
                    </motion.div>


                  

                    <div className='grid my-10  gap-5 md:grid-cols-2 grid-cols-1'>
                        <div className=" relative h-[400px] overflow-hidden rounded-lg shadow-lg group transition-all duration-300 ease-in-out">

                            <motion.div
                                className="absolute inset-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/modular1.png"
                                    alt="Example"
                                    layout='fill'
                                    objectFit='cover'
                                    className="w-full h-[400px] object-cover"

                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/40 bg-opacity-70 text-white text-lg font-bold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            >
                                <p>A visual rendering of a pop-up exhibition stand</p>
                            </div>
                        </div>
                        <div className=" relative h-[400px] overflow-hidden rounded-lg shadow-lg group transition-all duration-300 ease-in-out">

                            <motion.div
                                className="absolute inset-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/guidef.png"
                                    alt="Example"
                                    layout='fill'
                                    objectFit='cover'
                                    className="w-full h-[400px] object-cover"

                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/40 bg-opacity-70 text-white text-lg font-bold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            >
                                <p>A visual rendering of a pop-up exhibition stand</p>
                            </div>
                        </div>

                        <div className=" relative h-[400px] overflow-hidden rounded-lg shadow-lg group transition-all duration-300 ease-in-out">

                            <motion.div
                                className="absolute inset-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/guideg.png"
                                    alt="Example"
                                    layout='fill'
                                    objectFit='cover'
                                    className="w-full h-[400px] object-cover"

                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/40 bg-opacity-70 text-white text-lg font-bold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            >
                                <p>We delivered a striking but simple design for this client</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                    

                    {/* grid vala */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className=''
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            INTERACTIVITY IS KEY

                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                            {/* <div className='w-full md:w-2/5 relative rounded-2xl overflow-hidden shadow-xl'>
                                <Image
                                    src={'/hero2.jpg'}
                                    layout='fill'
                                    objectFit='cover'
                                    className='hover:scale-105 transition-all'
                                    alt='about_1'
                                />
                            </div> */}
                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/30 shadow-xl'>
                                {/* <div className='flex items-center justify-between py-5'>
                                    <h2 className='text-3xl font-bold'>

                                        Benefits of Modular Exhibition Stands
                                    </h2>
                                    <div className='text-[36px] px-5'> <BsGraphUpArrow /> </div>
                                </div> */}
                                <p className={`text-xl py-5 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    Embracing modern elements in your exhibition stand can make all the difference—sleek 
designs and striking visuals are far more likely to capture attention and engage visitors. 
Traditional flat walls and basic shapes are a thing of the past. As exhibition stand design 
continues to evolve, businesses are pushing the boundaries with creative, out-of-the-box 
ideas, especially when it comes to experimenting with shapes. Instead of sticking with a 
standard flat design, consider a bespoke stand featuring curves, counters, and other 
dynamic features. Not only does this demonstrate creative thinking and innovation, but it 
ensures your stand stands out in a sea of uninspired displays. 
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exhibitionIdeas.map((idea, index) => (
          <div
            key={index}
            className="bg-base-200/40 ring-1  shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="text-4xl mb-4">{idea.icon}</div>
            <h3 className="text-lg font-semibold text-center mb-2">
              {idea.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">{idea.description}</p>
          </div>
        ))}
      </div>


                  
 
                    




                </div>

                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>


                {/* confident branding vala */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className=''
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            CONFIDENT GRAPHICS & BRANDING 

                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                            {/* <div className='w-full md:w-2/5 relative rounded-2xl overflow-hidden shadow-xl'>
                                <Image
                                    src={'/hero2.jpg'}
                                    layout='fill'
                                    objectFit='cover'
                                    className='hover:scale-105 transition-all'
                                    alt='about_1'
                                />
                            </div> */}
                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/30 shadow-xl'>
                                {/* <div className='flex items-center justify-between py-5'>
                                    <h2 className='text-3xl font-bold'>

                                        Benefits of Modular Exhibition Stands
                                    </h2>
                                    <div className='text-[36px] px-5'> <BsGraphUpArrow /> </div>
                                </div> */}
                                <p className={`text-xl py-5 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    Just like with your colour choices, getting your graphics and branding right is crucial for 
creating a successful exhibition display. Before reaching out to your exhibition stand 
contractor, take time to carefully plan your stand ideas and develop impactful, relevant 
graphics that will guide your design. We recommend a well-balanced mix of compelling 
imagery, bold colors, and short, meaningful brand messages or slogans to make your stand 
truly stand out! A key tip—avoid lengthy text. The real draw of trade shows is the opportunity 
to interact with exhibitors directly, not to read long paragraphs!  
                                </p>
                            </div>
                        </div>
                    </motion.div>


                  

                    <div className='grid my-10  gap-5 md:grid-cols-2 grid-cols-1'>
                        <div className=" relative h-[400px] overflow-hidden rounded-lg shadow-lg group transition-all duration-300 ease-in-out">

                            <motion.div
                                className="absolute inset-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/guideh.png"
                                    alt="Example"
                                    layout='fill'
                                    objectFit='cover'
                                    className="w-full h-[400px] object-cover"

                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/40 bg-opacity-70 text-white text-lg font-bold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            >
                                <p>A visual rendering of a pop-up exhibition stand</p>
                            </div>
                        </div>

                        <div className=" relative h-[400px] overflow-hidden rounded-lg shadow-lg group transition-all duration-300 ease-in-out">

                            <motion.div
                                className="absolute inset-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/guidec.png"
                                    alt="Example"
                                    layout='fill'
                                    objectFit='cover'
                                    className="w-full h-[400px] object-cover"

                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/40 bg-opacity-70 text-white text-lg font-bold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            >
                                <p>We delivered a striking but simple design for this client</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>

                                {/* Different Materials vala */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className=''
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            DIFFERENT MATERIALS FOR FORM AND FUNCTION 

                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                            {/* <div className='w-full md:w-2/5 relative rounded-2xl overflow-hidden shadow-xl'>
                                <Image
                                    src={'/hero2.jpg'}
                                    layout='fill'
                                    objectFit='cover'
                                    className='hover:scale-105 transition-all'
                                    alt='about_1'
                                />
                            </div> */}
                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/30 shadow-xl'>
                                {/* <div className='flex items-center justify-between py-5'>
                                    <h2 className='text-3xl font-bold'>

                                        Benefits of Modular Exhibition Stands
                                    </h2>
                                    <div className='text-[36px] px-5'> <BsGraphUpArrow /> </div>
                                </div> */}
                                <p className={`text-xl py-5 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    Selecting the right materials is a crucial step in the exhibition stand design process, offering 
plenty of options to consider! If you're aiming for a balance of natural charm and design 
flexibility, wood is an excellent choice for the main elements of your display. For a lightweight 
yet striking option, acrylic makes for stunning furniture and shelving, while fabric works 
wonderfully for tensioned displays, graphics, and banners. The materials you choose play a 
significant role in both the aesthetics and functionality of your stand, so don't overlook this 
aspect when brainstorming your exhibition ideas. Take a look at the exhibition stand images 
below to find the materials that best suit your brands. 
                                </p>
                            </div>
                        </div>
                    </motion.div>


                  

                  

                </div>


                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>


                                    {/* Have convos vala */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className=''
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            HAVE CONVERSATIONS & ANSWER QUESTIONS 

                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center bggreen-500 justify-center gap-10'>
                            <div className='w-full h-96 md:w-2/5 bgred-500 relative rounded-2xl overflow-hidden shadow-xl'>
                                <Image
                                    src={'/image2.png'}
                                    layout='fill'
                                    objectFit='cover'
                                    className='hover:scale-105 transition-all'
                                    alt='about_1'
                                />
                                
                            </div>
                            <div className='w-full md:w-3/5 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/30 shadow-xl'>
                                {/* <div className='flex items-center justify-between py-5'>
                                    <h2 className='text-3xl font-bold'>

                                        Benefits of Modular Exhibition Stands
                                    </h2>
                                    <div className='text-[36px] px-5'> <BsGraphUpArrow /> </div>
                                </div> */}
                                <p className={`text-xl py-5 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    People love trade shows and events because they offer a unique opportunity to connect 
directly with brands. Potential customers and clients appreciate speaking with brand 
representatives, as it allows them to get immediate answers to their questions, instead of 
wasting time on websites or back-and-forth emails. The perfect balance of a friendly, 
approachable team and a sales-focused strategy can greatly increase the likelihood that 
your brand will be remembered by those who engage with you. 
By considering all these factors when planning and designing your display, you&apos;re sure to 
create a standout result. We understand the importance of crafting a visually striking and 
memorable exhibition stand, and we hope the ideas we've shared have inspired you. To see 
some of these tips in action, be sure to check out our gallery showcasing previous builds and 
designs we've created.
                                </p>
                            </div>
                        </div>
                    </motion.div>


                  

                   

                </div>


                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>


                
            </section>




            <Cta
                locale={dict.CTA}
                CTALocale={dict.CTAButton}
            />
        </main>
    );
}
