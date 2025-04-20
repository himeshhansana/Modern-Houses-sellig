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
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" alt="Modern Villa Office" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
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
        }} className="text-xl max-w-2xl">
            Redefining luxury real estate with exceptional properties and
            unparalleled service since 2008.
          </motion.p>
        </div>
      </motion.section>
      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeIn} transition={{
          duration: 0.6
        }} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2008, Modern Villas began with a vision to transform
                the luxury real estate market. What started as a boutique agency
                has grown into a leading force in high-end property sales and
                acquisitions.
              </p>
              <p className="text-gray-600 mb-4">
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
            }} src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" alt="Modern Villa Interior" className="rounded-lg shadow-xl" />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">15+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-3xl font-bold text-center mb-12">
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.6
          }} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  <CheckCircleIcon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
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
    }} className="bg-emerald-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg mb-8">
            Let us help you discover the perfect luxury home that matches your
            lifestyle.
          </p>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="bg-white text-emerald-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Contact Us Today
          </motion.button>
        </div>
      </motion.section>
    </div>;
};
export default About;