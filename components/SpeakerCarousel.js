'use client';

import React from 'react';
import SpeakerCard from './SpeakerCard';
import { useState } from "react"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const speakers = [
  {
    name: 'Dan Desjardins',
    title: 'CEO',
    image: '/speakers/Dan Desjardins.png',
  },
  {
    name: 'Minami Alguire',
    title: 'Lead Campus Recruiter',
    image: '/speakers/Minami Alguire.png',
  },
  {
    name: 'Sean Monteiro',
    title: 'CEO and Founder',
    image: '/speakers/Sean Monteiro.png',
  },
  {
    name: 'Chloe Beisheim',
    title: 'Outreach Manager',
    image: '/speakers/Chloe Beisheim.png',
  },
  {
    name: 'Malcom Eade',
    title: 'Co-Founder',
    image: '/speakers/Malcom Eade.png',
  },
  {
    name: 'Jim McLennan',
    title: 'Co-Founder/Academic Director',
    image: '/speakers/Jim McLennan.png',
  },
]

const SpeakerCarousel = () => {
  return (
    <div className='p-8'>
      <Carousel className='w-'>
        <div className='w-100 h-96 flex justify-center text-center text-white'>
          <div className='flex '>
            <SpeakerCard speaker={speakers[0]}/>
            <SpeakerCard speaker={speakers[1]}/>
            <SpeakerCard speaker={speakers[2]}/>
          </div>
        </div>
        <div className='w-100 h-96 flex justify-center text-center text-white'>
          <div className='flex justify-between'>
            <SpeakerCard speaker={speakers[3]}/>
            <SpeakerCard speaker={speakers[4]}/>
            <SpeakerCard speaker={speakers[5]}/>
          </div>
        </div>
      </Carousel>
    </div>
    
  );
};

export default SpeakerCarousel;
