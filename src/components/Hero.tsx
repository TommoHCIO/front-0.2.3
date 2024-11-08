import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';
import { Incubator } from './Incubator';
import { Countdown } from './Countdown';
import { LearnMoreModal } from './LearnMoreModal';
import { Leaderboard } from './Leaderboard';

const rewards = [
  { amount: '+1 $CTE', action: 'per view', id: 'view' },
  { amount: '+2 $CTE', action: 'per like', id: 'like' },
  { amount: '+5 $CTE', action: 'per comment', id: 'comment' },
  { amount: '+10 $CTE', action: 'per repost', id: 'repost' },
];

export const Hero = () => {
  const navigate = useNavigate();
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const scrollToIncubator = () => {
    const incubatorElement = document.getElementById('incubator');
    if (incubatorElement) {
      incubatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8 px-4 md:px-8">
      <div className="bg-gradient-to-br from-[#1E2A37]/80 to-[#1E2A37]/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-white relative overflow-hidden border border-white/5 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB]/10 to-transparent" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex justify-center mb-6">
              <motion.div 
                className="bg-gradient-to-br from-[#7F56D9] to-[#2D9CDB] w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold relative shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CTE
                <div className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full shadow-md" />
                <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-white rounded-full shadow-md" />
              </motion.div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2D9CDB] to-[#7F56D9] bg-clip-text text-transparent">
              Chat to Earn
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The Future of Social Engagement
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              {rewards.map(({ amount, action, id }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#1E2A37] to-[#1E2A37]/80 rounded-xl p-6 border border-white/5 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-lg font-bold text-[#2D9CDB]">{amount}</div>
                  <div className="text-sm text-gray-400">{action}</div>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join our revolutionary platform where social engagement meets blockchain rewards.
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <Button 
                  variant="primary"
                  icon={ArrowRight}
                  className="bg-gradient-to-r from-[#2D9CDB] to-[#7F56D9] hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={scrollToIncubator}
                >
                  Get Started
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-[#2D9CDB] hover:bg-[#2D9CDB]/10 border border-[#2D9CDB]/20 hover:border-[#2D9CDB]/40"
                  onClick={() => setIsLearnMoreOpen(true)}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div id="incubator">
            <Incubator />
          </div>
          <Countdown />
        </div>
        <div className="lg:col-span-1">
          <Leaderboard />
        </div>
      </div>

      <LearnMoreModal
        isOpen={isLearnMoreOpen}
        onClose={() => setIsLearnMoreOpen(false)}
      />
    </div>
  );
};