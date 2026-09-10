import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, Sun, Moon, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS } from '../data/mockData';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPrescriptionToCart: (products: Product[]) => void;
}

export function DiagnosticModal({
  isOpen,
  onClose,
  onAddPrescriptionToCart
}: DiagnosticModalProps) {
  const [step, setStep] = useState(1);
  const [skinType, setSkinType] = useState('dry-sensitive');
  const [barrierDamage, setBarrierDamage] = useState('high-irritation');
  const [environment, setEnvironment] = useState('ac-pollution');
  const [goal, setGoal] = useState('barrier-repair');
  const [analyzing, setAnalyzing] = useState(false);
  const [resultReady, setResultReady] = useState(false);

  const handleCalculate = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResultReady(true);
    }, 1100);
  };

  const handleReset = () => {
    setStep(1);
    setResultReady(false);
    setAnalyzing(false);
  };

  // Curated products based on diagnostic
  const recommended = [
    PRODUCTS[0], // Serum Bio Recovery
    PRODUCTS[1], // Cream Barrier Lipid
    PRODUCTS[3]  // Cleanser
  ];

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

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#FCF9F4] text-[#1C1C19] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#1A3626]/10 max-h-[90vh] flex flex-col z-10"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#1A3626]/8 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#D98C7A]/15 text-[#D98C7A]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#042112]">
                    Chẩn Đoán Hàng Rào Biểu Bì Tế Bào
                  </h2>
                  <p className="text-[11px] text-[#727973]">
                    Công nghệ Biomimetic Skin Consultation độc quyền Velvet &amp; Glow
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 text-[#727973] hover:text-[#042112] rounded-full hover:bg-[#F6F3EE] transition-colors"
                aria-label="Đóng cửa sổ chẩn đoán"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Content Area */}
            <div className="overflow-y-auto p-6 space-y-6">
              {analyzing ? (
                <div className="py-20 text-center space-y-4">
                  <div className="w-16 h-16 border-4 border-[#1A3626]/20 border-t-[#D98C7A] rounded-full animate-spin mx-auto" />
                  <h3 className="text-xl font-semibold text-[#042112]">
                    Đang phân tích vi mô hàng rào bảo vệ da...
                  </h3>
                  <p className="text-xs text-[#727973] max-w-md mx-auto leading-relaxed">
                    Đối chiếu 120 tiêu chí lipid sinh học, mức độ mất nước qua biểu bì (TEWL) và hoạt chất thực vật tương thích.
                  </p>
                </div>
              ) : resultReady ? (
                /* Result Screen */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Diagnosis Score Card */}
                  <div className="bg-[#1A3626] text-[#FCF9F4] p-6 rounded-2xl space-y-4 relative overflow-hidden border border-[#1A3626]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="label-caps text-[#D98C7A] block">
                          KẾT QUẢ CHẨN ĐOÁN
                        </span>
                        <h3 className="text-2xl font-semibold text-white mt-0.5">
                          Hàng Rào Lipid Đang Tổn Thương Cấp Tính
                        </h3>
                        <p className="text-xs text-[#FCF9F4]/75 mt-1 font-normal">
                          Chỉ số sừng hóa suy yếu do mất cân bằng Ceramides và thiếu ẩm tầng sâu.
                        </p>
                      </div>

                      <div className="text-center bg-white/10 p-3.5 rounded-xl border border-white/15 shrink-0">
                        <span className="text-[10px] uppercase tracking-wider text-[#FCF9F4]/60 block font-semibold">
                          Điểm Khỏe Da
                        </span>
                        <span className="font-price text-3xl font-bold text-[#D98C7A]">
                          58<span className="text-sm font-normal text-white/60">/100</span>
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-white/10 text-xs">
                      <div>
                        <span className="text-[#FCF9F4]/50 block text-[10px]">Độ nhạy cảm:</span>
                        <span className="font-semibold text-rose-300">Cao (Dễ ửng đỏ)</span>
                      </div>
                      <div>
                        <span className="text-[#FCF9F4]/50 block text-[10px]">Thất thoát ẩm TEWL:</span>
                        <span className="font-semibold text-amber-300">Nghiêm trọng</span>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <span className="text-[#FCF9F4]/50 block text-[10px]">Thời gian tái tạo:</span>
                        <span className="font-semibold text-[#A8BCA1]">14 - 21 ngày</span>
                      </div>
                    </div>
                  </div>

                  {/* Bespoke Daily Routine */}
                  <div className="space-y-3">
                    <h4 className="label-caps text-[#042112]">
                      Phác Đồ Phục Hồi Cá Nhân Hóa Khuyên Dùng:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-white p-4 rounded-xl border border-[#1A3626]/8 space-y-2 shadow-2xs">
                        <div className="flex items-center gap-1.5 font-bold text-[#042112]">
                          <Sun className="w-4 h-4 text-[#D98C7A]" />
                          <span>Nghi Thức Buổi Sáng</span>
                        </div>
                        <ol className="list-decimal list-inside space-y-1 text-[#424843]">
                          <li>Làm sạch với Gel Amino Acid Táo Dịu Lành</li>
                          <li>3 giọt Serum Phục Hồi Tế Bào Bio-Cellular</li>
                          <li>Kem Chống Nắng Khoáng Non-Nano SPF50+</li>
                        </ol>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-[#1A3626]/8 space-y-2 shadow-2xs">
                        <div className="flex items-center gap-1.5 font-bold text-[#042112]">
                          <Moon className="w-4 h-4 text-[#1A3626]" />
                          <span>Nghi Thức Buổi Tối</span>
                        </div>
                        <ol className="list-decimal list-inside space-y-1 text-[#424843]">
                          <li>Rửa mặt kép với sữa rửa mặt dược liệu</li>
                          <li>5 giọt Serum phục hồi màng ẩm hạ bì</li>
                          <li>Khóa ẩm với Kem Tái Tạo Màng Lipid 3:1:1</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Recommended Bundle Products */}
                  <div className="bg-[#F0EDE9] p-5 rounded-2xl border border-[#1A3626]/8 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#042112]">
                        Bộ 3 Dược Phẩm Cấp Cứu Màng Ẩm (Tiết kiệm 15%)
                      </span>
                      <span className="font-price text-base font-bold text-[#042112]">
                        4.100.000₫{' '}
                        <span className="text-xs line-through text-[#727973] font-normal">
                          4.690.000₫
                        </span>
                      </span>
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {recommended.map((p) => (
                        <div
                          key={p.id}
                          className="bg-white p-2.5 rounded-xl border border-[#1A3626]/5 flex items-center gap-2 shrink-0 w-48 shadow-2xs"
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-10 h-10 object-cover rounded-md bg-[#F6F3EE]"
                          />
                          <div className="min-w-0">
                            <p className="text-[11px] font-semibold text-[#042112] truncate">{p.name}</p>
                            <p className="text-[10px] text-[#727973]">{p.volume}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex gap-3">
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          onAddPrescriptionToCart(recommended);
                          onClose();
                        }}
                        className="flex-1 py-3.5 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 shadow-botanical-card hover:shadow-botanical-hover transition-all"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Thêm Trọn Bộ Phác Đồ Vào Giỏ</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ rotate: -90 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleReset}
                        className="p-3 bg-white hover:bg-[#F6F3EE] rounded-full border border-[#1A3626]/15 text-[#042112] transition-colors"
                        title="Làm lại bài kiểm tra"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Quiz Questions */
                <div className="space-y-6">
                  {/* Progress Steps */}
                  <div className="flex items-center justify-between text-xs text-[#727973]">
                    <span>Bước {step} / 4</span>
                    <span className="font-semibold text-[#042112]">
                      {step === 1 && 'Loại da & biểu hiện'}
                      {step === 2 && 'Hiện trạng hàng rào bảo vệ'}
                      {step === 3 && 'Tác nhân môi trường'}
                      {step === 4 && 'Mục tiêu phục hồi'}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#1A3626]/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#1A3626] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / 4) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-3"
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-[#042112]">
                        Làn da của bạn thường có biểu hiện như thế nào trong ngày?
                      </h3>
                      <div className="space-y-2 text-xs">
                        {[
                          {
                            id: 'dry-sensitive',
                            title: 'Khô ráp, căng kích và rất dễ đỏ',
                            desc: 'Bề mặt sần sùi, châm chích khi đổi thời tiết hoặc thoa mỹ phẩm mới.'
                          },
                          {
                            id: 'oily-dehydrated',
                            title: 'Đổ nhiều dầu nhưng bên dưới căng khô',
                            desc: 'Vùng chữ T bóng nhờn, lỗ chân lông to nhưng má bị khô thiếu nước.'
                          },
                          {
                            id: 'post-treatment',
                            title: 'Vừa can thiệp thẩm mỹ (Peel, Laser, Retinoid mạnh)',
                            desc: 'Da đang trong giai đoạn nhạy cảm cao độ, mỏng đỏ và cần hồi sinh.'
                          },
                          {
                            id: 'dull-aging',
                            title: 'Kém đàn hồi, xỉn màu và thiếu sức sống',
                            desc: 'Bắt đầu xuất hiện nếp nhăn mảnh li ti do mất nước tầng sâu.'
                          }
                        ].map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setSkinType(item.id)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                              skinType === item.id
                                ? 'border-[#D98C7A] bg-[#D98C7A]/10'
                                : 'border-[#1A3626]/8 bg-white hover:border-[#1A3626]/25'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-[#042112]">{item.title}</p>
                              {skinType === item.id && <Check className="w-4 h-4 text-[#D98C7A]" />}
                            </div>
                            <p className="text-[11px] text-[#727973] mt-0.5">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-3"
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-[#042112]">
                        Tình trạng hàng rào bảo vệ da (Skin Barrier) của bạn hiện tại?
                      </h3>
                      <div className="space-y-2 text-xs">
                        {[
                          {
                            id: 'high-irritation',
                            title: 'Bỏng rát hoặc châm chích ngay cả khi chỉ rửa mặt bằng nước lã',
                            desc: 'Hàng rào biểu bì bị phá vỡ nghiêm trọng, cần phục hồi khẩn cấp.'
                          },
                          {
                            id: 'redness-flaking',
                            title: 'Bong tróc mảng nhỏ ở cánh mũi, khóe miệng kèm ửng đỏ',
                            desc: 'Màng lipid mất đi liên kết Ceramides tự nhiên.'
                          },
                          {
                            id: 'tight-rough',
                            title: 'Cảm giác căng cứng, thiếu ẩm kéo dài cả ngày',
                            desc: 'Tốc độ mất nước xuyên biểu bì (TEWL) ở mức cao.'
                          }
                        ].map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setBarrierDamage(item.id)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                              barrierDamage === item.id
                                ? 'border-[#D98C7A] bg-[#D98C7A]/10'
                                : 'border-[#1A3626]/8 bg-white hover:border-[#1A3626]/25'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-[#042112]">{item.title}</p>
                              {barrierDamage === item.id && (
                                <Check className="w-4 h-4 text-[#D98C7A]" />
                              )}
                            </div>
                            <p className="text-[11px] text-[#727973] mt-0.5">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-3"
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-[#042112]">
                        Môi trường sống &amp; thói quen sinh hoạt hàng ngày của bạn?
                      </h3>
                      <div className="space-y-2 text-xs">
                        {[
                          {
                            id: 'ac-pollution',
                            title: 'Làm việc phòng điều hòa >8 tiếng & di chuyển khói bụi đô thị',
                            desc: 'Da bị rút cạn độ ẩm nội sinh và chịu stress oxy hóa liên tục.'
                          },
                          {
                            id: 'stress-late',
                            title: 'Hay thức khuya sau 23h, áp lực công việc cao',
                            desc: 'Cortisol tăng cao làm chậm chu kỳ tái sinh tự nhiên 28 ngày.'
                          },
                          {
                            id: 'outdoor-sun',
                            title: 'Thường xuyên tiếp xúc ánh nắng mạnh hoặc ánh sáng xanh',
                            desc: 'Gốc tự do từ tia cực tím và HEV tấn công sợi đàn hồi.'
                          }
                        ].map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setEnvironment(item.id)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                              environment === item.id
                                ? 'border-[#D98C7A] bg-[#D98C7A]/10'
                                : 'border-[#1A3626]/8 bg-white hover:border-[#1A3626]/25'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-[#042112]">{item.title}</p>
                              {environment === item.id && (
                                <Check className="w-4 h-4 text-[#D98C7A]" />
                              )}
                            </div>
                            <p className="text-[11px] text-[#727973] mt-0.5">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-3"
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-[#042112]">
                        Mục tiêu phục hồi cấp thiết nhất của bạn trong 14 ngày tới?
                      </h3>
                      <div className="space-y-2 text-xs">
                        {[
                          {
                            id: 'barrier-repair',
                            title: 'Dập tắt ửng đỏ, tái thiết màng hydrolipid vững chắc',
                            desc: 'Tập trung bù đắp Ceramides 3:1:1 và làm dịu tế bào sừng.'
                          },
                          {
                            id: 'deep-hydration',
                            title: 'Cấp nước tầng sâu, trả lại độ căng mọng tự nhiên',
                            desc: 'Thẩm thấu Hyaluronic 7 kích thước phân tử và Squalane.'
                          },
                          {
                            id: 'firm-renew',
                            title: 'Tăng sinh collagen sinh học và trẻ hóa mô liên kết',
                            desc: 'Kích thích nguyên bào sợi tái sinh bằng chiết xuất tuyết liên hoa.'
                          }
                        ].map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setGoal(item.id)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                              goal === item.id
                                ? 'border-[#D98C7A] bg-[#D98C7A]/10'
                                : 'border-[#1A3626]/8 bg-white hover:border-[#1A3626]/25'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-[#042112]">{item.title}</p>
                              {goal === item.id && <Check className="w-4 h-4 text-[#D98C7A]" />}
                            </div>
                            <p className="text-[11px] text-[#727973] mt-0.5">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="pt-3 flex justify-between items-center">
                    {step > 1 ? (
                      <button
                        onClick={() => setStep(step - 1)}
                        className="text-xs text-[#727973] hover:text-[#042112] px-3 py-2 transition-colors"
                      >
                        Quay lại
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 4 ? (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setStep(step + 1)}
                        className="py-2.5 px-6 bg-[#1A3626] hover:bg-[#042112] text-white rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-xs"
                      >
                        <span>Tiếp tục</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCalculate}
                        className="py-3 px-7 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-botanical-card hover:shadow-botanical-hover transition-all"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Xem Phác Đồ Phục Hồi Ngay</span>
                      </motion.button>
                    )}
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
