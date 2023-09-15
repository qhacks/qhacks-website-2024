import React from 'react';
import { motion } from 'framer-motion';


const StatsSection = () => {
    return (
        <div className='py-4 w-full flex flex-wrap justify-center'>
          <motion.div 
            className='
            bg-blue-900 
            relative
            top-3
            flex 
            flex-col 
            items-center 
            justify-center 
            rounded-full 
            w-32 
            h-32 
            text-white 
            font-bold
            '
            whileHover={{scale: 1.5, margin: 14, y:-50}}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
          >
            <h1 className='text-4xl'>10</h1>
            <h5 className='text-center'>Workshops</h5>
          </motion.div>
          <motion.div 
            className='
              bg-red-600
              relative
              top-16
              flex 
              flex-col 
              items-center 
              justify-center 
              rounded-full 
              w-32 
              h-32 
              text-white 
              font-bold
            '
            whileHover={{scale: 1.4, margin: 14, y:50, x:-15}}
          >
            <h1 className='text-4xl'>11</h1>
            <h5 className='text-center'>Schools</h5>
          </motion.div>

          <motion.div 
            className='
              bg-yellow-600 
              relative
              top-8
              flex 
              flex-col 
              items-center 
              justify-center 
              rounded-full 
              w-44 
              h-44 
              text-white 
              font-bold
            '
            whileHover={{scale: 1.3, margin: 14,y:-60,x:15}}
          >
            <h1 className='text-4xl'>500+</h1>
            <h5 className='text-center'>Hackers</h5>
          </motion.div>

          <motion.div 
            className='
              bg-blue-900 
              relative
              top-24
              flex 
              flex-col 
              items-center 
              justify-center 
              rounded-full 
              w-32 
              h-32 
              text-white 
              font-bold
            '
            whileHover={{scale: 1.6, margin: 14, y:60}}
          >
            <h1 className='text-4xl'>25+</h1>
            <h5 className='text-center'>Mentors</h5>
          </motion.div>

          <motion.div 
            className='
              bg-red-600 
              relative
              top-14
              flex 
              flex-col 
              items-center 
              justify-center 
              rounded-full 
              w-40 
              h-40 
              text-white 
              font-bold
            '
            whileHover={{scale: 1.45, margin: 14, y:-90,x:-10}}
          >
            <h1 className='text-4xl'>200</h1>
            <h5 className='text-center'>Projects Sumbitted</h5>
          </motion.div>

          <motion.div 
            className='
              bg-blue-900 
              relative
              md:top-20
              top-32
              flex 
              flex-col 
              items-center 
              justify-center 
              rounded-full 
              w-32 
              h-32 
              text-white 
              font-bold'
              whileHover={{scale: 1.5, margin: 14, y:50, x:10}}
          >
            <h1 className='text-4xl'>10</h1>
            <h5 className='text-center'>Workshops</h5>
          </motion.div>
        </div>
    );
}

export default StatsSection;