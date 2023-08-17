'use client';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import speakers from 'data/speaker.json';

const SpeakerCarousel = () => {
  return (
    // MASTER DIV
    <div>
      {/* THIS IS FOR LARGER SCREEN SIZE  -  3 images */}
      <div className='hidden lg:block'>
        <Carousel showStatus={false} showArrows={false} showThumbs={false}>
          {
            speakers.map((speaker, index) => {
              return (
                <div key={index} className='h-[410px] flex justify-center text-center text-white'>
                  <div className='flex justify-between'>
                    <div className="w-{375} mx-4">
                      <img src={speaker.image} alt={`${speaker.name}`}/>
                      <h2 className='text-white'>{speaker.name}</h2>
                      <h5 className='text-white'>{speaker.title}</h5>
                    </div>
                    <div className="w-{375} mx-4">
                      <img src={speaker.image} alt={`${speaker.name}`}/>
                      <h2 className='text-white'>{speaker.name}</h2>
                      <h5 className='text-white'>{speaker.title}</h5>
                    </div>
                    <div className="w-{375} mx-4">
                      <img src={speaker.image} alt={`${speaker.name}`}/>
                      <h2 className='text-white'>{speaker.name}</h2>
                      <h5 className='text-white'>{speaker.title}</h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Carousel>
      </div>

      {/* THIS IS FOR MEDIUM SCREEN SIZE  -  2 images */}
      <div className='hidden sm:block lg:hidden '>
      <Carousel showStatus={false} showArrows={false} showThumbs={false}>
          {
            speakers.map((speaker, index) => {
              return (
                <div key={index} className=' h-[410px] flex justify-center text-center text-white'>
                  <div className='flex justify-between'>
                    <div className="w-{375} mx-4">
                      <img src={speaker.image} alt={`${speaker.name}`}/>
                      <h2 className='text-white'>{speaker.name}</h2>
                      <h5 className='text-white'>{speaker.title}</h5>
                    </div>
                    <div className="w-{375} mx-4">
                      <img src={speaker.image} alt={`${speaker.name}`}/>
                      <h2 className='text-white'>{speaker.name}</h2>
                      <h5 className='text-white'>{speaker.title}</h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Carousel>
      </div>

      {/* THIS IS FOR SMALL SCREEN SIZE  -  1 image */}
      <div className='block sm:hidden'>
      <Carousel showStatus={false} showArrows={false} showThumbs={false}>
          {
            speakers.map((speaker, index) => {
              return (
                <div key={index} className=' h-[410px] flex justify-center text-center text-white'>
                  <div className='flex justify-between'>
                    <div className="w-{375} mx-4">
                      <img src={speaker.image} alt={`${speaker.name}`}/>
                      <h2 className='text-white'>{speaker.name}</h2>
                      <h5 className='text-white'>{speaker.title}</h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </div>
    
  );
};

export default SpeakerCarousel;
