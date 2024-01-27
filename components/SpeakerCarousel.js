'use client';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SpeakerCarousel = (speakers) => {

  speakers = speakers.speakers;

  let numofspeakers1 = [];
  let numofspeakers2 = [];
  let numinrow1 = 3;
  let numinrow2 = 2;
  for (let i=0; i < speakers.length; i += numinrow1)  {
    numofspeakers1.push(i);
  }

  for (let i=0; i < speakers.length; i += numinrow2)  {
    numofspeakers2.push(i);
  }

  return (
    // MASTER DIV
    <div>
      {/* THIS IS FOR LARGER SCREEN SIZE  -  3 images */}
      <div className='hidden lg:block'>
        <Carousel showStatus={false} showArrows={true} showThumbs={false}>
          {
            numofspeakers1.map((num, index) => {
              return (
                <div key={index} className='h-[450px] flex justify-center text-center text-white'>
                  <div className='flex justify-center gap-8 w-full'>
                    <div className="w-[33%] flex flex-col h-full">
                      <img src={speakers[num].image} alt={`${speakers[num].name}`} className='h-[75%] w-full object-cover rounded-md'/>
                      <h2 className='text-white font-bold text-2xl'>{speakers[num].name}</h2>
                      <h5 className='text-white'>{speakers[num].title}</h5>
                    </div>
                    {speakers[num+1] ? 
                      <div className="w-[33%] flex flex-col h-full">
                        <img src={speakers[num+1].image} alt={`${speakers[num+1].name}`} className='h-[75%] w-full object-cover rounded-md'/>
                        <h2 className='text-white font-bold text-2xl'>{speakers[num+1].name}</h2>
                        <h5 className='text-white'>{speakers[num+1].title}</h5>
                      </div>
                      :
                      <></>
                    }
                    {speakers[num+2] ? 
                      <div className="w-[33%] flex flex-col h-full">
                        <img src={speakers[num+2].image} alt={`${speakers[num+2].name}`} className='h-[75%] w-full object-cover rounded-md'/>
                        <h2 className='text-white font-bold text-2xl'>{speakers[num+2].name}</h2>
                        <h5 className='text-white'>{speakers[num+2].title}</h5>
                      </div>
                      :
                      <></>
                    }
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
            numofspeakers2.map((num, index) => {
              return (
                <div key={index} className=' mb-8 h-[450px] flex justify-center text-center text-white'>
                  <div className='flex justify-center gap-[8px] w-full'>
                    <div className="w-[45%] mx-4 flex flex-col h-full">
                      <img src={speakers[num].image} alt={`${speakers[num].name}`} className='h-[75%] w-full object-cover rounded-md'/>
                      <h2 className='text-white font-bold text-2xl'>{speakers[num].name}</h2>
                      <h5 className='text-white'>{speakers[num].title}</h5>
                    </div>
                    {speakers[num+1] ? 
                      <div className="w-[45%] mx-4 flex flex-col h-full">
                        <img src={speakers[num + 1].image} alt={`${speakers[num + 1].name}`} className='h-[75%] w-full object-cover rounded-md'/>
                        <h2 className='text-white font-bold text-2xl'>{speakers[num + 1].name}</h2>
                        <h5 className='text-white'>{speakers[num + 1].title}</h5>
                      </div>
                      :
                      <></>
                    }
                    
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
                <div key={index} className=' mb-[20px] mx-4 h-[500px] flex flex-col text-center text-white'>
                  <img src={speaker.image} alt={`${speaker.name}`} className='rounded-md h-[80%] object-center object-cover'/>
                  <h2 className='text-white font-bold text-2xl'>{speaker.name}</h2>
                  <h5 className='text-white'>{speaker.title}</h5>
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
