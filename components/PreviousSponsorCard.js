import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'
import { motion } from "framer-motion";

const SponsorCard = ({ sponsor }) => {
  const { name, logo, link, borderColor, tier } = sponsor;
  if (borderColor == 'border-indigo-600') {
    let color1 = 'border-indigo-600';
  } else if (borderColor == 'border-red-600') {
    let color2 = 'border-red-600';
  } else if (borderColor == 'border-yellow-600') {
    let color3 = 'border-yellow-600';
  }

  let height;
  let width;

  // width and height variables
  if (tier == 'tera') {
    width = 'w-32 xs:w-[500px]';
    height = 'h-20 xs:h-64';
  } else if (tier == 'giga') {
    width = 'w-32 xs:w-[400px]';
    height = 'h-20 xs:h-56';
  } else if (tier == 'mega') {
    width = 'w-32 xs:w-[300px]';
    height = 'h-20 xs:h-44';
  } else if (tier == 'kilo') {
    width = 'w-32 xs:w-[200px]';
    height = 'h-20 xs:h-32';
  }
  else if (tier == 'previous') {
    width = 'w-32 xs:w-[150px]';
    height = 'h-20 xs:h-24';
  }

  return (
    <motion.a 
      // Remove the width and height props and replace them with the variables I created above
      className={`justify-center flex ${height} ${width} ${borderColor} xs:m-2 m-1 border-4 rounded-xl bg-white`}
      whileHover={{ scale: 1 }}
    >
      <img src={logo} alt={`${name} logo`} className="rounded-xl"/>
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