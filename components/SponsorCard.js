import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

const SponsorCard = ({ sponsor }) => {
  const { name, logo, description } = sponsor;

  return (
    <div className="border justify-center flex h-32">
      <img src={logo} alt={`${name} logo`} className="border"/>
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
