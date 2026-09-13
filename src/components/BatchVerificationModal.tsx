import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  ShieldCheck,
  Microscope,
  Calendar,
  MapPin,
  Sparkles,
  X,
  FileCheck2,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BATCH_DATABASE, BatchVerificationData } from '../data/batchData';

interface BatchVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BatchVerificationModal({ isOpen, onClose }: BatchVerificationModalProps) {
  const [inputCode, setInputCode] = useState('VG-2026-09A');
  const [searchedData, setSearchedData] = useState<BatchVerificationData | null>(
    BATCH_DATABASE['VG-2026-09A']
  );
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (codeToSearch?: string) => {
    const code = (codeToSearch || inputCode).trim().toUpperCase();
    if (BATCH_DATABASE[code]) {
      setSearchedData(BATCH_DATABASE[code]);
      setNotFound(false);
    } else {
      setSearchedData(null);
      setNotFound(true);
    }
  };

  const handleSelectSample = (sampleCode: string) => {
    setInputCode(sampleCode);
    handleSearch(sampleCode);
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
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#FCF9F4] text-[#1C1C19] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#1A3626]/12 z-10 flex flex-col max-h-[92vh]"
          >
            {/* Header */}
            <div className="p-6 bg-[#042112] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-[#A8BCA1]/30 flex items-center justify-center text-[#D98C7A]">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="label-caps text-[#A8BCA1] text-[9.5px]">
                    Minh Bạch Chuỗi Cung Ứng Sinh Học
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7F2]">
                    Tra Cứu Lô Bào Chế Dược Liệu
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Search Box */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-[#042112] block">
                  Nhập mã lô sản xuất (in dưới đáy chai hoặc trên vỏ hộp):
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#727973]" />
                    <input
                      type="text"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      placeholder="VD: VG-2026-09A..."
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#1A3626]/15 rounded-xl text-xs text-[#042112] uppercase font-mono tracking-wider focus:outline-none focus:border-[#D98C7A] transition-colors"
                    />
                  </div>
                  <button
                    onClick={() => handleSearch()}
                    className="px-6 py-3 rounded-xl bg-[#1A3626] hover:bg-[#042112] text-white text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Kiểm định
                  </button>
                </div>

                {/* Sample Tags */}
                <div className="flex items-center gap-2 pt-1 flex-wrap text-xs text-[#727973]">
                  <span className="text-[11px]">Mã thử nghiệm nhanh:</span>
                  {['VG-2026-09A', 'VG-2026-08B', 'VG-2026-07C'].map((sample) => (
                    <button
                      key={sample}
                      onClick={() => handleSelectSample(sample)}
                      className="px-2.5 py-1 rounded-md bg-[#FAF7F2] hover:bg-[#F0EDE9] border border-[#1A3626]/10 text-[#1A3626] font-mono text-[11px] font-semibold transition-colors"
                    >
                      {sample}
                    </button>
                  ))}
                </div>
              </div>

              {/* Not Found Alert */}
              {notFound && (
                <div className="p-4 rounded-2xl bg-[#D98C7A]/15 border border-[#D98C7A]/30 flex items-start gap-3 text-xs text-[#542115]">
                  <AlertCircle className="w-4 h-4 text-[#D98C7A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Không tìm thấy hồ sơ lô bào chế này.</p>
                    <p className="mt-0.5 text-[11px] text-[#542115]/80">
                      Vui lòng kiểm tra lại ký tự in nổi ở đáy lọ thủy tinh hoặc liên hệ hotline phòng Lab (1800 6828) để được hỗ trợ chứng thực tức thì.
                    </p>
                  </div>
                </div>
              )}

              {/* Verified Certificate Details */}
              {searchedData && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-5 border border-[#1A3626]/10 shadow-sm space-y-5"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#1A3626]/8">
                    <div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#1A3626]" />
                        <span className="font-serif-luxury text-base font-bold text-[#042112]">
                          Chứng Thư Kiểm Định Số #{searchedData.batchCode}
                        </span>
                      </div>
                      <p className="text-xs text-[#51634D] mt-0.5">{searchedData.productName}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#1A3626]/8 text-[#042112] text-[10px] uppercase font-bold tracking-wider">
                      Đã Thẩm Định
                    </span>
                  </div>

                  {/* Grid details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <span className="text-[11px] text-[#727973] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#51634D]" />
                        Ngày thu hái dược liệu:
                      </span>
                      <p className="font-semibold text-[#042112] pl-5">{searchedData.harvestDate}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] text-[#727973] flex items-center gap-1.5">
                        <Microscope className="w-3.5 h-3.5 text-[#51634D]" />
                        Ngày chiết xuất CO2:
                      </span>
                      <p className="font-semibold text-[#042112] pl-5">{searchedData.extractionDate}</p>
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <span className="text-[11px] text-[#727973] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#D98C7A]" />
                        Vùng trồng sinh thái bảo tồn:
                      </span>
                      <p className="font-semibold text-[#042112] pl-5">{searchedData.originRegion}</p>
                    </div>

                    <div className="sm:col-span-2 space-y-1 bg-[#FAF7F2] p-3 rounded-xl border border-[#1A3626]/6">
                      <span className="text-[11px] text-[#51634D] font-bold">
                        Thông số trích ly áp suất siêu tới hạn:
                      </span>
                      <p className="text-[#042112] font-mono text-[11px]">{searchedData.co2Pressure}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] text-[#727973]">Độ tinh khiết hoạt chất:</span>
                      <p className="font-bold text-[#1A3626]">{searchedData.activePurity}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] text-[#727973]">Kim loại nặng &amp; Dung môi:</span>
                      <p className="font-bold text-[#1A3626]">{searchedData.heavyMetals}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] text-[#727973]">Vi sinh &amp; Độ vô trùng:</span>
                      <p className="font-semibold text-[#042112]">{searchedData.microbiology}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] text-[#727973]">Hạn sử dụng khuyến nghị:</span>
                      <p className="font-semibold text-[#042112]">{searchedData.bestBefore}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1A3626]/8 flex items-center justify-between text-[11px] text-[#51634D]">
                    <span>Kiểm định bởi Viện Da Liễu Độc Lập Derm-Scan Bio Asia</span>
                    <span className="font-bold text-[#1A3626]">✓ 100% Thuần Khiết</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#F0EDE9] border-t border-[#1A3626]/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-[#1A3626] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Hoàn tất
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
