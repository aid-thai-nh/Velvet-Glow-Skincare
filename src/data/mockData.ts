import { Product, BotanicalIngredient, BoutiqueLocation } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'serum-bio-recovery',
    name: 'Serum Phục Hồi Sinh Học Cấp Tế Bào',
    frenchName: 'Sérum Réparateur Bio-Cellulaire',
    subtitle: 'Kích hoạt tái tạo màng ẩm tự nhiên & phục hồi lớp hạ bì tổn thương',
    category: 'serum',
    categoryLabel: 'Tinh chất phục hồi',
    price: 1850000,
    originalPrice: 2150000,
    rating: 4.95,
    reviewCount: 328,
    volume: '30ml / 1.0 fl. oz.',
    isBestseller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Ứng dụng công nghệ chiết xuất siêu tới hạn nhiệt độ thấp độc quyền, Velvet & Glow lưu giữ trọn vẹn 99.4% hoạt chất sinh học tự nhiên. Tinh chất thấm sâu vào từng tầng hạ bì, kích hoạt cơ chế tự chữa lành của tế bào và củng cố hàng rào lipid bảo vệ da.',
    keyBenefits: [
      'Tái sinh lớp màng bảo vệ hydrolipid chỉ sau 14 ngày chu kỳ',
      'Giảm đỏ, làm dịu kích ứng cấp tốc cho da sau laser, peel hoặc treatment nặng',
      'Cung cấp độ ẩm nội sinh sâu và chống mất nước xuyên biểu bì (TEWL)',
      'Tăng sinh collagen tự thân và cải thiện độ đàn hồi căng mọng'
    ],
    heroIngredients: [
      {
        name: 'Chiết xuất Hoa Trà Tuyết Jeju',
        origin: 'Núi Halla, Đảo Jeju',
        benefit: 'Chống oxy hóa mạnh mẽ, giàu polyphenol và acid oleic tự nhiên',
        purityPercentage: '99.4%'
      },
      {
        name: 'Rau má Centella Asiatica hữu cơ',
        origin: 'Cao nguyên Lâm Đồng',
        benefit: 'Kích hoạt nguyên bào sợi, đẩy nhanh lành thương biểu mô',
        purityPercentage: '95% Asiaticoside'
      },
      {
        name: 'Niacinamide hữu cơ chuẩn dược phẩm',
        origin: 'Thụy Sĩ',
        benefit: 'Củng cố liên kết ceramides và làm đều sắc diện da',
        purityPercentage: '5.0%'
      },
      {
        name: 'Squalane thực vật ép lạnh',
        origin: 'Quả Olive Địa Trung Hải',
        benefit: 'Mô phỏng lipid tự nhiên của biểu bì, khóa ẩm vô hình',
        purityPercentage: '100% Thuần khiết'
      }
    ],
    skinTypes: ['sensitive', 'damaged', 'dry', 'aging', 'all'],
    skinConcerns: ['Phục hồi màng ẩm', 'Da mỏng đỏ yếu', 'Sau xâm lấn laser/peel', 'Thiếu nước trầm trọng'],
    ritualGuide: {
      morning: 'Thoa 3-4 giọt sau bước cân bằng da. Vỗ nhẹ bằng lòng bàn tay ấm.',
      evening: 'Dùng 5 giọt, massage chậm rãi theo chiều nâng cơ từ cằm lên thái dương.',
      texture: 'Dạng giọt serum lụa mỏng nhẹ như nước suối nguồn, thấm tức thì không bết dính.',
      aroma: 'Hương thơm thảo mộc êm dịu từ hoa trà trắng và tinh dầu trầm hương tự nhiên.'
    },
    clinicalResults: [
      { percentage: 98, claim: 'cải thiện độ ẩm sâu và giảm cảm giác châm chích sau 14 ngày' },
      { percentage: 94, claim: 'nhận thấy da giảm đỏ và hàng rào biểu bì khỏe rõ rệt' },
      { percentage: 99, claim: 'xác nhận không gây bít tắc lỗ chân lông hay nổi mụn' }
    ]
  },
  {
    id: 'cream-barrier-lipid',
    name: 'Kem Dưỡng Tái Tạo Màng Lipid Đa Tầng',
    frenchName: 'Crème Régénératrice Lipides Essentiels',
    subtitle: 'Bổ sung phức hợp Ceramide sinh học & khóa ẩm khóa dưỡng chất chuyên sâu',
    category: 'cream',
    categoryLabel: 'Kem dưỡng khóa ẩm',
    price: 1950000,
    originalPrice: 2250000,
    rating: 4.92,
    reviewCount: 245,
    volume: '50ml / 1.7 fl. oz.',
    isBestseller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Chất kem dưỡng nhung mịn mang công nghệ nhũ tương sinh học cấu trúc giọt nano. Tạo nên lớp khiên vô hình bảo vệ làn da khỏi ô nhiễm bụi mịn PM2.5 và thời tiết khô hanh, đồng thời tái lập 3 thành tố lipid cốt lõi của da: Ceramides, Cholesterol và Fatty Acids.',
    keyBenefits: [
      'Tỷ lệ vàng 3:1:1 Ceramides thực vật phục hồi thành lũy biểu bì',
      'Ngăn chặn hiện tượng mất nước qua tầng sừng lên đến 48 giờ',
      'Làm dịu cơn ngứa rát, căng tức do thời tiết hoặc mỹ phẩm không phù hợp',
      'Để lại hiệu ứng da căng bóng nhung lụa mịn màng không bóng nhờn'
    ],
    heroIngredients: [
      {
        name: 'Ceramides phức hợp Bio-Identical',
        origin: 'Lên men men vi sinh hữu cơ',
        benefit: 'Tương thích hoàn hảo với lipid tự nhiên của tế bào da'
      },
      {
        name: 'Bơ hạt mỡ hữu cơ Fair Trade',
        origin: 'Tây Phi',
        benefit: 'Nuôi dưỡng biểu bì khô nẻ và bảo vệ cấu trúc tế bào'
      },
      {
        name: 'Chiết xuất nấm tuyết Tremella',
        origin: 'Cao nguyên Đông Á',
        benefit: 'Giữ nước gấp 500 lần trọng lượng, tạo màng mọng nước sinh học'
      }
    ],
    skinTypes: ['sensitive', 'dry', 'damaged', 'aging'],
    skinConcerns: ['Màng ẩm suy yếu', 'Da khô ráp bong tróc', 'Lão hóa thiếu ẩm'],
    ritualGuide: {
      morning: 'Lấy lượng bằng hạt đậu, làm ấm giữa các đầu ngón tay rồi áp nhẹ lên mặt.',
      evening: 'Dùng như mặt nạ ngủ phục hồi chuyên sâu sau một ngày mệt mỏi.',
      texture: 'Chất kem nhung mềm tan ngay khi chạm nhiệt độ da tự nhiên.',
      aroma: 'Nốt hương hoa cúc La Mã và gỗ đàn hương êm dịu thư giãn tâm trí.'
    },
    clinicalResults: [
      { percentage: 96, claim: 'da căng mướt và giảm bong tróc ngay sau 1 đêm sử dụng' },
      { percentage: 93, claim: 'độ đàn hồi da tăng rõ rệt sau 28 ngày' }
    ]
  },
  {
    id: 'oil-botanical-elixir',
    name: 'Tinh Dầu Thực Vật Ép Lạnh Nguyên Bản',
    frenchName: 'Huile Botanique Sublime Épique',
    subtitle: '100% dầu thực vật quý hiếm nguyên chất phục hồi độ căng bóng thanh xuân',
    category: 'oil',
    categoryLabel: 'Tinh dầu thực vật',
    price: 1650000,
    originalPrice: 1900000,
    rating: 4.98,
    reviewCount: 189,
    volume: '30ml / 1.0 fl. oz.',
    isBestseller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Tuyển chọn từ 9 loại dầu hạt quý hiếm được ép lạnh chậm ở nhiệt độ dưới 35°C để bảo toàn nguyên vẹn enzyme và acid béo thiết yếu Omega 3-6-9. Dầu thẩm thấu sâu, để lại lớp ánh sáng rạng rỡ như giọt ngọc sương mai.',
    keyBenefits: [
      'Cung cấp hàm lượng vitamin E và carotenoid dồi dào chống lão hóa',
      'Làm mềm mịn từng tế bào biểu bì, nuôi dưỡng da căng bóng tự nhiên',
      'Có thể trộn chung cùng serum hoặc kem dưỡng để tăng cường độ ẩm',
      'Hỗ trợ đắc lực cho các liệu pháp massage đá ngọc bích Gua Sha'
    ],
    heroIngredients: [
      {
        name: 'Dầu hạt Hắc Mai Biển (Sea Buckthorn)',
        origin: 'Vùng Siberia nguyên sơ',
        benefit: 'Cung cấp Omega 7 quý hiếm tái tạo màng tế bào mới'
      },
      {
        name: 'Dầu Tầm Xuân Ép Lạnh (Rosehip)',
        origin: 'Dãy Andes Chile',
        benefit: 'Giàu tiền vitamin A (trans-retinoic acid) phục hồi thâm sẹo'
      },
      {
        name: 'Dầu hoa Trà Tsubaki',
        origin: 'Nhật Bản',
        benefit: 'Thấm nhanh, tương đương bã nhờn tự nhiên giúp cân bằng màng dầu'
      }
    ],
    skinTypes: ['dry', 'aging', 'damaged', 'all'],
    skinConcerns: ['Xỉn màu', 'Mất nước bề mặt', 'Thiếu sức sống'],
    ritualGuide: {
      morning: 'Nhỏ 1-2 giọt vào lòng bàn tay, xoa ấm và áp nhẹ lên gò má.',
      evening: 'Dùng 3-4 giọt kết hợp thanh lăn thạch anh massage kích thích tuần hoàn.',
      texture: 'Dầu vàng óng ánh, siêu nhẹ, khô ráo nhanh không bết dính gối.',
      aroma: 'Hương hoa hồng dại hòa quyện vỏ cam bergamot ngọt mát thanh khiết.'
    },
    clinicalResults: [
      { percentage: 97, claim: 'làn da sáng rạng rỡ và rạng ngời sức sống sau 7 ngày' },
      { percentage: 95, claim: 'cảm nhận làn da mềm mại hơn sau lần đầu thoa' }
    ]
  },
  {
    id: 'cleanser-botanical-stem',
    name: 'Sữa Rửa Mặt Tế Bào Gốc Dược Liệu Dịu Lành',
    frenchName: 'Gel Nettoyant Apaisant Aux Plantes',
    subtitle: 'Làm sạch sâu tinh tế bảo tồn trọn vẹn màng vi sinh tự nhiên Microbiome',
    category: 'cleanser',
    categoryLabel: 'Làm sạch sinh học',
    price: 890000,
    originalPrice: 1050000,
    rating: 4.88,
    reviewCount: 412,
    volume: '150ml / 5.1 fl. oz.',
    isBestseller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Công thức gel gốc nước sinh học với chất hoạt động bề mặt nguồn gốc từ amino acid táo và dừa. pH chuẩn sinh lý 5.5, nhẹ nhàng gột rửa bụi bẩn tạp chất mà vẫn giữ nguyên độ ẩm mượt, không hề gây căng rát châm chích.',
    keyBenefits: [
      'Độ pH 5.5 chuẩn sinh lý duy trì hệ vi sinh khỏe mạnh',
      'Không chứa Sulfates, xà phòng, cồn hay hương liệu nhân tạo',
      'Chiết xuất lô hội hữu cơ và trà xanh kháng viêm, làm dịu ửng đỏ',
      'Thích hợp tuyệt đối cho làn da nhạy cảm nhất hoặc sau điều trị thẩm mỹ'
    ],
    heroIngredients: [
      {
        name: 'Amino Acid từ Táo hữu cơ',
        origin: 'Pháp',
        benefit: 'Tạo bọt mịn như nhung, làm sạch dịu nhẹ không phá hủy lipid'
      },
      {
        name: 'Trà xanh hữu cơ Shan Tuyết cổ thụ',
        origin: 'Hà Giang',
        benefit: 'Chống viêm sưng và thanh lọc bụi mịn đô thị'
      }
    ],
    skinTypes: ['sensitive', 'damaged', 'dry', 'aging', 'all'],
    skinConcerns: ['Da dễ kích ứng', 'Da châm chích', 'Mất cân bằng độ pH'],
    ritualGuide: {
      morning: 'Lấy 1 lần nhấn gel, massage tròn đều 30 giây rồi rửa với nước mát.',
      evening: 'Dùng sau bước tẩy trang dầu, nhẹ nhàng làm sạch tạp chất cả ngày.',
      texture: 'Dạng gel ngọc bích trong suốt, bọt siêu mịn tơ lụa.',
      aroma: 'Thanh mát từ lá trà tươi và tràm trà hữu cơ thư thái.'
    },
    clinicalResults: [
      { percentage: 100, claim: 'không thấy khô căng rát sau khi lau khô mặt' },
      { percentage: 96, claim: 'cảm nhận bề mặt da sạch thoáng và êm dịu' }
    ]
  },
  {
    id: 'sunscreen-mineral-shield',
    name: 'Kem Chống Nắng Sinh Học Tế Bào Màng Lọc Khoáng',
    frenchName: 'Bouclier Minéral Bio-Cellulaire SPF50+',
    subtitle: 'Bảo vệ toàn diện trước tia UVA/UVB, ánh sáng xanh & ô nhiễm đô thị',
    category: 'sunscreen',
    categoryLabel: 'Chống nắng sinh học',
    price: 1350000,
    originalPrice: 1550000,
    rating: 4.91,
    reviewCount: 167,
    volume: '50ml / 1.7 fl. oz.',
    isBestseller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80'
    ],
    description: '100% màng lọc khoáng chất Non-Nano Zinc Oxide thuần khiết kết hợp dưỡng chất tế bào thực vật. Không vệt trắng bệt, tạo lớp nền satin rạng ngời và ngăn chặn đốm nâu nám sạm hiệu quả.',
    keyBenefits: [
      'Chống nắng phổ rộng SPF50+ PA++++ được kiểm nghiệm lâm sàng',
      'Chiết xuất hoa Nhung Tuyết Thụy Sĩ bảo vệ DNA tế bào trước tia HEV (ánh sáng xanh)',
      'Kháng nước nhẹ nhàng, không gây cay mắt hay bít tắc sinh mụn',
      'An toàn tuyệt đối cho rạn san hô biển (Reef Safe)'
    ],
    heroIngredients: [
      {
        name: 'Non-Nano Zinc Oxide 21%',
        origin: 'Đức',
        benefit: 'Màng lọc phản xạ tia cực tím an toàn nhất cho da yếu'
      },
      {
        name: 'Chiết xuất hoa Nhung Tuyết (Edelweiss)',
        origin: 'Dãy Alps Thụy Sĩ',
        benefit: 'Chống oxy hóa mạnh gấp 2 lần vitamin C'
      }
    ],
    skinTypes: ['sensitive', 'damaged', 'aging', 'all'],
    skinConcerns: ['Chống tác hại ánh nắng', 'Ngăn ngừa nám sạm', 'Bảo vệ sau peel'],
    ritualGuide: {
      morning: 'Thoa đều 2 đốt ngón tay lên mặt và cổ trước khi ra ngoài 15 phút.',
      evening: 'Làm sạch kỹ lưỡng vào cuối ngày.',
      texture: 'Dạng sữa lỏng mượt thấm tệp vào màu da tự nhiên, hiệu ứng glow khỏe mạnh.',
      aroma: 'Hương nhài trắng thanh lịch dịu mát.'
    },
    clinicalResults: [
      { percentage: 98, claim: 'không để lại vệt trắng hay gây bóng nhờn suốt ngày dài' },
      { percentage: 95, claim: 'da được bảo vệ dịu mát không bị ửng đỏ khi ra nắng' }
    ]
  },
  {
    id: 'mask-sos-barrier',
    name: 'Mặt Nạ Phục Hồi Sinh Học Cấp Cứu Màng Ẩm',
    frenchName: 'Masque Pansement Bio-Cellulaire SOS',
    subtitle: 'Nén 30ml tinh chất phục hồi vào lớp màng dệt sợi xơ dừa sinh học',
    category: 'serum',
    categoryLabel: 'Mặt nạ phục hồi',
    price: 750000,
    originalPrice: 890000,
    rating: 4.96,
    reviewCount: 154,
    volume: 'Hộp 5 miếng x 30ml',
    isBestseller: false,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Biocelulose 100% tự nhiên ôm khít từng đường nét khuôn mặt như làn da thứ hai. Làm dịu tức thời cảm giác nóng rát, sưng tấy sau điều trị xâm lấn, hạ nhiệt độ bề mặt da đến 3.5°C chỉ sau 15 phút đắp.',
    keyBenefits: [
      'Hạ nhiệt và làm dịu cơn bốc hỏa, mẩn đỏ tức thì',
      'Cấp ẩm thẩm thấu sâu gấp 10 lần mặt nạ giấy thông thường',
      'Chứa phức hợp Beta-Glucan và rau má cô đặc thúc đẩy tái sinh',
      'Được các bác sĩ da liễu khuyên dùng sau xâm lấn điều trị'
    ],
    heroIngredients: [
      {
        name: 'Sợi Biocellulose lên men nước dừa Bến Tre',
        origin: 'Việt Nam',
        benefit: 'Khả năng giữ tinh chất tối đa và ôm khít tuyệt đối'
      },
      {
        name: 'Beta-Glucan yến mạch Thụy Điển',
        origin: 'Thụy Điển',
        benefit: 'Kích hoạt hàng rào miễn dịch tự nhiên của da'
      }
    ],
    skinTypes: ['sensitive', 'damaged', 'dry', 'all'],
    skinConcerns: ['Cấp cứu da đỏ rát', 'Sau peel/laser/lăn kim', 'Da cháy nắng'],
    ritualGuide: {
      morning: 'Dùng trước các sự kiện quan trọng để da căng mọng cấp tốc.',
      evening: 'Đắp 20-25 phút trong không gian yên tĩnh, thư giãn hoàn toàn.',
      texture: 'Lớp màng thạch mềm mát lạnh ôm sát da.',
      aroma: 'Thanh khiết từ nước cất hoa cúc vạn thọ hữu cơ.'
    },
    clinicalResults: [
      { percentage: 99, claim: 'cảm giác làm dịu và hạ nhiệt da tức thì sau 10 phút' },
      { percentage: 97, claim: 'hàng rào ẩm phục hồi ngoạn mục sau 3 lần đắp' }
    ]
  },
  {
    id: 'mist-cellular-hydrosol',
    name: 'Nước Cân Bằng Tinh Thể Sinh Học Đa Tầng',
    frenchName: 'Brume Hydratante Bio-Cellulaire',
    subtitle: 'Cấp ẩm nội sinh tức thì và cân bằng pH màng acid bảo vệ da sau bước rửa mặt',
    category: 'toner',
    categoryLabel: 'Nước cân bằng sinh học',
    price: 780000,
    originalPrice: 890000,
    rating: 4.92,
    reviewCount: 142,
    volume: '120ml / 4.0 fl. oz.',
    isBestseller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Chưng cất từ 100% nước hoa cúc La Mã và hoa hồng Rosa Damascena hữu cơ kết hợp khoáng vi lượng biển sâu. Cân bằng độ ẩm vi mô, chuẩn bị bề mặt da hấp thu dưỡng chất tối đa.',
    keyBenefits: [
      'Lập tức đưa pH bề mặt về ngưỡng 5.0 - 5.5 tối ưu sinh học',
      'Làm dịu ửng đỏ sau khi rửa mặt hoặc tiếp xúc máy lạnh hanh khô',
      'Đầu vòi phun sương siêu mịn nano tạo lớp sương ôm trọn gương mặt',
      'Có thể sử dụng bất cứ lúc nào trong ngày để làm dịu da'
    ],
    heroIngredients: [
      {
        name: 'Hydrosol Hoa Hồng Damask Hữu Cơ',
        origin: 'Thung lũng Bulgaria',
        benefit: 'Cấp ẩm sinh học và kháng khuẩn làm dịu tự nhiên'
      },
      {
        name: 'Phức hợp Khoáng Vi Lượng Biển Chết',
        origin: 'Jordan',
        benefit: 'Tăng sức đề kháng và phục hồi cân bằng điện giải tế bào'
      }
    ],
    skinTypes: ['sensitive', 'dry', 'damaged', 'all'],
    skinConcerns: ['Thiếu nước trầm trọng', 'Mất cân bằng pH', 'Da mệt mỏi'],
    ritualGuide: {
      morning: 'Xịt 3-4 lần khắp mặt sau khi làm sạch hoặc sau khi trang điểm.',
      evening: 'Vỗ nhẹ 2 lớp hydrosol để da ngậm nước sâu trước bước serum.',
      texture: 'Làn sương tinh thể bay nhẹ, thẩm thấu ngay sau 5 giây.',
      aroma: 'Hương hoa hồng cổ và thảo mộc êm dịu sảng khoái.'
    },
    clinicalResults: [
      { percentage: 98, claim: 'cảm nhận làn da dịu mát và mềm mại tức thì sau xịt' },
      { percentage: 96, claim: 'độ ẩm bề mặt tăng 65% ngay sau 1 lần xịt sương' }
    ]
  },
  {
    id: 'eye-peptide-contour',
    name: 'Kem Mắt Tái Cấu Trúc Peptide & Caffeine Sinh Học',
    frenchName: 'Élixir Regard Liftant Bio-Peptides',
    subtitle: 'Xóa mờ quầng thâm, giảm bọng mắt và nâng cơ vùng da mắt mỏng manh',
    category: 'eye-care',
    categoryLabel: 'Chăm sóc vùng mắt',
    price: 1450000,
    originalPrice: 1680000,
    rating: 4.94,
    reviewCount: 198,
    volume: '15ml / 0.5 fl. oz.',
    isBestseller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Ứng dụng công nghệ màng bao Liposome vận chuyển phức hợp Hexapeptide-8 mô phỏng botox tự nhiên và Caffeine sinh học từ hạt cà phê Đắk Lắk. Thấm sâu vào vùng vi mạch máu mắt giúp cải thiện sắc tố thâm quầng và nếp nhăn đuôi mắt.',
    keyBenefits: [
      'Giảm bọng mắt và quầng thâm rõ rệt sau 21 ngày sử dụng',
      'Đầu massage Zamac mát lạnh kích thích tuần hoàn bạch huyết',
      'Làm đầy các rãnh nhăn li ti quanh khóe mắt do thiếu ẩm',
      'Không chứa dầu khoáng, không gây cay mắt hay sinh mụn thịt'
    ],
    heroIngredients: [
      {
        name: 'Hexapeptide-8 Sinh Học',
        origin: 'Thụy Sĩ',
        benefit: 'Thư giãn cơ biểu cảm mắt, giảm nếp nhăn chân chim'
      },
      {
        name: 'Caffeine Sinh Học Chiết Xuất Lạnh',
        origin: 'Cao nguyên Đắk Lắk',
        benefit: 'Co mạch giảm ứ trệ dịch, tan bọng mắt cấp tốc'
      }
    ],
    skinTypes: ['aging', 'dry', 'sensitive', 'all'],
    skinConcerns: ['Quầng thâm mắt', 'Bọng mắt mệt mỏi', 'Nếp nhăn đuôi mắt'],
    ritualGuide: {
      morning: 'Chấm 3 điểm nhỏ quanh hốc mắt, dùng đầu kim loại lạnh miết nhẹ từ trong ra ngoài.',
      evening: 'Massage nhẹ nhàng hình số 8 quanh hốc mắt để kích thích thư giãn tế bào.',
      texture: 'Chất kem lụa mỏng nhẹ như bơ hạt mỡ tan chảy trên đầu ngón tay.',
      aroma: 'Không mùi nhân tạo, dịu nhẹ hương hoa cúc xanh La Mã.'
    },
    clinicalResults: [
      { percentage: 95, claim: 'giảm độ đậm của quầng thâm mắt sau 3 tuần' },
      { percentage: 92, claim: 'cải thiện độ săn chắc vùng mí mắt dưới' }
    ]
  },
  {
    id: 'peel-botanical-enzyme',
    name: 'Tinh Chất Tái Sinh Tế Bào Enzyme Thực Vật Dịu Lành',
    frenchName: 'Sérum Peeling Enzymatique Doux',
    subtitle: 'Thanh tẩy tế bào già cỗi không acid mạnh, khơi mở làn da sáng mịn như sương',
    category: 'treatment',
    categoryLabel: 'Đặc trị sinh học',
    price: 1680000,
    originalPrice: 1950000,
    rating: 4.89,
    reviewCount: 115,
    volume: '30ml / 1.0 fl. oz.',
    isBestseller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Giải pháp peel dịu nhẹ chuẩn dược liệu sinh học dành riêng cho làn da nhạy cảm. Enzyme đu đủ và lựu lên men tự nhiên hòa tan liên kết sừng mà không gây bong tróc đỏ rát hay phá vỡ màng lipid bảo vệ.',
    keyBenefits: [
      'Làm mịn bề mặt da sần sùi và se khít lỗ chân lông thô ráp',
      'Đào thải tế bào sừng già cỗi, kích hoạt tái tạo chu kỳ da 28 ngày',
      'An toàn tuyệt đối cho da nhạy cảm không dung nạp AHA/BHA nồng độ cao',
      'Hỗ trợ dưỡng chất các bước sau thẩm thấu sâu hơn 300%'
    ],
    heroIngredients: [
      {
        name: 'Enzyme Đu Đủ Lên Men Bio-Papain',
        origin: 'Hawaii',
        benefit: 'Bẻ gãy liên kết keratin của tế bào chết một cách êm ái'
      },
      {
        name: 'Lactobionic Acid (PHA thế hệ mới)',
        origin: 'Đức',
        benefit: 'Hút ẩm gấp 8 lần HA và tẩy da chết nhẹ nhàng không kích ứng'
      }
    ],
    skinTypes: ['sensitive', 'damaged', 'aging', 'dry', 'all'],
    skinConcerns: ['Da sần sùi xỉn màu', 'Lỗ chân lông thô', 'Bít tắc bề mặt'],
    ritualGuide: {
      morning: 'Nên dùng vào ban đêm. Nếu ra ngoài ban ngày bắt buộc thoa chống nắng sinh học.',
      evening: 'Dùng 2-3 lần/tuần vào buổi tối sau bước làm sạch, để nguyên không cần rửa lại.',
      texture: 'Dung dịch tinh khiết màu hổ phách trong suốt, mướt mịn ráo nhanh.',
      aroma: 'Hương quả mọng lên men thoang thoảng cùng tinh dầu bergamot thanh tao.'
    },
    clinicalResults: [
      { percentage: 97, claim: 'bề mặt da mịn màng hơn trông thấy ngay sáng hôm sau' },
      { percentage: 94, claim: 'hoàn toàn không gặp hiện tượng bong tróc châm chích hay đỏ rát' }
    ]
  },
  {
    id: 'balm-botanical-melt',
    name: 'Sáp Tẩy Trang Phục Hồi Dược Liệu Hoa Cúc',
    frenchName: 'Baume Nettoyant Fondant aux Fleurs',
    subtitle: 'Chuyển hóa từ sáp sang dầu dưỡng và sữa nhũ hóa làm sạch sâu lớp makeup & kem chống nắng',
    category: 'cleanser',
    categoryLabel: 'Làm sạch sinh học',
    price: 920000,
    originalPrice: 1050000,
    rating: 4.96,
    reviewCount: 231,
    volume: '100ml / 3.4 fl. oz.',
    isBestseller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Công thức sáp thực vật cô đặc từ sáp ong hữu cơ, bơ hạt mỡ và tinh dầu cúc La Mã. Tiếp xúc với nhiệt độ cơ thể sẽ lập tức tan chảy thành lớp dầu nhẹ như lụa, hòa tan mọi bụi mịn PM2.5, bã nhờn và cặn trang điểm lâu trôi.',
    keyBenefits: [
      'Nhũ hóa sạch 100% không để lại màng dầu nhờn rít hay cay mắt',
      'Bổ sung Ceramide thực vật củng cố màng lipid ngay trong bước tẩy trang',
      'Kèm thìa xúc mạ vàng sang trọng và khăn bông organic dệt thủ công',
      'Được kiểm nghiệm nhãn khoa an toàn cho người đeo kính áp tròng'
    ],
    heroIngredients: [
      {
        name: 'Dầu Hoa Cúc Vàng Chamomile Ép Chậm',
        origin: 'Pháp',
        benefit: 'Kháng viêm, làm dịu thần kinh da và chống kích ứng'
      },
      {
        name: 'Bơ Hạt Mỡ Hữu Cơ Ép Thô',
        origin: 'Ghana',
        benefit: 'Giữ lại lớp lipid ẩm mượt tự nhiên, không gây căng tức da'
      }
    ],
    skinTypes: ['sensitive', 'dry', 'damaged', 'all'],
    skinConcerns: ['Làm sạch sâu', 'Bảo vệ màng ẩm', 'Da mỏng nhạy cảm'],
    ritualGuide: {
      morning: 'Có thể dùng làm bước massage làm ấm kích hoạt sinh khí da.',
      evening: 'Lấy 1 lượng bằng hạt hạnh nhân xoa lên mặt khô, massage 1 phút rồi thêm nước nhũ hóa.',
      texture: 'Sáp vàng óng thơm mịn, tan chảy êm ái trên da.',
      aroma: 'Hương hoa cúc và mật ong tự nhiên ngọt ngào thư giãn như liệu trình spa cao cấp.'
    },
    clinicalResults: [
      { percentage: 100, claim: 'loại bỏ hoàn toàn lớp kem chống nắng chống nước và bụi mịn' },
      { percentage: 98, claim: 'cảm nhận làn da mềm mượt như nhung sau khi rửa trôi' }
    ]
  }
];

