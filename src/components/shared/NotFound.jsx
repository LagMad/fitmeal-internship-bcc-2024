import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
    const rainbowColors = [
        '#ff0000', '#ff3300', '#ff6600', '#ff9900', '#ffcc00', '#ffff00', '#ccff00', '#99ff00', '#66ff00', '#33ff00',
        '#00ff00', '#00ff33', '#00ff66', '#00ff99', '#00ffcc', '#00ffff', '#00ccff', '#0099ff', '#0066ff', '#0033ff',
        '#0000ff', '#3300ff', '#6600ff', '#9900ff', '#cc00ff', '#ff00ff', '#ff00cc', '#ff0099', '#ff0066', '#ff0033',
        '#ff0000', '#ff3300', '#ff6600', '#ff9900', '#ffcc00', '#ffff00', '#ccff00', '#99ff00', '#66ff00', '#33ff00',
        '#00ff00', '#00ff33', '#00ff66', '#00ff99', '#00ffcc', '#00ffff', '#00ccff', '#0099ff', '#0066ff', '#0033ff',
    ];

    return (
        <div className='flex flex-col  font-poppins font-bold text-center justify-center items-center gap-10 bg-not-found bg-no-repeat bg-cover bg-center'>
            <motion.div 
                className='text-sm sm:text-2xl bg-black backdrop-blur-sm bg-opacity-30 py-10 px sm:px-20 heartbeat rainbow-text'
                initial={{ scale: 1, color: rainbowColors[0] }}
                animate={{ scale: [1, 0.9, 1], color: rainbowColors }}
                transition={{ duration: 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1]}}
            >
                <div className='text-7xl sm:text-9xl'>
                    COMING SOON!!!1111
                </div>   
                kamingsun kamingsun kamingsun kamingsun kamingsun kamingsun kamingsun kamingsun 
            </motion.div>
        </div>
    );
}

export default NotFound;
