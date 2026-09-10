import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export function Footer({ onNavigate, onOpenConsultation }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1A3626] text-[#FCF9F4] pt-16 pb-12 border-t border-[#042112] overflow-hidden relative">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D98C7A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Watermark Typography */}
        <div className="w-full text-center select-none pb-12 pt-2 border-b border-white/10">
          <span className="font-serif-luxury text-4xl sm:text-6xl md:text-8xl tracking-[0.12em] text-white/10 font-normal uppercase block">
            Velvet &amp; Glow
          </span>
          <span className="label-caps text-[#D98C7A] -mt-2 block">
            Botanical Couture Apothecary • Haute Formulation
          </span>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10">
          {/* Column 1: Nghi thức Thuần khiết */}
          <div className="space-y-4">
            <h3 className="label-caps text-[#D98C7A]">
              Nghi thức Thuần khiết
            </h3>
            <p className="text-xs text-[#FCF9F4]/75 leading-relaxed font-normal">
              Giao thoa giữa khoa học biểu sinh chính xác và tinh túy thảo dược quý giá. Chúng tôi kiến tạo làn da như một nghi thức tĩnh tại, thuần khiết và nâng niu vẻ đẹp bản nguyên.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-[#FCF9F4]/90">
                <span>🐰</span>
                <span className="font-medium tracking-wide">100% CRUELTY-FREE</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-[#FCF9F4]/90">
                <span>🌱</span>
                <span className="font-medium tracking-wide">VEGAN CERTIFIED</span>
              </div>
            </div>
          </div>

          {/* Column 2: Flagship Boutiques */}
          <div className="space-y-4">
            <h3 className="label-caps text-[#D98C7A]">
              Flagship Boutiques
            </h3>
            <div className="space-y-3 text-xs text-[#FCF9F4]/80">
              <div>
                <p className="font-bold text-[#FCF9F4]">HÀ NỘI</p>
                <p className="text-[#FCF9F4]/60">18 Tràng Tiền, Quận Hoàn Kiếm, HÀ NỘI</p>
                <p className="text-[#D98C7A] text-[11px] mt-0.5 font-medium">Hotline: 024 3828 8989</p>
              </div>
              <div className="pt-1">
                <p className="font-bold text-[#FCF9F4]">TP. HỒ CHÍ MINH</p>
                <p className="text-[#FCF9F4]/60">65 Lê Lợi, Phường Bến Nghé, Quận 1, TP. HCM</p>
                <p className="text-[#D98C7A] text-[11px] mt-0.5 font-medium">Hotline: 028 3822 9999</p>
              </div>
            </div>
          </div>

          {/* Column 3: Dịch vụ & Pháp lý */}
          <div className="space-y-4">
            <h3 className="label-caps text-[#D98C7A]">
              Dịch vụ &amp; Pháp lý
            </h3>
            <ul className="space-y-2 text-xs text-[#FCF9F4]/75">
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <Sparkles className="w-3 h-3 text-[#D98C7A]" />
                  <span>Dịch vụ Da Liễu Concierge Support</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('routine')}
                  className="hover:text-white transition-colors"
                >
                  Chẩn đoán da cá nhân hóa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('science')}
                  className="hover:text-white transition-colors"
                >
                  Chứng nhận kiểm định lâm sàng
                </button>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  Chính sách vận chuyển &amp; Đổi trả
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  Bảo mật &amp; Quyền riêng tư
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  Điều khoản &amp; Thể lệ thành viên
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Privilege Club */}
          <div className="space-y-4">
            <h3 className="label-caps text-[#D98C7A]">
              Privilege Club
            </h3>
            <p className="text-xs text-[#FCF9F4]/75 leading-relaxed font-normal">
              Đăng ký nhận đặc quyền trải nghiệm sớm các dòng tinh chất giới hạn và thư mời tham vấn da đặc biệt cùng chuyên gia.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Địa chỉ email của bạn..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#042112]/60 border border-white/15 rounded-full py-2.5 pl-4 pr-20 text-xs text-[#FCF9F4] placeholder-[#FCF9F4]/40 focus:outline-none focus:border-[#D98C7A] transition-colors font-normal"
                />
                <button
                  type="submit"
                  className="absolute right-1 px-4 py-1.5 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs font-semibold tracking-wider transition-colors uppercase flex items-center gap-1 shadow-xs"
                >
                  <span>Gửi</span>
                  <Send className="w-2.5 h-2.5" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-[#A8BCA1] animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Chúc mừng bạn đã là thành viên Privilege Club!</span>
                </div>
              )}

              <p className="text-[10px] text-[#FCF9F4]/40 italic">
                Cam kết bảo mật danh tính tuyệt đối.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FCF9F4]/50 gap-4">
          <p>© 2026 Velvet &amp; Glow Skincare. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-[11px] uppercase tracking-widest text-[#FCF9F4]/40">
            <span>Haute Formulation</span>
            <span>•</span>
            <span>Bespoke Botanicals</span>
            <span>•</span>
            <span>Clinical Purity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