export const BOTANICAL_INGREDIENTS: BotanicalIngredient[] = [
  {
    id: 'jeju-camellia',
    vietnameseName: 'Chiết xuất Hoa Trà Tuyết Jeju',
    scientificName: 'Camellia Japonica Flower Extract',
    origin: 'Đảo Jeju, Hàn Quốc',
    extractionMethod: 'Chiết xuất Siêu Tới Hạn CO2 ở nhiệt độ dưới 35°C',
    activeBioCompounds: ['Polyphenol', 'Oleic Acid', 'Flavonoid', 'Vitamin E tự nhiên'],
    skinAction: 'Ngăn ngừa đứt gãy sợi collagen, chống lại gốc tự do từ ánh sáng xanh và tái tạo màng ẩm tự nhiên.',
    iconType: 'flower',
    imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80',
    featuredInProducts: ['Serum Phục Hồi Sinh Học Cấp Tế Bào', 'Tinh Dầu Thực Vật Ép Lạnh Nguyên Bản']
  },
  {
    id: 'centella-asiatica',
    vietnameseName: 'Rau Má Cổ Thụ Bản Địa',
    scientificName: 'Centella Asiatica (Gotu Kola) Extract',
    origin: 'Vùng cao nguyên rừng ẩm Lâm Đồng',
    extractionMethod: 'Chưng cất phân đoạn chân không bảo toàn hoạt tính tế bào',
    activeBioCompounds: ['Asiaticoside (95%)', 'Madecassoside', 'Asiatic Acid', 'Madecassic Acid'],
    skinAction: 'Thúc đẩy tăng sinh nguyên bào sợi và đẩy nhanh quá trình biểu mô hóa, làm lành vết thương và giảm viêm đỏ.',
    iconType: 'sprout',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=80',
    featuredInProducts: ['Serum Phục Hồi Sinh Học Cấp Tế Bào', 'Mặt Nạ Phục Hồi Sinh Học SOS']
  },
  {
    id: 'olive-squalane',
    vietnameseName: 'Squalane Thực Vật Tinh Khiết',
    scientificName: 'Phytosqualane (Olea Europaea)',
    origin: 'Miền Nam Tây Ban Nha',
    extractionMethod: 'Ép lạnh phân đoạn không dung môi hóa học',
    activeBioCompounds: ['Hydrocarbon Squalane tinh khiết 100%'],
    skinAction: 'Cấu trúc tương đồng hoàn hảo với squalene trong bã nhờn người, phục hồi lớp màng mỡ lipid mà không gây bí tắc.',
    iconType: 'droplet',
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80',
    featuredInProducts: ['Serum Phục Hồi Sinh Học Cấp Tế Bào', 'Kem Dưỡng Tái Tạo Màng Lipid Đa Tầng']
  },
  {
    id: 'tremella-mushroom',
    vietnameseName: 'Chiết Xuất Nấm Tuyết Tuyết Sơn',
    scientificName: 'Tremella Fuciformis Polysaccharide',
    origin: 'Vùng núi cao hoang dã',
    extractionMethod: 'Chiết tách phân tử sinh học enzyme vi sinh',
    activeBioCompounds: ['Polysaccharide ngậm nước', 'Glucuronic Acid'],
    skinAction: 'Phân tử ngậm nước siêu nhỏ thẩm thấu sâu hơn Hyaluronic Acid truyền thống, giữ ẩm tầng sâu 48 giờ.',
    iconType: 'sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=600&auto=format&fit=crop&q=80',
    featuredInProducts: ['Kem Dưỡng Tái Tạo Màng Lipid Đa Tầng', 'Mặt Nạ Phục Hồi Sinh Học SOS']
  }
];

