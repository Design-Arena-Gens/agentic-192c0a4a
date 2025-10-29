'use client';
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';
import { mockCreditCards } from '@/lib/data';

export default function CreditCardsCarousel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-cyan-300 mb-6">Your Credit Cards</h3>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {mockCreditCards.map((card, index) => {
          const percentage = Math.min((card.balance / card.limit) * 100, 100);
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={'credit-card ' + card.gradient}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <CreditCard size={32} className="text-white/80" />
                  <span className="text-white/60 text-sm">VISA</span>
                </div>
                
                <div className="mb-6">
                  <p className="text-white/60 text-xs mb-1">Card Number</p>
                  <p className="text-white text-lg font-mono">•••• •••• •••• {card.last4}</p>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white/60 text-xs mb-1">Balance</p>
                    <p className="text-white text-xl font-bold">${card.balance.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-xs mb-1">{card.name}</p>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white/80 rounded-full transition-all"
                      style={{ width: percentage + '%' }}
                    />
                  </div>
                  <p className="text-white/60 text-xs mt-1">Limit: ${card.limit.toFixed(2)}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
