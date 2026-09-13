import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, UserCheck, Filter } from 'lucide-react';
import { VERIFIED_REVIEWS } from '../data/mockData';

export function VerifiedReviewsSection() {
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const filtered = filterRating
    ? VERIFIED_REVIEWS.filter((r) => r.rating === filterRating)
    : VERIFIED_REVIEWS;

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1A3626]/10 pb-6">
        <div>
          <span className="label-caps text-[#51634D] block mb-1">
            Minh Bạch &amp; Thực Tế
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#042112] font-semibold">
            Đánh Giá Đã Xác Minh Theo Cơ Địa Da
          </h2>
          <p className="text-xs sm:text-sm text-[#424843] max-w-xl mt-2 font-normal">
            100% đánh giá từ khách hàng đã mua và sử dụng liệu trình thực tế, kèm ghi chú tình trạng da và khuyến nghị chuyên gia.
          </p>
        </div>

        {/* Rating Filter Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterRating(null)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-colors ${
              filterRating === null
                ? 'bg-[#1A3626] text-white'
                : 'bg-white border border-[#1A3626]/15 text-[#424843] hover:bg-[#F6F3EE]'
            }`}
          >
            Tất cả ({VERIFIED_REVIEWS.length})
          </button>
          <button
            onClick={() => setFilterRating(5)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1 transition-colors ${
              filterRating === 5
                ? 'bg-[#1A3626] text-white'
                : 'bg-white border border-[#1A3626]/15 text-[#424843] hover:bg-[#F6F3EE]'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-[#D98C7A] text-[#D98C7A]" />
            <span>5 Sao</span>
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl p-6 border border-[#1A3626]/8 shadow-botanical-card flex flex-col justify-between space-y-4 hover:shadow-botanical-hover transition-all"
          >
            <div className="space-y-3">
              {/* Stars & Verified Badge */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-[#D98C7A]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                {rev.verifiedPurchase && (
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-[#1A3626] bg-[#A8BCA1]/20 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-[#1A3626]" />
                    Đã mua hàng
                  </span>
                )}
              </div>

              {/* Skin Profile Tag */}
              <div className="bg-[#FAF7F2] p-2 rounded-lg border border-[#1A3626]/5 text-[11px] text-[#51634D] font-medium">
                📍 {rev.skinTypeTag} • {rev.durationUsed}
              </div>

              {/* Review Title & Content */}
              <h4 className="text-sm font-bold text-[#042112] leading-snug">
                &ldquo;{rev.title}&rdquo;
              </h4>
              <p className="text-xs text-[#424843] leading-relaxed font-normal">
                {rev.comment}
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-3 border-t border-[#1A3626]/8 flex items-center justify-between text-xs text-[#727973]">
              <div>
                <p className="font-bold text-[#042112] flex items-center gap-1">
                  <span>{rev.author}</span>
                  {rev.dermatologistRecommended && (
                    <span className="text-[10px] bg-[#D98C7A]/20 text-[#390C04] font-semibold px-1.5 py-0.2 rounded-sm">
                      Bác sĩ
                    </span>
                  )}
                </p>
                <p className="text-[10px] text-[#727973]">{rev.city} • {rev.date}</p>
              </div>
              <p className="text-[10px] italic text-[#51634D] max-w-[120px] text-right truncate">
                {rev.productName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