export const BOUTIQUES: BoutiqueLocation[] = [
  {
    id: 'boutique-hanoi',
    city: 'Hà Nội',
    name: 'Flagship Boutique Tràng Tiền',
    address: '18 Tràng Tiền, Quận Hoàn Kiếm, Hà Nội',
    phone: '024 3828 8989',
    hours: '09:00 - 21:30 (Mở cửa tất cả các ngày)',
    services: [
      'Chẩn đoán da chuyên sâu bằng máy phân tích tế bào sinh học',
      'Nghi thức massage mặt phục hồi bằng đá thạch anh & ngọc bích',
      'Khu vực trải nghiệm kết cấu và xưởng điều chế tùy biến cá nhân',
      'Dịch vụ gói quà lụa cao cấp và thư pháp tên khách hàng'
    ],
    image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'boutique-hcm',
    city: 'TP. Hồ Chí Minh',
    name: 'Flagship Boutique Lê Lợi',
    address: '65 Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
    phone: '028 3822 9999',
    hours: '09:30 - 22:00 (Mở cửa tất cả các ngày)',
    services: [
      'Không gian tĩnh lặng Zen Garden và trà thảo mộc hữu cơ chào đón',
      'Tư vấn riêng 1:1 cùng Bác sĩ & Chuyên gia Da liễu Dược liệu',
      'Trải nghiệm dòng sản phẩm Private Reserve giới hạn',
      'Thu hồi vỏ chai tái chế và tích điểm xanh Velvet Eco-Circle'
    ],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80'
  }
];

