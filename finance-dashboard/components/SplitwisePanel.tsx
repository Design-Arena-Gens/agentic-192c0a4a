'use client';
import { motion } from 'framer-motion';
import { Users, TrendingUp, TrendingDown } from 'lucide-react';
import { mockSplitwise } from '@/lib/data';

export default function SplitwisePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 mb-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <Users className="text-cyan-400" size={28} />
        <h3 className="text-xl font-bold text-cyan-300">Splitwise Groups</h3>
      </div>

      <div className="space-y-4">
        {mockSplitwise.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-5 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-white">{group.groupName}</h4>
              <span className="text-gray-400 text-sm">{group.members.join(', ')}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-gray-400 text-xs mb-1">Total</p>
                <p className="text-white font-bold">${group.totalExpense}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs mb-1 flex items-center justify-center gap-1">
                  <TrendingDown size={12} className="text-red-400" />
                  You Owe
                </p>
                <p className="text-red-400 font-bold">${group.youOwe}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs mb-1 flex items-center justify-center gap-1">
                  <TrendingUp size={12} className="text-green-400" />
                  Owed to You
                </p>
                <p className="text-green-400 font-bold">${group.owedToYou}</p>
              </div>
            </div>

            {group.youOwe > 0 && (
              <div className="mt-3 p-2 rounded-lg bg-red-500/10 border border-red-500/30">
                <p className="text-red-400 text-xs text-center">
                  💡 AI Tip: Settle with {group.members[0]} using UPI to save on fees
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
