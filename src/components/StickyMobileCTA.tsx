import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Check, RotateCw } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface StickyMobileCTAProps {
  product: Product | null;
  onAddToCart: (product: Product, quantity: number) => void;
  onOpenQuickCart: () => void;
}

export function StickyMobileCTA({ product, onAddToCart, onOpenQuickCart }: StickyMobileCTAProps) {
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAction = () => {
    onAddToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
    onOpenQuickCart();
  };

  return (
    <aside aria-label="Mua nhanh trên di động" className="sticky-mobile-cta fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#1A3626]/12 px-4 py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-3 md:hidden">
      {/* Product Thumbnail & Price */}
      <div className="flex items-center gap-2.5 min-w-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-11 h-11 rounded-lg object-cover bg-[#F6F3EE] border border-[#1A3626]/10 shrink-0"
        />
        <div className="min-w-0">
          <p className="text-xs font-bold text-[#042112] truncate max-w-[150px]">
            {product.name}
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="font-price text-sm font-bold text-[#042112]">
              {product.price.toLocaleString('vi-VN')}₫
            </span>
            {product.originalPrice && (
              <span className="font-price text-[10px] text-[#727973] line-through">
                {product.originalPrice.toLocaleString('vi-VN')}₫
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Direct Add Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleAction}
        className="px-5 py-2.5 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-xs shrink-0"
      >
        {isAdded ? (
          <>
            <Check className="w-4 h-4" />
            <span>Đã Thêm!</span>
          </>
        ) : (
          <>
            <ShoppingBag className="w-4 h-4" />
            <span>Mua Ngay</span>
          </>
        )}
      </motion.button>
    </aside>
  );
}
