import React, { useState } from 'react';
import { Sparkles, Sun, Moon, ShoppingBag, ShieldAlert, HeartHandshake } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/mockData';

interface RoutinePageProps {
  onAddBundleToCart: (products: Product[]) => void;
  onOpenDiagnostic: () => void;
  onOpenConsultation: () => void;
}

export function RoutinePage({
  onAddBundleToCart,
  onOpenDiagnostic,
  onOpenConsultation
}: RoutinePageProps) {
  const [activeTab, setActiveTab] = useState<'sos' | 'balance' | 'anti-aging'>('sos');

  const routines = {
    sos: {
      title: 'Phác Đồ SOS 14 Ngày Cấp Cứu Màng Ẩm',
      subtitle: 'Dành riêng cho da vừa trải qua laser, peel, treatment nặng hoặc châm chích bỏng rát',
      duration: '14 Ngày chu kỳ',
      recoveryRate: '98% Cải thiện độ dịu da',
      products: [PRODUCTS[3], PRODUCTS[0], PRODUCTS[1]], // Cleanser, Serum, Cream
      morningSteps: [
        {
          step: 1,
          name: 'Làm sạch sinh học dịu lành',
          instruction: 'Dùng 1 lần nhấn Gel Amino Acid táo, rửa nhẹ tay với nước mát, không chà xát.',
          product: PRODUCTS[3]
        },
        {
          step: 2,
          name: 'Serum cấp tế bào Bio-Cellular',
          instruction: 'Nhỏ 4 giọt serum hoa trà tuyết và rau má, áp nhẹ 2 lòng bàn tay ấm lên mặt.',
          product: PRODUCTS[0]
        },
        {
          step: 3,
          name: 'Bảo vệ khoáng chất Non-Nano',
          instruction: 'Thoa kem chống nắng khoáng để ngăn chặn tia UV làm tổn thương thêm lớp biểu bì mỏng đỏ.',
          product: PRODUCTS[4]
        }
      ],
      eveningSteps: [
        {
          step: 1,
          name: 'Làm sạch kép không bít tắc',
          instruction: 'Dịu dàng loại bỏ bụi bẩn mà không cuốn trôi lớp màng nhờn tự nhiên của da.',
          product: PRODUCTS[3]
        },
        {
          step: 2,
          name: 'Nuôi dưỡng hạ bì tổn thương',
          instruction: 'Thoa 5 giọt Serum Bio-Cellular, tập trung vào hai gò má và vùng da bị ửng đỏ.',
          product: PRODUCTS[0]
        },
        {
          step: 3,
          name: 'Khóa ẩm màng lipid đa tầng 3:1:1',
          instruction: 'Thoa lớp kem dưỡng nhung mềm chứa Ceramide để tạo khiên bảo vệ suốt đêm.',
          product: PRODUCTS[1]
        }
      ]
    },
    balance: {
      title: 'Phác Đồ Cân Bằng Dầu - Ẩm Tầng Sâu',
      subtitle: 'Dành cho làn da đổ dầu vùng chữ T nhưng bên dưới căng khô, lỗ chân lông to và mụn cám',
      duration: '21 Ngày',
      recoveryRate: '92% Ổn định lượng bã nhờn',
      products: [PRODUCTS[3], PRODUCTS[0], PRODUCTS[2]], // Cleanser, Serum, Oil
      morningSteps: [
        {
          step: 1,
          name: 'Thanh lọc bã nhờn sinh học',
          instruction: 'Rửa sạch dầu thừa ban đêm bằng amino acid từ táo mà không làm khô da.',
          product: PRODUCTS[3]
        },
        {
          step: 2,
          name: 'Bơm nước nội sinh phân tử nhỏ',
          instruction: 'Serum phục hồi màng ẩm thấm sâu, cấp nước tầng trung bì để giảm tiết dầu bù trừ.',
          product: PRODUCTS[0]
        },
        {
          step: 3,
          name: 'Khóa màng chống nắng khoáng',
          instruction: 'Tạo lớp finish satin khô thoáng, kiềm dầu tự nhiên không gây mụn.',
          product: PRODUCTS[4]
        }
      ],
      eveningSteps: [
        {
          step: 1,
          name: 'Làm sạch sâu thanh lọc lỗ chân lông',
          instruction: 'Rửa mặt kỹ vùng chữ T và hai bên cánh mũi.',
          product: PRODUCTS[3]
        },
        {
          step: 2,
          name: 'Cân bằng vi sinh vật Microbiome',
          instruction: 'Sử dụng serum Bio-Cellular hỗ trợ làm đều sắc diện và se mịn da.',
          product: PRODUCTS[0]
        },
        {
          step: 3,
          name: '1 Giọt Tinh dầu ép lạnh cân bằng',
          instruction: 'Xoa nóng 1 giọt dầu Tsubaki trong lòng bàn tay và áp nhẹ. Giúp cân bằng lượng bã nhờn tự thân.',
          product: PRODUCTS[2]
        }
      ]
    },
    'anti-aging': {
      title: 'Phác Đồ Tái Sinh Tế Bào & Trẻ Hóa Sinh Học',
      subtitle: 'Dành cho da sau 25 tuổi, bắt đầu xuất hiện rãnh cười mờ, da chùng nhão và xỉn màu thiếu sức sống',
      duration: '28 Ngày (Chu kỳ biểu bì)',
      recoveryRate: '95% Tăng độ đàn hồi',
      products: [PRODUCTS[0], PRODUCTS[1], PRODUCTS[2]], // Serum, Cream, Oil
      morningSteps: [
        {
          step: 1,
          name: 'Thức tỉnh làn da buổi sáng',
          instruction: 'Làm sạch nhẹ nhàng và thoa nước hoa hồng thảo mộc.',
          product: PRODUCTS[3]
        },
        {
          step: 2,
          name: 'Tăng sinh collagen thực vật',
          instruction: 'Dùng Serum Bio-Cellular giàu polyphenol hoa trà tuyết chống oxy hóa tối đa.',
          product: PRODUCTS[0]
        },
        {
          step: 3,
          name: 'Khóa ẩm & Bảo vệ DNA tế bào',
          instruction: 'Kem dưỡng kết hợp kem chống nắng khoáng Edelweiss ngăn ngừa đứt gãy sợi đàn hồi.',
          product: PRODUCTS[1]
        }
      ],
      eveningSteps: [
        {
          step: 1,
          name: 'Tái nạp năng lượng sau ngày dài',
          instruction: 'Làm sạch da kép và thư giãn với tinh dầu thơm thảo dược tự nhiên.',
          product: PRODUCTS[3]
        },
        {
          step: 2,
          name: 'Cocktail Tinh Chất & Dầu Thực Vật',
          instruction: 'Trộn 3 giọt Serum cùng 2 giọt Dầu thực vật ép lạnh, massage nâng cơ 3 phút.',
          product: PRODUCTS[2]
        },
        {
          step: 3,
          name: 'Kem dưỡng phục hồi sâu ban đêm',
          instruction: 'Áp kem dưỡng tái tạo màng lipid đa tầng để các tế bào tự nhân đôi trong giấc ngủ.',
          product: PRODUCTS[1]
        }
      ]
    }
  };

  const currentRoutine = routines[activeTab];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="label-caps text-[#51634D] block">
          Khoa Học Chu Trình Chăm Sóc Da
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-semibold text-[#042112]">
          Nghi Thức Phục Hồi Theo Chu Kỳ Sinh Học
        </h1>
        <p className="text-xs sm:text-sm text-[#424843] leading-relaxed font-normal">
          Làn da có nhịp sinh học tự nhiên: Buổi sáng kích hoạt hàng rào bảo vệ trước ngoại cảnh, buổi tối tái sinh và nhân đôi tế bào biểu bì. Hãy chọn phác đồ phù hợp với hiện trạng của bạn.
        </p>
      </div>

      {/* Routine Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-full bg-white border border-[#1A3626]/8 shadow-botanical-card max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveTab('sos')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === 'sos'
                ? 'bg-[#1A3626] text-white shadow-xs'
                : 'text-[#424843] hover:text-[#042112]'
            }`}
          >
            SOS Cấp Cứu Màng Ẩm (14 Ngày)
          </button>
          <button
            onClick={() => setActiveTab('balance')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === 'balance'
                ? 'bg-[#1A3626] text-white shadow-xs'
                : 'text-[#424843] hover:text-[#042112]'
            }`}
          >
            Cân Bằng Dầu - Ẩm Tầng Sâu
          </button>
          <button
            onClick={() => setActiveTab('anti-aging')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === 'anti-aging'
                ? 'bg-[#1A3626] text-white shadow-xs'
                : 'text-[#424843] hover:text-[#042112]'
            }`}
          >
            Tái Sinh &amp; Trẻ Hóa Sinh Học
          </button>
        </div>
      </div>

      {/* Routine Detail Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#1A3626]/8 shadow-botanical-card space-y-8">
        {/* Banner Info */}
        <div className="border-b border-[#1A3626]/8 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="label-caps text-[#D98C7A] block">
              Phác đồ điều trị khuyến nghị
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#042112] font-semibold">
              {currentRoutine.title}
            </h2>
            <p className="text-xs text-[#727973]">{currentRoutine.subtitle}</p>
          </div>

          <div className="flex gap-4 shrink-0">
            <div className="bg-[#F6F3EE] px-4 py-2 rounded-xl border border-[#1A3626]/5 text-center">
              <span className="text-[10px] uppercase text-[#727973] block font-semibold">Thời gian</span>
              <span className="text-xs font-bold text-[#042112]">{currentRoutine.duration}</span>
            </div>
            <div className="bg-[#F6F3EE] px-4 py-2 rounded-xl border border-[#1A3626]/5 text-center">
              <span className="text-[10px] uppercase text-[#727973] block font-semibold">Tỷ lệ dịu da</span>
              <span className="text-xs font-bold text-[#1A3626]">
                {currentRoutine.recoveryRate}
              </span>
            </div>
          </div>
        </div>

        {/* Morning & Evening Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Morning Routine */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#D98C7A]/30">
              <Sun className="w-5 h-5 text-[#D98C7A]" />
              <h3 className="font-serif-luxury text-xl font-semibold text-[#042112]">
                Nghi Thức Buổi Sáng: Khiên Chắn Sinh Học
              </h3>
            </div>

            <div className="space-y-3">
              {currentRoutine.morningSteps.map((s) => (
                <div
                  key={s.step}
                  className="bg-[#F6F3EE] rounded-xl p-4 border border-[#1A3626]/5 space-y-1 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="label-caps text-[#51634D]">
                      Bước 0{s.step}
                    </span>
                    <span className="text-[11px] font-semibold text-[#D98C7A]">
                      {s.product.name}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#042112]">{s.name}</h4>
                  <p className="text-xs text-[#424843] font-normal leading-relaxed">
                    {s.instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Evening Routine */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#1A3626]/20">
              <Moon className="w-5 h-5 text-[#1A3626]" />
              <h3 className="font-serif-luxury text-xl font-semibold text-[#042112]">
                Nghi Thức Buổi Tối: Tái Sinh &amp; Tự Chữa Lành
              </h3>
            </div>

            <div className="space-y-3">
              {currentRoutine.eveningSteps.map((s) => (
                <div
                  key={s.step}
                  className="bg-[#F6F3EE] rounded-xl p-4 border border-[#1A3626]/5 space-y-1 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="label-caps text-[#51634D]">
                      Bước 0{s.step}
                    </span>
                    <span className="text-[11px] font-semibold text-[#D98C7A]">
                      {s.product.name}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#042112]">{s.name}</h4>
                  <p className="text-xs text-[#424843] font-normal leading-relaxed">
                    {s.instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bundle Purchase Callout */}
        <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#D98C7A]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="label-caps text-[#D98C7A] block">
              Đặc quyền trọn gói Routine
            </span>
            <h4 className="font-serif-luxury text-xl font-semibold text-[#042112]">
              Sở Hữu Trọn Bộ 3 Sản Phẩm Thuộc Phác Đồ Này
            </h4>
            <p className="text-xs text-[#727973]">
              Tiết kiệm 15% khi mua theo chu trình + Miễn phí vận chuyển hỏa tốc &amp; Hộp quà lụa.
            </p>
          </div>

          <button
            onClick={() => onAddBundleToCart(currentRoutine.products)}
            className="px-8 py-3.5 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs uppercase tracking-wider font-semibold shadow-botanical-card hover:shadow-botanical-hover transition-all flex items-center gap-2 shrink-0"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Thêm Trọn Bộ Vào Giỏ Hàng</span>
          </button>
        </div>
      </div>

      {/* Skin Barrier Education Guide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 shadow-botanical-card space-y-4">
          <div className="flex items-center gap-2 text-[#D98C7A]">
            <ShieldAlert className="w-5 h-5" />
            <h3 className="font-serif-luxury text-lg font-bold text-[#042112]">
              4 Sai Lầm Khiến Màng Lipid Bị Phá Hủy
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs text-[#424843]">
            <li className="flex items-start gap-2">
              <span className="text-[#D98C7A] font-bold">✕</span>
              <span>
                <strong>Tẩy tế bào chết vật lý hoặc chà xát hạt thô:</strong> Làm trầy xước vi mô bề mặt tầng sừng.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D98C7A] font-bold">✕</span>
              <span>
                <strong>Rửa mặt bằng nước quá nóng:</strong> Cuốn trôi sạch bách lớp màng bã nhờn có lợi bảo vệ da.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D98C7A] font-bold">✕</span>
              <span>
                <strong>Lạm dụng acid nồng độ cao liên tục:</strong> Khiến da mỏng yếu và giãn mao mạch.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D98C7A] font-bold">✕</span>
              <span>
                <strong>Bỏ qua kem chống nắng:</strong> Tia tử ngoại phân hủy trực tiếp liên kết collagen và ceramides.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 shadow-botanical-card space-y-4">
          <div className="flex items-center gap-2 text-[#1A3626]">
            <HeartHandshake className="w-5 h-5" />
            <h3 className="font-serif-luxury text-lg font-bold text-[#042112]">
              Cần Tư Vấn Phác Đồ Riêng Biệt?
            </h3>
          </div>
          <p className="text-xs text-[#424843] leading-relaxed font-normal">
            Mỗi làn da là một cấu trúc tế bào độc bản với những biểu hiện bệnh lý và mức độ nhạy cảm khác nhau. Đội ngũ Chuyên gia Dược mỹ phẩm của Velvet &amp; Glow luôn sẵn sàng đồng hành chẩn đoán và theo dõi sát sao tiến trình phục hồi của bạn.
          </p>
          <div className="pt-2 flex gap-3">
            <button
              onClick={onOpenDiagnostic}
              className="flex-1 py-2.5 bg-[#1A3626] hover:bg-[#042112] text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Chẩn đoán online
            </button>
            <button
              onClick={onOpenConsultation}
              className="flex-1 py-2.5 bg-[#FAF7F2] hover:bg-[#F0EDE9] border border-[#1A3626]/15 text-[#1A3626] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Gặp Bác sĩ 1:1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
