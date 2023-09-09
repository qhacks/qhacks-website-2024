import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'
import { motion } from "framer-motion";

const SponsorCard = ({ sponsor }) => {
  const { name, logo, link, borderColor } = sponsor;
  if (borderColor == 'border-indigo-600') {
    let color = 'border-indigo-600';
  } else if (borderColor == 'border-red-600') {
    let color = 'border-red-600';
  } else if (borderColor == 'border-yellow-600') {
    let color = 'border-yellow-600';
  }


  return (
    <motion.a 
      href={link} 
      className={`justify-center flex h-44 p-2 ${borderColor} border-4 rounded-xl bg-white`}
      whileHover={{ scale: 1.1 }}
    >
      <img src={logo} alt={`${name} logo`} className=""/>
    </motion.a>
  );
};

SponsorCard.propTypes = {
  sponsor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default SponsorCard;
