import React from 'react';
import { motion } from 'framer-motion';
import OfferCard from './OfferCard'; 

const specialOffersData = [
  {
    id: 1,
    title: "Weekend Adventure Deal!",
    description: "Get 15% off all weekend rentals!",
    imageUrl: "https://i.ibb.co/9HBwQpzc/download.jpg", 
    buttonText: "Explore Deal",
    link: "/offers/weekend-adventure",
  },
  {
    id: 2,
    title: "Holiday Luxury Special",
    description: "Experience luxury cars at just $99/day this holiday season!",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3P4c1hVMcTuTRx7kXfr5IK5NP8YpoeR9V3g&s", 
    buttonText: "Explore Deal",
    link: "/offers/holiday-luxury",
  },
  {
    id: 3,
    title: "Early Bird Discount",
    description: "Book 7 days in advance and save 10% on any car!",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdnGmwe1ErdyVO_7ntbKZdE6BSIWurbdo7Q&s", 
    link: "/offers/early-bird",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Exclusive Special Offers
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {specialOffersData.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;