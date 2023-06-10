import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

const SponsorCard = ({ sponsor }) => {
  const { name, logo, link, borderColor } = sponsor;

  return (
    <div className={`justify-center flex h-32 p-2 ${borderColor}`}>
      <img src={logo} alt={`${name} logo`} className=""/>
    </div>
  );
};

SponsorCard.propTypes = {
  sponsor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default SponsorCard;
