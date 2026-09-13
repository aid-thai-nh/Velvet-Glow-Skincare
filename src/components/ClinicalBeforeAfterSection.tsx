import React, { useState } from 'react';
import { Sparkles, ShieldCheck, ArrowRight, Award, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINICAL_TRIALS } from '../data/mockData';

export function ClinicalBeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTrialIndex, setActiveTrialIndex] = useState(0);

  const trial = CLINICAL_TRIALS[activeTrialIndex];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1A3626]/10 pb-6">
        <div>
          <span className="label-caps text-[#51634D] block mb-1">
            Bằng Chứng Y Khoa Độc Lập
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#042112] font-semibold">
            Hiệu Quả Lâm Sàng Được Kiểm Nghiệm
          </h2>
          <p className="text-xs sm:text-sm text-[#424843] max-w-xl mt-2 font-normal">
            Không dựa trên cảm nhận chủ quan. Velvet &amp; Glow công bố toàn bộ dữ liệu đo quang phổ tế bào biểu bì và nồng độ mất nước xuyên biểu bì (TEWL).
          </p>
        </div>

        {/* Trial Switcher Tabs */}
        <div className="flex gap-2">
          {CLINICAL_TRIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTrialIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTrialIndex === idx
                  ? 'bg-[#1A3626] text-white shadow-xs'
                  : 'bg-white border border-[#1A3626]/15 text-[#424843] hover:bg-[#F6F3EE]'
              }`}
            >
              {t.durationWeeks === 2 ? 'Sau 14 Ngày' : 'Sau 28 Ngày'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F0EDE9] rounded-3xl p-6 sm:p-10 border border-[#1A3626]/8 shadow-xs">
        {/* Left: Interactive Before / After Split Slider */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div
            className="before-after-box relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-botanical-card select-none cursor-ew-resize border border-[#1A3626]/12 bg-[#042112]"
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* After Image (Background) */}
            <img
              src={trial.afterImage}
              alt="Làn da sau liệu trình"
              loading="eager"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80';
              }}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-[#1A3626]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
              Sau {trial.durationWeeks} tuần phục hồi
            </div>

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img
                src={trial.beforeImage}
                alt="Làn da trước liệu trình"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80';
                }}
                className="absolute inset-0 w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute top-4 left-4 bg-[#D98C7A]/95 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                Trước điều trị (Tổn thương)
              </div>
            </div>

            {/* Drag Handle Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg border border-[#1A3626]/20 flex items-center justify-center text-[#1A3626] font-bold text-xs">
                ↔
              </div>
            </div>

            <div className="absolute bottom-4 inset-x-4 bg-white/90 backdrop-blur-xs rounded-xl p-2.5 text-center text-[11px] text-[#424843] border border-[#1A3626]/10">
              Kéo thanh trượt để so sánh mức độ làm dịu mao mạch và thu nhỏ nang lông
            </div>
          </div>
        </div>

        {/* Right: Key Clinical Metrics & Verified Stamp */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#51634D]">
              <Award className="w-4 h-4 text-[#D98C7A]" />
              <span>Chứng nhận bởi {trial.institution}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#042112] leading-snug">
              {trial.title}
            </h3>
            <p className="text-xs text-[#727973]">
              Quy mô thử nghiệm: {trial.participantCount} phụ nữ có da mỏng yếu, nhạy cảm hoặc sau xâm lấn da liễu.
            </p>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-3.5 rounded-xl border border-[#1A3626]/8 text-center space-y-1 shadow-2xs">
              <span className="font-price text-2xl sm:text-3xl font-bold text-[#D98C7A]">
                -{trial.tewlReduction}%
              </span>
              <p className="text-[10px] sm:text-[11px] font-semibold text-[#042112] leading-tight">
                Mất nước qua biểu bì
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#1A3626]/8 text-center space-y-1 shadow-2xs">
              <span className="font-price text-2xl sm:text-3xl font-bold text-[#1A3626]">
                -{trial.erythemaReduction}%
              </span>
              <p className="text-[10px] sm:text-[11px] font-semibold text-[#042112] leading-tight">
                Độ ửng đỏ kích ứng
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#1A3626]/8 text-center space-y-1 shadow-2xs">
              <span className="font-price text-2xl sm:text-3xl font-bold text-[#51634D]">
                +{trial.hydrationIncrease}%
              </span>
              <p className="text-[10px] sm:text-[11px] font-semibold text-[#042112] leading-tight">
                Độ ẩm màng lipid
              </p>
            </div>
          </div>

          {/* Key Observation Quote */}
          <div className="bg-white/80 p-4 rounded-xl border-l-4 border-[#1A3626] text-xs text-[#424843] leading-relaxed italic">
            &ldquo;{trial.keyObservation}&rdquo;
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-[#727973] border-t border-[#1A3626]/8">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1A3626]" />
              <span>Dermatologically Tested</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-[#D98C7A]" />
              <span>Double-Blind Controlled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
