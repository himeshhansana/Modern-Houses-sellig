import aboutpic from '../assets/about.jpg';
import home5 from '../assets/Home 5.jpg';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users2Icon, HomeIcon, AwardIcon, BarChart2Icon, CheckCircleIcon } from 'lucide-react';
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
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
  const stats = [{
    icon: HomeIcon,
    value: '500+',
    label: 'Properties Sold'
  }, {
    icon: Users2Icon,
    value: '1000+',
    label: 'Happy Clients'
  }, {
    icon: AwardIcon,
    value: '15+',
    label: 'Years Experience'
  }, {
    icon: BarChart2Icon,
    value: '98%',
    label: 'Client Satisfaction'
  }];
  const values = [{
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service, ensuring the highest standards in luxury real estate.'
  }, {
    title: 'Integrity',
    description: 'Trust and transparency are at the core of our business, building lasting relationships with our clients.'
  }, {
    title: 'Innovation',
    description: 'We embrace cutting-edge technology and innovative solutions to provide the best possible service.'
  }, {
    title: 'Expertise',
    description: 'Our team of experts brings deep knowledge and experience in luxury real estate to every transaction.'
  }];
  return <div className="bg-white">
    {/* Hero Section */}
    <motion.section initial="hidden" animate="visible" variants={fadeIn} transition={{
      duration: 0.6
    }} className="relative h-[500px] bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutpic} alt="Modern Villa Office" className="object-cover w-full h-full opacity-50" />
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
        }} className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          About Modern Villas
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
          Redefining luxury real estate with exceptional properties and
          unparalleled service since 2008.
        </motion.p>
      </div>
    </motion.section>
    {/* Our Story Section */}
    <section className="px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeIn} transition={{
          duration: 0.6
        }} className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <p className="mb-4 text-gray-600">
              Founded in 2008, Modern Villas began with a vision to transform
              the luxury real estate market. What started as a boutique agency
              has grown into a leading force in high-end property sales and
              acquisitions.
            </p>
            <p className="mb-4 text-gray-600">
              Our journey has been marked by an unwavering commitment to
              excellence, innovative thinking, and a deep understanding of our
              clients' needs. We've helped countless families find their dream
              homes and investors secure valuable properties.
            </p>
            <p className="text-gray-600">
              Today, we continue to push boundaries and set new standards in
              the luxury real estate industry, always putting our clients
              first.
            </p>
          </div>
          <div className="relative">
            <motion.img initial={{
              scale: 0.8,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              duration: 0.6
            }} src={home5} alt="Modern Villa Interior" className="rounded-lg shadow-xl" />
            <div className="absolute p-6 text-white rounded-lg shadow-lg -bottom-6 -right-6 bg-emerald-600">
              <p className="text-2xl font-bold">15+ Years</p>
              <p className="text-sm">of Excellence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    {/* Stats Section */}
    <section className="px-4 py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.6
          }} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-emerald-100 text-emerald-600">
              <stat.icon size={32} />
            </div>
            <h3 className="mb-2 text-3xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>)}
        </div>
      </div>
    </section>
    {/* Values Section */}
    <section className="px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="mb-12 text-3xl font-bold text-center">
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.6
          }} className="p-6 bg-white rounded-lg shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircleIcon size={24} />
            </div>
            <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </motion.div>)}
        </div>
      </div>
    </section>
    {/* CTA Section */}
    <motion.section initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.6
    }} className="px-4 py-20 text-white bg-emerald-700">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Find Your Dream Property?
        </h2>
        <p className="mb-8 text-lg">
          Let us help you discover the perfect luxury home that matches your
          lifestyle.
        </p>
        <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="px-8 py-3 font-medium transition-colors bg-white rounded-full text-emerald-700 hover:bg-gray-100">
          Contact Us Today
        </motion.button>
      </div>
    </motion.section>
  </div>;
};
export default About;