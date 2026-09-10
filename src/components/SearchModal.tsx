import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS } from '../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export function SearchModal({ isOpen, onClose, onSelectProduct }: SearchModalProps) {
  const [keyword, setKeyword] = useState('');

  const quickKeywords = [
    'Phục hồi màng ẩm',
    'Rau má Centella',
    'Hoa trà tuyết Jeju',
    'Da sau laser',
    'Ceramides',
    'Squalane thực vật',
    'Chống nắng khoáng'
  ];

  const results = useMemo(() => {
    if (!keyword.trim()) return [];
    const lower = keyword.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.subtitle.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower) ||
        p.skinConcerns.some((c) => c.toLowerCase().includes(lower)) ||
        p.heroIngredients.some((i) => i.name.toLowerCase().includes(lower))
    );
  }, [keyword]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-16 sm:pt-24 p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative bg-[#FCF9F4] text-[#1C1C19] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1A3626]/10 p-5 sm:p-6 space-y-4 z-10"
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-[#727973] absolute left-4" />
              <input
                type="text"
                autoFocus
                placeholder="Tìm sản phẩm, thành phần dược liệu, tình trạng da..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full bg-white border border-[#1A3626]/15 rounded-full pl-11 pr-11 py-3.5 text-xs sm:text-sm text-[#042112] placeholder-[#727973] focus:outline-none focus:border-[#D98C7A] transition-colors shadow-2xs"
              />
              {keyword ? (
                <button
                  onClick={() => setKeyword('')}
                  className="absolute right-4 p-1 text-[#727973] hover:text-[#042112]"
                  aria-label="Xóa từ khóa"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="absolute right-4 p-1 text-[#727973] hover:text-[#042112]"
                  aria-label="Đóng tìm kiếm"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Search Chips */}
            {!keyword && (
              <div className="space-y-2 pt-1">
                <p className="label-caps text-[#51634D] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D98C7A]" />
                  <span>Gợi ý tìm kiếm nhanh:</span>
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {quickKeywords.map((tag) => (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      key={tag}
                      onClick={() => setKeyword(tag)}
                      className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F0EDE9] border border-[#1A3626]/8 text-xs text-[#424843] transition-colors"
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Results List */}
            {keyword && (
              <div className="space-y-3 pt-2 max-h-96 overflow-y-auto">
                <p className="text-xs text-[#727973]">
                  Tìm thấy {results.length} giải pháp dược liệu phù hợp:
                </p>

                {results.length === 0 ? (
                  <p className="text-xs text-center py-8 text-[#727973]">
                    Không tìm thấy sản phẩm nào khớp với từ khóa &ldquo;{keyword}&rdquo;.
                  </p>
                ) : (
                  results.map((product) => (
                    <motion.div
                      layout
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white hover:bg-[#F0EDE9] border border-[#1A3626]/8 cursor-pointer transition-all group shadow-2xs"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-14 h-14 object-cover rounded-xl bg-[#F6F3EE] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="label-caps text-[#51634D]">
                          {product.categoryLabel}
                        </span>
                        <h4 className="text-xs font-semibold text-[#042112] group-hover:text-[#D98C7A] transition-colors truncate">
                          {product.name}
                        </h4>
                        <p className="text-[11px] text-[#727973] truncate">{product.subtitle}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-price text-sm font-bold text-[#042112] block">
                          {product.price.toLocaleString('vi-VN')}₫
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#727973] group-hover:translate-x-1 group-hover:text-[#D98C7A] transition-all ml-auto mt-1" />
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            )}

            {/* Footer Close button */}
            <div className="pt-2 border-t border-[#1A3626]/8 flex justify-between items-center text-xs text-[#727973]">
              <span>Nhấn vào sản phẩm để xem chi tiết &amp; thành phần sinh học</span>
              <button
                onClick={onClose}
                className="hover:text-[#042112] px-3 py-1 transition-colors"
              >
                Đóng
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
