import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

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
    <a href={link} className={`justify-center flex h-32 p-2 ${borderColor} border-4 rounded-xl`}>
      <img src={logo} alt={`${name} logo`} className=""/>
    </a>
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
