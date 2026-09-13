import React, { useState } from 'react';
import {
  MapPin,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Microscope,
  Leaf,
  FlaskConical,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  HeartHandshake,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from '../types';
import { BOUTIQUES } from '../data/mockData';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export function AboutPage({ onNavigate, onOpenConsultation }: AboutPageProps) {
  const [activeTab, setActiveTab] = useState<'heritage' | 'lab' | 'ethics' | 'boutiques'>('heritage');
  const [selectedBoutiqueId, setSelectedBoutiqueId] = useState<string>(BOUTIQUES[0].id);

  // Timeline milestones
  const milestones = [
    {
      year: '2019',
      tag: 'Khởi Khai Nghiên Cứu',
      title: 'Đề tài Phục hồi Hàng rào Sinh học',
      desc: 'Tiến sĩ Trần Uyên Phương cùng cộng sự tại Viện Hóa Dược Thụy Sĩ hoàn thiện nghiên cứu chiết xuất Polyphenol hoa trà tuyết bằng CO2 siêu tới hạn.'
    },
    {
      year: '2021',
      tag: 'Nông Trường Hữu Cơ',
      title: 'Vùng Trồng Dược Liệu Bảo Tồn Lâm Đồng',
      desc: 'Khởi tạo 45 hecta canh tác hữu cơ rau má rừng và thảo mộc bản địa đạt chuẩn sinh thái Biodynamic không hóa chất.'
    },
    {
      year: '2023',
      tag: 'Bằng Sáng Chế Độc Quyền',
      title: 'Công thức Lipid Mô Phỏng Sinh Học 3:1:1',
      desc: 'Được bảo hộ độc quyền với tỷ lệ vàng Ceramides, Cholesterol và Acid béo tự do tương thích 99.4% màng tế bào người.'
    },
    {
      year: '2026',
      tag: 'Hiện Diện Tinh Hoa',
      title: 'Hệ Thống Flagship Boutiques & Y Khoa',
      desc: 'Điểm hẹn tái sinh làn da tại các vị trí di sản Hà Nội và TP. Hồ Chí Minh với dịch vụ soi da phổ quang và trị liệu cá nhân hóa.'
    }
  ];

  // Botanical laboratory principles
  const labPrinciples = [
    {
      icon: FlaskConical,
      title: 'Chiết Xuất Siêu Tới Hạn CO2 (SFE)',
      subtitle: 'Zero Dư Lượng Dung Môi Hóa Học',
      desc: 'Quy trình chiết xuất áp suất cao ở nhiệt độ thấp bảo toàn nguyên vẹn 99.2% hoạt tính sinh học của hoa trà tuyết và thảo dược quý, không làm biến tính dưỡng chất như phương pháp gia nhiệt truyền thống.'
    },
    {
      icon: Microscope,
      title: 'Cấu Trúc Tinh Thể Lỏng Đa Tầng',
      subtitle: 'Thẩm Thấu Vượt Qua Tầng Biểu Bì',
      desc: 'Hệ nhũ hóa mô phỏng màng lipid tự nhiên giúp các giọt dưỡng chất kích thước nano lướt êm qua lớp sừng, giải phóng dưỡng chất có kiểm soát theo từng tầng tế bào trong 24 giờ.'
    },
    {
      icon: Leaf,
      title: '100% Nguồn Gốc Thực Vật Bản Địa',
      subtitle: 'Bảo Tồn Dược Tính Phương Đông',
      desc: 'Tôn vinh nguồn dược thảo cổ truyền Việt Nam kết hợp tiêu chuẩn tinh khiết dược điển châu Âu (Ph. Eur.), đem lại năng lượng chữa lành dịu lành nhất.'
    },
    {
      icon: ShieldCheck,
      title: 'Chứng Thực Lâm Sàng Độc Lập',
      subtitle: 'Kiểm Định Mù Đôi Ngắt Quãng',
      desc: 'Toàn bộ công thức đều trải qua kiểm tra kích ứng gắt gao trên da nhạy cảm nhân tạo và tình nguyện viên có da tổn thương trước khi xuất xưởng.'
    }
  ];

  const selectedBoutique = BOUTIQUES.find((b) => b.id === selectedBoutiqueId) || BOUTIQUES[0];

  return (
    <div className="space-y-20 pb-20 overflow-x-hidden">
      {/* 1. CINEMATIC LUXURY HERO BANNER */}
      <section className="relative min-h-[520px] sm:min-h-[580px] flex items-center justify-center bg-[#042112] text-white overflow-hidden">
        {/* Background Image with High-end Gradient Tint */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617897903246-719242758050?w=1600&auto=format&fit=crop&q=85"
            alt="Velvet & Glow Botanical Lab"
            className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#042112] via-[#042112]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#042112]/90 via-transparent to-[#042112]/90" />
        </div>

        {/* Ambient Botanical Aura */}
        <div className="absolute w-[600px] h-[600px] bg-[#D98C7A]/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 pt-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#A8BCA1] text-xs font-semibold tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D98C7A]" />
            <span>Di Sản &amp; Triết Lý Thẩm Mỹ Sinh Học</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.12] tracking-tight"
          >
            Khi Y Khoa Hiện Đại <br />
            <span className="italic font-normal text-[#D98C7A]">Gặp Gỡ Bản Tự Nhiên</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base text-[#DCDAD5] font-light max-w-2xl mx-auto leading-relaxed"
          >
            Velvet &amp; Glow không tạo ra những phép màu tức thời bằng hóa chất tẩy lột. Chúng tôi tái thiết hàng rào da từ cấp độ tế bào, trả lại cho bạn vẻ đẹp nguyên bản tự sinh và vững chãi trước thời gian.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto border-t border-white/15"
          >
            <div>
              <span className="font-price text-2xl sm:text-3xl font-bold text-[#D98C7A]">100%</span>
              <p className="text-[11px] text-[#A8BCA1] uppercase tracking-wider mt-0.5">Thực vật hữu cơ</p>
            </div>
            <div>
              <span className="font-price text-2xl sm:text-3xl font-bold text-white">3:1:1</span>
              <p className="text-[11px] text-[#A8BCA1] uppercase tracking-wider mt-0.5">Tỷ lệ lipid vàng</p>
            </div>
            <div>
              <span className="font-price text-2xl sm:text-3xl font-bold text-[#D98C7A]">0.0%</span>
              <p className="text-[11px] text-[#A8BCA1] uppercase tracking-wider mt-0.5">Chất tạo mùi nhân tạo</p>
            </div>
            <div>
              <span className="font-price text-2xl sm:text-3xl font-bold text-white">45 Ha</span>
              <p className="text-[11px] text-[#A8BCA1] uppercase tracking-wider mt-0.5">Vườn dược liệu bảo tồn</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. NAVIGATION TABS FOR ABOUT MODULES */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 bg-[#EBE8E3] rounded-full border border-[#1A3626]/10 shadow-inner max-w-full overflow-x-auto">
            {[
              { id: 'heritage', label: 'Tâm Huyết Nhà Sáng Lập' },
              { id: 'lab', label: 'Công Nghệ Phòng Lab' },
              { id: 'ethics', label: 'Hành Trình Phát Triển' },
              { id: 'boutiques', label: 'Hệ Thống Boutiques' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#1A3626] text-white shadow-xs'
                    : 'text-[#424843] hover:text-[#042112]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CONTENT BASED ON ACTIVE TAB */}
      <AnimatePresence mode="wait">
        {activeTab === 'heritage' && (
          <motion.div
            key="heritage"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16"
          >
            {/* Founder In-depth Story */}
            <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#1A3626]/8 shadow-botanical-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 relative">
                  <div className="aspect-4/5 rounded-2xl overflow-hidden bg-[#F6F3EE] shadow-lg border border-[#1A3626]/10">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                      alt="Master Formulator Trần Uyên Phương"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating Certificate Card */}
                  <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#1A3626]/10 shadow-botanical-card max-w-[240px]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#1A3626]">
                      <Award className="w-4 h-4 text-[#D98C7A]" />
                      <span>Thạc Sĩ Hóa Dược Paris V</span>
                    </div>
                    <p className="text-[10px] text-[#727973] mt-1">
                      15+ năm chuyên sâu nghiên cứu màng lipid và công nghệ chiết xuất tế bào thực vật.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <span className="label-caps text-[#D98C7A] block">
                    Lời Mở Đầu Từ Người Sáng Lập
                  </span>

                  <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#042112] leading-tight">
                    &ldquo;Làn da của bạn không cần bị khuất phục bởi hóa chất lột tẩy mạnh. Làn da cần được thấu cảm và nuôi dưỡng.&rdquo;
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm text-[#424843] leading-relaxed font-normal">
                    <p>
                      Tôi bắt đầu câu chuyện Velvet &amp; Glow sau hơn một thập kỷ làm việc tại các viện bào chế tại Paris và Basel. Tôi nhận ra rằng: phụ nữ Việt Nam sở hữu làn da tinh tế nhưng đang phải gánh chịu mức độ tổn thương màng bảo vệ nghiêm trọng nhất do khí hậu nhiệt đới nắng gắt, ô nhiễm bụi mịn PM2.5 và thói quen sử dụng các sản phẩm acid nồng độ cao không kiểm soát.
                    </p>
                    <p>
                      Chúng tôi chọn con đường khó khăn hơn: tìm về rừng nguyên sinh Lâm Đồng, hợp tác cùng các hộ nông dân bản địa để thuần hóa những cây trà tuyết cổ thụ và rau má nhung. Chúng tôi không chiết xuất bằng cồn hay ether độc hại, mà đầu tư triệu đô vào lò chiết CO2 siêu tới hạn — để từng giọt tinh chất chạm vào da bạn đều là tinh túy thuần túy nhất mà thiên nhiên ban tặng.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1A3626]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="font-serif-luxury text-xl font-bold text-[#042112] block">
                        Trần Uyên Phương
                      </span>
                      <span className="text-xs text-[#51634D]">Nhà Sáng Lập &amp; Master Formulator Velvet &amp; Glow</span>
                    </div>

                    <button
                      onClick={onOpenConsultation}
                      className="px-6 py-3 bg-[#1A3626] hover:bg-[#042112] text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs transition-all"
                    >
                      Đặt hẹn tư vấn da trực tiếp
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="label-caps text-[#51634D] block">Cam Kết Bản Nguyên</span>
                <h3 className="font-serif-luxury text-3xl font-semibold text-[#042112]">
                  4 Tiêu Chuẩn Vàng Bất Biến
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    num: '01',
                    title: 'Biomimetic 100%',
                    desc: 'Cấu trúc tương đồng hoàn toàn với lớp dầu tự nhiên của cơ thể người, hấp thu trọn vẹn mà không gây tắc nghẽn.'
                  },
                  {
                    num: '02',
                    title: 'CO2 Supercritical',
                    desc: 'Không sử dụng nhiệt lượng cao hay hóa chất dung môi, giữ trọn 99.2% vitamin và enzyme tự nhiên của dược liệu.'
                  },
                  {
                    num: '03',
                    title: 'Bảo Tồn Bản Địa',
                    desc: 'Nguồn thảo mộc được thu hái thủ công bền vững, bảo vệ thảm thực vật rừng Tây Nguyên và tạo kế sinh nhai cho đồng bào.'
                  },
                  {
                    num: '04',
                    title: 'Dược Phẩm Kính Phách',
                    desc: 'Bao bì thủy tinh hổ phách quang học cản tia UV, giữ cho công thức ổn định không cần chất bảo quản nhân tạo paraben.'
                  }
                ].map((item) => (
                  <div
                    key={item.num}
                    className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 space-y-3 shadow-botanical-card hover:shadow-botanical-hover transition-all"
                  >
                    <span className="font-serif-luxury text-3xl font-bold text-[#D98C7A]/80 block">
                      {item.num}
                    </span>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#042112]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#424843] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'lab' && (
          <motion.div
            key="lab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
          >
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="label-caps text-[#51634D] block">Tiêu Chuẩn Bào Chế Y Khoa</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#042112]">
                Khoa Học Đột Phá Sau Từng Giọt Tinh Chất
              </h2>
              <p className="text-xs sm:text-sm text-[#424843]">
                Tại phòng nghiên cứu sinh học Velvet &amp; Glow, chúng tôi kết hợp tinh hoa thảo dược truyền thống với công nghệ phân tử thế hệ mới.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {labPrinciples.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-8 border border-[#1A3626]/8 shadow-botanical-card space-y-4 hover:border-[#1A3626]/20 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#A8BCA1]/20 text-[#1A3626] flex items-center justify-center shadow-xs">
                        <IconComponent className="w-6 h-6 text-[#1A3626]" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#D98C7A] font-bold uppercase tracking-wider block">
                          {item.subtitle}
                        </span>
                        <h3 className="font-serif-luxury text-xl font-bold text-[#042112] mt-0.5">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#424843] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#1A3626]/8 flex items-center gap-2 text-[11px] font-semibold text-[#51634D]">
                      <CheckCircle2 className="w-4 h-4 text-[#1A3626]" />
                      <span>Đạt chuẩn kiểm định Da liễu Thụy Sĩ &amp; EU CPNP</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visual Process Section */}
            <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#1A3626]/10 text-center space-y-6">
              <span className="label-caps text-[#51634D] block">Vòng Lặp Chất Lượng Khép Kín</span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#042112]">
                Từ Vườn Trồng Sinh Thái Đến Lọ Thủy Tinh Của Bạn
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
                <div className="p-4 bg-white rounded-2xl border border-[#1A3626]/8 space-y-2">
                  <span className="text-xs font-bold text-[#D98C7A]">Bước 1: Tuyển Lựa Sinh Học</span>
                  <p className="text-xs text-[#424843]">Thu hái hoa trà vào thời điểm sương sớm đọng nhiều nhất để hàm lượng polyphenol đạt đỉnh.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#1A3626]/8 space-y-2">
                  <span className="text-xs font-bold text-[#1A3626]">Bước 2: Phân Tách Áp Suất CO2</span>
                  <p className="text-xs text-[#424843]">Dùng khí CO2 lỏng siêu tới hạn bóc tách từng phân tử lipid tự nhiên ở 31.1°C hoàn toàn không độc hại.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#1A3626]/8 space-y-2">
                  <span className="text-xs font-bold text-[#51634D]">Bước 3: Đóng Rót Vô Trùng</span>
                  <p className="text-xs text-[#424843]">Phòng sạch cấp độ 100 theo tiêu chuẩn GMP Dược phẩm, ngăn ngừa tuyệt đối sự xâm nhập của vi sinh vật.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'ethics' && (
          <motion.div
            key="ethics"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
          >
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="label-caps text-[#51634D] block">Cột Mốc Phát Triển</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#042112]">
                Hành Trình Tái Sinh &amp; Phát Triển Bền Vững
              </h2>
              <p className="text-xs sm:text-sm text-[#424843]">
                Mỗi bước đi của Velvet &amp; Glow đều kiên định với sứ mệnh bảo vệ làn da con người và sự sống của tự nhiên.
              </p>
            </div>

            {/* Interactive Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 shadow-botanical-card flex flex-col justify-between space-y-4 hover:shadow-botanical-hover transition-all"
                >
                  <div className="space-y-2">
                    <span className="font-price text-3xl font-bold text-[#1A3626]">
                      {m.year}
                    </span>
                    <span className="text-[10px] bg-[#D98C7A]/15 text-[#D98C7A] font-bold px-2 py-0.5 rounded-full block w-fit">
                      {m.tag}
                    </span>
                    <h4 className="font-serif-luxury text-base font-bold text-[#042112] pt-1">
                      {m.title}
                    </h4>
                    <p className="text-xs text-[#424843] leading-relaxed">
                      {m.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1A3626]/8 text-[11px] text-[#51634D] font-medium flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#1A3626]" />
                    <span>Đã hoàn thành</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'boutiques' && (
          <motion.div
            key="boutiques"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
          >
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="label-caps text-[#51634D] block">Không Gian Di Sản</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#042112]">
                Hệ Thống Flagship Boutiques
              </h2>
              <p className="text-xs sm:text-sm text-[#424843]">
                Nơi bạn được thả lỏng giác quan trong mùi hương gỗ tuyết tùng, thưởng thức trà hoa cúc hữu cơ và trải nghiệm phác đồ soi da đa tầng.
              </p>
            </div>

            {/* Boutique Selector & Spotlight */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-[#1A3626]/8 shadow-botanical-card">
              {/* Image Preview */}
              <div className="lg:col-span-7 aspect-16/10 rounded-2xl overflow-hidden bg-[#F6F3EE] shadow-md border border-[#1A3626]/8 relative">
                <img
                  src={selectedBoutique.image}
                  alt={selectedBoutique.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#042112]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs">
                  {selectedBoutique.city} • Di Sản Kiến Trúc
                </div>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    {BOUTIQUES.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setSelectedBoutiqueId(b.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          selectedBoutiqueId === b.id
                            ? 'bg-[#1A3626] text-white'
                            : 'bg-[#F0EDE9] text-[#424843] hover:bg-[#EBE8E3]'
                        }`}
                      >
                        {b.city}
                      </button>
                    ))}
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#042112]">
                    {selectedBoutique.name}
                  </h3>

                  <p className="text-xs text-[#424843] flex items-start gap-2 pt-1">
                    <MapPin className="w-4 h-4 text-[#D98C7A] shrink-0 mt-0.5" />
                    <span>{selectedBoutique.address}</span>
                  </p>
                  <p className="text-xs text-[#727973] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#51634D]" />
                    <span>Giờ mở cửa: {selectedBoutique.hours}</span>
                  </p>
                  <p className="text-xs text-[#727973] flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#51634D]" />
                    <span>Hotline lễ tân: {selectedBoutique.phone}</span>
                  </p>
                </div>

                {/* Services Checklist */}
                <div className="space-y-2 bg-[#FAF7F2] p-4 rounded-2xl border border-[#1A3626]/6">
                  <span className="text-xs font-bold text-[#042112] block">
                    Đặc quyền miễn phí khi ghé thăm:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5 text-xs text-[#424843]">
                    {selectedBoutique.services.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#1A3626] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3.5 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Đặt Lịch Thăm Khám &amp; Soi Da Miễn Phí</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. FINAL CTA QUOTE BANNER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#1A3626] text-white p-8 sm:p-14 overflow-hidden text-center space-y-6 shadow-2xl">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#D98C7A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#A8BCA1]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="label-caps text-[#A8BCA1] block">Bắt Đầu Nghi Thức Của Riêng Bạn</span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold leading-snug">
              Sẵn Sàng Trao Lại Sự Bình Yên <br /> Cho Làn Da Tổn Thương?
            </h2>
            <p className="text-xs sm:text-sm text-[#DCDAD5] leading-relaxed font-light">
              Khám phá phác đồ phục hồi được cá nhân hóa qua bài chẩn đoán trực tuyến 60 giây hoặc gặp trực tiếp chuyên gia da liễu tại Boutique.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#D98C7A] hover:bg-[#C97B69] text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs transition-all"
              >
                Xem Bộ Sưu Tập Dược Liệu
              </button>
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Đặt Lịch Chuyên Gia
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
