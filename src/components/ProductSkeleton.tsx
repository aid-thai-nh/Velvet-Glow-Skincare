import React from 'react';

interface ProductSkeletonGridProps {
  count?: number;
}

export function ProductSkeletonGrid({ count = 6 }: ProductSkeletonGridProps) {
  return (
    <div className="product-grid-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-pulse">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-3xl overflow-hidden border border-[#1A3626]/8 shadow-botanical-card flex flex-col justify-between"
        >
          {/* Image skeleton */}
          <div className="aspect-square w-full bg-[#EBE8E3] relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

          {/* Body Skeleton */}
          <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <div className="h-3 w-20 bg-[#E5E2DD] rounded-full" />
                <div className="h-3 w-12 bg-[#E5E2DD] rounded-full" />
              </div>
              <div className="h-5 w-4/5 bg-[#E0DCD6] rounded-md" />
              <div className="h-3 w-full bg-[#EBE8E3] rounded-md" />
              <div className="h-3 w-2/3 bg-[#EBE8E3] rounded-md" />
            </div>

            <div className="pt-3 border-t border-[#1A3626]/8 flex justify-between items-center">
              <div className="h-5 w-24 bg-[#E0DCD6] rounded-md" />
              <div className="h-8 w-24 bg-[#E5E2DD] rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 animate-pulse">
      <div className="h-4 w-32 bg-[#E5E2DD] rounded-full mx-auto" />
      <div className="h-8 w-80 bg-[#E0DCD6] rounded-lg mx-auto" />
      <div className="h-4 w-96 bg-[#EBE8E3] rounded-md mx-auto" />
      <div className="h-64 w-full bg-[#F0EDE9] rounded-3xl mt-6" />
    </div>
  );
}
