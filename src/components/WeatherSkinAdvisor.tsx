import React, { useState } from 'react';
import { CloudSun, Sun, CloudRain, Droplets, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';

interface WeatherSkinAdvisorProps {
  onNavigate: (route: PageRoute) => void;
  onOpenDiagnostic: () => void;
}

type CityPreset = 'hanoi' | 'hcm' | 'danang' | 'dalat';

interface CityWeather {
  cityName: string;
  temp: number;
  humidity: number;
  uvIndex: number;
  airQuality: string;
  primaryRisk: string;
  barrierAdvice: string;
  recommendedActive: string;
}

export function WeatherSkinAdvisor({ onNavigate, onOpenDiagnostic }: WeatherSkinAdvisorProps) {
  const [selectedCity, setSelectedCity] = useState<CityPreset>('hcm');

  const weatherPresets: Record<CityPreset, CityWeather> = {
    hcm: {
      cityName: 'TP. Hồ Chí Minh',
      temp: 33,
      humidity: 78,
      uvIndex: 9,
      airQuality: 'Bụi mịn PM2.5 trung bình',
      primaryRisk: 'Tia UV cực đại & Dầu nhờn oxy hóa màng lipid',
      barrierAdvice: 'Ưu tiên kết cấu serum mỏng nhẹ gốc nước, cấp ẩm thẩm thấu nhanh không bết rít và bổ sung kem chống nắng vật lý khoáng chất.',
      recommendedActive: 'Rau má Centella Asiatica & Niacinamide 5%'
    },
    hanoi: {
      cityName: 'Hà Nội',
      temp: 26,
      humidity: 82,
      uvIndex: 6,
      airQuality: 'Bụi mịn cao (AQI 145)',
      primaryRisk: 'Tổn thương sừng do bụi mịn ô nhiễm đô thị',
      barrierAdvice: 'Rửa mặt sạch sâu dịu nhẹ không sulfat, tăng cường màng khóa ẩm sinh học 3:1:1 để ngăn chặn vi hạt bụi thâm nhập lỗ chân lông.',
      recommendedActive: 'Polyphenol Hoa Trà Tuyết & Ceramides thực vật'
    },
    danang: {
      cityName: 'Đà Nẵng & Miền Trung',
      temp: 31,
      humidity: 74,
      uvIndex: 8,
      airQuality: 'Trong lành (AQI 38)',
      primaryRisk: 'Mất nước bề mặt do gió biển và nắng gắt',
      barrierAdvice: 'Cấp nước nội sinh sâu bằng Hyaluronic Acid đa phân tử kết hợp xịt khoáng thực vật cân bằng điện giải tức thì.',
      recommendedActive: 'Squalane Olive & Chiết xuất Lô Hội hữu cơ'
    },
    dalat: {
      cityName: 'Đà Lạt & Tây Nguyên',
      temp: 18,
      humidity: 88,
      uvIndex: 7,
      airQuality: 'Rất tốt (AQI 22)',
      primaryRisk: 'Khô rát, nứt nẻ và giãn mao mạch vì biên độ nhiệt lớn',
      barrierAdvice: 'Liệu trình khóa ẩm đậm đặc ban đêm với tinh dầu ép lạnh hữu cơ, bảo vệ màng hydrolipid khỏi không khí lạnh sương mù.',
      recommendedActive: 'Dầu Dưỡng Phục Hồi & Bơ Hạt Mỡ sinh học'
    }
  };

  const current = weatherPresets[selectedCity];

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#1A3626]/8 shadow-botanical-card space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1A3626]/8">
          <div>
            <div className="flex items-center gap-2">
              <span className="label-caps text-[#51634D]">Phân Tích Môi Trường Sống</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D98C7A] animate-pulse" />
              <span className="text-[10px] bg-[#1A3626]/8 text-[#1A3626] font-bold px-2 py-0.5 rounded-full">
                Thời Gian Thực
              </span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#042112] mt-1">
              Gợi Ý Dưỡng Da Theo Khí Hậu &amp; Thời Tiết
            </h3>
          </div>

          {/* City Switcher Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-[#FAF7F2] p-1.5 rounded-2xl border border-[#1A3626]/8">
            {[
              { id: 'hcm', label: 'TP. HCM' },
              { id: 'hanoi', label: 'Hà Nội' },
              { id: 'danang', label: 'Đà Nẵng' },
              { id: 'dalat', label: 'Đà Lạt' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCity(tab.id as CityPreset)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCity === tab.id
                    ? 'bg-[#1A3626] text-white shadow-2xs'
                    : 'text-[#424843] hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#1A3626]/6 text-center space-y-1">
            <span className="text-[11px] text-[#727973] uppercase font-bold">Nhiệt Độ</span>
            <div className="font-price text-2xl sm:text-3xl font-bold text-[#042112]">
              {current.temp}°C
            </div>
            <span className="text-[10px] text-[#51634D]">Khu vực {current.cityName}</span>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#1A3626]/6 text-center space-y-1">
            <span className="text-[11px] text-[#727973] uppercase font-bold">Độ Ẩm Không Khí</span>
            <div className="font-price text-2xl sm:text-3xl font-bold text-[#1A3626]">
              {current.humidity}%
            </div>
            <span className="text-[10px] text-[#51634D]">Mất nước qua da (TEWL)</span>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#1A3626]/6 text-center space-y-1">
            <span className="text-[11px] text-[#727973] uppercase font-bold">Chỉ Số Tia UV</span>
            <div className="font-price text-2xl sm:text-3xl font-bold text-[#D98C7A]">
              UV {current.uvIndex}
            </div>
            <span className="text-[10px] text-[#D98C7A] font-bold">
              {current.uvIndex >= 8 ? 'Rất cao • Cần chống nắng' : 'Trung bình'}
            </span>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#1A3626]/6 text-center space-y-1">
            <span className="text-[11px] text-[#727973] uppercase font-bold">Chất Lượng Không Khí</span>
            <div className="font-serif-luxury text-base sm:text-lg font-bold text-[#042112] pt-1 truncate">
              {current.airQuality.split(' ')[0]}
            </div>
            <span className="text-[10px] text-[#727973] truncate block">{current.airQuality}</span>
          </div>
        </div>

        {/* Diagnosis & Prescriptive Advice Callout */}
        <div className="bg-[#1A3626] text-white rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 text-[#D98C7A] text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-[#D98C7A]" />
              <span>Nguy cơ tiềm ẩn: {current.primaryRisk}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#FCF9F4]/90 font-light leading-relaxed">
              {current.barrierAdvice}
            </p>
            <p className="text-xs text-[#A8BCA1] font-medium pt-1">
              Hoạt chất ưu tiên: <strong>{current.recommendedActive}</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#D98C7A] hover:bg-[#C97B69] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
            >
              Chẩn đoán cá nhân
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Xem sản phẩm đề xuất
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
