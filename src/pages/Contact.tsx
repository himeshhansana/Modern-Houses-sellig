
import home7 from '../assets/Home 7.jpg';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  const offices = [{
    city: 'New York',
    address: '123 Madison Avenue, New York, NY 10001',
    phone: '+1 (212) 555-0123',
    email: 'nyc@modernvillas.com'
  }, {
    city: 'Los Angeles',
    address: '456 Beverly Hills Drive, Los Angeles, CA 90210',
    phone: '+1 (310) 555-0123',
    email: 'la@modernvillas.com'
  }, {
    city: 'Miami',
    address: '789 Ocean Drive, Miami Beach, FL 33139',
    phone: '+1 (305) 555-0123',
    email: 'miami@modernvillas.com'
  }];
  return <div className="bg-white">
      {/* Hero Section */}
      <motion.section initial="hidden" animate="visible" variants={fadeIn} transition={{
      duration: 0.6
    }} className="relative h-[400px] bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img src={home7} alt="Contact Us" className="object-cover w-full h-full opacity-50" />
        </div>
        <div className="container relative flex flex-col justify-center h-full px-4 mx-auto">
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="mb-4 text-4xl font-bold md:text-5xl">
            Contact Us
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="max-w-2xl text-xl">
            Get in touch with our team of luxury real estate experts
          </motion.p>
        </div>
      </motion.section>
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{
          duration: 0.6
        }}>
            <h2 className="mb-8 text-3xl font-bold">Send Us a Message</h2>
            {isSubmitted ? <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} className="p-8 text-center rounded-lg bg-emerald-50">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircleIcon size={32} />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll get back to you
                  soon.
                </p>
              </motion.div> : <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div variants={fadeIn} transition={{
                delay: 0.1
              }}>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
                      Your Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="John Doe" />
                  </motion.div>
                  <motion.div variants={fadeIn} transition={{
                delay: 0.2
              }}>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="john@example.com" />
                  </motion.div>
                </div>
                <motion.div variants={fadeIn} transition={{
              delay: 0.3
            }}>
                  <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="phone">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="+1 (555) 000-0000" />
                </motion.div>
                <motion.div variants={fadeIn} transition={{
              delay: 0.4
            }}>
                  <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="subject">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="How can we help you?" />
                </motion.div>
                <motion.div variants={fadeIn} transition={{
              delay: 0.5
            }}>
                  <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Your message here..." />
                </motion.div>
                <motion.button variants={fadeIn} transition={{
              delay: 0.6
            }} whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} type="submit" className="w-full px-6 py-3 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700">
                  Send Message
                </motion.button>
              </form>}
          </motion.div>
          {/* Contact Information */}
          <div>
            <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <h2 className="mb-8 text-3xl font-bold">Our Offices</h2>
              <div className="space-y-8">
                {offices.map((office, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.3 + index * 0.1
              }} className="p-6 rounded-lg bg-gray-50">
                    <h3 className="mb-4 text-xl font-bold">{office.city}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPinIcon className="w-5 h-5 mt-1 mr-3 text-emerald-600" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <PhoneIcon className="w-5 h-5 mr-3 text-emerald-600" />
                        <a href={`tel:${office.phone}`} className="hover:text-emerald-600">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <MailIcon className="w-5 h-5 mr-3 text-emerald-600" />
                        <a href={`mailto:${office.email}`} className="hover:text-emerald-600">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.8
            }} className="mt-12">
                <h3 className="mb-4 text-xl font-bold">Business Hours</h3>
                <div className="flex items-start mb-4">
                  <ClockIcon className="w-5 h-5 mt-1 mr-3 text-emerald-600" />
                  <div>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.9
            }} className="mt-8">
                <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 transition-colors hover:text-emerald-600">
                    <FacebookIcon size={24} />
                  </a>
                  <a href="#" className="text-gray-600 transition-colors hover:text-emerald-600">
                    <TwitterIcon size={24} />
                  </a>
                  <a href="#" className="text-gray-600 transition-colors hover:text-emerald-600">
                    <InstagramIcon size={24} />
                  </a>
                  <a href="#" className="text-gray-600 transition-colors hover:text-emerald-600">
                    <LinkedinIcon size={24} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;