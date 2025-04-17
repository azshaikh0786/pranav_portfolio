'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FileAudio2, Laptop} from 'lucide-react';
import Image from 'next/image';

const Avatar3D = () => {
  return (
    <div className="relative w-[450px] h-[450px] flex items-center justify-center">
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        className="z-10 w-[450px] h-[450px] rounded-full overflow-hidden shadow-lg dark:shadow-xl dark:shadow-blue-500/20"
      >
        <Image 
          src="/image1.jpg" 
          alt="Avatar" 
          width={450}
          height={400}
          className="w-90% h-90% object-cover"
        />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          x: [-5, 5, -5]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0"
      >
        <FileAudio2 className="w-10 h-10 text-blue-500 dark:text-blue-300" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [10, -10, 10],
          x: [5, -5, 5]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0"
      >
        <Laptop className="w-10 h-10 text-green-500 dark:text-green-300" />
      </motion.div>
    </div>
  );
};

export default Avatar3D;