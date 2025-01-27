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
import { FaBrain, FaMobileAlt } from 'react-icons/fa';
import { MdDashboardCustomize, MdDesignServices, MdOutlineFeaturedPlayList, MdTravelExplore } from 'react-icons/md';
import FeatureCard from '@/components/home/feature/card';
import { GrOptimize } from 'react-icons/gr';
import Button from '@/components/common/navButton';

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

const mylist = [
    {
        icon: FaMobileAlt,
        title: "Adaptive Booth Design",
        description: "Booths adapt seamlessly to any expo space for optimal display.",
    },
    {
        icon: MdDashboardCustomize,
        title: "Easy Customization",
        description: "Easily tailor colors, materials, and layout to fit your brand.",
    },
    {
        icon: GrOptimize,
        title: "Enhanced Brand Visibility",
        description: "Maximize exposure and visitor engagement with strategic design.",
    },
]

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
                            Our Services

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
                        <h2 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/90 font-semibold md:text-center mb-5 md:mb-10'>
                            {/* {dict.About.h2} */}

                            Explore our services and discover how we can help you create a standout exhibition stand that captivates your audience and elevates your brand.
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



                {/* <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div> */}


                {/* bespoke vala */}
                <div>


                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className='py-5'
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            1. BESPOKE EXHIBITION STANDS

                        </h1>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/80 shadow-xl'>

                                <p className={`text-xl py-1 break-words ${langName === 'ar' && 'text-right'}`} >

                                    The advantages of bespoke exhibition stands are undeniable. A striking blend of unique
                                    designs and top-tier craftsmanship ensures that a custom-built exhibition stand is the ideal
                                    way to showcase your business to potential customers and clients. Nothing leaves a
                                    stronger first impression than a tailored exhibition stand designed to highlight your brand in
                                    style!
                                </p>
                            </div>
                        </div>
                    </motion.div>


                    <div className='relative z-10 w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
                        {mylist.map((item, index) => {
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
                                </motion.div>
                            );
                        })}
                    </div>
                    {/* 						
									<div className='hidden md:block absolute left-[20%] top-[10%] z-0'>
										<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
									</div> */}

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/80 shadow-xl'>

                                <p className={`text-xl py-1 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    We are a bespoke exhibition stand company that stands out from the rest. Our experienced
                                    team is with you every step of the way—from your first call to the design, construction,
                                    delivery, and installation of your custom exhibition stand. No matter where you&apos;re exhibiting,
                                    our tailored display stands are the ultimate solution for showcasing your brand and products
                                    effectively!
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className='grid my-10 md:mx-20 gap-5 md:grid-cols-1 grid-cols-1'>
                        <div className=" overflow-hidden rounded-xl transition-all duration-300 ease-in-out">
                            <motion.div
                                className="w-full  group-hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src="/about1.png"
                                    alt="Example"
                                    layout="responsive"
                                    width={700} // Use actual dimensions or responsive layout
                                    height={400} // Use actual dimensions or responsive layout
                                    objectFit="contain"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold px-4"
                            >
                                <p>This is how a modern exhibition stand looks like.</p>
                            </div>
                        </div>


                        <div className=" overflow-hidden rounded-xl transition-all duration-300 ease-in-out">
                            <motion.div
                                className="w-full  group-hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src="/hero2.jpg"
                                    alt="Example"
                                    layout="responsive"
                                    width={700} // Use actual dimensions or responsive layout
                                    height={400} // Use actual dimensions or responsive layout
                                    objectFit="contain"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold px-4"
                            >
                                <p>Example of a wooden exhibition stand.</p>
                            </div>
                        </div>

                    </div>

                    <div className='text-xl font-bold text-center'>

                        For inquiries, feel free to reach out to us via E-mail, WhatsApp, or give us a call.
                        {/* <button  */}
                        <div className='mt-5'>
                            <Button />
                        </div>

                    </div>

                </div>


                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>

                <div>


                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className='py-5'
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            2. EXHIBITION STAND CONTRACTORS
                        </h1>
                    </motion.div>



                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/80 shadow-xl'>

                                <p className={`text-xl py-1 break-words ${langName === 'ar' && 'text-right'}`} >

                                    As a fully customized exhibition stand contractor, we specialize in creating professional, high-quality exhibition stands that combine style, functionality, and precision construction. Our expert team of designers and project managers ensures your display is crafted with top-quality materials to leave a lasting impression at trade shows and events. From sleek, portable designs to eye-catching outdoor display stands, we focus on delivering solutions that showcase your business effectively and attract potential clients.
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
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/80 shadow-xl'>

                                <p className={`text-xl py-1 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    Our expert exhibition stand contractors provide stylish, fully customized solutions tailored to your needs. By sharing your ideas, our dedicated team will design and construct a high-quality stand that represents your brand perfectly. Using premium materials, we bring your vision to life and can deliver or assist with installation for your next event.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className='grid my-10 md:mx-20 gap-5 md:grid-cols-1 grid-cols-1'>
                        <div className=" overflow-hidden rounded-xl transition-all duration-300 ease-in-out">
                            <motion.div
                                className="w-full  group-hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src="/service22.png"
                                    alt="Example"
                                    layout="responsive"
                                    width={700} // Use actual dimensions or responsive layout
                                    height={400} // Use actual dimensions or responsive layout
                                    objectFit="contain"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold px-4"
                            >
                                <p>This is a rendering of a simple business stand.</p>
                            </div>
                        </div>


                        <div className=" overflow-hidden rounded-xl transition-all duration-300 ease-in-out">
                            <motion.div
                                className="w-full  group-hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src="/service2.png"
                                    alt="Example"
                                    layout="responsive"
                                    width={700} // Use actual dimensions or responsive layout
                                    height={400} // Use actual dimensions or responsive layout
                                    objectFit="contain"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold px-4"
                            >
                                <p>Example of a colorful and bold exhibition stand.</p>
                            </div>
                        </div>

                    </div>





                 

                    <div className='text-xl font-[610] text-center'>

                        Our in-house team of exhibition stand contractors have a proven track record of delivering
                        on effective designs for businesses big and small, supported by our extensive experience in
                        designing and building bespoke exhibition stands for events. 
                        <br /> <br />
                        <span className='font-[900]'>
                            We&apos;re
                            with you every step of the way, right up until you see the finished product!
                        </span>
                    </div>

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
                            3. CUSTOM DISPLAY PLINTHS AND PEDESTALS

                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/80 shadow-xl'>

                                <p className={`text-xl py-1 break-words ${langName === 'ar' && 'text-right'}`} >

                                Custom plinths provide a versatile, adaptable, and hassle-free solution for showcasing your
                                    products or services, whether at your business premises or an event. For a truly flexible and
                                    personalized display, our tailor-made plinths are the perfect choice. With quick and effortless
                                    setup, you&apos;ll save valuable time, allowing you to focus on perfecting your presentation.
                               </p> </div>
                        </div>
                    </motion.div>




                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/80 shadow-xl'>

                                <p className={`text-xl py-1 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    Our experts will be able to plan and build high-quality custom plinth blocks according exactly to your needs. Whether you're after some small display stands to promote different services and products, plinths with storage or something different entirely to give customers a great impression of your brand, we'll help you with one of our high quality display pedestals.  </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className='grid my-10 md:mx-20 gap-5 md:grid-cols-1 grid-cols-1'>
                        <div className=" overflow-hidden rounded-xl transition-all duration-300 ease-in-out">
                            <motion.div
                                className="w-full  group-hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src="/service3a.png"
                                    alt="Example"
                                    layout="responsive"
                                    width={700} // Use actual dimensions or responsive layout
                                    height={400} // Use actual dimensions or responsive layout
                                    objectFit="contain"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold px-4"
                            >
                                <p>A custom plinth for displaying jewellery.</p>
                            </div>
                        </div>


                        <div className=" overflow-hidden rounded-xl transition-all duration-300 ease-in-out">
                            <motion.div
                                className="w-full  group-hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src="/service3b.png"
                                    alt="Example"
                                    layout="responsive"
                                    width={700} // Use actual dimensions or responsive layout
                                    height={400} // Use actual dimensions or responsive layout
                                    objectFit="contain"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold px-4"
                            >
                                <p>A custom plinth for displaying watches.</p>
                            </div>
                        </div>

                    </div>







                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/80 shadow-xl'>
                                <div className='flex items-center justify-center pt-5'>
                                    <h2 className='text-3xl font-bold'>

                                        Custom Plinth Design and Build Process
                                    </h2>
                                    <div className='text-[36px] px-5'> < MdDesignServices /> </div>
                                </div>
                                <p className={`text-xl py-1 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    Custom plinths provide a versatile, adaptable, and hassle-free solution for showcasing your
                                    products or services, whether at your business premises or an event. For a truly flexible and
                                    personalized display, our tailor-made plinths are the perfect choice. With quick and effortless
                                    setup, you&apos;ll save valuable time, allowing you to focus on perfecting your presentation.
                                </p>
                            </div>
                        </div>
                    </motion.div>


                    <div className='grid my-10 md:mx-20 gap-5 md:grid-cols-1 grid-cols-1'>
                        <div className=" overflow-hidden rounded-xl transition-all duration-300 ease-in-out">
                            <motion.div
                                className="w-full  group-hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src="/work3.png"
                                    alt="Example"
                                    layout="responsive"
                                    width={700} // Use actual dimensions or responsive layout
                                    height={400} // Use actual dimensions or responsive layout
                                    objectFit="contain"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold px-4"
                            >
                                <p>Process of building a wodden exhibition stand.</p>
                            </div>
                        </div>


                        <div className=" overflow-hidden rounded-xl transition-all duration-300 ease-in-out">
                            <motion.div
                                className="w-full  group-hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src="/work2.png"
                                    alt="Example"
                                    layout="responsive"
                                    width={700} // Use actual dimensions or responsive layout
                                    height={400} // Use actual dimensions or responsive layout
                                    objectFit="contain"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold px-4"
                            >
                                <p>Rendering of wodden stand build process.</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>

                {/*  SMALL DISPLAY STANDS vala  */}

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className=''
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            4. SMALL DISPLAY STANDS

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
                            <div className='w-full md:w-10/12 ring-2 ring-base-content/10 py-5 px-10 rounded-2xl bg-base-200/80 shadow-xl'>
                                {/* <div className='flex items-center justify-between py-5'>
                                    <h2 className='text-3xl font-bold'>

                                        Benefits of Modular Exhibition Stands
                                    </h2>
                                    <div className='text-[36px] px-5'> <BsGraphUpArrow /> </div>
                                </div> */}
                                <p className={`text-xl py-1 break-words ${langName === 'ar' && 'text-right'}`} >

                                    {/* {dict.About.why_content} */}

                                    Our compact display stands are an excellent choice, offering impactful exhibition stand
                                    designs without the hassle of complex installation or transportation. These small exhibition
                                    stands provide an accessible and cost-effective way to showcase your brand. Affordable,
                                    lightweight, and fully reusable, they can be easily reconfigured, moved, and self-assembled
                                    eliminating the need for extra manpower or additional expenses!
                                </p>
                            </div>
                        </div>
                    </motion.div>




                    <div className='grid my-10 md:mx-20 gap-5 md:grid-cols-1 grid-cols-1'>
                        <div className=" overflow-hidden rounded-xl transition-all duration-300 ease-in-out">
                            <motion.div
                                className="w-full  group-hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src="/small1.png"
                                    alt="Example"
                                    layout="responsive"
                                    width={700} // Use actual dimensions or responsive layout
                                    height={400} // Use actual dimensions or responsive layout
                                    objectFit="contain"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold px-4"
                            >
                                <p>Smaller stand for a car booth.</p>
                            </div>
                        </div>


                        <div className=" overflow-hidden rounded-xl transition-all duration-300 ease-in-out">
                            <motion.div
                                className="w-full  group-hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src="/small2.png"
                                    alt="Example"
                                    layout="responsive"
                                    width={700} // Use actual dimensions or responsive layout
                                    height={400} // Use actual dimensions or responsive layout
                                    objectFit="contain"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Hover Text */}
                            <div
                                className="flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold px-4"
                            >
                                <p>A simple yet effective and eyecatching design.</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>


                {/* {link to kuch aur} */}

                <div>


                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className='py-5'
                    >
                        <h1 className='font-bold pb-10 text-2xl md:text-4xl bg-gradient-to-r  from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] '>
                            {/* {dict.About.h1} */}
                            5. OUR GUIDE

                        </h1>
                    </motion.div>








                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                        className='my-10'
                    >

<div className='grid my-10 md:mx-20 gap-5 md:grid-cols-1 grid-cols-1'>
                        <a href='/en/guide' className=" overflow-hidden rounded-xl transition-all duration-300 ease-in-out ">
                            <motion.div
                                className="w-full  group-hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src="/guide.png"
                                    alt="Example"
                                    layout="responsive"
                                    width={700} // Use actual dimensions or responsive layout
                                    height={400} // Use actual dimensions or responsive layout
                                    objectFit="contain"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Hover Text */}
                           
                        </a>


                        
                    </div>
                    </motion.div>



                    <div className='text-center'>
                        <a href='/en/guide' className=' text-xl md:text-3xl font-bold text-center text-blue-500'>

                            Reach out to our guide to know more about how we can help you build the best booth.
                            {/* <button  */}


                        </a>
                    </div>

                </div>






            </section>




            <Cta
                locale={dict.CTA}
                CTALocale={dict.CTAButton}
            />
        </main>
    );
}
