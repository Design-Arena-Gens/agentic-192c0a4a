'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, FileText, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

export default function ReceiptScanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [extractedData, setExtractedData] = useState<any>(null);

  const simulateAIExtraction = () => {
    setTimeout(() => {
      setExtractedData({
        date: '2025-10-28',
        merchant: 'Target Store',
        amount: 124.56,
        category: 'Shopping',
        items: ['Groceries', 'Household Items', 'Electronics'],
      });
    }, 2000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="floating-button pulse-glow"
      >
        <Upload size={28} className="text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 max-w-2xl w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gradient">AI Receipt Scanner</h2>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                  <X size={24} className="text-gray-400" />
                </button>
              </div>

              {!extractedData ? (
                <div className="border-2 border-dashed border-cyan-400/50 rounded-xl p-12 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-6 rounded-full bg-cyan-500/20">
                      <Upload size={48} className="text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Upload Receipt</h3>
                    <p className="text-gray-400">Drag and drop or click to upload PDF or image</p>
                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={simulateAIExtraction}
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-mint-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                      >
                        <FileText size={20} className="inline mr-2" />
                        Upload PDF
                      </button>
                      <button
                        onClick={simulateAIExtraction}
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                      >
                        <ImageIcon size={20} className="inline mr-2" />
                        Upload Image
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="glass-card p-6 bg-gradient-to-br from-green-500/10 to-cyan-500/10">
                    <h3 className="text-lg font-bold text-green-400 mb-4">✓ Extraction Complete!</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm">Date</p>
                        <p className="text-white font-semibold">{extractedData.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Merchant</p>
                        <p className="text-white font-semibold">{extractedData.merchant}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Amount</p>
                        <p className="text-green-400 font-bold text-xl">${extractedData.amount}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Category</p>
                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                          {extractedData.category}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-400 text-sm mb-2">Items</p>
                      <div className="flex flex-wrap gap-2">
                        {extractedData.items.map((item: string, i: number) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-mint-500">
                      Save Transaction
                    </button>
                    <button
                      onClick={() => setExtractedData(null)}
                      className="px-6 py-3 rounded-lg border border-cyan-400/50 hover:bg-cyan-500/10"
                    >
                      Scan Another
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
