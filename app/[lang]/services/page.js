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


const features = [
    {
        icon: "💡",
        title: "LED Lighting",
        description: "Use LED lights to create eye-catching effects, highlight key features, or add a sleek, futuristic vibe to your stand."
    },
    {
        icon: "📺",
        title: "Digital Screens",
        description: "Incorporate digital screens to display compelling videos, dynamic product demos, or live social media feeds that keep your audience engaged."
    },
    {
        icon: "🔄",
        title: "Curved and Unique Shapes",
        description: "Embrace bold, non-traditional shapes like curves and arches to give your stand a distinctive, memorable look."
    },
    {
        icon: "✨",
        title: "Minimalist Design",
        description: "Go for a minimalist approach with clean lines and open spaces, creating a sophisticated and modern brand presence."
    },
    {
        icon: "🪑",
        title: "Custom Furniture",
        description: "Choose bespoke, branded furniture that complements your design and provides comfort and functionality for visitors."
    },
    {
        icon: "🌱",
        title: "Greenery and Biophilic Design",
        description: "Add plants or living walls to bring a natural, calming element to your booth while boosting environmental appeal."
    },
    {
        icon: "🎨",
        title: "Branding with Large-Scale Graphics",
        description: "Use large-format graphics or murals to showcase your brand's story, products, or key messages in a visually striking way."
    },
    {
        icon: "🎵",
        title: "Sound Design",
        description: "Integrate subtle background music or sound effects that complement your booth's theme and enhance the overall experience."
    },
    {
        icon: "🔌",
        title: "Charging Stations",
        description: "Provide convenient charging stations for visitors' devices, which can encourage them to linger longer at your stand."
    }
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
        <main className='container mx-auto '>


            {/* Heading section */}
            <section className='md:px-0 px-2'>
                <div className='relative z-10 flex flex-col itemsstart md:items-center pt-10 mb-5 overflow-hidden'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                    >
                        <h1 className='font-bold text-5xl md:text-7xl  text-center text-gray-700 !leading-[1.25em] mb-5'>
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
                        <h2 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/90 font-semibold text-center mb-5 md:mb-10'>
                            {/* {dict.About.h2} */}

                            Explore our services and discover how we can help you create a standout exhibition stand that captivates your audience and elevates your brand.
                        </h2>
                    </motion.div>
                </div>


                <div className='absolute w-[100%] text-purple-600 left-[0] top-[6%] md:top-[10%] h-[200px]'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        id='patternId'
                        width='100%'
                        height='100%'
                        className='text-purple-600 '
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



            <section className='flex flex-col text-xl gap-y-10 mb-32'>
                {/* bespoke vala */}


                <div id='1' class="grid grid-cols-1 md:grid-cols-5 py-5 bg-[#5DA5A4]">



                    <div class="col-span-1 md:col-span-2 md:sticky md:top-0 md:h-screen ">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                            className='py-5 px-7'
                        >
                            <h1 className='font-bold  text-2xl md:text-4xl   text-center text-black !leading-[1.25em] '>
                                {/* {dict.About.h1} */}
                                1. BESPOKE EXHIBITION STANDS

                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                            className=''
                        >
                            <div className={`text-lg md:text-xl py-4 px-4 md:px-7   break-words ${langName === 'ar' && 'text-right'}`} >

                                The advantages of bespoke exhibition stands are undeniable. A striking blend of unique
                                designs and top-tier craftsmanship ensures that a custom-built exhibition stand is the ideal
                                way to showcase your business to potential customers and clients. Nothing leaves a
                                stronger first impression than a tailored exhibition stand designed to highlight your brand in
                                style!
                            </div>

                            <div className='text-xl py-1 my-5 px-7'>

                                <ul class="max-w-md space-y-1 list-inside ">
                                    <li class="flex items-center">
                                        <FaMobileAlt className=" w-5 h-5 mr-3 text-green-400" />
                                        Adaptive Booth Design
                                    </li>
                                    <li class="flex items-center">
                                        <MdDashboardCustomize className=" w-5 h-5 mr-3 text-green-400" />
                                        Easy Customization
                                    </li>
                                    <li class="flex items-center">
                                        <GrOptimize className=" w-5 h-5 mr-3 text-green-400" />
                                        Enhanced Brand Visibility
                                    </li>
                                </ul>
                            </div>

                            {/* <div className={`text-lg md:text-xl py-4 px-4 md:px-7   break-words ${langName === 'ar' && 'text-right'}`} >

                                We are a bespoke exhibition stand company that stands out from the rest. Our experienced team is with you every step of the way—from your first call to the design, construction, delivery, and installation of your custom exhibition stand. No matter where you&apos;re exhibiting, our tailored display stands are the ultimate solution for showcasing your brand and products effectively!
                            </div> */}


                        </motion.div>


                    </div>


                    <div class="col-span-3 flex justify-center items-center gap-6 flex-col ">

                        <Image src="/service/bespoke/1.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/bespoke/2.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/bespoke/3.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/bespoke/4.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/bespoke/5.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/bespoke/6.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/bespoke/7.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/bespoke/8.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/bespoke/9.png" alt="Picture of the author" width={600} height={500} />
                    </div>
                </div>





                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>

                {/* MODULAR TRADE SHOW BOOTH   */}
                <div id='2' class="grid grid-cols-1 md:grid-cols-5 bg-[#D98880] py-5 ">



                    <div class="col-span-1 md:col-span-2 md:sticky md:top-0 md:h-screen  ">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                            className='py-5 px-7'
                        >
                            <h1 className='font-bold  text-2xl md:text-4xl   text-center text-black !leading-[1.25em] '>
                                {/* {dict.About.h1} */}
                                2. MODULAR TRADE SHOW BOOTH

                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                            className=''
                        >
                            <div className={`text-lg md:text-xl py-4 px-4 md:px-7   break-words ${langName === 'ar' && 'text-right'}`} >

                                When brainstorming the best exhibition stand ideas for your business, it&apos;s important to think about the long-term value of your display.
                                Modular exhibition stands are a fantastic choice for businesses that regularly showcase at events.
                                They offer the flexibility to reuse the same stand while refreshing graphics, products, and visuals,
                                saving you both time and money.
                            </div>



                            <div className={`text-xl py-1 my-5 px-7  break-words ${langName === 'ar' && 'text-right'}`} >

                                The benefits of modular stands are clear: they&apos;re cost-effective,
                                adaptable, and easy to tailor for different events.
                                Plus, they allow you to stay on-brand without reinventing the wheel each time.
                                However, if you&apos;re aiming to make a bold impact at a crowded event, a fully
                                bespoke stand might just be the way to really stand out and leave a lasting impression! </div>


                        </motion.div>


                    </div>


                    <div class="col-span-3 flex justify-center items-center gap-6 flex-col  ">

                        <Image src="/service/modular/1.png" alt="Picture of the author" width={600} height={500}  />
                        <Image src="/service/modular/2.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/modular/3.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/modular/4.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/modular/5.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/modular/6.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/modular/7.png" alt="Picture of the author" width={600} height={500} />
                    </div>
                </div>


                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>





                {/* POP UP & FOLDABLE EXHIBITION STAND IDEAS   */}
                <div id='3' class="grid grid-cols-1 md:grid-cols-5 py-5 bg-[#7A9EAB]">



                    <div class="col-span-1 md:col-span-2 md:sticky md:top-0 md:h-screen  ">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                            className='py-5 px-7'
                        >
                            <h1 className='font-bold  text-2xl md:text-4xl   text-center text-black !leading-[1.25em] '>
                                {/* {dict.About.h1} */}
                                3. POP UP & FOLDABLE EXHIBITION STAND IDEAS

                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                            className=''
                        >
                            <div className={`text-lg md:text-xl py-4 px-4 md:px-7   break-words ${langName === 'ar' && 'text-right'}`} >

                                No matter what you call them, foldable, collapsible, or pop-up displays are a revolutionary solution
                                for your exhibition needs.
                                These stands are designed to be compact and lightweight, so you can easily transport them,
                                set them up in no time, and pack them away quickly at the end of the event.  </div>



                            <div className={`text-xl py-1 my-5 px-7  break-words ${langName === 'ar' && 'text-right'}`} >


                                Forget the hassle of organising big installation teams. With pop-up stands,
                                you&apos;ll have more time to focus on engaging with visitors and showcasing your business,
                                all while enjoying a stress-free experience.   </div>


                        </motion.div>


                    </div>


                    <div class="col-span-3 flex justify-center items-center gap-6 flex-col  ">

                        <Image src="/service/popup/1.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/popup/2.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/popup/3.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/popup/4.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/popup/5.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/popup/6.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/popup/7.png" alt="Picture of the author" width={600} height={500} />
                    </div>
                </div>



                {/* SMALL DISPLAY STANDS  */}
                <div id='4' class="grid grid-cols-1 md:grid-cols-5 py-5  bg-[#A58B6F]">



                    <div class="col-span-1 md:col-span-2 md:sticky md:top-0 md:h-screen  ">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                            className='py-5 px-7'
                        >
                            <h1 className='font-bold  text-2xl md:text-4xl   text-center text-black !leading-[1.25em] '>
                                {/* {dict.About.h1} */}
                                4. SMALL DISPLAY STANDS

                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                            className=''
                        >
                            <div className={`text-lg md:text-xl py-4 px-4 md:px-7   break-words ${langName === 'ar' && 'text-right'}`} >

                                We know the struggle of small exhibition spaces, and we don&apos;t want you to pay over the
                                odds for a bigger booth when you can make a big impact in a smaller one!
                                Our compact exhibition stands are designed to deliver just as much visual appeal and
                                smart design as larger setups, without the hassle. Lightweight, affordable, and fully reusable,
                                these stands are easy to transport, set up on your own, and customise for any event.
                                Perfect for businesses looking to showcase their brand without the extra cost or complexity.
                            </div>





                        </motion.div>


                    </div>


                    <div class="col-span-3 flex justify-center items-center gap-6 flex-col  ">

                        <Image src="/service/small/1.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/small/2.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/small/3.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/small/4.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/small/5.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/small/6.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/small/7.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/small/8.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/small/9.png" alt="Picture of the author" width={600} height={500} />
                    </div>
                </div>





                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>





                {/*  LARGE DISPLAY STANDS   */}

                <div id='5' class="grid grid-cols-1 md:grid-cols-5 py-5 bg-[#8A9A5B]">



                    <div class="col-span-1 md:col-span-2 md:sticky md:top-0 md:h-screen  ">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                            className='py-5 px-7'
                        >
                            <h1 className='font-bold  text-2xl md:text-4xl   text-center text-black !leading-[1.25em] '>
                                {/* {dict.About.h1} */}
                                5. LARGE DISPLAY STANDS

                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                            className=''
                        >
                            <div className={`text-lg md:text-xl py-4 px-4 md:px-7   break-words ${langName === 'ar' && 'text-right'}`} >

                                Our large display stands are designed to command attention and elevate your presence at any event.
                                Perfect for businesses looking to showcase their brand on a grand scale, these stands offer plenty
                                of space for eye-catching graphics, product displays, and interactive features.
                                Built with high-quality materials, they provide durability and flexibility, ensuring your
                                stand looks flawless throughout the event.
                                Whether you need to create an immersive brand experience or highlight a wide range of products,
                                our large display stands offer the perfect platform to make a bold, lasting impression.
                            </div>





                        </motion.div>


                    </div>


                    <div class="col-span-3 flex justify-center items-center gap-6 flex-col  ">

                        <Image src="/service/large/1.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/large/2.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/large/3.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/large/4.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/large/5.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/large/6.png" alt="Picture of the author" width={600} height={500} />
                    </div>
                </div>



                <div className="w-[full] h-[0.75px] bg-blue-600 my-5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>


                {/* CUSTOM DISPLAY PLINTHS AND PEDESTALS */}

                <div id='6' class="grid grid-cols-1 md:grid-cols-5 py-5 bg-[#9D94B7]">



                    <div class="col-span-1 md:col-span-2 md:sticky md:top-0 md:h-screen w-full ">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                            className='py-5 px-7'
                        >
                            <h1 className='font-bold  text-2xl md:text-4xl   text-center text-black !leading-[1.25em] '>
                                {/* {dict.About.h1} */}
                                6. CUSTOM DISPLAY PLINTHS AND PEDESTALS

                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                            className=''
                        >
                            <div className={`text-lg md:text-xl py-4 px-4 md:px-7   break-words ${langName === 'ar' && 'text-right'}`} >

                                Our Custom Display Plinths and Pedestals are designed to perfectly showcase your products, artworks
                                , or branding.
                                Fully tailored to your needs, they come in various sizes, shapes, and finishes, all crafted from
                                high-quality materials for a sleek, professional look.
                                Easy to assemble, lightweight, and space-efficient, our plinths make displaying your items
                                at any event simple and impactful. Plus, with eco-friendly options available,
                                you can showcase your brand with style and sustainability.
                            </div>


                          





                        </motion.div>


                    </div>


                    <div class="col-span-3 flex justify-center items-center gap-6 flex-col  ">

                        <Image src="/service/plinth/1.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/2.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/3.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/4.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/5.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/6.png" alt="Picture of the author" width={600} height={500} />
                        {/* <Image src="/service/plinth/7.png" alt="Picture of the author" width={600} height={500} /> */}
                        <Image src="/service/plinth/8.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/9.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/10.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/11.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/12.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/13.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/14.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/15.png" alt="Picture of the author" width={600} height={500} />
                        <Image src="/service/plinth/16.png" alt="Picture of the author" width={600} height={500} />

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
