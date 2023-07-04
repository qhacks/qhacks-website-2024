'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

const TestimonialsCard = ({ speaker }) => {
  const { name, team, image, testimonial } = speaker;

  return (
    <div class="rounded-xl w-[430px] h-[300px] m-5 bg-gray-900">
      <div class="flex flex-row px-4 pt-4">
        <div className="aspect-w-1 aspect-h-1"><Image src={image} alt={`${name}`} width={500} height={500} className='w-24 h-24 rounded-full'/></div>
        <div className='flex flex-col ml-8 justify-center'>
          <h5 className="mb-1 text-xl font-bold text-white text-left">{name}</h5>
          <span className="text-sm text-white text-left">{team}</span>
        </div>
      </div>
      <div class="flex mt-2 mx-4 text-gray-300 text-left tracking-[-1px]">{testimonial}</div>
    </div>
  );
};

TestimonialsCard.propTypes = {
  speaker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
  }).isRequired,
};

export default TestimonialsCard;
