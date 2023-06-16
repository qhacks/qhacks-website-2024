'use client';
import React from 'react';
import SpeakerCard from './SpeakerCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import speakers from 'data/speaker.json';

const SpeakerCarousel = () => {
  return (
    <div>
      <div className='hidden lg:block'>
        <Carousel showStatus={false}>
          <div className=' h-[410px] flex justify-center text-center text-white'>
            <div className='flex justify-between'>
              <SpeakerCard speaker={speakers.DanDesjardins}/>
              <SpeakerCard speaker={speakers.MinamiAlguire}/>
              <SpeakerCard speaker={speakers.SeanMonteiro}/>
            </div>
          </div>
          <div className='h-[410px] flex justify-center text-center text-white'>
            <div className='flex justify-between'>
              <SpeakerCard speaker={speakers.ChloeBeisheim}/>
              <SpeakerCard speaker={speakers.MalcomEade}/>
              <SpeakerCard speaker={speakers.JimMcLennan}/>
            </div>
          </div>
        </Carousel>
      </div>


      <div className='hidden sm:block lg:hidden '>
        <Carousel showStatus={false}>
          <div className=' h-[410px] flex justify-center text-center text-white'>
            <div className='flex justify-between'>
              <SpeakerCard speaker={speakers.DanDesjardins}/>
              <SpeakerCard speaker={speakers.MinamiAlguire}/>
            </div>
          </div>
          <div className='h-[410px] flex justify-center text-center text-white'>
            <div className='flex justify-between'>
              <SpeakerCard speaker={speakers.SeanMonteiro}/>
              <SpeakerCard speaker={speakers.ChloeBeisheim}/>
            </div>
          </div>
          <div className='h-[410px] flex justify-center text-center text-white'>
            <div className='flex justify-between'>
              <SpeakerCard speaker={speakers.MalcomEade}/>
              <SpeakerCard speaker={speakers.JimMcLennan}/>
            </div>
          </div>
        </Carousel>
      </div>


      <div className='block sm:hidden'>
        <Carousel showStatus={false}>
          <div className=' h-[410px] flex justify-center text-center text-white'>
            <div className='flex justify-between'>
              <SpeakerCard speaker={speakers.DanDesjardins}/>
            </div>
          </div>
          <div className=' h-[410px] flex justify-center text-center text-white'>
            <div className='flex justify-between'>
              <SpeakerCard speaker={speakers.MinamiAlguire}/>
            </div>
          </div>
          <div className=' h-[410px] flex justify-center text-center text-white'>
            <div className='flex justify-between'>
              <SpeakerCard speaker={speakers.SeanMonteiro}/>
            </div>
          </div>
          <div className=' h-[410px] flex justify-center text-center text-white'>
            <div className='flex justify-between'>
              <SpeakerCard speaker={speakers.ChloeBeisheim}/>
            </div>
          </div>
          <div className=' h-[410px] flex justify-center text-center text-white'>
            <div className='flex justify-between'>
              <SpeakerCard speaker={speakers.MalcomEade}/>
            </div>
          </div>
          <div className='h-[410px] flex justify-center text-center text-white'>
            <div className='flex justify-between'>
              <SpeakerCard speaker={speakers.JimMcLennan}/>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
    
  );
};

export default SpeakerCarousel;
