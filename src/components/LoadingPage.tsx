import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface LoadingPageProps {
  isLoading: boolean;
  brandName?: string;
  tagline?: string;
}

export function LoadingPage({
  isLoading,
  brandName = 'Velvet & Glow',
  tagline = 'Dược Mỹ Phẩm Phục Hồi Sinh Học Cấp Tế Bào'
}: LoadingPageProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#042112] text-[#FCF9F4] px-6 select-none"
        >
          {/* Ambient Botanical Glow Aura */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#1A3626] via-[#A8BCA1]/15 to-[#D98C7A]/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

          <div className="flex flex-col items-center text-center space-y-6 max-w-md">
            {/* Elegant Floral Monogram / Seal Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1A3626] to-[#0A2F1A] border border-[#A8BCA1]/30 flex items-center justify-center shadow-2xl"
            >
              <span className="font-serif-luxury text-3xl font-bold tracking-tight text-[#FAF7F2]">
                V&amp;G
              </span>
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#D98C7A] flex items-center justify-center shadow-xs">
                <Sparkles className="w-2.5 h-2.5 text-white" />
              </div>
            </motion.div>

            {/* Typography */}
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="label-caps text-[#A8BCA1] tracking-[0.28em] block text-[10px]"
              >
                Haute Botanique • Biocellular Repair
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-serif-luxury text-3xl sm:text-4xl text-[#FAF7F2] font-medium tracking-tight"
              >
                {brandName}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xs text-[#A8BCA1]/80 font-light max-w-xs mx-auto leading-relaxed"
              >
                {tagline}
              </motion.p>
            </div>

            {/* Progress Bar & Cellular Status */}
            <div className="w-56 space-y-2 pt-2">
              <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: 'easeInOut'
                  }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#D98C7A] to-transparent"
                />
              </div>
              <div className="flex justify-between items-center text-[10px] text-[#A8BCA1]/60 font-mono">
                <span>Khởi tạo mô phỏng lipid</span>
                <span className="text-[#D98C7A]">100% Thuần Khiết</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
