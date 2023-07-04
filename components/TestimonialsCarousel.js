'use client';
import React from 'react';
import TestimonialsCard from './TestimonialCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import testimonials from 'data/testimonial.json';

const TestimonialsCarousel = () => {
  return (
    <div>
      <div className='p-3 hidden lg:block'>
        <Carousel showStatus={false}>
          <div className='h-96 flex justify-center items-center'>
              <TestimonialsCard speaker={testimonials.GregWang}/>
              <TestimonialsCard speaker={testimonials.JordanCurnew}/>
          </div>
          <div className='h-96 flex justify-center items-center'>
            <TestimonialsCard speaker={testimonials.AmyLu}/>
            <TestimonialsCard speaker={testimonials.CooperLeong}/>
          </div>
          <div className='h-96 flex justify-center items-center'>
            <TestimonialsCard speaker={testimonials.BenjaminBeggs}/>
            <TestimonialsCard speaker={testimonials.JacobLaframboise}/>
          </div>
        </Carousel>
      </div>

      <div className='p-3 lg:hidden'>
        <Carousel showStatus={false}>
          <div className='h-96 flex justify-center'>
              <TestimonialsCard speaker={testimonials.GregWang}/>
          </div>
          <div className='h-96 flex justify-center'>
            <TestimonialsCard speaker={testimonials.JordanCurnew}/>
          </div>
          <div className='h-96 flex justify-center'>
            <TestimonialsCard speaker={testimonials.AmyLu}/>
          </div>
          <div className='h-96 flex justify-center'>
              <TestimonialsCard speaker={testimonials.CooperLeong}/>
          </div>
          <div className='h-96 flex justify-center'>
            <TestimonialsCard speaker={testimonials.BenjaminBeggs}/>
          </div>
          <div className='h-96 flex justify-center'>
            <TestimonialsCard speaker={testimonials.JacobLaframboise}/>
          </div>
        </Carousel>
      </div>
    </div>
    
  );
};

export default TestimonialsCarousel;
