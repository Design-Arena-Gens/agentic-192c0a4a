'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Array<{role: string; text: string}>>([]);

  const handleVoiceCommand = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setMessages([
        ...messages,
        { role: 'user', text: 'What\'s my top spending category?' },
        { role: 'assistant', text: 'Your top spending category is Shopping with $1,200 this month, followed by Food & Drink at $850.' },
      ]);
    }, 2000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/40 flex items-center justify-center z-50"
      >
        <MessageCircle size={28} className="text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-48 right-8 w-96 glass-card z-50"
          >
            <div className="p-4 border-b border-cyan-500/20 flex items-center justify-between">
              <h3 className="font-bold text-gradient">AI Voice Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full">
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="p-4 h-64 overflow-y-auto space-y-3">
              {messages.length === 0 ? (
                <div className="text-center text-gray-400 mt-8">
                  <p>Click the mic to ask me anything!</p>
                  <p className="text-sm mt-2">Try: "What\'s my balance?" or "Add expense $50 food"</p>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={'p-3 rounded-lg ' + (msg.role === 'user' ? 'bg-cyan-500/20 ml-8' : 'bg-white/5 mr-8')}
                  >
                    <p className="text-sm text-white">{msg.text}</p>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-cyan-500/20">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVoiceCommand}
                className={'w-full py-3 rounded-lg flex items-center justify-center gap-2 ' + (isListening ? 'bg-red-500 pulse-glow' : 'bg-gradient-to-r from-cyan-500 to-mint-500')}
              >
                <Mic size={20} className="text-white" />
                <span className="text-white font-semibold">
                  {isListening ? 'Listening...' : 'Tap to Speak'}
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
