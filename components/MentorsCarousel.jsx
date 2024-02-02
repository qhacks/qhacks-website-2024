'use client';
import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import mentorslist from '../data/mentors.json';
import { motion, AnimatePresence } from 'framer-motion';


const MentorCarousel = () => {
  let mentors = mentorslist.mentors2024;

  let numofmentors1 = [];
  let numofmentors2 = [];
  let numinrow1 = 3;
  let numinrow2 = 2;

  for (let i=0; i < mentors.length; i += numinrow1)  {
    numofmentors1.push(i);
  }

  for (let i=0; i < mentors.length; i += numinrow2)  {
    numofmentors2.push(i);
  }

  return (
    // MASTER DIV
    <div>
      {/* THIS IS FOR LARGER SCREEN SIZE  -  3 images */}
      <div className='hidden lg:block'>
        <Carousel showStatus={false} showArrows={true} showThumbs={false}>
          {
            numofmentors1.map((num, index) => {
              return (
                <div key={index} className='h-[400px] flex justify-center text-center text-white'>
                  <div className='flex justify-center gap-8 w-full'>
                    
                    {/* Card 1 */}
                    <div className={`w-1/3 flex flex-col items-center pt-20 bg-[#111827] rounded-lg`}>
                      <div className={`flex w-full items-center justify-center flex-col mb-1`}>
                        <div className={`w-16 h-16 pt-0 m-2 rounded-lg`}>
                          <img src={mentors[num].image} alt={`${mentors[num].name}`} className='rounded-full'/>
                        </div>
                        <h2 className={`text-white font-bold text-2xl pt-0`}>{mentors[num].name}</h2>
                        <h4 className={`text-white font-medium text-sm`}>{mentors[num].company}</h4>
                      </div>
                      <motion.div 
                        className={`flex flex-row flex-wrap items-center justify-center`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                      >
                        {
                          mentors[num].areas && mentors[num].areas.length > 0 && mentors[num].areas.map((area, index) => {
                            return (
                              <motion.div 
                                key={index} 
                                className='text-white font-medium m-1 px-2 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-sm rounded-full'
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.5 }}  
                              >{area}</motion.div>
                            )
                          })
                        }
                      </motion.div>
                    </div>

                    {/* Card 2 */}
                    {mentors[num+1] ? 
                      <div className={`w-1/3 flex flex-col items-center pt-20 bg-[#111827] rounded-lg`}>
                        <div className={`flex w-full items-center justify-center flex-col mb-1`}>
                          <div className={`w-16 h-16 pt-0 m-2 rounded-lg`}>
                            <img src={mentors[num+1].image} alt={`${mentors[num+1].name}`} className='rounded-full'/>
                          </div>
                          <h2 className={`text-white font-bold text-2xl pt-0`}>{mentors[num+1].name}</h2>
                          <h4 className={`text-white font-medium text-sm`}>{mentors[num+1].company}</h4>
                        </div>
                      <motion.div 
                        className={`flex flex-row flex-wrap items-center justify-center`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                      >
                        {
                          mentors[num+1].areas && mentors[num+1].areas.length > 0 && mentors[num+1].areas.map((area, index) => {
                            return (
                              <motion.div 
                                key={index} 
                                className='text-white font-medium m-1 px-2 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-sm rounded-full'
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.5 }}  
                              >{area}</motion.div>
                            )
                          })
                        }
                      </motion.div>
                    </div>
                    :
                    <></>
                    }

                    {/* Card 3 */}
                    {mentors[num+2] ? 
                      <div className={`w-1/3 flex flex-col items-center pt-20 bg-[#111827] rounded-lg`}>
                        <div className={`flex w-full items-center justify-center flex-col mb-1`}>
                          <div className={`w-16 h-16 pt-0 m-2 rounded-lg`}>
                            <img src={mentors[num+2].image} alt={`${mentors[num+2].name}`} className='rounded-full'/>
                          </div>
                          <h2 className={`text-white font-bold text-2xl pt-0`}>{mentors[num+2].name}</h2>
                          <h4 className={`text-gray-300 font-medium text-sm`}>{mentors[num+2].company}</h4>
                        </div>
                        <motion.div 
                          className={`flex flex-row flex-wrap items-center justify-center`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                        >
                          {
                            mentors[num+2].areas && mentors[num+2].areas.length > 0 && mentors[num+2].areas.map((area, index) => {
                              return (
                                <motion.div 
                                  key={index} 
                                  className='text-white font-medium m-1 px-2 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-sm rounded-full'
                                  initial={{ y: -10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -10, opacity: 0 }}
                                  transition={{ duration: 0.5 }}  
                                >{area}</motion.div>
                              )
                            })
                          }
                        </motion.div>
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
            numofmentors2.map((num, index) => {
              return (
                <div key={index} className='h-[400px] flex justify-center text-center text-white '>
                  <div className='flex justify-center gap-8 w-full'>
                    
                    {/* Card 1 */}
                    <div className={`w-1/2 flex flex-col items-center pt-20 bg-[#111827] rounded-lg`}>
                      <div className={`flex w-full items-center justify-center flex-col mb-1`}>
                        <div className={`w-16 h-16 pt-0 m-2 rounded-lg`}>
                          <img src={mentors[num].image} alt={`${mentors[num].name}`} className='rounded-full'/>
                        </div>
                        <h2 className={`text-white font-bold text-2xl pt-0`}>{mentors[num].name}</h2>
                        <h4 className={`text-white font-medium text-sm`}>{mentors[num].company}</h4>
                      </div>
                      
                    
                        <motion.div 
                          className={`flex flex-row flex-wrap items-center justify-center`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                        >
                          {
                            mentors[num].areas && mentors[num].areas.length > 0 && mentors[num].areas.map((area, index) => {
                              return (
                                <motion.div 
                                  key={index} 
                                  className='text-white font-medium m-1 px-2 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-sm rounded-full'
                                  initial={{ y: -10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -10, opacity: 0 }}
                                  transition={{ duration: 0.5 }}  
                                >{area}</motion.div>
                              )
                            })
                          }
                        </motion.div>
                    </div>

                    {/* Card 2 */}
                    {mentors[num+1] ? 
                      <div className={`w-1/2 flex flex-col items-center pt-20 bg-[#111827] rounded-lg`}>
                        <div className={`flex w-full items-center justify-center flex-col mb-1`}>
                          <div className={`w-16 h-16 pt-0 m-2 rounded-lg`}>
                            <img src={mentors[num+1].image} alt={`${mentors[num+1].name}`} className='rounded-full'/>
                          </div>
                          <h2 className={`text-white font-bold text-2xl pt-0`}>{mentors[num+1].name}</h2>
                          <h4 className={`text-white font-medium text-sm`}>{mentors[num+1].company}</h4>
                        </div>
                        <motion.div 
                          className={`flex flex-row flex-wrap items-center justify-center`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                        >
                          {
                            mentors[num+1].areas && mentors[num+1].areas.length > 0 && mentors[num+1].areas.map((area, index) => {
                              return (
                                <motion.div 
                                  key={index} 
                                  className='text-white font-medium m-1 px-2 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-sm rounded-full'
                                  initial={{ y: -10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -10, opacity: 0 }}
                                  transition={{ duration: 0.5 }}  
                                >{area}</motion.div>
                              )
                            })
                          }
                        </motion.div>
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
            mentors.map((num, index) => {
              return (
                <div key={index} className='h-[400px] flex justify-center text-center text-white '>
                  <div className='flex justify-center gap-8 w-full'>
                    
                    {/* Card 1 */}
                    <div className={`w-[90%] flex flex-col items-center p-20 bg-[#111827] rounded-lg`}>
                      <div className={`flex w-full items-center justify-center flex-col mb-1`}>
                        <div className={`w-16 h-16 pt-0 m-2 rounded-lg`}>
                          <img src={num.image} alt={`${num.name}`} className='rounded-full'/>
                        </div>
                        <h2 className={`text-white font-bold text-2xl pt-0`}>{num.name}</h2>
                        <h4 className={`text-white font-medium text-sm`}>{num.company}</h4>
                      </div>
                      
                      
                        <motion.div 
                          className={`flex flex-row flex-wrap items-center justify-center`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                        >
                          {
                            num.areas && num.areas.length > 0 && num.areas.map((area, index) => {
                              return (
                                <motion.div 
                                  key={index} 
                                  className='text-white font-medium m-1 px-2 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-sm rounded-full'
                                  initial={{ y: -10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -10, opacity: 0 }}
                                  transition={{ duration: 0.5 }}  
                                >{area}</motion.div>
                              )
                            })
                          }
                        </motion.div>
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
}

export default MentorCarousel;
