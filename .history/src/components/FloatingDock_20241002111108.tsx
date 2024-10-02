import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navlinks } from '@/constants/navlinks';
import { Tooltip } from '@/components/ui/tooltip';

export const FloatingDock = () => {
  return (
    <motion.div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-full shadow-lg p-2 flex md:hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {navlinks.map((link) => (
        <Tooltip key={link.href} content={link.label}>
          <Link href={link.href} className="p-2 hover:bg-gray-100 rounded-full">
            <link.icon className="w-6 h-6" />
          </Link>
        </Tooltip>
      ))}
    </motion.div>
  );
};