export const CLINICAL_STATS = {
  organicPurity: '100%',
  chemicalFree: '0%',
  hydrationImprovement: '98%',
  co2SupercriticalRetention: '99.4%',
  cellCycleDurationDays: 28,
  sustainableRecycledPackaging: '100%',
  crueltyFreeCertified: 'Leaping Bunny & PETA'
};

export const CLINICAL_TRIALS = [
  {
    id: 'trial-barrier-14d',
    title: 'Kiểm Nghiệm Lâm Sàng Phục Hồi Hàng Rào Lipid Sau 14 Ngày',
    durationWeeks: 2,
    participantCount: 120,
    institution: 'Viện Da Liễu Độc Lập Derm-Scan Bio Asia',
    beforeImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
    tewlReduction: 68.4, // -68.4% mất nước
    erythemaReduction: 82.1, // -82.1% ửng đỏ
    hydrationIncrease: 94.6, // +94.6% độ ẩm nội sinh
    keyObservation: '100% người tham gia có làn da nhạy cảm sau treatment nặng ghi nhận cảm giác bỏng rát giảm triệt để sau 72 giờ sử dụng tinh chất phục hồi sinh học.'
  },
  {
    id: 'trial-cellular-28d',
    title: 'Chu Trình Tái Tạo Tế Bào Sừng & Biểu Bì 28 Ngày Hoàn Chỉnh',
    durationWeeks: 4,
    participantCount: 85,
    institution: 'Trung Tâm Công Nghệ Sinh Học Da Liễu Thụy Sĩ (SBCI)',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    tewlReduction: 74.2,
    erythemaReduction: 89.5,
    hydrationIncrease: 112.0,
    keyObservation: 'Mật độ sợi collagen type-1 và mạng lưới ceramides tự nhiên dày đặc trở lại, da lấy lại độ đàn hồi và sắc diện hồng hào tự nhiên.'
  }
];

