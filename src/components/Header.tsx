import React, { useState, useEffect } from 'react';
import {
  Search,
  Heart,
  Menu,
  X,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Calendar,
  Tag,
  PhoneCall,
  ChevronRight,
  FileCheck2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenConsultation: () => void;
  onOpenDiagnostic?: () => void;
  onOpenBatchVerification?: () => void;
}

export function Header({
  currentRoute,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onOpenWishlist,
  onOpenConsultation,
  onOpenDiagnostic,
  onOpenBatchVerification
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Trang chủ', route: 'home' },
    { label: 'Về chúng tôi', route: 'about' },
    { label: 'Sản phẩm', route: 'products' },
    { label: 'Phác đồ dưỡng da', route: 'routine' },
    { label: 'Khoa học làn da', route: 'science' }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#1A3626] text-[#FCF9F4] text-[11px] tracking-widest uppercase py-2.5 px-4 text-center border-b border-[#042112]/20">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
          <Sparkles className="w-3.5 h-3.5 text-[#D98C7A] shrink-0" />
          <span className="font-medium tracking-[0.08em]">
            Đặc quyền phục hồi: Tặng kèm Bộ 3 Mẫu Thử Sinh Học cho mọi đơn hàng hôm nay
          </span>
          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[#D98C7A]" />
          <span className="hidden md:inline font-normal text-[#A8BCA1]">
            Miễn phí vận chuyển toàn quốc từ 1.000.000₫
          </span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCF9F4]/95 backdrop-blur-md shadow-xs py-2.5 sm:py-3 border-b border-[#1A3626]/10'
            : 'bg-[#FCF9F4] py-3 sm:py-4 border-b border-[#1A3626]/5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Mobile Menu Button & Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Menu Hamburger */}
            <motion.button
              id="mobile-menu-btn"
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-1 text-[#1C1C19] hover:text-[#1A3626] hover:bg-[#1A3626]/5 lg:hidden focus:outline-none rounded-full transition-colors"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>

            {/* Brand Logo - Responsive Lockups */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('home')}
              className="cursor-pointer select-none text-left"
              aria-label="Trang chủ Velvet & Glow"
            >
              {/* MOBILE LOGO: Only the compact Monogram Seal Icon (No text name, ultra clean) */}
              <div className="sm:hidden flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#1A3626] text-[#FCF9F4] flex items-center justify-center shadow-2xs border border-[#D98C7A]/40 shrink-0">
                  <span className="font-serif-luxury text-[13px] font-bold tracking-tight text-[#FAF7F2] leading-none">
                    V<span className="text-[#D98C7A] text-[9.5px] mx-px">&amp;</span>G
                  </span>
                </div>
              </div>

              {/* DESKTOP LOGO: Full Signature Brand Lockup */}
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1A3626] text-[#FCF9F4] flex items-center justify-center shadow-xs border border-[#D98C7A]/40 shrink-0">
                  <span className="font-serif-luxury text-[15px] font-bold tracking-tight text-[#FAF7F2] leading-none">
                    V<span className="text-[#D98C7A] text-[11px] mx-px">&amp;</span>G
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif-luxury text-2xl lg:text-[27px] tracking-tight text-[#042112] font-semibold group-hover:text-[#1A3626] transition-colors leading-none">
                    Velvet &amp; Glow
                  </span>
                  <span className="label-caps text-[9.5px] text-[#51634D] font-medium mt-1 tracking-[0.22em] leading-none">
                    Botanical Couture Apothecary
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CENTER: Navigation Menu strictly centered (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  id={`nav-link-${link.route}`}
                  onClick={() => onNavigate(link.route)}
                  className={`text-[13px] font-medium tracking-wide transition-colors relative py-2 px-1 whitespace-nowrap ${
                    isActive
                      ? 'text-[#042112] font-semibold'
                      : 'text-[#424843] hover:text-[#042112]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D98C7A] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* RIGHT: Action Icons & Shop/Cart Button */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="header-search-btn"
              onClick={onOpenSearch}
              className="p-2 text-[#424843] hover:text-[#1A3626] hover:bg-[#1A3626]/5 rounded-full transition-colors"
              aria-label="Tìm kiếm sản phẩm"
              title="Tìm kiếm"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            {/* Wishlist Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="header-wishlist-btn"
              onClick={onOpenWishlist}
              className="p-2 text-[#424843] hover:text-[#1A3626] hover:bg-[#1A3626]/5 rounded-full transition-colors relative"
              aria-label="Danh sách yêu thích"
              title="Sản phẩm yêu thích"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 w-4 h-4 bg-[#D98C7A] text-white text-[9px] rounded-full flex items-center justify-center font-bold shadow-2xs"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </motion.button>

            {/* Cart Button: Refined, elegant pill */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="header-shop-btn"
              onClick={onOpenCart}
              className="bg-[#1A3626] hover:bg-[#234633] active:bg-[#042112] text-white rounded-full transition-colors flex items-center shadow-xs hover:shadow-botanical-card whitespace-nowrap p-2 sm:px-4 sm:py-2 relative"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4 sm:mr-2 text-[#D98C7A]" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase">
                Giỏ hàng
              </span>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 sm:static sm:ml-2 bg-[#D98C7A] text-white text-[9.5px] sm:text-[10px] w-4 h-4 sm:w-auto sm:h-auto sm:px-1.5 sm:py-0.5 rounded-full flex items-center justify-center font-bold shadow-2xs"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Enriched Events & Utilities */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-[#FCF9F4] border-t border-[#1A3626]/10 px-4 py-5 shadow-xl overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              {/* Brand Micro Note */}
              <div className="pb-3 mb-2 border-b border-[#1A3626]/8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#1A3626] text-[#FCF9F4] flex items-center justify-center text-[10px] font-bold font-serif-luxury">
                    V&amp;G
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#1A3626]">
                    Velvet &amp; Glow Apothecary
                  </span>
                </div>
                <span className="text-[10px] text-[#727973]">Menu điều hướng</span>
              </div>

              {/* Main Pages Navigation */}
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentRoute === link.route;
                  return (
                    <button
                      key={link.route}
                      onClick={() => {
                        onNavigate(link.route);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left text-sm py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#1A3626]/5 text-[#042112] font-bold'
                          : 'text-[#424843] hover:bg-[#1A3626]/3'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive ? (
                        <span className="w-2 h-2 bg-[#D98C7A] rounded-full" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#727973]/60" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Special Events & Exclusive Services Section */}
              <div className="mt-5 pt-4 border-t border-[#1A3626]/8 space-y-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#51634D] block px-1">
                  Sự kiện &amp; Dịch vụ đặc quyền
                </span>

                {/* Event 1: Skin Diagnostic 3 Mins */}
                {onOpenDiagnostic && (
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onOpenDiagnostic();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left p-3 rounded-xl bg-gradient-to-r from-[#FAF3EA] to-[#F5ECE1] border border-[#D98C7A]/30 flex items-center gap-3 shadow-2xs hover:border-[#D98C7A] transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#D98C7A] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-[#042112]">Chẩn đoán hàng rào da</h4>
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-[#1A3626] text-white px-1.5 py-0.2 rounded-full">
                          Miễn phí
                        </span>
                      </div>
                      <p className="text-[11px] text-[#51634D] truncate mt-0.5">
                        Tính chỉ số TEWL &amp; nhận phác đồ sinh học trong 3 phút
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#D98C7A] shrink-0" />
                  </motion.button>
                )}

                {/* Event 2: Doctor Consultation 1:1 */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onOpenConsultation();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left p-3 rounded-xl bg-white border border-[#1A3626]/10 flex items-center gap-3 shadow-2xs hover:border-[#1A3626]/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1A3626] text-[#FCF9F4] flex items-center justify-center shrink-0 shadow-xs">
                    <Calendar className="w-5 h-5 text-[#D98C7A]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-[#042112]">Đặt lịch tư vấn da liễu</h4>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-[#A8BCA1]/40 text-[#1A3626] px-1.5 py-0.2 rounded-full">
                        Online 1:1
                      </span>
                    </div>
                    <p className="text-[11px] text-[#727973] truncate mt-0.5">
                      Được khám và tư vấn trực tiếp cùng Bác sĩ Chuyên khoa
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#727973] shrink-0" />
                </motion.button>

                {/* Utility 3: Saved Wishlist */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onOpenWishlist();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left p-2.5 rounded-xl bg-white border border-[#1A3626]/10 flex items-center justify-between hover:bg-[#1A3626]/3 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Heart className="w-4 h-4 text-[#D98C7A]" />
                    <span className="text-xs font-medium text-[#042112]">
                      Sản phẩm yêu thích đã lưu
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#D98C7A] bg-[#D98C7A]/15 px-2 py-0.5 rounded-full">
                    {wishlistCount}
                  </span>
                </motion.button>

                {/* Utility 4: Batch Verification Transparency */}
                {onOpenBatchVerification && (
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onOpenBatchVerification();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-white border border-[#1A3626]/10 flex items-center justify-between hover:bg-[#1A3626]/3 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileCheck2 className="w-4 h-4 text-[#1A3626]" />
                      <span className="text-xs font-medium text-[#042112]">
                        Tra cứu chứng thư lô chiết xuất CO2
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#1A3626] bg-[#1A3626]/8 px-2 py-0.5 rounded-full">
                      Hồ sơ Lab
                    </span>
                  </motion.button>
                )}

                {/* Promo Voucher Highlight */}
                <div className="p-3 rounded-xl bg-[#F0ECE6] border border-[#1A3626]/8 flex items-center gap-2.5 text-xs text-[#1A3626]">
                  <Tag className="w-4 h-4 text-[#D98C7A] shrink-0" />
                  <div className="flex-1 text-[11px]">
                    <span className="font-semibold">Mã ưu đãi hôm nay:</span>{' '}
                    <span className="font-mono font-bold text-[#042112] bg-white px-1.5 py-0.5 rounded border border-[#1A3626]/15">
                      VELVET10
                    </span>{' '}
                    (Giảm 10%)
                  </div>
                </div>

                {/* Hotline Quick Call */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-[#727973] px-1">
                  <span className="flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#51634D]" />
                    <span>Dược sĩ tư vấn 24/7:</span>
                  </span>
                  <a
                    href="tel:18006899"
                    className="font-bold text-[#1A3626] hover:text-[#D98C7A] transition-colors"
                  >
                    1800 6899 (Miễn cước)
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
