'use client';

import React from 'react';
import SpeakerCard from './SpeakerCard';
import { useState } from "react"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TestimonialsCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Greg Wang',
    team: 'Beat Party',
    image: '/testimonials/Greg Wang.png',
    testimonial: "Qhacks was a great experience that taught me a lot about how to stay productive whilst under a time limit. I had a fun time and was proud of the project our group created in just 48 hours.",
  },
  {
    name: 'Jordan Curnew',
    team: 'Parallel Fourier Computing',
    image: '/testimonials/Jordan Curnew.png',
    testimonial: "QHacks provided an exciting opportunity to put the skills I’ve learned in school to the test and network with industry professionals (which led to a job offer!). My team built an application for computing Fourier Transforms utilizing parallel processing on a distributed network – I never thought I’d be able to make something like that in 36 hours!",
  },
  {
    name: 'Amy Lu',
    team: 'Reeltube',
    image: '/testimonials/Amy Lu.png',
    testimonial: "In high school, I’d never opened a single computer science course brochure, and now I will be an incoming graduate student in machine learning. QHacks gave me a taster of what tech really was - a creative endeavour with technical tools as the paint brush, and societal-level solution pitching as the frame.",
  },
  {
    name: 'Cooper Leong',
    team: 'ESPECT',
    image: '/testimonials/Cooper Leong.png',
    testimonial: "Events such as QHacks have allowed me to delve into topics without fear. I used to find it time consuming and intimidating to learn enough to feel confident about a topic, but now I can tackle it head on. It has been just under a year since my first hackathon, and I can say that it has changed my life for the best, and I look forward to participating in many more!",
  },
  {
    name: 'Benjamin Beggs',
    team: 'Parallel Fourier Computing',
    image: '/testimonials/Benjamin Beggs.png',
    testimonial: "QHacks 2021 gave me the opportunity to showcase my problem-solving and creativity in a team setting while working on the Parallel Fourier Computing project. The hackathon is also filled with great networking and knowledge building sessions which make this 36-hour event a deeply enriching and valuable experience.",
  },
  {
    name: 'Jacob Laframboise',
    team: 'No Spoiling!',
    image: '/testimonials/Jacob Laframboise.png',
    testimonial: "QHacks was an exciting environment to learn and code in, and I really enjoyed the challenge. The sponsors were really cool and the event was a lot of fun!",
  },
]

const TestimonialsCarousel = () => {
  return (
    <div className='p-8'>
      <Carousel className='w-'>
        <div className='w-100 h-96 flex justify-center text-center text-white'>
          <div className='flex '>
            <TestimonialsCard speaker={testimonials[0]}/>
            <TestimonialsCard speaker={testimonials[1]}/>
            <TestimonialsCard speaker={testimonials[2]}/>
          </div>
        </div>
        <div className='w-100 h-96 flex justify-center text-center text-white'>
          <div className='flex justify-between'>
            <TestimonialsCard speaker={testimonials[3]}/>
            <TestimonialsCard speaker={testimonials[4]}/>
            <TestimonialsCard speaker={testimonials[5]}/>
          </div>
        </div>
      </Carousel>
    </div>
    
  );
};

export default TestimonialsCarousel;
