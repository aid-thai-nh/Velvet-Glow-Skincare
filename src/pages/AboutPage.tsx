import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';
import { BOUTIQUES } from '../data/mockData';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export function AboutPage({ onNavigate, onOpenConsultation }: AboutPageProps) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Brand Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="label-caps text-[#51634D] block">
          Câu Chuyện Thương Hiệu
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-semibold text-[#042112]">
          Hành Trình Đánh Thức Vẻ Đẹp Bản Nguyên
        </h1>
        <p className="text-xs sm:text-sm text-[#424843] leading-relaxed font-normal">
          Khởi nguồn từ niềm say mê dược tính kỳ diệu của thực vật phương Đông và tri thức bào chế hiện đại, Velvet &amp; Glow ra đời như một nghi thức tĩnh tại dành riêng cho những làn da mong manh cần được chữa lành.
        </p>
      </div>

      {/* Founder Profile & Philosophy */}
      <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#1A3626]/8 shadow-botanical-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative aspect-4/5 rounded-2xl overflow-hidden bg-[#F6F3EE] shadow-md border border-[#1A3626]/8">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
              alt="Master Formulator Trần Uyên Phương"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/95 backdrop-blur-xs border border-[#1A3626]/8 text-center">
              <h3 className="font-serif-luxury text-lg font-bold text-[#042112]">
                Trần Uyên Phương
              </h3>
              <p className="text-[11px] text-[#727973]">
                Master Formulator &amp; Tiến sĩ Hóa Dược Thực Vật
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="label-caps text-[#D98C7A] block">
              Tâm Huyết Nhà Sáng Lập
            </span>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#042112]">
              &ldquo;Tôi tin rằng mỗi làn da tổn thương đều khao khát được trở về với tự nhiên thuần khiết.&rdquo;
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-[#424843] leading-relaxed font-normal">
              <p>
                Sau hơn 15 năm làm việc tại các viện nghiên cứu dược liệu tại Pháp và Thụy Sĩ, tôi chứng kiến ngày càng nhiều phụ nữ hiện đại phải đối mặt với hội chứng &ldquo;da kiệt quệ&rdquo; (Exhausted Skin Syndrome) do lạm dụng hóa chất lột tẩy mạnh và ô nhiễm môi trường khắc nghiệt.
              </p>
              <p>
                Năm 2021, tôi trở về Việt Nam và thành lập Velvet &amp; Glow với khát vọng kiến tạo một thương hiệu dược mỹ phẩm hữu cơ mang phẩm cấp quốc tế: nơi mà tinh hoa hoa trà tuyết, rau má rừng Lâm Đồng và dầu ép lạnh được kết tinh nhờ công nghệ chiết xuất siêu tới hạn CO2 tối tân nhất.
              </p>
            </div>

            <div className="pt-3 border-t border-[#1A3626]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs">
                <span className="font-serif-luxury text-lg font-bold text-[#042112] block">
                  Trần Uyên Phương
                </span>
                <span className="text-[11px] text-[#727973]">Thạc sĩ Hóa Dược Đại học Paris V</span>
              </div>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-botanical-card hover:shadow-botanical-hover transition-all"
              >
                Đặt lịch tư vấn da cùng Bác sĩ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="label-caps text-[#51634D] block">
            Nền Tảng Đạo Đức
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#042112] font-semibold">
            4 Giá Trị Bất Biến Tại Velvet &amp; Glow
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 space-y-3 shadow-botanical-card">
            <div className="w-10 h-10 rounded-full bg-[#A8BCA1]/20 text-[#1A3626] flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-[#042112]">
              Thuần Khiết Nguyên Bản
            </h3>
            <p className="text-xs text-[#424843] leading-relaxed font-normal">
              100% nguyên liệu canh tác hữu cơ không phân bón hóa học, thuốc trừ sâu hay chất biến đổi gen (Non-GMO).
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 space-y-3 shadow-botanical-card">
            <div className="w-10 h-10 rounded-full bg-[#A8BCA1]/20 text-[#1A3626] flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-[#042112]">
              Chuẩn Mực Khoa Học
            </h3>
            <p className="text-xs text-[#424843] leading-relaxed font-normal">
              Mỗi công thức đều trải qua thử nghiệm lâm sàng mù đôi trên 100+ tình nguyện viên có làn da nhạy cảm trước khi công bố.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 space-y-3 shadow-botanical-card">
            <div className="w-10 h-10 rounded-full bg-[#A8BCA1]/20 text-[#1A3626] flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-[#042112]">
              Minh Bạch Toàn Diện
            </h3>
            <p className="text-xs text-[#424843] leading-relaxed font-normal">
              Công khai 100% bảng thành phần INCI, nguồn gốc xuất xứ và nồng độ hoạt tính thực vật trên bao bì sản phẩm.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 space-y-3 shadow-botanical-card">
            <div className="w-10 h-10 rounded-full bg-[#A8BCA1]/20 text-[#1A3626] flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-[#042112]">
              Tôn Trọng Sự Sống
            </h3>
            <p className="text-xs text-[#424843] leading-relaxed font-normal">
              Chứng nhận Cruelty-Free, bao bì thủy tinh hổ phách tái chế vĩnh cửu và chung tay bảo vệ rừng nguyên sinh Việt Nam.
            </p>
          </div>
        </div>
      </div>

      {/* Boutiques Detailed View */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="label-caps text-[#51634D] block">
            Không Gian Trải Nghiệm
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#042112] font-semibold">
            Hệ Thống Flagship Boutiques
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BOUTIQUES.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#1A3626]/8 shadow-botanical-card flex flex-col"
            >
              <div className="aspect-16/9 overflow-hidden bg-[#F6F3EE]">
                <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="label-caps text-[#51634D]">
                      {b.city}
                    </span>
                    <span className="text-xs text-[#727973]">{b.hours}</span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-normal text-[#042112]">{b.name}</h3>

                  <p className="text-xs text-[#424843] flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-[#D98C7A] shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#1A3626]/5 text-xs">
                    <p className="font-bold text-[#042112]">Dịch vụ đặc quyền tại Boutique:</p>
                    <ul className="space-y-1 text-[#727973]">
                      {b.services.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1A3626]" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1A3626]/8 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1A3626]">Hotline: {b.phone}</span>
                  <button
                    onClick={onOpenConsultation}
                    className="px-5 py-2 rounded-full bg-[#1A3626] hover:bg-[#042112] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Đặt lịch trải nghiệm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
