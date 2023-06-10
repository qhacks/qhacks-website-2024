import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

const TestimonialsCard = ({ speaker }) => {
  const { name, team, image } = speaker;

  return (
    <div className="border-white w-{1330} h-{400}">
      <img src={image} alt={`${name}`} className='w-8 h-8 rounded-full'/>
      <h2 className='text-white'>{name}</h2>
      <h5 className='text-white'>{team}</h5>
    </div>
  );
};

TestimonialsCard.propTypes = {
  speaker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default TestimonialsCard;