export const VERIFIED_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Bs. Mai Phương Uyên',
    city: 'Hà Nội',
    age: 32,
    skinTypeTag: 'Da treatment mỏng đỏ • Viêm da tiếp xúc',
    durationUsed: 'Đã dùng 6 tuần',
    rating: 5,
    title: 'Cứu cánh thực sự cho làn da sau chuỗi ngày peel hỏng',
    comment: 'Là bác sĩ chuyên khoa da, tôi vô cùng khắt khe với bảng thành phần. Velvet & Glow giải quyết đúng gốc rễ: tỷ lệ lipid mô phỏng sinh học 3:1:1 và chiết xuất siêu tới hạn hoa trà giúp da tôi dứt hẳn cơn ngứa rát chỉ sau 3 đêm.',
    verifiedPurchase: true,
    dermatologistRecommended: true,
    date: '10/09/2026',
    productName: 'Serum Phục Hồi Sinh Học Cấp Tế Bào'
  },
  {
    id: 'rev-2',
    author: 'Nguyễn Thục Quyên',
    city: 'TP. Hồ Chí Minh',
    age: 28,
    skinTypeTag: 'Da dầu thiếu nước • Giãn mao mạch',
    durationUsed: 'Đã dùng 2 tháng',
    rating: 5,
    title: 'Kết cấu thấm như sương, không hề bết rít dưới khí hậu Sài Gòn',
    comment: 'Mình từng ngại dùng đồ phục hồi vì sợ bí tắc lỗ chân lông. Nhưng dòng serum này thẩm thấu cực kỳ nhanh, lớp kết thúc ráo mịn như nhung. Vùng má đỏ của mình giảm rõ đến 80%.',
    verifiedPurchase: true,
    dermatologistRecommended: false,
    date: '05/09/2026',
    productName: 'Serum Phục Hồi Sinh Học Cấp Tế Bào'
  },
  {
    id: 'rev-3',
    author: 'Lê Hoàng Yến Linh',
    city: 'Đà Nẵng',
    age: 35,
    skinTypeTag: 'Da lão hóa sớm • Khô căng bong tróc',
    durationUsed: 'Đã dùng 3 tuần',
    rating: 5,
    title: 'Hàng rào ẩm khỏe lên thấy rõ, makeup ăn tiệp mượt mà',
    comment: 'Tôi đăng ký gói giao định kỳ mỗi tháng luôn rồi. Mùi hương gỗ trầm và hoa trà thanh nhẹ rất dễ chịu, chuẩn chất spa boutique cao cấp.',
    verifiedPurchase: true,
    dermatologistRecommended: true,
    date: '01/09/2026',
    productName: 'Kem Tái Tạo Màng Lipid Đa Tầng 3:1:1'
  }
];
