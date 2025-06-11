import React from 'react';
import { Link } from 'react-router'; 
import { motion } from 'framer-motion';


const cardVariants = {
  hidden: { x: -100, opacity: 0 }, 
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } } 
};

const OfferCard = ({ offer }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 ease-in-out"
      variants={cardVariants}
      whileHover={{ scale: 1.03, y: -5 }} // Bounce slightly on hover (scale up and move up)
      transition={{ type: "spring", stiffness: 300, damping: 10 }} // Spring physics for a natural bounce
    >
      {offer.imageUrl && (
        <img
          src={offer.imageUrl}
          alt={offer.title}
          className="w-full h-40 object-cover rounded-lg mb-6"
        />
      )}
      <h3 className="text-2xl font-bold text-gray-800 mb-3">
        {offer.title}
      </h3>
      <p className="text-gray-600 mb-6 flex-grow">
        {offer.description}
      </p>
      <Link
        to={offer.link}
        className="mt-auto inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        {offer.buttonText}
      </Link>
    </motion.div>
  );
};

export default OfferCard;