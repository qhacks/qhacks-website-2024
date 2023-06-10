import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

const SpeakerCard = ({ speaker }) => {
  const { name, title, image } = speaker;

  return (
    <div className="w-{375} h-96 border mx-4">
      <img src={image} alt={`${name}`}/>
      <h2 className='text-white'>{name}</h2>
      <h5 className='text-white'>{title}</h5>
    </div>
  );
};

SpeakerCard.propTypes = {
  speaker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default SpeakerCard;
