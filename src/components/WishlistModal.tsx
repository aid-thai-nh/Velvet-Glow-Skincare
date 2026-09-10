import React from 'react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemove: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export function WishlistModal({
  isOpen,
  onClose,
  items,
  onRemove,
  onAddToCart
}: WishlistModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md bg-[#FCF9F4] text-[#1C1C19] h-full shadow-2xl flex flex-col justify-between overflow-hidden z-10"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#1A3626]/8 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#D98C7A] fill-[#D98C7A]" />
                <h2 className="text-xl font-semibold text-[#042112]">
                  Sản Phẩm Yêu Thích ({items.length})
                </h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 text-[#727973] hover:text-[#042112] rounded-full hover:bg-[#F6F3EE] transition-colors"
                aria-label="Đóng danh sách yêu thích"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#F6F3EE] text-[#727973] rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 stroke-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#042112]">
                    Chưa có sản phẩm yêu thích
                  </h3>
                  <p className="text-xs text-[#727973] max-w-xs mx-auto leading-relaxed">
                    Nhấn biểu tượng trái tim trên từng sản phẩm để lưu lại những giải pháp dược liệu bạn quan tâm.
                  </p>
                </div>
              ) : (
                items.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl p-3.5 border border-[#1A3626]/8 flex gap-3 shadow-2xs"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-xl bg-[#F6F3EE] shrink-0"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-semibold text-[#042112] truncate">
                          {product.name}
                        </h4>
                        <p className="text-[11px] text-[#727973]">{product.volume}</p>
                        <span className="font-price text-xs font-bold text-[#042112] block mt-1">
                          {product.price.toLocaleString('vi-VN')}₫
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => onAddToCart(product)}
                          className="px-3 py-1.5 bg-[#1A3626] hover:bg-[#042112] text-white rounded-full text-[11px] font-medium flex items-center gap-1 transition-colors"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Thêm vào giỏ</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => onRemove(product.id)}
                          className="text-[#727973] hover:text-red-600 p-1.5 transition-colors"
                          aria-label="Bỏ khỏi danh sách yêu thích"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-[#1A3626]/8 text-center">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={onClose}
                className="w-full py-3 bg-[#F0EDE9] hover:bg-[#E5E2DD] text-[#042112] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Tiếp tục xem sản phẩm
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
