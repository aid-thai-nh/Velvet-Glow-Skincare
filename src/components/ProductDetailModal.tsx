import React, { useState } from 'react';
import { X, Star, Heart, Check, ShieldCheck, Droplets, Sun, Moon, ShoppingBag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}: ProductDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!product) return null;

  const currentImage = selectedImage || product.image;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#FCF9F4] text-[#1C1C19] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#1A3626]/10 max-h-[92vh] flex flex-col z-10"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/85 hover:bg-white text-[#042112] border border-[#1A3626]/10 transition-colors shadow-xs"
              aria-label="Đóng cửa sổ"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
              {/* Main Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Gallery Column */}
                <div className="space-y-3">
                  <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-[#F6F3EE] border border-[#1A3626]/8 shadow-inner">
                    <motion.img
                      key={currentImage}
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      src={currentImage}
                      alt={product.name}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80';
                      }}
                      className="w-full h-full object-cover"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onToggleWishlist(product)}
                      className="absolute top-3 left-3 p-2.5 rounded-full bg-white/90 backdrop-blur-xs text-[#042112] shadow-xs hover:bg-white transition-colors"
                      aria-label="Yêu thích sản phẩm"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? 'fill-[#D98C7A] text-[#D98C7A]' : 'text-[#727973]'
                        }`}
                      />
                    </motion.button>

                    {(product.isBestseller || product.isNew) && (
                      <span className="absolute bottom-3 left-3 bg-[#1A3626] text-[#FCF9F4] text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
                        {product.isBestseller ? 'Bestseller' : 'Mới ra mắt'}
                      </span>
                    )}
                  </div>

                  {/* Thumbnail Row */}
                  {product.galleryImages && product.galleryImages.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {product.galleryImages.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(img)}
                          className={`w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                            currentImage === img
                              ? 'border-[#D98C7A] ring-2 ring-[#D98C7A]/20 scale-102'
                              : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`Góc nhìn ${i + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details Column */}
                <div className="space-y-5">
                  <div>
                    <span className="label-caps text-[#51634D] block mb-1">
                      {product.categoryLabel} • {product.volume}
                    </span>
                    <h2 className="text-2xl sm:text-3xl text-[#042112] font-semibold leading-snug tracking-tight">
                      {product.name}
                    </h2>
                    <p className="text-xs text-[#51634D] mt-1 italic">{product.subtitle}</p>
                  </div>

                  {/* Rating & Skin Match */}
                  <div className="flex flex-wrap items-center gap-3 text-xs border-y border-[#1A3626]/8 py-3">
                    <div className="flex items-center gap-1 text-[#042112] font-bold">
                      <Star className="w-4 h-4 fill-[#D98C7A] text-[#D98C7A]" />
                      <span>{product.rating}</span>
                      <span className="text-[#727973] font-normal">({product.reviewCount} đánh giá)</span>
                    </div>
                    <span className="text-[#1A3626]/20">•</span>
                    <div className="text-[#1A3626] font-medium flex items-center gap-1">
                      <Droplets className="w-3.5 h-3.5 text-[#51634D]" />
                      <span>Phù hợp: {product.skinTypes.join(', ')}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="font-price text-3xl font-bold text-[#042112] tracking-tight">
                      {product.price.toLocaleString('vi-VN')}₫
                    </span>
                    {product.originalPrice && (
                      <span className="font-price text-sm text-[#727973] line-through">
                        {product.originalPrice.toLocaleString('vi-VN')}₫
                      </span>
                    )}
                    <span className="text-[11px] text-[#51634D] bg-[#A8BCA1]/20 px-2.5 py-0.5 rounded-full font-medium">
                      Bao gồm VAT
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#424843] leading-relaxed font-normal">
                    {product.description}
                  </p>

                  {/* Skin Concerns Targeted */}
                  <div className="space-y-1.5">
                    <span className="label-caps text-[#51634D] block">Vấn đề da đặc trị:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.skinConcerns.map((c, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white border border-[#1A3626]/10 text-[#042112] rounded-full text-[11px]"
                        >
                          ✓ {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart Actions */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[#1A3626]/15 rounded-full bg-white text-xs">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-9 h-10 flex items-center justify-center text-[#1A3626] font-bold hover:bg-[#F6F3EE] rounded-l-full"
                        >
                          -
                        </button>
                        <span className="w-10 text-center font-bold text-sm text-[#042112]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-9 h-10 flex items-center justify-center text-[#1A3626] font-bold hover:bg-[#F6F3EE] rounded-r-full"
                        >
                          +
                        </button>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAdd}
                        className={`flex-1 py-3 px-6 rounded-full text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 transition-all shadow-botanical-card ${
                          addedAnimation
                            ? 'bg-[#1A3626] text-white'
                            : 'bg-[#D98C7A] hover:bg-[#C97B69] text-white'
                        }`}
                      >
                        {addedAnimation ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Đã thêm vào giỏ hàng!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span>Thêm vào giỏ hàng</span>
                          </>
                        )}
                      </motion.button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#727973] pt-1">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#1A3626]" />
                        <span>Được kiểm nghiệm da liễu 100%</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#D98C7A]" />
                        <span>Tặng kèm mẫu thử sinh học</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botanical Formulation Details */}
              {product.heroIngredients && product.heroIngredients.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-[#1A3626]/8">
                  <h3 className="text-lg font-semibold text-[#042112]">
                    Hoạt Chất Dược Liệu Sinh Học (Haute Formulation)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.heroIngredients.map((ing, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-3.5 border border-[#1A3626]/5 space-y-1 shadow-2xs"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-[#042112]">{ing.name}</h4>
                          {ing.purityPercentage && (
                            <span className="text-[10px] font-semibold text-[#D98C7A] bg-[#D98C7A]/15 px-2 py-0.5 rounded-full">
                              {ing.purityPercentage}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#727973]">Nguồn gốc: {ing.origin}</p>
                        <p className="text-xs text-[#424843] leading-relaxed font-normal">
                          {ing.benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Application Ritual Guide */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-[#1A3626]/8 space-y-2 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#042112] uppercase tracking-wider">
                    <Sun className="w-4 h-4 text-[#D98C7A]" />
                    <span>Nghi thức Buổi Sáng</span>
                  </div>
                  <p className="text-xs text-[#424843] leading-relaxed font-normal">
                    {product.ritualGuide.morning}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-[#1A3626]/8 space-y-2 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#042112] uppercase tracking-wider">
                    <Moon className="w-4 h-4 text-[#1A3626]" />
                    <span>Nghi thức Buổi Tối</span>
                  </div>
                  <p className="text-xs text-[#424843] leading-relaxed font-normal">
                    {product.ritualGuide.evening}
                  </p>
                </div>
              </div>

              {/* Clinical Results Bar */}
              {product.clinicalResults && (
                <div className="bg-[#1A3626] text-[#FCF9F4] rounded-2xl p-5 sm:p-6 space-y-4 border border-[#1A3626]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      Kết quả thử nghiệm lâm sàng độc lập (14 ngày)
                    </h3>
                    <span className="text-[10px] text-[#FCF9F4]/60 uppercase tracking-widest">
                      N=120 Phụ nữ Việt
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {product.clinicalResults.map((res, i) => (
                      <div key={i} className="border-t border-white/10 pt-3">
                        <div className="font-price text-3xl font-bold text-[#D98C7A] mb-1">
                          {res.percentage}%
                        </div>
                        <p className="text-xs text-[#FCF9F4]/75 leading-relaxed font-normal">
                          {res.claim}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
