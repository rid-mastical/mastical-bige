import React from 'react';
import { motion } from 'framer-motion';

const products = [{
  image: '/s1.png'
}, {
  image: '/s2.png'
}, {
  image: '/s3.png'
}, {
  image: '/s4.png'
}];

export function Social() {
  return <motion.section 
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="py-16 bg-white flex items-center justify-center"
  >
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold mb-2 text-center"
        >
          Social Media
        </motion.h1>
        <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          href="https://www.instagram.com/thebigeretail/" 
          target="_blank" 
          className='hover:underline'
        >
          <p className="text-lg mb-8 text-center">Join Us</p>
        </motion.a>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.a 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              href="https://www.instagram.com/thebigeretail/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-2 relative">
                  <img src={product.image} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>;
}

