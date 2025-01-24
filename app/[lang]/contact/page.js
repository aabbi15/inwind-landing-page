"use client";

import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import MyButton from "./mybutton";
import Cta from "@/components/home/cta";

export default function Example() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure required fields are filled
    if (!formData.email || !formData.message) {
      alert("Email and Message are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        const data = await response.json();
        alert(`Failed to send message: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while sending your message. Please try again later.");
    }

    setLoading(false);
  };

  

  return (
    <div className="honeybg isolate px6 py-24 sm:py-22 lg:px8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
      >
        <h1 className="font-bold text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em] mb-5">
          Contact Us
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
        <h2 className="w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center mb-5 md:mb-10">
          Reach out to us for any inquiries or questions you may have.
        </h2>
      </motion.div>

      <div className=" px-8 md:px-24 py-12 mb-10 grid grid-cols-1 gap-12 mt-24 md:grid-cols-2 bg-blue-950 text-white">

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
        <div className="">
            <span className="inline-block p-3 text-yellow-300 rounded-full bg-blue-100/50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                </svg>
            </span>

            <h2 className="mt-4 text-xl font-medium text-white">Email</h2>
            <p className="mt-2 text-lg text-gray-100">Our friendly team is here to help.</p>
            <p className="mt-2 text-lg text-yellow-300"> info@expoessentials.in </p>
        </div>

        <div>
            <span className="inline-block p-3 text-yellow-300 rounded-full bg-blue-100/50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                </svg>
            </span>

            <h2 className="mt-4 text-xl font-medium text-white">Office</h2>
            <p className="mt-2 text-lg text-gray-100">Come say hello at our office HQ.</p>
            <p className="mt-2 text-lg text-yellow-300">A/11 Ashray Tenament, Near GEB, Petlad, Anand , Gujarat - 388450</p>
        </div>

        <div>
            <span className="inline-block p-3 text-yellow-300 rounded-full bg-blue-100/50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                </svg>
            </span>

            <h2 className="mt-4 text-xl font-medium text-white">Phone</h2>
            <p className="mt-2 text-lg text-gray-100">Mon-Fri from 8am to 5pm.</p>
            <p className="mt-2 text-lg text-yellow-300">+91-9313853583</p>
        </div>

        
    </div>


        <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-100">
              First name
            </label>
            <div className="mt-1">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-100">
              Last name
            </label>
            <div className="mt-1">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Smith"
                value={formData.lastName}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-100">
              Company
            </label>
            <div className="mt-1">
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Smith & Co."
                value={formData.company}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-100">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-gray-100">
              Phone number
            </label>
            <div className="mt-1">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="+91-9824057689"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-100">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your proposal here..."
                value={formData.message}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          
        </div>
        <div className="-mt-12">
        <div className="z-50 containermy">

          {loading ? 
          
            <div class="custom-loader"></div>  
            :

            <button type='submit' class="buttonmy type--C">
            <div class="buttonmy__line"></div>
            <div class="buttonmy__line"></div>
            <span class="buttonmy__text">LET&apos;S TALK </span>
            <div class="buttonmy__drow1"></div>
            <div class="buttonmy__drow2"></div>
          </button>

        }

</div>
        </div>
      </form>

      </div>


      </div>



   

       
    </div>
  );
}

