'use client';
import { Home, BarChart3, Receipt, CreditCard, Users, Settings, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'receipts', label: 'Receipts', icon: Receipt },
    { id: 'cards', label: 'Cards', icon: CreditCard },
    { id: 'splitwise', label: 'Splitwise', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 h-screen glass-card m-4 p-6 flex flex-col"
    >
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="text-cyan-400" size={32} />
        <h1 className="text-2xl font-bold text-gradient">FinAI</h1>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className={'w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ' + (isActive ? 'bg-gradient-to-r from-cyan-500/20 to-mint-500/20 border-l-4 border-cyan-400' : 'hover:bg-white/5')}
            >
              <Icon size={20} className={isActive ? 'text-cyan-400' : 'text-gray-400'} />
              <span className={isActive ? 'text-cyan-100' : 'text-gray-400'}>{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      <div className="mt-auto p-4 glass-card bg-gradient-to-br from-cyan-500/10 to-mint-500/10">
        <p className="text-xs text-gray-400 mb-1">AI Assistant Active</p>
        <p className="text-sm text-cyan-300 font-semibold">Ask me anything!</p>
      </div>
    </motion.div>
  );
}
