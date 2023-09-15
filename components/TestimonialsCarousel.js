'use client';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import testimonials from 'data/testimonial.json';

let numoftest = [];
let numinrow = 2;

for (let i=0; i < testimonials.length; i += numinrow)  {
  numoftest.push(i);
}

const TestimonialsCarousel = () => {
  return (
    <div className=''>
      {/* THIS IS FOR LARGER SCREEN SIZE  -  2 images */}
      <div className='p-3 hidden lg:block '>
        <Carousel showStatus={false} showArrows={true} showThumbs={false}>
        {
          numoftest.map((num, index) => {
            return (
              <div key={index}>
                <div className='h-96 flex justify-center items-center'>
                  <div className="rounded-xl w-[500px] h-[350px] m-5 bg-gray-900 ">
                    <div className="flex flex-row px-4 pt-4">
                      <div className="aspect-w-1 aspect-h-1">
                        <img src={testimonials[num].image} alt={`${testimonials[num].name}`} width={500} height={500} className='w-24 h-24 rounded-full'/>
                      </div>
                      <div className='flex flex-col ml-8 justify-center'>
                        <h5 className="mb-1 text-2xl font-bold text-white text-left">{testimonials[num].name}</h5>
                        <span className="text-lg text-white text-left">{testimonials[num].team}</span>
                      </div>
                    </div>
                    <div className="flex mt-2 mx-6 text-gray-300 text-left text-[17px]">{testimonials[num].text}</div>
                  </div>
                  <div className="rounded-xl w-[500px] h-[350px] m-5 bg-gray-900">
                    <div className="flex flex-row px-4 pt-4">
                      <div className="aspect-w-1 aspect-h-1">
                        <img src={testimonials[num+1].image} alt={`${testimonials[num+1].name}`} width={500} height={500} className='w-24 h-24 rounded-full'/>
                      </div>
                      <div className='flex flex-col ml-8 justify-center'>
                        <h5 className="mb-1 text-2xl font-bold text-white text-left">{testimonials[num+1].name}</h5>
                        <span className="text-lg text-white text-left">{testimonials[num+1].team}</span>
                      </div>
                    </div>
                    <div className="flex mt-2 mx-6 text-gray-300 text-left text-[17px]">{testimonials[num+1].text}</div>
                  </div>
                </div>
              </div>
            )
          })
        }
        </Carousel>
      </div>

      {/* THIS IS FOR MEDIUM SCREEN SIZE  -  1 image */}
      <div className='p-3 lg:hidden'>
        <Carousel showStatus={false} showArrows={false} showThumbs={false}>
          {
            testimonials.map((testimonial, index) => {
              return (
                <div key={index}>
                  <div className='flex justify-center'>
                    <div className="rounded-xl w-[90%] h-[350px] sm:w-[500px] sm:h-[350px] m-5 bg-gray-900">
                      <div className="flex flex-row px-4 pt-4">
                        <div className="">
                          <img src={testimonial.image} alt={`${testimonial.name}`} className='w-16 h-16 sm:w-24 sm:h-24 rounded-full'/>
                        </div>
                        <div className='flex flex-col ml-8 justify-center'>
                          <h5 className="mb-1 text-md sm:text-xl font-bold text-white text-left">{testimonial.name}</h5>
                          <span className="text-sm text-white text-left">{testimonial.team}</span>
                        </div>
                      </div>
                      <div className="flex m-3 xs:leading-5 xs:m-6 text-gray-300 text-left text-sm xs:text-[20px]">{testimonial.text}</div>
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

export default TestimonialsCarousel;
