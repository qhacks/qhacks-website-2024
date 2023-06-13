'use client';

import React from 'react';
import SpeakerCard from './SpeakerCard';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import speakers from 'data/speaker.json';

const SpeakerCarousel = () => {
  return (
    <div className='px-8'>
      <Carousel>
        <div className=' h-96 flex justify-center text-center text-white'>
          <div className='flex justify-between'>
            <SpeakerCard speaker={speakers.DanDesjardins}/>
            <SpeakerCard speaker={speakers.MinamiAlguire}/>
            <SpeakerCard speaker={speakers.SeanMonteiro}/>
          </div>
        </div>
        <div className='w-100 h-96 flex justify-center text-center text-white'>
          <div className='flex justify-between'>
            <SpeakerCard speaker={speakers.ChloeBeisheim}/>
            <SpeakerCard speaker={speakers.MalcomEade}/>
            <SpeakerCard speaker={speakers.JimMcLennan}/>
          </div>
        </div>
      </Carousel>
    </div>
    
  );
};

export default SpeakerCarousel;
