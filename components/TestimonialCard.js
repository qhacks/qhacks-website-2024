import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

const TestimonialsCard = ({ speaker }) => {
  const { name, team, image, testimonial } = speaker;

  return (
    <div class="w-full  rounded-xl">
      <div class="flex flex-row justify-between pb-10">
      {/* Image on left */}
        <div className="aspect-w-1 aspect-h-1">
          <Image src={image} alt={`${name}`} width={500} height={500} className='w-32 h-32 rounded-full'/>
        </div>

        {/* Name info on right */}
        <div className='flex flex-col'>
          <h5 class="mb-1 text-xl font-bold text-white">{name}</h5>
          <span class="text-sm text-white">{team}</span>
        </div>
      </div>

      {/* Testimonial */}
      <div class="flex mt-4 space-x-3 md:mt-6 text-white align-left">
        <p>{testimonial}</p>
      </div>
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
