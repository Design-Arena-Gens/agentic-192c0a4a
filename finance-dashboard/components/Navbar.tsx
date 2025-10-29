'use client';
import { Search, Bell, Moon, Sun, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass-card m-4 p-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <Search className="text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search transactions, receipts, or ask AI..."
          className="flex-1 bg-transparent border-none outline-none text-gray-200 placeholder-gray-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-white/10"
        >
          {darkMode ? <Sun className="text-cyan-400" size={20} /> : <Moon className="text-cyan-400" size={20} />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full hover:bg-white/10 relative"
        >
          <Bell className="text-gray-400" size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-mint-500"
        >
          <User size={20} className="text-white" />
        </motion.button>
      </div>
    </motion.div>
  );
}
