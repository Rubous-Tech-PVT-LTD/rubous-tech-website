import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AIBadge = ({ text = "AI Engine Active", className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-semibold mb-6 ${className}`}
    >
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </div>
      <Sparkles size={14} />
      {text}
    </motion.div>
  );
};

export default AIBadge;
