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
              const [isExpanded1, setIsExpanded1] = useState(false);
              const [isExpanded2, setIsExpanded2] = useState(false);
              const [isExpanded3, setIsExpanded3] = useState(false);
              return (
                <div key={index} className='h-[500px] flex justify-center text-center text-white '>
                  <div className='flex justify-center gap-8 w-full'>
                    
                    {/* Card 1 */}
                    <div className={`w-1/3 flex flex-col items-center justify-center bg-[#111827] rounded-lg`}>
                      <div className={`flex w-full items-center justify-center ${isExpanded1 ? 'flex-row' : 'flex-col'}`}>
                        <div className={`${isExpanded1 ? 'w-16 h-16 pt-0 m-2' : 'w-32 h-32 pt-4'} rounded-lg`}><img src={mentors[num].image} alt={`${mentors[num].name}`} className='rounded-full'/></div>
                        <h2 className={`text-white font-bold text-2xl ${isExpanded1 ? 'pt-0' : 'pt-4'}`}>{mentors[num].name}</h2>
                      </div>
                      
                      {
                        !isExpanded1 && 
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
                      }
                      <div>
                        {
                          mentors[num].bio && mentors[num].bio.length > 0 && 
                          <>
                            <p className={`text-white text-sm ${isExpanded1 ? 'py-2' : 'py-4'} px-4 text-center`}>
                              {isExpanded1 ? mentors[num+1].bio : `${mentors[num+1].bio.substring(0, 300)}...`}
                            </p>
                            <button onClick={() => setIsExpanded1(!isExpanded1)} className='text-blue-500'>
                              {isExpanded1 ? 'Read Less' : 'Read More'}
                            </button>
                          </>
                        }
                      </div>
                    </div>

                    {/* Card 2 */}
                    {mentors[num+1] ? 
                      <div className={`w-1/3 flex flex-col items-center justify-center bg-[#111827] rounded-lg`}>
                        <div className={`flex w-full items-center justify-center ${isExpanded2 ? 'flex-row' : 'flex-col'}`}>
                          <div className={`${isExpanded2 ? 'w-16 h-16 pt-0 m-2' : 'w-32 h-32 pt-4'} rounded-lg`}><img src={mentors[num+1].image} alt={`${mentors[num+1].name}`} className='rounded-full'/></div>
                          <h2 className={`text-white font-bold text-2xl ${isExpanded2 ? 'pt-0' : 'pt-4'}`}>{mentors[num+1].name}</h2>
                        </div>
                        
                        {
                          !isExpanded2 && 
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
                        }
                      <div>
                        {
                          mentors[num+1].bio && mentors[num+1].bio.length > 0 && 
                          <>
                            <p className={`text-white text-sm ${isExpanded2 ? 'py-2' : 'py-4'} px-4 text-center`}>
                              {isExpanded2 ? mentors[num+1].bio : `${mentors[num+1].bio.substring(0, 300)}...`}
                            </p>
                            <button onClick={() => setIsExpanded2(!isExpanded2)} className='text-blue-500'>
                              {isExpanded2 ? 'Read Less' : 'Read More'}
                            </button>
                          </>
                        }
                      </div>
                    </div>
                      :
                      <></>
                    }

                    {/* Card 3 */}
                    {mentors[num+2] ? 
                      <div className={`w-1/3 flex flex-col items-center justify-center bg-[#111827] rounded-lg`}>
                        <div className={`flex w-full items-center justify-center ${isExpanded3 ? 'flex-row' : 'flex-col'}`}>
                          <div className={`${isExpanded3 ? 'w-16 h-16 pt-0 m-2' : 'w-32 h-32 pt-4'} rounded-lg`}><img src={mentors[num+2].image} alt={`${mentors[num+2].name}`} className='rounded-full'/></div>
                          <h2 className={`text-white font-bold text-2xl ${isExpanded3 ? 'pt-0' : 'pt-4'}`}>{mentors[num+2].name}</h2>
                        </div>
                        
                        {
                          !isExpanded3 && 
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
                        }
                      <div>
                        {
                          mentors[num+2].bio && mentors[num+2].bio.length > 0 && 
                          <>
                            <p className={`text-white text-sm ${isExpanded3 ? 'py-2' : 'py-4'} px-4 text-center`}>
                              {isExpanded3 ? mentors[num+2].bio : `${mentors[num+2].bio.substring(0, 300)}...`}
                            </p>
                            <button onClick={() => setIsExpanded3(!isExpanded3)} className='text-blue-500'>
                              {isExpanded3 ? 'Read Less' : 'Read More'}
                            </button>
                          </>
                        }
                      </div>
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
              const [isExpanded1, setIsExpanded1] = useState(false);
              const [isExpanded2, setIsExpanded2] = useState(false);
              return (
                <div key={index} className='h-[575px] flex justify-center text-center text-white '>
                  <div className='flex justify-center gap-8 w-full'>
                    
                    {/* Card 1 */}
                    <div className={`w-1/2 flex flex-col items-center justify-center bg-[#111827] rounded-lg`}>
                      <div className={`flex w-full items-center justify-center ${isExpanded1 ? 'flex-row' : 'flex-col'}`}>
                        <div className={`${isExpanded1 ? 'w-16 h-16 pt-0 m-2' : 'w-32 h-32 pt-4'} rounded-lg`}><img src={mentors[num].image} alt={`${mentors[num].name}`} className='rounded-full'/></div>
                        <h2 className={`text-white font-bold text-2xl ${isExpanded1 ? 'pt-0' : 'pt-4'}`}>{mentors[num].name}</h2>
                      </div>
                      
                      {
                        !isExpanded1 && 
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
                      }
                      <div>
                        {
                          mentors[num].bio && mentors[num].bio.length > 0 && 
                          <>
                            <p className={`text-white text-xs ${isExpanded1 ? 'py-2' : 'py-4'} px-4 text-center`}>
                              {isExpanded1 ? mentors[num].bio : `${mentors[num].bio.substring(0, 300)}...`}
                            </p>
                            <button onClick={() => setIsExpanded1(!isExpanded1)} className='text-blue-500'>
                              {isExpanded1 ? 'Read Less' : 'Read More'}
                            </button>
                          </>
                        }
                      </div>
                    </div>

                    {/* Card 2 */}
                    {mentors[num+1] ? 
                      <div className={`w-1/2 flex flex-col items-center justify-center bg-[#111827] rounded-lg`}>
                        <div className={`flex w-full items-center justify-center ${isExpanded2 ? 'flex-row' : 'flex-col'}`}>
                          <div className={`${isExpanded2 ? 'w-16 h-16 pt-0 m-2' : 'w-32 h-32 pt-4'} rounded-lg`}><img src={mentors[num+1].image} alt={`${mentors[num+1].name}`} className='rounded-full'/></div>
                          <h2 className={`text-white font-bold text-2xl ${isExpanded2 ? 'pt-0' : 'pt-4'}`}>{mentors[num+1].name}</h2>
                        </div>
                        
                        {
                          !isExpanded2 && 
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
                        }
                      <div>
                        {
                          mentors[num+1].bio && mentors[num+1].bio.length > 0 && 
                          <>
                            <p className={`text-white text-xs ${isExpanded2 ? 'py-2' : 'py-4'} px-4 text-center`}>
                              {isExpanded2 ? mentors[num+1].bio : `${mentors[num+1].bio.substring(0, 300)}...`}
                            </p>
                            <button onClick={() => setIsExpanded2(!isExpanded2)} className='text-blue-500'>
                              {isExpanded2 ? 'Read Less' : 'Read More'}
                            </button>
                          </>
                        }
                      </div>
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
              const [isExpanded1, setIsExpanded1] = useState(false);
              return (
                <div key={index} className='h-[575px] flex justify-center text-center text-white '>
                  <div className='flex justify-center gap-8 w-full'>
                    
                    {/* Card 1 */}
                    {num ? 
                    <div className={`w-[90%] flex flex-col items-center justify-center bg-[#111827] rounded-lg`}>
                      <div className={`flex w-full items-center justify-center ${isExpanded1 ? 'flex-row' : 'flex-col'}`}>
                        <div className={`${isExpanded1 ? 'w-16 h-16 pt-0 m-2' : 'w-32 h-32 pt-4'} rounded-lg`}>
                          <img src={num.image} alt={`${num.name}`} className='rounded-full'/>
                        </div>
                        <h2 className={`text-white font-bold text-2xl ${isExpanded1 ? 'pt-0' : 'pt-4'}`}>{num.name}</h2>       
                      </div>
                      
                      {
                        !isExpanded1 && 
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
                      }
                      <div>
                        {
                          num.bio && num.bio.length > 0 && 
                          <>
                            <p className={`text-white text-xs ${isExpanded1 ? 'py-2' : 'py-4'} px-4 text-center`}>
                              {isExpanded1 ? num.bio : `${num.bio.substring(0, 300)}...`}
                            </p>
                            <button onClick={() => setIsExpanded1(!isExpanded1)} className='text-blue-500'>
                              {isExpanded1 ? 'Read Less' : 'Read More'}
                            </button>
                          </>
                        }
                      </div>
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
    </div>
    
  );
}

export default MentorCarousel;
