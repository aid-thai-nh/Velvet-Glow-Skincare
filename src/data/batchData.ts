export interface BatchVerificationData {
  batchCode: string;
  productName: string;
  harvestDate: string;
  extractionDate: string;
  originRegion: string;
  co2Pressure: string;
  activePurity: string;
  heavyMetals: string;
  microbiology: string;
  dermatologistAssay: string;
  bestBefore: string;
}

export const BATCH_DATABASE: Record<string, BatchVerificationData> = {
  'VG-2026-09A': {
    batchCode: 'VG-2026-09A',
    productName: 'Serum Phục Hồi Sinh Học Cấp Tế Bào (Bio Recovery)',
    harvestDate: '18/08/2026',
    extractionDate: '24/08/2026',
    originRegion: 'Vườn thực vật Bảo Lộc (Lâm Đồng) & Núi Halla (Jeju)',
    co2Pressure: '31.1°C • 73.8 bar (Nhiệt độ phòng - Không biến tính)',
    activePurity: '99.4% Polyphenol tinh khiết & 95% Asiaticoside',
    heavyMetals: '0.00 ppm (Chì, Thủy ngân, Asen: Không phát hiện)',
    microbiology: 'Đạt chuẩn phòng sạch vô trùng GMP Class 100',
    dermatologistAssay: 'Âm tính 100% trên biểu mô nhân tạo EpiDerm™',
    bestBefore: '08/2028'
  },
  'VG-2026-08B': {
    batchCode: 'VG-2026-08B',
    productName: 'Kem Tái Tạo Màng Lipid Đa Tầng 3:1:1',
    harvestDate: '02/08/2026',
    extractionDate: '10/08/2026',
    originRegion: 'Cao nguyên Lâm Đồng & Địa Trung Hải',
    co2Pressure: '32.0°C • 74.5 bar (Phân tử nano đồng nhất)',
    activePurity: 'Tỷ lệ Ceramides:Cholesterol:Acid béo = 3:1:1 chính xác',
    heavyMetals: '0.00 ppm (Không phát hiện dư lượng)',
    microbiology: 'Đạt chuẩn Dược điển Châu Âu Ph. Eur.',
    dermatologistAssay: 'Chỉ số kích ứng sơ cấp = 0.00',
    bestBefore: '08/2028'
  },
  'VG-2026-07C': {
    batchCode: 'VG-2026-07C',
    productName: 'Dầu Dưỡng Phục Hồi Biểu Bì Tinh Khiết',
    harvestDate: '15/07/2026',
    extractionDate: '22/07/2026',
    originRegion: 'Núi Halla (Đảo Jeju)',
    co2Pressure: 'Ép lạnh siêu tới hạn CO2 phân đoạn',
    activePurity: '100% Squalane thực vật & Dầu hoa trà tuyết nguyên chất',
    heavyMetals: '0.00 ppm',
    microbiology: 'Vô trùng tuyệt đối',
    dermatologistAssay: 'Không sinh nhân mụn (Non-comedogenic rating 0)',
    bestBefore: '07/2028'
  }
};
