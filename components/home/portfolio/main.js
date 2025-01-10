'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MyModal } from '@/components/mymodal';




export default function Portfolio() {
    // Define the list of images with src, name, and category
    const images = [
        { src: "/hero2.jpg", name: "Image 1", category: "Double Decker" },
        { src: "/hero3.jpg", name: "Image 2", category: "County Pavilion" },
        { src: "/hero3.jpg", name: "Image 3", category: "Modular Stand" },
        { src: "/hero3.jpg", name: "Image 4", category: "Custom Stand" },
        { src: "/hero3.jpg", name: "Image 6", category: "Custom Stand" },
        { src: "/hero3.jpg", name: "Image 5", category: "Double Decker" },
        { src: "/hero3.jpg", name: "Image 7", category: "Double Decker" },
        { src: "/hero3.jpg", name: "Image 8", category: "Modular Stand" },
        { src: "/hero3.jpg", name: "Image 9", category: "County Pavilion" },
        { src: "/hero3.jpg", name: "Image 10", category: "Custom Stand" },
        { src: "/hero3.jpg", name: "Image 11", category: "Double Decker" },
        { src: "/hero3.jpg", name: "Image 12", category: "Modular Stand" }
    ];

    const [activeCategory, setActiveCategory] = useState('All categories');

    const filteredImages = activeCategory === 'All categories'
        ? images
        : images.filter(image => image.category === activeCategory);

   function changeCategory(category) {
        setActiveCategory('');
        setTimeout(() => setActiveCategory(category), 500);
        // setActiveCategory(category);
    }

    return (
        <div className='mb-24 px-10'>

                    <motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
					>
						<h1 className='font-bold text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] mb-5'>
							Our Portfolio
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
							See some of our recent projects at ExpoEssentials.
						</h2>
					</motion.div>


        <div className="flex items-center justify-center  py-4 md:py-8 flex-wrap">
            <button type="button" onClick={() => changeCategory('All categories')} className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full md:text-base text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3">All categories</button>
            <button type="button" onClick={() => changeCategory('County Pavilion')} className="text-gray-900 border border-gray-200 hover:border-gray-300 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full md:text-base text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3">County Pavilion</button>
            <button type="button" onClick={() => changeCategory('Modular Stand')} className="text-gray-900 border border-gray-200 hover:border-gray-300 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full md:text-base text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3">Modular Stand</button>
            <button type="button" onClick={() => changeCategory('Double Decker')} className="text-gray-900 border border-gray-200 hover:border-gray-300 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full md:text-base text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3">Double Decker</button>
            <button type="button" onClick={() => changeCategory('Custom Stand')} className="text-gray-900 border border-gray-200 hover:border-gray-300 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full md:text-base text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3">Custom Stand</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4  ">
        <AnimatePresence>
                    {filteredImages.map(image => (

                        <div>
                            <MyModal/>
                        <motion.div
                            key={image.id} // Use unique id for key
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5, ease: "easeInOut",type: 'spring', stiffness: 50, damping: 10 }}
                            className="relative h-96 w-full"
                        >
                            {/* <MyModal/> */}
                            <Image
                                alt={image.name}
                                src={image.src}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </motion.div>
                        </div>
                    ))}
                </AnimatePresence>
        </div>

        <div className='hidden md:block absolute right-[70%] top-[40%] z-0'>
					<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,theme(colors.primary/15%),rgba(255,255,255,0))]'></div>
				</div>
        </div>
    );
}




// export default function Portfolio() {
  

//     const [activeCategory, setActiveCategory] = useState('All categories');

//     // Filter images based on active category
//     const filteredImages = activeCategory === 'All categories'
//         ? images
//         : images.filter(image => image.category === activeCategory);

//     function changeCategory(category) {
//         setActiveCategory(category);
//     }

//     return (
//         <div>
//             <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
//                 <button onClick={() => changeCategory('All categories')} className="button-style">All categories</button>
//                 <button onClick={() => changeCategory('County Pavilion')} className="button-style">County Pavilion</button>
//                 <button onClick={() => changeCategory('Modular Stand')} className="button-style">Modular Stand</button>
//                 <button onClick={() => changeCategory('Double Decker')} className="button-style">Double Decker</button>
//                 <button onClick={() => changeCategory('Custom Stand')} className="button-style">Custom Stand</button>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 <AnimatePresence>
//                     {filteredImages.map(image => (
//                         <motion.div
//                             key={image.id} // Use unique id for key
//                             initial={{ opacity: 0, scale: 0.5 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0.5 }}
//                             transition={{ duration: 0.5, ease: "easeInOut" }}
//                             className="relative h-64 w-full"
//                         >
//                             <Image
//                                 alt={image.name}
//                                 src={image.src}
//                                 layout="fill"
//                                 objectFit="cover"
//                                 className="rounded-lg"
//                             />
//                         </motion.div>
//                     ))}
//                 </AnimatePresence>
//             </div>
//         </div>
//     );
// }

