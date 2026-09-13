import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, QrCode, Copy, Check, Truck, CreditCard, Clock, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, CheckoutOrder } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: (order: CheckoutOrder) => void;
}

export function CheckoutModal({ isOpen, onClose, items, onOrderSuccess }: CheckoutModalProps) {
  const [step, setStep] = useState<'info' | 'payment' | 'confirmation'>('info');
  const [copied, setCopied] = useState(false);
  
  // Customer & Shipping State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('Hà Nội');
  const [district, setDistrict] = useState('Quận Hoàn Kiếm');
  const [note, setNote] = useState('');
  
  // Payment State
  const [paymentMethod, setPaymentMethod] = useState<'vietqr' | 'cod' | 'momo'>('vietqr');
  const [subscriptionPlan, setSubscriptionPlan] = useState<'none' | '30days' | '45days' | '60days'>('none');

  // Generated Order
  const [completedOrder, setCompletedOrder] = useState<CheckoutOrder | null>(null);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = subscriptionPlan !== 'none' ? Math.round(subtotal * 0.1) : 0;
  const shippingFee = subtotal >= 1000000 || subtotal === 0 ? 0 : 35000;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const bankAccount = {
    bank: 'Vietcombank (Hội Sở)',
    accountNumber: '10288998899',
    accountName: 'VELVET & GLOW VIETNAM LTD',
    orderCode: `VG-${Math.floor(100000 + Math.random() * 900000)}`
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(bankAccount.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const order: CheckoutOrder = {
      orderId: bankAccount.orderCode,
      createdAt: new Date().toLocaleDateString('vi-VN'),
      items,
      subtotal,
      discountAmount,
      shippingFee,
      total,
      customer: {
        fullName,
        phone,
        email,
        address,
        province,
        district,
        note
      },
      paymentMethod,
      subscriptionPlan,
      status: paymentMethod === 'vietqr' ? 'pending_payment' : 'confirmed'
    };

    setCompletedOrder(order);
    setStep('confirmation');
    onOrderSuccess(order);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="checkout-modal-container relative bg-[#FCF9F4] text-[#1C1C19] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#1A3626]/10 max-h-[92vh] flex flex-col z-10"
        >
          {/* Header */}
          <div className="p-5 border-b border-[#1A3626]/8 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#1A3626]" />
              <h2 className="text-xl font-semibold text-[#042112]">
                {step === 'confirmation' ? 'Đơn Hàng Đã Được Khởi Tạo' : 'Quy Trình Đặt Hàng & Thanh Toán'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#727973] hover:text-[#042112] rounded-full hover:bg-[#F6F3EE] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
            {step === 'confirmation' && completedOrder ? (
              /* Confirmation Screen */
              <div className="text-center space-y-5 py-4">
                <div className="w-16 h-16 bg-[#A8BCA1]/20 text-[#1A3626] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <span className="label-caps text-[#51634D] block">Xác Nhận Thành Công</span>
                  <h3 className="font-serif-luxury text-3xl font-semibold text-[#042112] mt-1">
                    Mã Đơn Hàng: #{completedOrder.orderId}
                  </h3>
                  <p className="text-xs text-[#424843] max-w-md mx-auto mt-2 font-normal">
                    Chúng tôi đã gửi tin nhắn SMS và thư xác nhận phác đồ điều trị vào số điện thoại {completedOrder.customer.phone}.
                  </p>
                </div>

                {completedOrder.paymentMethod === 'vietqr' && (
                  /* VietQR Box */
                  <div className="bg-white p-5 rounded-2xl border border-[#1A3626]/12 max-w-md mx-auto space-y-4 shadow-botanical-card">
                    <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#1A3626]">
                      <QrCode className="w-4 h-4 text-[#D98C7A]" />
                      <span>Quét Mã VietQR Chuyển Khoản Nhanh 24/7</span>
                    </div>

                    <div className="flex justify-center p-3 bg-[#FAF7F2] rounded-xl border border-[#1A3626]/8">
                      {/* Dynamic VietQR API Demo */}
                      <img
                        src={`https://api.vietqr.io/image/970436-10288998899-compact2.jpg?amount=${total}&addInfo=${completedOrder.orderId}&accountName=VELVET%20GLOW`}
                        alt="Mã VietQR Thanh Toán"
                        className="w-52 h-52 object-contain rounded-lg shadow-2xs"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop&q=80';
                        }}
                      />
                    </div>

                    <div className="text-xs text-left space-y-2 bg-[#F6F3EE] p-3.5 rounded-xl border border-[#1A3626]/8">
                      <div className="flex justify-between items-center">
                        <span className="text-[#727973]">Ngân hàng:</span>
                        <span className="font-bold text-[#042112]">{bankAccount.bank}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#727973]">Số tài khoản:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[#042112]">{bankAccount.accountNumber}</span>
                          <button
                            onClick={handleCopyAccount}
                            className="text-[#D98C7A] hover:text-[#C97B69] p-0.5"
                            title="Sao chép"
                          >
                            {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#727973]">Nội dung chuyển khoản:</span>
                        <span className="font-mono font-bold text-[#D98C7A]">{completedOrder.orderId}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#727973]">Số tiền:</span>
                        <span className="font-price font-bold text-[#042112] text-sm">
                          {total.toLocaleString('vi-VN')}₫
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-[#1A3626] hover:bg-[#042112] text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs"
                >
                  Hoàn tất &amp; Trở về trang chủ
                </button>
              </div>
            ) : (
              /* Multi-step Checkout Form */
              <form onSubmit={handleSubmitOrder} className="space-y-6">
                {/* Step Indicators */}
                <div className="flex items-center justify-between border-b border-[#1A3626]/8 pb-4 text-xs font-semibold">
                  <span className={step === 'info' ? 'text-[#1A3626] font-bold' : 'text-[#727973]'}>
                    1. Địa Chỉ Nhận Hàng
                  </span>
                  <span>→</span>
                  <span className={step === 'payment' ? 'text-[#1A3626] font-bold' : 'text-[#727973]'}>
                    2. Thanh Toán &amp; Đăng Ký Định Kỳ
                  </span>
                </div>

                {step === 'info' ? (
                  /* Step 1: Customer Details */
                  <div className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-semibold text-[#042112]">Họ và tên *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Ví dụ: Nguyễn Phương Linh"
                          className="w-full p-3 bg-white border border-[#1A3626]/15 rounded-xl focus:outline-none focus:border-[#D98C7A]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-[#042112]">Số điện thoại *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="0912 345 678"
                          className="w-full p-3 bg-white border border-[#1A3626]/15 rounded-xl focus:outline-none focus:border-[#D98C7A]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-[#042112]">Email (nhận hồ sơ da liễu)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="linh.nguyen@example.com"
                        className="w-full p-3 bg-white border border-[#1A3626]/15 rounded-xl focus:outline-none focus:border-[#D98C7A]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-semibold text-[#042112]">Tỉnh / Thành phố *</label>
                        <select
                          value={province}
                          onChange={(e) => setProvince(e.target.value)}
                          className="w-full p-3 bg-white border border-[#1A3626]/15 rounded-xl focus:outline-none focus:border-[#D98C7A]"
                        >
                          <option value="Hà Nội">Hà Nội</option>
                          <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                          <option value="Đà Nẵng">Đà Nẵng</option>
                          <option value="Hải Phòng">Hải Phòng</option>
                          <option value="Cần Thơ">Cần Thơ</option>
                          <option value="Lâm Đồng">Lâm Đồng</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-[#042112]">Quận / Huyện *</label>
                        <input
                          type="text"
                          required
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          placeholder="Quận / Huyện..."
                          className="w-full p-3 bg-white border border-[#1A3626]/15 rounded-xl focus:outline-none focus:border-[#D98C7A]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-[#042112]">Địa chỉ chi tiết (Số nhà, tên đường, tòa nhà) *</label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Số 18 Tràng Tiền, Phường Tràng Tiền"
                        className="w-full p-3 bg-white border border-[#1A3626]/15 rounded-xl focus:outline-none focus:border-[#D98C7A]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-[#042112]">Ghi chú cho Dược sĩ đóng gói</label>
                      <textarea
                        rows={2}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Ghi chú da dễ kích ứng, yêu cầu bọc giấy lụa thủ công..."
                        className="w-full p-3 bg-white border border-[#1A3626]/15 rounded-xl focus:outline-none focus:border-[#D98C7A]"
                      />
                    </div>

                    <div className="pt-3 flex justify-end">
                      <button
                        type="button"
                        disabled={!fullName || !phone || !address}
                        onClick={() => setStep('payment')}
                        className="px-8 py-3.5 bg-[#1A3626] hover:bg-[#042112] disabled:opacity-50 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                      >
                        Tiếp tục đến phương thức thanh toán →
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Step 2: Payment & Subscription */
                  <div className="space-y-5 text-xs">
                    {/* Subscription Upsell */}
                    <div className="p-4 bg-[#F0EDE9] rounded-2xl border border-[#1A3626]/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#042112]">
                          Đặc Quyền Giao Hàng Định Kỳ (Auto-Replenish)
                        </span>
                        <span className="text-[10px] bg-[#D98C7A] text-white px-2 py-0.5 rounded-full font-bold">
                          Tiết Kiệm Thêm 10%
                        </span>
                      </div>
                      <p className="text-[11px] text-[#424843]">
                        Tế bào da cần 28 ngày để tái sinh. Duy trì phác đồ đều đặn để hàng rào lipid không bị tái phát suy yếu.
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'none', label: 'Mua 1 lần' },
                          { id: '30days', label: 'Mỗi 30 ngày' },
                          { id: '45days', label: 'Mỗi 45 ngày' }
                        ].map((plan) => (
                          <button
                            type="button"
                            key={plan.id}
                            onClick={() => setSubscriptionPlan(plan.id as any)}
                            className={`p-2.5 rounded-xl border text-center font-semibold transition-all ${
                              subscriptionPlan === plan.id
                                ? 'bg-[#1A3626] text-white border-[#1A3626]'
                                : 'bg-white text-[#424843] border-[#1A3626]/15 hover:bg-[#F6F3EE]'
                            }`}
                          >
                            {plan.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Payment Method Selector */}
                    <div className="space-y-2">
                      <label className="font-semibold text-[#042112]">Chọn phương thức thanh toán</label>
                      <div className="space-y-2">
                        <label
                          className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                            paymentMethod === 'vietqr'
                              ? 'bg-white border-[#1A3626] ring-1 ring-[#1A3626]/20'
                              : 'bg-white border-[#1A3626]/10 hover:bg-[#FAF7F2]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="pay"
                              checked={paymentMethod === 'vietqr'}
                              onChange={() => setPaymentMethod('vietqr')}
                              className="accent-[#1A3626]"
                            />
                            <div>
                              <p className="font-bold text-[#042112]">Chuyển Khoản VietQR Tự Động (Khuyên Dùng)</p>
                              <p className="text-[11px] text-[#727973]">Xác nhận tức thì qua App ngân hàng hoặc MoMo</p>
                            </div>
                          </div>
                          <QrCode className="w-5 h-5 text-[#1A3626]" />
                        </label>

                        <label
                          className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                            paymentMethod === 'cod'
                              ? 'bg-white border-[#1A3626] ring-1 ring-[#1A3626]/20'
                              : 'bg-white border-[#1A3626]/10 hover:bg-[#FAF7F2]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="pay"
                              checked={paymentMethod === 'cod'}
                              onChange={() => setPaymentMethod('cod')}
                              className="accent-[#1A3626]"
                            />
                            <div>
                              <p className="font-bold text-[#042112]">Thanh Toán Khi Nhận Hàng (COD)</p>
                              <p className="text-[11px] text-[#727973]">Kiểm tra hộp quà và mẫu thử trước khi trả tiền</p>
                            </div>
                          </div>
                          <Truck className="w-5 h-5 text-[#51634D]" />
                        </label>
                      </div>
                    </div>

                    {/* Order Cost Breakdown */}
                    <div className="bg-white p-4 rounded-xl border border-[#1A3626]/8 space-y-2">
                      <div className="flex justify-between text-[#727973]">
                        <span>Tạm tính ({items.length} món):</span>
                        <span className="font-price font-semibold text-[#042112]">
                          {subtotal.toLocaleString('vi-VN')}₫
                        </span>
                      </div>
                      {discountAmount > 0 && (
                        <div className="flex justify-between text-[#51634D]">
                          <span>Ưu đãi định kỳ (-10%):</span>
                          <span className="font-price">-{discountAmount.toLocaleString('vi-VN')}₫</span>
                        </div>
                      )}
                      <div className="flex justify-between text-[#727973]">
                        <span>Phí vận chuyển:</span>
                        <span className="font-medium text-[#042112]">
                          {shippingFee === 0 ? 'Miễn phí toàn quốc' : `${shippingFee.toLocaleString('vi-VN')}₫`}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-[#1A3626]/8 flex justify-between items-baseline font-bold text-sm text-[#042112]">
                        <span>Tổng tiền thanh toán:</span>
                        <span className="font-price text-2xl text-[#042112]">
                          {total.toLocaleString('vi-VN')}₫
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setStep('info')}
                        className="text-xs text-[#727973] hover:text-[#042112] flex items-center gap-1"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Sửa thông tin nhận hàng</span>
                      </button>

                      <button
                        type="submit"
                        className="px-8 py-3.5 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-botanical-card hover:shadow-botanical-hover transition-all"
                      >
                        Xác Nhận &amp; Khởi Tạo Đơn Hàng
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
