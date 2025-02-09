import Image from 'next/image';
import React from 'react';

const ProjectCard = ({service}) => {

  const {name,imagesrc,color,link} = service;
  console.log(service)
  return (
    <a href={link}>
    <div 
    className={`ring-1 ring-black hover:ring-[#7124ff] m-2 group px-4 py-3
       bg-gray-200/10 rounded-lg flex flex-col items-center justify-center gap-2 relative 
       after:absolute after:h-full after:w-full after:inset-0 after:rounded-lg 
       after:-z-20 transition-all duration-300 hover:transition-all 
       hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all
       after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full
       after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all`}
          
    style={{
      "--after-bg": color, // Set a CSS variable for after:bg
    }}
  >
    <style jsx>{`
      div::after {
        background-color: var(--after-bg);
      }
    `}</style>
     

     <Image 
  src={imagesrc}
  width={200}
  height={200}
  alt="logo"
  className="object-cover"
  style={{ width: "200px", height: "200px" }} 

/>
      <p className="cardtxt font-semibold text-gray-900 tracking-wider group-hover:text-gray-100 text-xl"
       style={{ minHeight: "60px", lineHeight: "1.5" }} 
      >
        {name}
      </p>
 
      <div className="ordernow flex flex-row justify-center items-center w-full">
       
        <p className="btun4 lg:inline-flex items-center text-gray-100 group-hover:text-gray-900 gap-3 group-hover:bg-gray-100 bg-[#343434] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
          View Details
        </p>
      </div>
    </div>
    </a>
  );
}

export default ProjectCard;
