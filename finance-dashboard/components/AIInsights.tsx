'use client';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { aiInsights } from '@/lib/data';

export default function AIInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 mb-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-cyan-400" size={24} />
        <h3 className="text-xl font-bold text-gradient">AI Insights</h3>
      </div>

      <div className="space-y-3">
        {aiInsights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
          >
            <p className="text-white text-sm">{insight}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
