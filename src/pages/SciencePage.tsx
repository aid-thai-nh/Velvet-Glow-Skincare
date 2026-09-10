import React, { useState } from 'react';
import { Leaf, Award, Droplets, Sparkles, Clock, ShieldCheck, Microscope } from 'lucide-react';
import { BOTANICAL_INGREDIENTS } from '../data/mockData';

export function SciencePage() {
  const [activeDay, setActiveDay] = useState<number>(14);

  const timelineMilestones = [
    {
      day: 1,
      title: 'Hạ Nhiệt & Kháng Viêm Tức Thì',
      desc: 'Giảm 3.5°C nhiệt độ bề mặt da sau 15 phút. Khóa ngay cảm giác bỏng rát và châm chích nhờ Asiaticoside 95%.'
    },
    {
      day: 7,
      title: 'Tái Lập Màng Hydrolipid',
      desc: 'Phức hợp Ceramides 3:1:1 lấp đầy các vi tổn thương giữa các tế bào sừng, giảm 65% hiện tượng bong tróc.'
    },
    {
      day: 14,
      title: 'Tăng Cường Độ Ẩm Nội Sinh (+98%)',
      desc: 'Khả năng giữ nước xuyên biểu bì (TEWL) giảm thiểu ngoạn mục. Da lấy lại vẻ mềm mại, êm dịu không còn đỏ rát khi rửa mặt.'
    },
    {
      day: 28,
      title: 'Hoàn Tất Chu Kỳ Thay Da Tế Bào Mới',
      desc: 'Lớp biểu bì dày dặn và khỏe mạnh từ gốc rễ. Hàng rào miễn dịch tự nhiên được tái sinh trọn vẹn, chống chịu tốt trước môi trường.'
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="label-caps text-[#51634D] block">
          Khoa Học Dược Liệu Sinh Học
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-semibold text-[#042112]">
          Quyền Năng Tự Chữa Lành Của Tế Bào
        </h1>
        <p className="text-xs sm:text-sm text-[#424843] leading-relaxed font-normal">
          Tại Velvet &amp; Glow, chúng tôi không xem làn da là một bề mặt cần tẩy xóa bằng hóa chất lột tẩy mạnh. Làn da là một hệ sinh thái sống tinh vi, có khả năng tự phục hồi kỳ diệu khi được trao gửi đúng dưỡng chất thực vật chuẩn xác.
        </p>
      </div>

      {/* 1. Supercritical CO2 Extraction Breakdown */}
      <div className="bg-[#1A3626] text-[#FCF9F4] rounded-3xl p-8 sm:p-12 md:p-14 border border-[#1A3626] shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D98C7A] text-[10px] uppercase font-bold tracking-widest">
              <Microscope className="w-3.5 h-3.5" />
              <span>Đột Phá Chiết Xuất Siêu Tới Hạn (Supercritical CO2)</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold">
              Bảo Toàn 99.4% Hoạt Tính Thực Vật Mà Không Cần Dung Môi Hóa Học
            </h2>

            <p className="text-xs sm:text-sm text-[#FCF9F4]/80 leading-relaxed font-normal">
              Phương pháp chiết xuất truyền thống sử dụng cồn, hexane hoặc đun sôi nhiệt độ cao làm biến tính hơn 60% enzyme quý giá. Công nghệ CO2 siêu tới hạn tại Velvet &amp; Glow hoạt động ở nhiệt độ cơ thể (31.1°C) và áp suất kiểm soát khép kín:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                <span className="font-bold text-[#D98C7A] block uppercase text-[11px] tracking-wider">Nhiệt Độ Thấp &lt; 35°C</span>
                <p className="text-[#FCF9F4]/75 text-[11px]">
                  Bảo toàn 100% cấu trúc phân tử polyphenol và axit béo omega nhạy nhiệt.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                <span className="font-bold text-[#A8BCA1] block uppercase text-[11px] tracking-wider">0% Tạp Chất Hóa Học</span>
                <p className="text-[#FCF9F4]/75 text-[11px]">
                  CO2 tự bay hơi hoàn toàn sau khi chiết, để lại dịch chiết thực vật thuần khiết tuyệt đối.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 rounded-2xl p-7 border border-white/10 text-center space-y-4">
            <span className="font-price text-5xl sm:text-6xl font-bold text-white block tracking-tight">
              99.4%
            </span>
            <p className="label-caps text-[#D98C7A] font-semibold">
              Độ tinh khiết hoạt chất sinh học
            </p>
            <p className="text-xs text-[#FCF9F4]/70 leading-relaxed font-normal">
              Được kiểm định độc lập bởi Viện Dược Liệu Quốc Gia và hệ thống sắc ký lỏng hiệu năng cao HPLC Thụy Sĩ.
            </p>
            <div className="pt-3 border-t border-white/10 flex justify-center gap-3 text-[10px] uppercase tracking-wider text-[#FCF9F4]/60">
              <span>Phân tử sinh học</span>
              <span>•</span>
              <span>Độ thẩm thấu sâu</span>
              <span>•</span>
              <span>Bio-Compatible</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Botanical Herbarium */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="label-caps text-[#51634D] block">
            Dược Liệu Bản Địa &amp; Toàn Cầu
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#042112] font-semibold">
            Bách Thảo Phục Hồi Velvet &amp; Glow
          </h2>
          <p className="text-xs text-[#727973]">
            Mỗi loại thảo mộc được thu hái thủ công vào thời điểm hàm lượng hoạt chất đạt đỉnh sinh học trong ngày.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BOTANICAL_INGREDIENTS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#1A3626]/8 shadow-botanical-card hover:shadow-botanical-hover transition-all flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 relative aspect-square sm:aspect-auto bg-[#F6F3EE] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.vietnameseName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="sm:w-3/5 p-5 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="label-caps text-[#51634D] block">
                    {item.origin}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-semibold text-[#042112]">
                    {item.vietnameseName}
                  </h3>
                  <p className="text-[11px] italic text-[#727973]">{item.scientificName}</p>
                  <p className="text-xs text-[#424843] leading-relaxed font-normal pt-1">
                    {item.skinAction}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#1A3626]/5 space-y-1">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-[#727973]">
                    Hoạt chất cốt lõi:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.activeBioCompounds.map((comp, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full bg-[#F6F3EE] border border-[#1A3626]/8 text-[10px] text-[#042112] font-medium"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 28-Day Epidermal Cellular Regeneration Timeline */}
      <div className="bg-[#F0EDE9] rounded-3xl p-6 sm:p-12 border border-[#1A3626]/8 shadow-xs space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="label-caps text-[#51634D] block">
            Sinh Trắc Học Biểu Bì
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#042112] font-semibold">
            Chu Trình Tái Sinh Tế Bào 28 Ngày
          </h2>
          <p className="text-xs text-[#727973]">
            Theo dõi tiến trình phục hồi từng lớp tế bào biểu bì khi áp dụng phác đồ dược liệu Velvet &amp; Glow.
          </p>
        </div>

        {/* Milestone Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {timelineMilestones.map((m) => (
            <button
              key={m.day}
              onClick={() => setActiveDay(m.day)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activeDay === m.day
                  ? 'border-[#D98C7A] bg-white shadow-botanical-card'
                  : 'border-[#1A3626]/8 bg-white/70 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="label-caps text-[#51634D]">
                  Giai đoạn
                </span>
                <span className="font-price text-sm font-bold text-[#D98C7A]">
                  Ngày {m.day}
                </span>
              </div>
              <p className="text-xs font-bold text-[#042112] line-clamp-1">{m.title}</p>
            </button>
          ))}
        </div>

        {/* Active Milestone Card */}
        {(() => {
          const current = timelineMilestones.find((m) => m.day === activeDay) || timelineMilestones[0];
          return (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#1A3626]/8 shadow-botanical-card flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-[#A8BCA1]/20 text-[#1A3626] flex flex-col items-center justify-center shrink-0 border border-[#1A3626]/10 shadow-inner">
                <Clock className="w-5 h-5 mb-1" />
                <span className="font-price text-xl font-bold">N{current.day}</span>
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="label-caps text-[#D98C7A] block">
                  Cơ Chế Phục Hồi Sinh Học
                </span>
                <h3 className="font-serif-luxury text-2xl font-semibold text-[#042112]">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#424843] leading-relaxed font-normal">
                  {current.desc}
                </p>
              </div>
            </div>
          );
        })()}
      </div>

      {/* 4. Certifications & Clinical Trust */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-white p-5 rounded-2xl border border-[#1A3626]/8 shadow-botanical-card space-y-2">
          <Award className="w-6 h-6 text-[#D98C7A] mx-auto" />
          <h4 className="text-xs font-bold text-[#042112]">ECOCERT COSMOS</h4>
          <p className="text-[11px] text-[#727973]">Tiêu chuẩn hữu cơ khắt khe bậc nhất châu Âu</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#1A3626]/8 shadow-botanical-card space-y-2">
          <ShieldCheck className="w-6 h-6 text-[#1A3626] mx-auto" />
          <h4 className="text-xs font-bold text-[#042112]">ISO 22716 GMP</h4>
          <p className="text-[11px] text-[#727973]">Thực hành sản xuất dược mỹ phẩm chuẩn quốc tế</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#1A3626]/8 shadow-botanical-card space-y-2">
          <span className="text-2xl block">🐰</span>
          <h4 className="text-xs font-bold text-[#042112]">Leaping Bunny</h4>
          <p className="text-[11px] text-[#727973]">Không thử nghiệm trên động vật toàn cầu</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#1A3626]/8 shadow-botanical-card space-y-2">
          <span className="text-2xl block">🌿</span>
          <h4 className="text-xs font-bold text-[#042112]">Carbon Neutral</h4>
          <p className="text-[11px] text-[#727973]">100% trung hòa khí thải trong chuỗi cung ứng</p>
        </div>
      </div>
    </div>
  );
}
