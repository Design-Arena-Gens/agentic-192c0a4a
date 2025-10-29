'use client';
import { motion } from 'framer-motion';
import { Wallet, TrendingDown, Brain, Plus } from 'lucide-react';

export default function OverviewCards() {
  const cards = [
    {
      title: 'Total Balance',
      amount: '$24,580.50',
      change: '+12.5%',
      icon: Wallet,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Monthly Spending',
      amount: '$3,920.00',
      change: '-8.2%',
      icon: TrendingDown,
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'AI Predicted Next Month',
      amount: '$4,150.00',
      change: '+5.9%',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-card p-6 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">{card.title}</p>
                <h3 className="text-3xl font-bold text-white">{card.amount}</h3>
              </div>
              <div className={'p-3 rounded-full bg-gradient-to-br ' + card.gradient}>
                <Icon size={24} className="text-white" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={card.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                {card.change}
              </span>
              <span className="text-gray-500 text-sm">vs last month</span>
            </div>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="glass-card p-6 cursor-pointer bg-gradient-to-br from-cyan-500/10 to-mint-500/10 border-2 border-dashed border-cyan-400/50"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="p-4 rounded-full bg-cyan-500/20 mb-3">
            <Plus size={32} className="text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Add Money</h3>
          <p className="text-gray-400 text-sm text-center">Top up your wallet instantly</p>
        </div>
      </motion.div>
    </div>
  );
}
