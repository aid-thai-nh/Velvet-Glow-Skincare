import React, { useState } from 'react';
import { Select } from 'antd';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'hanoi',
    consultType: 'online',
    date: '',
    timeSlot: '09:30 - 10:30',
    concernNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 3500);
  };

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

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#FCF9F4] text-[#1C1C19] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1A3626]/10 p-6 sm:p-7 space-y-5 z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#1A3626]/8 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#D98C7A]/15 text-[#D98C7A]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#042112]">
                    Đặt Lịch Tư Vấn Phục Hồi 1:1
                  </h2>
                  <p className="text-[11px] text-[#727973]">
                    Cùng Bác sĩ Da liễu &amp; Chuyên gia Bào chế Thảo Dược Velvet &amp; Glow
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-1.5 text-[#727973] hover:text-[#042112] rounded-full hover:bg-[#F6F3EE] transition-colors"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-3"
              >
                <div className="w-14 h-14 bg-[#A8BCA1]/20 text-[#1A3626] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-[#042112]">
                  Đã ghi nhận lịch hẹn của bạn
                </h3>
                <p className="text-xs text-[#424843] max-w-sm mx-auto leading-relaxed font-normal">
                  Chuyên viên Concierge của Velvet &amp; Glow sẽ liên hệ qua số điện thoại trong vòng 15 phút để xác nhận khung giờ và gửi thư mời tư vấn chuẩn y khoa.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Consultation Type Radio */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-[#042112] block">Hình thức tư vấn:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label
                      className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2 transition-all ${
                        formData.consultType === 'online'
                          ? 'border-[#D98C7A] bg-[#D98C7A]/10'
                          : 'border-[#1A3626]/8 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultType"
                        checked={formData.consultType === 'online'}
                        onChange={() => setFormData({ ...formData, consultType: 'online' })}
                      />
                      <div>
                        <span className="font-semibold block text-[#042112]">Trực tuyến (Video 1:1)</span>
                        <span className="text-[10px] text-[#727973]">Chẩn đoán qua camera HD</span>
                      </div>
                    </label>

                    <label
                      className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2 transition-all ${
                        formData.consultType === 'boutique'
                          ? 'border-[#D98C7A] bg-[#D98C7A]/10'
                          : 'border-[#1A3626]/8 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultType"
                        checked={formData.consultType === 'boutique'}
                        onChange={() => setFormData({ ...formData, consultType: 'boutique' })}
                      />
                      <div>
                        <span className="font-semibold block text-[#042112]">Tại Flagship Boutique</span>
                        <span className="text-[10px] text-[#727973]">Soi da tế bào &amp; Spa ngọc bích</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold text-[#042112]">Họ và tên *</label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-[#727973] absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Phương Linh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-[#1A3626]/15 rounded-xl pl-8 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#D98C7A]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-[#042112]">Số điện thoại liên hệ *</label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-[#727973] absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="0912 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-[#1A3626]/15 rounded-xl pl-8 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#D98C7A]"
                      />
                    </div>
                  </div>
                </div>

                {formData.consultType === 'boutique' && (
                  <div className="space-y-1">
                    <label className="font-semibold text-[#042112]">Chọn Boutique gần bạn:</label>
                    <Select
                      value={formData.location}
                      onChange={(val) => setFormData({ ...formData, location: val })}
                      className="w-full"
                      options={[
                        { value: 'hanoi', label: 'Hà Nội: 18 Tràng Tiền, Hoàn Kiếm' },
                        { value: 'hcm', label: 'TP. HCM: 65 Lê Lợi, Quận 1' }
                      ]}
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold text-[#042112]">Ngày mong muốn</label>
                    <div className="relative">
                      <Calendar className="w-3.5 h-3.5 text-[#727973] absolute left-3 top-3 z-10" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#1A3626]/15 rounded-xl pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-[#D98C7A]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-[#042112]">Khung giờ</label>
                    <Select
                      value={formData.timeSlot}
                      onChange={(val) => setFormData({ ...formData, timeSlot: val })}
                      className="w-full"
                      options={[
                        { value: '09:30 - 10:30', label: '09:30 - 10:30 (Sáng)' },
                        { value: '11:00 - 12:00', label: '11:00 - 12:00 (Trưa)' },
                        { value: '14:30 - 15:30', label: '14:30 - 15:30 (Chiều)' },
                        { value: '16:00 - 17:00', label: '16:00 - 17:00 (Chiều)' },
                        { value: '18:30 - 19:30', label: '18:30 - 19:30 (Tối)' }
                      ]}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#042112]">
                    Mô tả sơ lược tình trạng da &amp; vấn đề cần phục hồi
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ví dụ: Da mới can thiệp laser 3 ngày trước, hiện đang căng rát và ửng đỏ ở 2 bên gò má..."
                    value={formData.concernNotes}
                    onChange={(e) => setFormData({ ...formData, concernNotes: e.target.value })}
                    className="w-full bg-white border border-[#1A3626]/15 rounded-xl p-3 text-xs focus:outline-none focus:border-[#D98C7A]"
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 shadow-botanical-card hover:shadow-botanical-hover transition-all"
                  >
                    <span>Xác nhận đặt lịch tư vấn miễn phí</span>
                  </motion.button>
                </div>

                <p className="text-[10px] text-center text-[#727973] flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1A3626]" />
                  <span>Dịch vụ tư vấn chuyên sâu hoàn toàn miễn phí dành riêng cho khách hàng Velvet &amp; Glow</span>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
