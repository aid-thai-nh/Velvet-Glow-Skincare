import React, { useState } from 'react';
import { X, Trash2, Gift, ShieldCheck, ArrowRight, CheckCircle2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [selectedSample, setSelectedSample] = useState<string>('sample-serum');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Form State
  const [recipient, setRecipient] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'cod',
    note: ''
  });

  const FREE_SHIPPING_THRESHOLD = 1000000;
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 35000;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'VELVET10') {
      setDiscountPercent(10);
      setPromoError('');
    } else {
      setPromoError('Mã không hợp lệ. Hãy thử: VELVET10 (giảm 10%)');
    }
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    onClearCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md bg-[#FCF9F4] text-[#1C1C19] h-full shadow-2xl flex flex-col justify-between overflow-hidden z-10"
          >
            {/* Cart Header */}
            <div className="p-5 border-b border-[#1A3626]/8 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#1A3626]" />
                <h2 className="text-xl font-semibold text-[#042112]">
                  {orderComplete ? 'Đơn Hàng Thành Công' : isCheckingOut ? 'Thông Tin Giao Hàng' : 'Giỏ Hàng Của Bạn'}
                </h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 text-[#727973] hover:text-[#042112] rounded-full hover:bg-[#F6F3EE] transition-colors"
                aria-label="Đóng giỏ hàng"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Free Shipping Progress */}
            {!orderComplete && (
              <div className="bg-[#F0EDE9] px-5 py-3 border-b border-[#1A3626]/8 text-xs">
                <div className="flex justify-between items-center mb-1 text-[#1A3626] font-medium">
                  <span>
                    {subtotal >= FREE_SHIPPING_THRESHOLD
                      ? '✨ Bạn đã nhận được Miễn Phí Giao Hàng Toàn Quốc!'
                      : `Thêm ${(FREE_SHIPPING_THRESHOLD - subtotal).toLocaleString('vi-VN')}₫ để được Miễn Phí Giao Hàng`}
                  </span>
                  <span className="font-bold">{Math.round(freeShippingProgress)}%</span>
                </div>
                <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#1A3626] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${freeShippingProgress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            )}

            {/* Body Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {orderComplete ? (
                /* Order Completed State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-[#A8BCA1]/20 text-[#1A3626] rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#042112]">
                    Cảm ơn bạn đã tin chọn Velvet &amp; Glow
                  </h3>
                  <p className="text-xs text-[#424843] max-w-xs mx-auto leading-relaxed font-normal">
                    Đơn hàng phục hồi da của bạn đã được ghi nhận. Chuyên viên tư vấn sẽ liên hệ xác nhận đơn và điều phối đóng gói quà tặng trong 30 phút.
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-[#1A3626]/8 text-left text-xs space-y-2 mt-4 shadow-2xs">
                    <p>
                      <strong>Người nhận:</strong> {recipient.name || 'Quý khách'}
                    </p>
                    <p>
                      <strong>Số điện thoại:</strong> {recipient.phone || '098*******'}
                    </p>
                    <p>
                      <strong>Địa chỉ:</strong> {recipient.address || 'Đang cập nhật'}
                    </p>
                    <p>
                      <strong>Phương thức:</strong>{' '}
                      {recipient.payment === 'cod' ? 'Thanh toán khi nhận hàng (COD)' : 'Chuyển khoản / Thẻ'}
                    </p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setOrderComplete(false);
                      setIsCheckingOut(false);
                      onClose();
                    }}
                    className="w-full py-3 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs"
                  >
                    Tiếp tục mua sắm
                  </motion.button>
                </motion.div>
              ) : items.length === 0 ? (
                /* Empty Cart */
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#F6F3EE] text-[#727973] rounded-full flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-8 h-8 stroke-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#042112]">
                    Giỏ hàng của bạn đang trống
                  </h3>
                  <p className="text-xs text-[#727973] max-w-xs mx-auto leading-relaxed font-normal">
                    Hãy lựa chọn những công thức dưỡng da sinh học cao cấp để bắt đầu nghi thức phục hồi.
                  </p>
                </div>
              ) : isCheckingOut ? (
                /* Checkout Form */
                <form id="checkout-form" onSubmit={handleOrderSubmit} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-semibold text-[#042112]">Họ và tên người nhận *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Thảo Vy"
                      value={recipient.name}
                      onChange={(e) => setRecipient({ ...recipient, name: e.target.value })}
                      className="w-full p-3 bg-white border border-[#1A3626]/15 rounded-xl focus:outline-none focus:border-[#D98C7A]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-[#042112]">Số điện thoại *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0987 654 321"
                      value={recipient.phone}
                      onChange={(e) => setRecipient({ ...recipient, phone: e.target.value })}
                      className="w-full p-3 bg-white border border-[#1A3626]/15 rounded-xl focus:outline-none focus:border-[#D98C7A]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-[#042112]">Địa chỉ giao hàng chi tiết *</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành..."
                      value={recipient.address}
                      onChange={(e) => setRecipient({ ...recipient, address: e.target.value })}
                      className="w-full p-3 bg-white border border-[#1A3626]/15 rounded-xl focus:outline-none focus:border-[#D98C7A]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-[#042112]">Hình thức thanh toán</label>
                    <div className="grid grid-cols-2 gap-2">
                      <label
                        className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2 transition-all ${
                          recipient.payment === 'cod'
                            ? 'border-[#D98C7A] bg-[#D98C7A]/10'
                            : 'border-[#1A3626]/8 bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={recipient.payment === 'cod'}
                          onChange={() => setRecipient({ ...recipient, payment: 'cod' })}
                        />
                        <span className="font-medium text-[#042112]">COD (Khi nhận)</span>
                      </label>

                      <label
                        className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2 transition-all ${
                          recipient.payment === 'card'
                            ? 'border-[#D98C7A] bg-[#D98C7A]/10'
                            : 'border-[#1A3626]/8 bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={recipient.payment === 'card'}
                          onChange={() => setRecipient({ ...recipient, payment: 'card' })}
                        />
                        <span className="font-medium text-[#042112]">Chuyển khoản QR</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#727973] hover:text-[#042112] underline pt-1 block"
                  >
                    ← Quay lại xem giỏ hàng
                  </button>
                </form>
              ) : (
                /* Cart Items List */
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      layout
                      key={item.product.id}
                      className="bg-white rounded-2xl p-3.5 border border-[#1A3626]/8 flex gap-3 shadow-2xs"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-xl bg-[#F6F3EE] shrink-0"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-semibold text-[#042112] truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-[11px] text-[#727973]">{item.product.volume}</p>
                          <span className="font-price text-xs font-bold text-[#042112] block mt-1">
                            {item.product.price.toLocaleString('vi-VN')}₫
                          </span>
                        </div>

                        {/* Quantity and Delete */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-[#1A3626]/15 rounded-full bg-[#F6F3EE] text-xs">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              className="w-6 h-6 flex items-center justify-center text-[#1A3626] font-bold hover:bg-black/5 rounded-l-full"
                            >
                              -
                            </button>
                            <span className="w-7 text-center font-semibold text-[#042112]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center text-[#1A3626] font-bold hover:bg-black/5 rounded-r-full"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-[#727973] hover:text-red-600 p-1 transition-colors"
                            aria-label="Xóa sản phẩm"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Free Biological Sample Selector */}
                  <div className="bg-[#1A3626]/5 rounded-2xl p-4 border border-[#1A3626]/10 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1A3626]">
                      <Gift className="w-4 h-4 text-[#D98C7A]" />
                      <span>Đặc quyền quà tặng: Mẫu thử sinh học cao cấp</span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sample"
                          checked={selectedSample === 'sample-serum'}
                          onChange={() => setSelectedSample('sample-serum')}
                        />
                        <span>Mẫu thử Serum Tế Bào Bio-Cellular 5ml</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sample"
                          checked={selectedSample === 'sample-cream'}
                          onChange={() => setSelectedSample('sample-cream')}
                        />
                        <span>Mẫu thử Kem Khóa Ẩm Ceramide 3:1:1 5ml</span>
                      </label>
                    </div>
                  </div>

                  {/* Promo Code Box */}
                  <form onSubmit={handleApplyPromo} className="space-y-1">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Mã ưu đãi (thử: VELVET10)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3.5 py-2.5 bg-white border border-[#1A3626]/15 rounded-full text-xs focus:outline-none focus:border-[#D98C7A]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#1A3626] hover:bg-[#042112] text-white text-xs font-semibold rounded-full uppercase tracking-wider"
                      >
                        Áp dụng
                      </button>
                    </div>
                    {promoError && <p className="text-[11px] text-red-600 pl-2">{promoError}</p>}
                    {discountPercent > 0 && (
                      <p className="text-[11px] text-[#51634D] pl-2 font-medium">
                        ✓ Đã áp dụng mã giảm {discountPercent}% thành công!
                      </p>
                    )}
                  </form>
                </div>
              )}
            </div>

            {/* Footer Summary & Action */}
            {items.length > 0 && !orderComplete && (
              <div className="p-5 bg-white border-t border-[#1A3626]/8 space-y-3 shadow-lg">
                <div className="space-y-1.5 text-xs text-[#424843]">
                  <div className="flex justify-between">
                    <span>Tạm tính</span>
                    <span className="font-price font-semibold text-[#042112]">
                      {subtotal.toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-[#51634D]">
                      <span>Ưu đãi voucher ({discountPercent}%)</span>
                      <span className="font-price">-{discountAmount.toLocaleString('vi-VN')}₫</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Phí vận chuyển</span>
                    <span className="font-price text-[#042112] font-medium">
                      {shippingFee === 0 ? 'Miễn phí' : `${shippingFee.toLocaleString('vi-VN')}₫`}
                    </span>
                  </div>
                  <div className="border-t border-[#1A3626]/8 pt-2 flex justify-between items-baseline font-bold text-sm text-[#042112]">
                    <span>Tổng cộng</span>
                    <span className="font-price text-xl text-[#042112] font-bold">
                      {total.toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                </div>

                {isCheckingOut ? (
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    form="checkout-form"
                    className="w-full py-3.5 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 shadow-botanical-card hover:shadow-botanical-hover transition-all"
                  >
                    <span>Xác nhận đặt hàng ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full py-3.5 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 shadow-botanical-card hover:shadow-botanical-hover transition-all"
                  >
                    <span>Tiến hành thanh toán</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                )}

                <div className="flex items-center justify-center gap-2 text-[10px] text-[#727973]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1A3626]" />
                  <span>Bảo mật chuẩn mã hóa SSL 256-bit • Đổi trả 30 ngày nếu kích ứng</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
