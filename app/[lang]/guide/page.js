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
import { 
    FaPlay, 
    FaCube, 
    FaPalette, 
    FaTools, 
    FaArrowRight, 
    FaCheckCircle 
  } from 'react-icons/fa';
  
    const standTypes = [
      {
        title: 'Modular Stands',
        description: 'Great for flexibility and reusability. Ideal for regular exhibitions.',
        image: '/service/modular/1.png'
      },
      {
        title: 'Bespoke Stands',
        description: 'Perfect for creating a completely unique and eye-catching display.',
        image: '/service/bespoke/1.png'
      },
      {
        title: 'Pop-Up Stands',
        description: 'A convenient, cost-effective option with quick setup.',
        image:'/service/popup/1.png'
      },
      {
        title: 'Custom Stands',
        description: 'Tailored solutions for specific exhibition needs and requirements.',
        image: '/service/plinth/1.png'
      }

    ];

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
                <div className='relative z-10 flex flex-col items-center pt-10 mb-5 overflow-hidden'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                    >
                        <h1 className='font-bold text-5xl md:text-7xl  text-gray-700 text-center  !leading-[1.25em] mb-5'>
                            {/* {dict.About.h1} */}
                            Guide

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


            <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className=" mx-auto">
         
          <p className=" text-gray-800 max-w3xl text-lg md:text-xl mx-auto text-center mb-8">
            Planning your exhibition stand can feel overwhelming, but it doesn&apos;t have to be! Our guide is designed to make the process smooth, insightful, and enjoyable. 
            Whether you&apos;re a first-timer or a seasoned exhibitor, we&apos;ve got you covered with everything you need to ensure
             your display stands out and delivers results.
          </p>
        </div>
      </section>

      {/* Exhibition Stand Contractors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            EXHIBITION STAND CONTRACTORS
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 text-xl items-center">
            <div className="w-full lg:w-1/4   rounded-lg flex items-center justify-center">
             
            <video width="320" height="240" autoPlay muted loop preload="none">
      <source src="/guide-video.mp4" type="video/mp4" />
      
      Your browser does not support the video tag.
    </video>
            </div>
            <div className="w-full lg:w-3/4 space-y-6">
              <p className="text-gray-800">
                At <span className="font-bold">EXPO ESSENTIALS</span>, we specialise in designing and building fully customised exhibition stands that not only look stunning but are also practical and durable.
                 Whether you&apos;re showcasing your brand at a trade show, conference, or outdoor event, our expert team is
                  here to make sure your stand leaves a lasting impression.
              </p>
              <p className="text-gray-600">
                We pride ourselves on combining style, functionality, and precision to create displays that capture attention and attract the
                 right audience. From sleek, portable stands to eye-catching, bespoke outdoor displays, we work with you to ensure every detail
                  reflects your brand&apos;s identity.
              </p>
             
              <p className="text-gray-800">
                Our team of designers and project managers are dedicated to bringing your vision to life.
                 Simply share your ideas with us, and we&apos;ll create a stand that is as unique as your business. We use
                  only the finest materials to ensure your exhibition stand not only stands out but stands the test of time.
                   Plus, we can take care of everything - from delivery to installation - so you can focus on
                    what really matters: making an impact at your next event.
              </p>
              <p className="text-gray-800 font-semibold">
                Let us help you make your next exhibition a memorable one!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stand Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choosing the Right Stand Type
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto text-center mb-12">
            Choosing the perfect stand type is one of the first steps in making your exhibition a success. Do you go for something modular, bespoke, or pop-up? Each has its unique advantages:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-800">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-800 text-xl mt-8">
            We&apos;ll help you choose the one that suits your needs, space, and budget!
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-14 text-center">
          Custom Advanced Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exhibitionIdeas.map((idea, index) => (
          <div
            key={index}
            className="bg-gray-700 ring-1  shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="text-4xl mb-4">{idea.icon}</div>
            <h3 className="text-lg font-semibold text-white text-center mb-2">
              {idea.title}
            </h3>
            <p className="text-sm text-gray-200 text-center">{idea.description}</p>
          </div>
        ))}
      </div>
        </div>
      </section>

      


                  
 
                    






      {/* Materials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Different Materials for Form and Function
            </h2>
            <div className="flex items-center gap-8">
              <FaTools className="w-16 h-16 text-blue-600 flex-shrink-0 hidden lg:block" />
              <p className="text-gray-800  text-xl">
                When designing your stand, the materials you choose can make all the difference in both form
                 and function. You need a balance of durability, transportability, and aesthetics. 
                 High-quality materials can make your stand look polished while offering ease of setup and teardown.
                  Whether it&apos;s smooth acrylics, strong wooden elements, or vibrant fabrics, we guide you through selecting
                   the right materials for your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Graphics & Branding Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Confident Graphics & Branding
            </h2>
            <div className="flex items-center gap-8">
              <FaPalette className="w-16 h-16 text-xl text-blue-600 flex-shrink-0 hidden lg:block" />
              <p className="text-gray-800  text-xl">
                The graphics and branding on your stand are what speak to your audience long before they engage with you.
                 Bold, high-quality graphics that align with your brand&apos;s identity help capture attention and make a memorable first impression. From logos to colour schemes and messaging, confident branding creates an unforgettable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get Started Today!
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Now that you&apos;re armed with all the essential information, it&apos;s time to take action and bring your exhibition vision
             to life! Whether you&apos;re looking to create a striking bespoke stand or an easy-to-assemble pop-up booth,
              we&apos;re here to guide you every step of the way.
               Get in touch with us today and let&apos;s start planning your perfect exhibition experience.
          </p>
         
        </div>
      </section>


           




            <Cta
                locale={dict.CTA}
                CTALocale={dict.CTAButton}
            />
        </main>
    );
}
