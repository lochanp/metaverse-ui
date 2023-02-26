'use client';
import {motion} from 'framer-motion';
import styles from '@/styles';
import { staggerContainer,fadeIn } from '@/utils/motion';
import { TitleText, TypingText } from '@/components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div className={`${styles.innerWidth} mx-auto flex flex-col`} 
    variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once :false, amount :0.25}}>
      <TypingText title='| People on the world' textStyles='text-center' />
      <TitleText title={<>
          Track friends around you and invite them to play together in the same world
      </>} textStyles='text-center' />
      <motion.div variants={fadeIn('up','tween',0.3,1)} 
      className='relative mt-[68px] flex w-full h-[550px]'>
        <img src='/map.png' className='w-full h-full object-cover'></img>
        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-01.png' className='w-full h-full'></img>
        </div>
        <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-02.png' className='w-full h-full'></img>
        </div>
        <div className='absolute top-20 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-03.png' className='w-full h-full'></img>
        </div>
      </motion.div>
  </motion.div>
  </section>
);

export default World;
