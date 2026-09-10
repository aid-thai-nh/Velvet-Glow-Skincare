import React from 'react';
import { Sparkles, ArrowRight, Droplets, CheckCircle2, ChevronDown, Heart, Eye, ShoppingBag, Leaf, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Product, PageRoute } from '../types';
import { PRODUCTS, BOUTIQUES } from '../data/mockData';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenProductDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onOpenDiagnostic: () => void;
  onOpenConsultation: () => void;
}

export function HomePage({
  onNavigate,
  onOpenProductDetail,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onOpenDiagnostic,
  onOpenConsultation
}: HomePageProps) {
  const heroProduct = PRODUCTS[0]; // Bio Recovery Serum

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      {/* 1. HERO SECTION (1440px Unified Container) */}
      <section className="relative pt-10 sm:pt-16 pb-16 overflow-hidden">
        {/* Ambient Botanical Aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-br from-[#A8BCA1]/20 via-[#F6F3EE] to-[#D98C7A]/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#A8BCA1]/20 border border-[#1A3626]/10 shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#1A3626] animate-pulse" />
            <span className="label-caps text-[#1A3626]">
              Triết Lý Nguyên Bản &amp; Khoa Học Dược Liệu Xanh
            </span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl mx-auto space-y-5"
          >
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-semibold text-[#042112] leading-[1.14] tracking-tight">
              Quyền Năng Phục Hồi <br className="hidden sm:inline" />
              <span className="italic font-semibold text-[#51634D]">Từ Nguyên Bản</span>
            </h1>

            <p className="text-sm sm:text-base text-[#424843] max-w-2xl mx-auto leading-relaxed font-normal">
              Giao thoa giữa khoa học biểu sinh chính xác và tinh túy thảo dược quý giá. Chúng tôi đánh thức cơ chế tự chữa lành của làn da qua từng giọt tinh chất hữu cơ thuần khiết nhất.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white text-xs uppercase tracking-widest font-semibold shadow-botanical-card hover:shadow-botanical-hover transition-all flex items-center justify-center gap-2"
            >
              <span>Khám Phá Sản Phẩm Phục Hồi</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#F6F3EE] text-[#1A3626] border border-[#1A3626]/20 text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 shadow-2xs"
            >
              <Sparkles className="w-4 h-4 text-[#D98C7A]" />
              <span>Chẩn Đoán Hàng Rào Da (3 Phút)</span>
            </motion.button>
          </motion.div>

          {/* 3 Organic Stat Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto pt-6"
          >
            <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 shadow-botanical-card text-center space-y-1.5 transition-transform hover:-translate-y-1 duration-300">
              <span className="font-price text-3xl sm:text-4xl font-bold text-[#042112] block">
                100%
              </span>
              <p className="text-xs font-semibold text-[#1A3626] uppercase tracking-wider">Thực vật hữu cơ</p>
              <p className="text-xs text-[#727973] font-normal">
                Kiểm định nguồn gốc ECOCERT COSMOS
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 shadow-botanical-card text-center space-y-1.5 transition-transform hover:-translate-y-1 duration-300">
              <span className="font-price text-3xl sm:text-4xl font-bold text-[#042112] block">
                0%
              </span>
              <p className="text-xs font-semibold text-[#1A3626] uppercase tracking-wider">Paraben &amp; Cồn khô</p>
              <p className="text-xs text-[#727973] font-normal">
                Không dầu khoáng &amp; hương liệu nhân tạo
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 shadow-botanical-card text-center space-y-1.5 transition-transform hover:-translate-y-1 duration-300">
              <span className="font-price text-3xl sm:text-4xl font-bold text-[#042112] block">
                98%
              </span>
              <p className="text-xs font-semibold text-[#1A3626] uppercase tracking-wider">Cải thiện độ ẩm sau 14 ngày</p>
              <p className="text-xs text-[#727973] font-normal">
                Hiệu nghiệm lâm sàng trên da nhạy cảm
              </p>
            </div>
          </motion.div>

          {/* Scroll Down Cue */}
          <div className="pt-6 flex flex-col items-center justify-center text-[#727973] space-y-1">
            <span className="label-caps text-[10px]">Khám phá hành trình</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#1A3626]" />
          </div>
        </div>
      </section>

      {/* 2. BRAND MANIFESTO SECTION (1440px Container) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A3626] text-[#FCF9F4] rounded-3xl p-8 sm:p-14 md:p-16 relative overflow-hidden shadow-xl border border-[#1A3626]">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#042112] rounded-full blur-3xl pointer-events-none opacity-50" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-full border border-[#D98C7A]/40 flex items-center justify-center mx-auto text-[#D98C7A]">
              <Leaf className="w-6 h-6" />
            </div>

            <span className="label-caps text-[#D98C7A] block">
              Tuyên Ngôn Thương Hiệu
            </span>

            <blockquote className="font-serif-luxury text-xl sm:text-3xl md:text-4xl sm:leading-relaxed text-white font-normal italic">
              &ldquo;Làn da không cần bị tổn thương thô bạo để được hồi sinh. Làn da chỉ cần được trao gửi đúng tín hiệu sinh học và những phân tử thực vật nguyên bản nhất để tự chữa lành.&rdquo;
            </blockquote>

            <div className="pt-3 border-t border-white/15 inline-block">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#FCF9F4]">
                Master Formulator Trần Uyên Phương
              </p>
              <p className="text-xs text-[#A8BCA1] font-light">
                Tiến sĩ Hóa Dược Thực Vật &amp; Người sáng lập Velvet &amp; Glow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUPERCRITICAL CO2 EXTRACTION & HERO PRODUCT SHOWCASE (1440px Container) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0EDE9] rounded-3xl p-6 sm:p-12 border border-[#1A3626]/8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Bottle Imagery Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden shadow-botanical-card border border-[#1A3626]/8 bg-white group">
                <img
                  src={heroProduct.image}
                  alt={heroProduct.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#1A3626] text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow-xs">
                  99.4% Hoạt Tính Nguyên Bản
                </div>
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/95 backdrop-blur-xs border border-[#1A3626]/8 flex items-center justify-between">
                  <div>
                    <span className="label-caps text-[#51634D] block">
                      Hero Formula
                    </span>
                    <h4 className="text-xs font-bold text-[#042112]">{heroProduct.name}</h4>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onOpenProductDetail(heroProduct)}
                    className="p-2 rounded-full bg-[#1A3626] text-white hover:bg-[#042112] transition-colors"
                    title="Xem chi tiết"
                  >
                    <Eye className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right Information & 4 Ingredient Chips */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="label-caps text-[#51634D] block">
                  Đột Phá Chiết Xuất Siêu Tới Hạn CO2
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#042112] font-semibold mt-1">
                  Khoa Học Dược Liệu Xanh Cho Làn Da Nhạy Cảm
                </h2>
                <p className="text-xs sm:text-sm text-[#424843] leading-relaxed font-normal mt-3">
                  Không sử dụng dung môi hóa học độc hại, không gia nhiệt làm phân hủy enzyme thực vật. Công nghệ chiết xuất siêu tới hạn ở nhiệt độ phòng lưu giữ toàn vẹn 99.4% hoạt chất sinh học, mang lại khả năng làm dịu và phục hồi tế bào gấp 8 lần phương pháp chưng cất thông thường.
                </p>
              </div>

              {/* 4 Ingredient Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {heroProduct.heroIngredients.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 border border-[#1A3626]/8 space-y-1.5 shadow-2xs hover:border-[#D98C7A]/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-[#042112] flex items-center gap-1.5">
                        <Droplets className="w-3.5 h-3.5 text-[#51634D]" />
                        <span>{item.name}</span>
                      </h4>
                      {item.purityPercentage && (
                        <span className="text-[10px] font-bold text-[#D98C7A] bg-[#D98C7A]/15 px-2 py-0.5 rounded-full">
                          {item.purityPercentage}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#727973]">Nguồn gốc: {item.origin}</p>
                    <p className="text-xs text-[#424843] leading-snug font-normal">{item.benefit}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onAddToCart(heroProduct)}
                  className="px-7 py-3.5 rounded-full bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white text-xs uppercase tracking-wider font-semibold shadow-botanical-card hover:shadow-botanical-hover transition-all flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Trải Nghiệm Ngay • {heroProduct.price.toLocaleString('vi-VN')}₫</span>
                </motion.button>

                <button
                  onClick={() => onNavigate('science')}
                  className="text-xs font-semibold uppercase tracking-wider text-[#1A3626] hover:text-[#D98C7A] transition-colors flex items-center gap-1"
                >
                  <span>Xem báo cáo kiểm nghiệm lâm sàng</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE PRODUCT COLLECTION (1440px Container) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="label-caps text-[#51634D] block">
              Bộ Sưu Tập Phục Hồi Sinh Học
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#042112] font-semibold mt-1">
              Tuyển Chọn Dược Mỹ Phẩm Cao Cấp
            </h2>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="text-xs uppercase tracking-widest font-semibold text-[#1A3626] hover:text-[#D98C7A] flex items-center gap-1.5 self-start sm:self-auto transition-colors"
          >
            <span>Xem tất cả sản phẩm ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.slice(0, 3).map((product) => {
            const isWish = wishlistIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#1A3626]/8 shadow-botanical-card hover:shadow-botanical-hover transition-all duration-300 flex flex-col group"
              >
                {/* Product Image Area */}
                <div className="relative aspect-4/5 bg-[#F6F3EE] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isBestseller && (
                    <div className="absolute top-3 left-3 bg-[#1A3626] text-[#FCF9F4] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold shadow-xs">
                      Bestseller
                    </div>
                  )}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-[#A8BCA1] text-[#1A3626] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold shadow-xs">
                      Mới ra mắt
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onToggleWishlist(product)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-[#1A3626] shadow-xs transition-colors"
                    aria-label="Yêu thích"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isWish ? 'fill-[#D98C7A] text-[#D98C7A]' : 'text-[#1A3626]'
                      }`}
                    />
                  </motion.button>

                  {/* Hover Quick Action Bar */}
                  <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="flex-1 py-2 px-3 rounded-full bg-white/95 hover:bg-white text-[#042112] text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Xem nhanh</span>
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="py-2 px-4 rounded-full bg-[#D98C7A] hover:bg-[#C97B69] text-white text-[11px] font-semibold shadow-xs transition-colors"
                      title="Thêm vào giỏ"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#51634D] font-semibold">
                      <span>{product.categoryLabel}</span>
                      <span>{product.volume}</span>
                    </div>

                    <h3
                      onClick={() => onOpenProductDetail(product)}
                      className="text-lg font-semibold text-[#042112] group-hover:text-[#D98C7A] cursor-pointer transition-colors"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#727973] line-clamp-2 leading-relaxed font-normal">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1A3626]/8 flex items-center justify-between">
                    <div>
                      <span className="font-price text-lg font-bold text-[#042112] tracking-tight">
                        {product.price.toLocaleString('vi-VN')}₫
                      </span>
                      {product.originalPrice && (
                        <span className="font-price text-xs text-[#727973] line-through ml-2 font-normal">
                          {product.originalPrice.toLocaleString('vi-VN')}₫
                        </span>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onAddToCart(product)}
                      className="text-xs font-semibold text-[#1A3626] hover:text-[#D98C7A] flex items-center gap-1 transition-colors py-1 px-2"
                    >
                      <span>Mua ngay</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. ETHICAL & SUSTAINABILITY PROMISES (1440px Container) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="label-caps text-[#51634D] block">
            Cam Kết Vì Hành Tinh &amp; Làn Da
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#042112] font-semibold">
            Trách Nhiệm &amp; Tôn Trọng Sự Sống
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 text-center space-y-3 shadow-botanical-card hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-[#F0EDE9] text-[#1A3626] rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl">🐰</span>
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-[#042112]">
              Không Thử Nghiệm Trên Động Vật
            </h3>
            <p className="text-xs text-[#424843] leading-relaxed font-normal">
              Được chứng nhận bởi Leaping Bunny và PETA. 100% công thức được kiểm nghiệm an toàn trên mô hình tế bào nhân tạo 3D (EpiDerm).
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 text-center space-y-3 shadow-botanical-card hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-[#F0EDE9] text-[#1A3626] rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl">♻️</span>
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-[#042112]">
              Bao Bì Thủy Tinh Hổ Phách Tái Chế 100%
            </h3>
            <p className="text-xs text-[#424843] leading-relaxed font-normal">
              Chắn 99% tia cực tím bảo toàn dưỡng chất tự nhiên. Chương trình Eco-Circle thu hồi vỏ chai tại Boutique nhận voucher phục hồi da.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 text-center space-y-3 shadow-botanical-card hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-[#F0EDE9] text-[#1A3626] rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl">🌱</span>
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-[#042112]">
              Vùng Trồng Dược Liệu Hữu Cơ Bản Địa
            </h3>
            <p className="text-xs text-[#424843] leading-relaxed font-normal">
              Đồng hành cùng nông dân canh tác nông nghiệp tái sinh tại Lâm Đồng và Hà Giang, bảo tồn nguồn gen thực vật quý hiếm.
            </p>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE SKIN DIAGNOSIS BANNER (1440px Container) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A3626] text-white rounded-3xl p-8 sm:p-14 md:p-16 relative overflow-hidden shadow-xl border border-[#1A3626]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#D98C7A] text-[10px] font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Công nghệ phân tích Biomimetic</span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl font-semibold">
                Chẩn Đoán Hàng Rào Bảo Vệ Da (Skin Barrier) Chuẩn Y Khoa
              </h2>
              <p className="text-xs sm:text-sm text-[#FCF9F4]/80 leading-relaxed font-normal max-w-2xl">
                Bạn băn khoăn làn da mình đang thiếu nước nội sinh, đứt gãy liên kết lipid hay nhạy cảm sau xâm lấn? Trả lời 4 câu hỏi để nhận phác đồ phục hồi dược liệu chuyên biệt ngay lập tức.
              </p>
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenDiagnostic}
                  className="px-8 py-3.5 rounded-full bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white text-xs uppercase tracking-wider font-bold shadow-botanical-card hover:shadow-botanical-hover transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Bắt Đầu Chẩn Đoán Miễn Phí (3 Phút)</span>
                </motion.button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-xs space-y-3.5">
              <h4 className="font-semibold uppercase tracking-wider text-[#D98C7A] text-[11px]">
                Đặc Quyền Sau Chẩn Đoán:
              </h4>
              <ul className="space-y-2.5 text-[#FCF9F4]/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8BCA1] shrink-0" />
                  <span>Định lượng chỉ số tổn thương biểu bì (0-100)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8BCA1] shrink-0" />
                  <span>Phác đồ sáng/tối chi tiết từng bước</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8BCA1] shrink-0" />
                  <span>Voucher giảm 15% trọn bộ sản phẩm phục hồi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FLAGSHIP BOUTIQUES PREVIEW (1440px Container) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="label-caps text-[#51634D] block">
            Không Gian Trải Nghiệm Trực Tiếp
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#042112] font-semibold">
            Flagship Boutiques
          </h2>
          <p className="text-xs text-[#727973] font-normal">
            Nơi bạn đắm chìm trong hương thơm thảo dược, thưởng thức trà hoa hữu cơ và trải nghiệm dịch vụ soi da tế bào cao cấp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BOUTIQUES.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#1A3626]/8 shadow-botanical-card group flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative aspect-16/9 overflow-hidden bg-[#F6F3EE]">
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#1A3626] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                  {b.city}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#042112]">
                    {b.name}
                  </h3>
                  <p className="text-xs text-[#424843] flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-[#D98C7A] shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </p>
                  <p className="text-xs text-[#727973]">
                    <strong>Giờ mở cửa:</strong> {b.hours}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1A3626]/8 flex justify-between items-center">
                  <span className="text-xs font-semibold text-[#1A3626]">Hotline: {b.phone}</span>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onOpenConsultation}
                    className="px-5 py-2.5 rounded-full bg-[#1A3626] hover:bg-[#042112] text-white text-[11px] font-semibold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    Đặt lịch ghé thăm
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
