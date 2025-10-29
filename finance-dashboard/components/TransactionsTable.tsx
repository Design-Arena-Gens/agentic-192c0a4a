'use client';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { mockTransactions } from '@/lib/data';
import { format } from 'date-fns';

export default function TransactionsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 mb-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-cyan-300">Recent Transactions</h3>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 transition-all">
          <Filter size={16} className="text-cyan-400" />
          <span className="text-cyan-300">Filter</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-cyan-500/20">
              <th className="text-left text-gray-400 font-medium pb-3">Date</th>
              <th className="text-left text-gray-400 font-medium pb-3">Description</th>
              <th className="text-left text-gray-400 font-medium pb-3">Category</th>
              <th className="text-right text-gray-400 font-medium pb-3">Amount</th>
              <th className="text-right text-gray-400 font-medium pb-3">Method</th>
            </tr>
          </thead>
          <tbody>
            {mockTransactions.map((transaction, index) => (
              <motion.tr
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-700/30 hover:bg-cyan-500/5 cursor-pointer transition-all"
              >
                <td className="py-4 text-gray-300">{format(new Date(transaction.date), 'MMM dd')}</td>
                <td className="py-4 text-white font-medium">{transaction.description}</td>
                <td className="py-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                    {transaction.category}
                  </span>
                </td>
                <td className={'py-4 text-right font-semibold ' + (transaction.amount > 0 ? 'text-green-400' : 'text-red-400')}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </td>
                <td className="py-4 text-right text-gray-400">{transaction.method}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
