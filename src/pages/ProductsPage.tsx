import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Select } from 'antd';
import {
  Filter,
  Star,
  Heart,
  Eye,
  ShoppingBag,
  ArrowUpDown,
  Sparkles,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  RotateCcw,
  Check,
  ShieldAlert,
  Flame,
  Droplets,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS } from '../data/mockData';

interface ProductsPageProps {
  onOpenProductDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onOpenDiagnostic: () => void;
}

export function ProductsPage({
  onOpenProductDetail,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onOpenDiagnostic
}: ProductsPageProps) {
  const catalogRef = useRef<HTMLDivElement>(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkinType, setSelectedSkinType] = useState<string>('all');
  const [selectedConcern, setSelectedConcern] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedIngredient, setSelectedIngredient] = useState<string>('all');
  const [onlyBestseller, setOnlyBestseller] = useState<boolean>(false);
  const [onlyNew, setOnlyNew] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');

  // Drawer / Advanced Panel open state
  const [isAdvancedOpen, setIsAdvancedOpen] = useState<boolean>(false);

  // Pagination States
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

  const categories = [
    { id: 'all', label: 'Tất cả sản phẩm' },
    { id: 'serum', label: 'Tinh chất phục hồi' },
    { id: 'cream', label: 'Kem dưỡng khóa ẩm' },
    { id: 'oil', label: 'Tinh dầu thực vật' },
    { id: 'cleanser', label: 'Làm sạch sinh học' },
    { id: 'toner', label: 'Nước cân bằng' },
    { id: 'eye-care', label: 'Vùng mắt' },
    { id: 'treatment', label: 'Đặc trị sinh học' },
    { id: 'sunscreen', label: 'Chống nắng khoáng' }
  ];

  const skinTypes = [
    { id: 'all', label: 'Mọi loại da' },
    { id: 'sensitive', label: 'Da nhạy cảm & Kích ứng' },
    { id: 'damaged', label: 'Da mỏng đỏ & Tổn thương' },
    { id: 'dry', label: 'Da khô mất nước' },
    { id: 'aging', label: 'Da lão hóa & Thiếu săn chắc' }
  ];

  const concerns = [
    { id: 'all', label: 'Mọi vấn đề da' },
    { id: 'Phục hồi màng ẩm', label: 'Phục hồi màng lipid' },
    { id: 'Sau xâm lấn laser/peel', label: 'Sau laser / Peel / Treatment' },
    { id: 'Da mỏng đỏ yếu', label: 'Da mỏng đỏ & Nhạy cảm' },
    { id: 'Thiếu nước trầm trọng', label: 'Thiếu nước nội sinh (TEWL)' },
    { id: 'Quầng thâm mắt', label: 'Quầng thâm & Bọng mắt' },
    { id: 'Lỗ chân lông thô', label: 'Lỗ chân lông thô & Sần sùi' }
  ];

  const priceRanges = [
    { id: 'all', label: 'Tất cả mức giá' },
    { id: 'under-1m', label: 'Dưới 1.000.000₫', min: 0, max: 999999 },
    { id: '1m-1.5m', label: '1.000.000₫ - 1.500.000₫', min: 1000000, max: 1500000 },
    { id: 'above-1.5m', label: 'Trên 1.500.000₫', min: 1500001, max: Infinity }
  ];

  const heroIngredientsList = [
    { id: 'all', label: 'Tất cả hoạt chất' },
    { id: 'Centella', label: 'Rau má Centella Asiatica' },
    { id: 'Hoa Trà', label: 'Chiết xuất Hoa Trà Tuyết' },
    { id: 'Ceramide', label: 'Ceramide sinh học' },
    { id: 'Squalane', label: 'Squalane thực vật ép lạnh' },
    { id: 'Niacinamide', label: 'Niacinamide dược phẩm' },
    { id: 'Peptide', label: 'Hexapeptide & Caffeine' },
    { id: 'Zinc Oxide', label: 'Màng lọc Non-Nano Zinc' },
    { id: 'Enzyme', label: 'Enzyme thực vật lên men' }
  ];

  // Count active filters (excluding 'all' and false)
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (selectedSkinType !== 'all') count++;
    if (selectedConcern !== 'all') count++;
    if (selectedPriceRange !== 'all') count++;
    if (selectedIngredient !== 'all') count++;
    if (onlyBestseller) count++;
    if (onlyNew) count++;
    if (searchQuery.trim() !== '') count++;
    return count;
  }, [
    selectedCategory,
    selectedSkinType,
    selectedConcern,
    selectedPriceRange,
    selectedIngredient,
    onlyBestseller,
    onlyNew,
    searchQuery
  ]);

  // Reset all filters function
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSkinType('all');
    setSelectedConcern('all');
    setSelectedPriceRange('all');
    setSelectedIngredient('all');
    setOnlyBestseller(false);
    setOnlyNew(false);
    setSortBy('featured');
    setCurrentPage(1);
  };

  // Reset to page 1 whenever any filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchQuery,
    selectedCategory,
    selectedSkinType,
    selectedConcern,
    selectedPriceRange,
    selectedIngredient,
    onlyBestseller,
    onlyNew,
    sortBy,
    itemsPerPage
  ]);

  // Master Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // 1. Text search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchSubtitle = p.subtitle.toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchIngredient = p.heroIngredients.some((ing) => ing.name.toLowerCase().includes(q));
        const matchConcern = p.skinConcerns.some((c) => c.toLowerCase().includes(q));
        if (!matchName && !matchSubtitle && !matchDesc && !matchIngredient && !matchConcern) {
          return false;
        }
      }

      // 2. Category
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // 3. Skin Type
      if (selectedSkinType !== 'all') {
        const hasSkinType = p.skinTypes.includes(selectedSkinType as any) || p.skinTypes.includes('all');
        if (!hasSkinType) return false;
      }

      // 4. Skin Concern
      if (selectedConcern !== 'all') {
        const hasConcern = p.skinConcerns.some((c) =>
          c.toLowerCase().includes(selectedConcern.toLowerCase())
        );
        if (!hasConcern) return false;
      }

      // 5. Price Range
      if (selectedPriceRange !== 'all') {
        const tier = priceRanges.find((r) => r.id === selectedPriceRange);
        if (tier && (p.price < tier.min || p.price > tier.max)) {
          return false;
        }
      }

      // 6. Ingredient
      if (selectedIngredient !== 'all') {
        const hasIngredient = p.heroIngredients.some((ing) =>
          ing.name.toLowerCase().includes(selectedIngredient.toLowerCase())
        );
        if (!hasIngredient) return false;
      }

      // 7. Bestseller / New toggles
      if (onlyBestseller && !p.isBestseller) return false;
      if (onlyNew && !p.isNew) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      // Default 'featured': bestsellers first, then highest ratings
      const aScore = (a.isBestseller ? 2 : 0) + (a.isNew ? 1 : 0) + a.rating / 10;
      const bScore = (b.isBestseller ? 2 : 0) + (b.isNew ? 1 : 0) + b.rating / 10;
      return bScore - aScore;
    });
  }, [
    searchQuery,
    selectedCategory,
    selectedSkinType,
    selectedConcern,
    selectedPriceRange,
    selectedIngredient,
    onlyBestseller,
    onlyNew,
    sortBy
  ]);

  // Pagination Slicing
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8" ref={catalogRef}>
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="label-caps text-[#51634D] block">
          Boutique Dược Mỹ Phẩm Hữu Cơ
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#042112]">
          Dược Phẩm Phục Hồi Chuyên Biệt
        </h1>
        <p className="text-xs sm:text-sm text-[#424843] leading-relaxed font-normal">
          100% chiết xuất thực vật hữu cơ tinh khiết kết hợp hoạt chất sinh học tương đồng tế bào. Mỗi công thức là một giải pháp khoa học nuôi dưỡng và tái sinh hàng rào bảo vệ tự nhiên của làn da.
        </p>
      </div>

      {/* Main Filter & Search Control Panel */}
      <div className="bg-white rounded-2xl p-5 border border-[#1A3626]/8 shadow-botanical-card space-y-4">
        {/* Row 1: Search Bar & Primary Actions */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Quick Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#727973]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm theo tên sản phẩm, hoạt chất, vấn đề da..."
              className="w-full pl-10 pr-9 py-2.5 bg-[#FAF7F2] border border-[#1A3626]/12 rounded-full text-xs text-[#042112] placeholder-[#727973] focus:outline-none focus:border-[#D98C7A] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#727973] hover:text-[#042112]"
                aria-label="Xóa tìm kiếm"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Action Buttons: Advanced Filter & Sorting */}
          <div className="flex items-center gap-2.5 self-end md:self-auto shrink-0">
            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                isAdvancedOpen || activeFiltersCount > 0
                  ? 'bg-[#1A3626] text-white shadow-2xs'
                  : 'bg-[#FAF7F2] text-[#1A3626] hover:bg-[#F0EDE9] border border-[#1A3626]/10'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Bộ lọc nâng cao</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#D98C7A] text-white text-[10px] font-bold flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort Selector with Ant Design */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-[#51634D] hidden sm:inline">Sắp xếp:</span>
              <Select
                value={sortBy}
                onChange={(val) => setSortBy(val)}
                className="w-44 text-xs"
                popupMatchSelectWidth={false}
                options={[
                  { value: 'featured', label: 'Nổi bật / Bestseller' },
                  { value: 'rating', label: 'Đánh giá cao nhất' },
                  { value: 'newest', label: 'Sản phẩm mới nhất' },
                  { value: 'price-low', label: 'Giá: Thấp đến Cao' },
                  { value: 'price-high', label: 'Giá: Cao đến Thấp' }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Category Horizontal Scroll Tabs with Badge Count */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
          {categories.map((cat) => {
            const count =
              cat.id === 'all'
                ? PRODUCTS.length
                : PRODUCTS.filter((p) => p.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? 'bg-[#1A3626] text-white shadow-2xs'
                    : 'bg-[#FAF7F2] text-[#424843] hover:bg-[#F0EDE9] border border-[#1A3626]/8'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#1A3626]/8 text-[#51634D]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Row 3: Collapsible Advanced Filter Drawer */}
        <AnimatePresence>
          {isAdvancedOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden pt-4 border-t border-[#1A3626]/8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                {/* 1. Loại Da */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[#042112] uppercase tracking-wider text-[11px] block">
                    1. Phù hợp loại da
                  </label>
                  <Select
                    value={selectedSkinType}
                    onChange={(val) => setSelectedSkinType(val)}
                    className="w-full"
                    options={skinTypes.map((st) => ({ value: st.id, label: st.label }))}
                  />
                </div>

                {/* 2. Vấn đề da */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[#042112] uppercase tracking-wider text-[11px] block">
                    2. Mục tiêu điều trị
                  </label>
                  <Select
                    value={selectedConcern}
                    onChange={(val) => setSelectedConcern(val)}
                    className="w-full"
                    options={concerns.map((c) => ({ value: c.id, label: c.label }))}
                  />
                </div>

                {/* 3. Khoảng giá */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[#042112] uppercase tracking-wider text-[11px] block">
                    3. Khoảng giá
                  </label>
                  <Select
                    value={selectedPriceRange}
                    onChange={(val) => setSelectedPriceRange(val)}
                    className="w-full"
                    options={priceRanges.map((pr) => ({ value: pr.id, label: pr.label }))}
                  />
                </div>

                {/* 4. Hoạt chất sinh học */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[#042112] uppercase tracking-wider text-[11px] block">
                    4. Hoạt chất sinh học
                  </label>
                  <Select
                    value={selectedIngredient}
                    onChange={(val) => setSelectedIngredient(val)}
                    className="w-full"
                    options={heroIngredientsList.map((ing) => ({ value: ing.id, label: ing.label }))}
                  />
                </div>
              </div>

              {/* Quick Feature Filter Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#1A3626]/5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#51634D] mr-1">Đặc quyền:</span>
                  <button
                    onClick={() => setOnlyBestseller(!onlyBestseller)}
                    className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      onlyBestseller
                        ? 'bg-[#1A3626] text-white'
                        : 'bg-[#FAF7F2] text-[#424843] hover:bg-[#F0EDE9] border border-[#1A3626]/10'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5 text-[#D98C7A]" />
                    <span>Chỉ hiện Bestseller</span>
                    {onlyBestseller && <Check className="w-3 h-3" />}
                  </button>

                  <button
                    onClick={() => setOnlyNew(!onlyNew)}
                    className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      onlyNew
                        ? 'bg-[#A8BCA1] text-[#1A3626] font-bold'
                        : 'bg-[#FAF7F2] text-[#424843] hover:bg-[#F0EDE9] border border-[#1A3626]/10'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#1A3626]" />
                    <span>Mới ra mắt</span>
                    {onlyNew && <Check className="w-3 h-3" />}
                  </button>
                </div>

                {/* Reset Filters Shortcut Button */}
                {activeFiltersCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs text-[#D98C7A] hover:text-[#C97B69] font-semibold flex items-center gap-1 underline underline-offset-4"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Xóa toàn bộ bộ lọc</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Row 4: Active Filter Chips Bar */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#1A3626]/6 text-xs">
            <span className="text-[11px] text-[#727973] font-medium">Đang lọc theo:</span>

            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A3626]/8 text-[#042112] text-[11px]">
                Từ khóa: &ldquo;{searchQuery}&rdquo;
                <button onClick={() => setSearchQuery('')} className="hover:text-[#D98C7A]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A3626]/8 text-[#042112] text-[11px]">
                {categories.find((c) => c.id === selectedCategory)?.label}
                <button onClick={() => setSelectedCategory('all')} className="hover:text-[#D98C7A]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedSkinType !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A3626]/8 text-[#042112] text-[11px]">
                {skinTypes.find((s) => s.id === selectedSkinType)?.label}
                <button onClick={() => setSelectedSkinType('all')} className="hover:text-[#D98C7A]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedConcern !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A3626]/8 text-[#042112] text-[11px]">
                {concerns.find((c) => c.id === selectedConcern)?.label}
                <button onClick={() => setSelectedConcern('all')} className="hover:text-[#D98C7A]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedPriceRange !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A3626]/8 text-[#042112] text-[11px]">
                {priceRanges.find((p) => p.id === selectedPriceRange)?.label}
                <button onClick={() => setSelectedPriceRange('all')} className="hover:text-[#D98C7A]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedIngredient !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A3626]/8 text-[#042112] text-[11px]">
                Hoạt chất: {heroIngredientsList.find((i) => i.id === selectedIngredient)?.label}
                <button onClick={() => setSelectedIngredient('all')} className="hover:text-[#D98C7A]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {onlyBestseller && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A3626]/8 text-[#042112] text-[11px]">
                Bestseller
                <button onClick={() => setOnlyBestseller(false)} className="hover:text-[#D98C7A]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {onlyNew && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A3626]/8 text-[#042112] text-[11px]">
                Mới ra mắt
                <button onClick={() => setOnlyNew(false)} className="hover:text-[#D98C7A]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={handleResetFilters}
              className="text-[11px] text-[#D98C7A] hover:underline font-medium ml-auto"
            >
              Xóa tất cả
            </button>
          </div>
        )}
      </div>

      {/* Catalog Meta Status (Results count + Page info) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#51634D] px-1">
        <div className="font-medium">
          Tìm thấy <span className="font-bold text-[#042112]">{filteredProducts.length}</span> công thức dược liệu sinh học
          {filteredProducts.length > 0 && (
            <span>
              {' '}• Hiển thị {(currentPage - 1) * itemsPerPage + 1} -{' '}
              {Math.min(currentPage * itemsPerPage, filteredProducts.length)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="text-[11px]">Hiển thị mỗi trang:</span>
          <div className="flex gap-1 bg-white border border-[#1A3626]/10 rounded-lg p-0.5">
            {[6, 9, 12].map((num) => (
              <button
                key={num}
                onClick={() => setItemsPerPage(num)}
                className={`px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                  itemsPerPage === num
                    ? 'bg-[#1A3626] text-white'
                    : 'text-[#51634D] hover:bg-[#FAF7F2]'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid or Empty State */}
      {filteredProducts.length === 0 ? (
        /* Empty State */
        <div className="py-20 text-center space-y-4 bg-white rounded-2xl border border-[#1A3626]/8 p-8 max-w-lg mx-auto shadow-2xs">
          <div className="w-16 h-16 bg-[#FAF7F2] text-[#51634D] rounded-full flex items-center justify-center mx-auto">
            <Filter className="w-7 h-7 stroke-1" />
          </div>
          <h3 className="text-2xl font-semibold text-[#042112]">
            Không tìm thấy sản phẩm phù hợp
          </h3>
          <p className="text-xs text-[#727973] leading-relaxed max-w-sm mx-auto font-normal">
            Không có công thức nào khớp với các bộ lọc hiện tại của bạn. Hãy thử thay đổi mức giá, vấn đề da hoặc xóa bớt tiêu chí lọc.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-2.5 bg-[#D98C7A] hover:bg-[#C97B69] text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            Xem toàn bộ bộ sưu tập
          </button>
        </div>
      ) : (
        /* Product Cards Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {paginatedProducts.map((product) => {
            const isWish = wishlistIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#1A3626]/8 shadow-botanical-card hover:shadow-botanical-hover transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-4/5 bg-[#F6F3EE] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {product.isBestseller && (
                    <div className="absolute top-3 left-3 bg-[#1A3626] text-[#FCF9F4] text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold shadow-xs">
                      Signature
                    </div>
                  )}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-[#A8BCA1] text-[#1A3626] text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold shadow-xs">
                      Mới ra mắt
                    </div>
                  )}

                  <button
                    onClick={() => onToggleWishlist(product)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-[#1A3626] shadow-xs transition-colors"
                    aria-label="Yêu thích"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isWish ? 'fill-[#D98C7A] text-[#D98C7A]' : 'text-[#1A3626]'
                      }`}
                    />
                  </button>

                  <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="flex-1 py-2 px-3 rounded-full bg-white/95 hover:bg-white text-[#042112] text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Xem chi tiết</span>
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="py-2 px-4 rounded-full bg-[#D98C7A] hover:bg-[#C97B69] text-white text-[11px] font-semibold shadow-xs"
                      title="Thêm vào giỏ"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#51634D] font-semibold">
                      <span>{product.categoryLabel}</span>
                      <span>{product.volume}</span>
                    </div>

                    <h3
                      onClick={() => onOpenProductDetail(product)}
                      className="text-lg font-semibold text-[#042112] group-hover:text-[#D98C7A] cursor-pointer transition-colors line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#727973] line-clamp-2 leading-relaxed font-normal">
                      {product.subtitle}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-[#D98C7A] pt-1">
                      <Star className="w-3.5 h-3.5 fill-[#D98C7A]" />
                      <span className="font-bold text-[#042112]">{product.rating}</span>
                      <span className="text-[#727973]">({product.reviewCount})</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1A3626]/8 flex items-center justify-between">
                    <div>
                      <span className="font-price text-lg font-bold text-[#042112] tracking-tight">
                        {product.price.toLocaleString('vi-VN')}₫
                      </span>
                      {product.originalPrice && (
                        <span className="font-price text-xs text-[#727973] line-through ml-2">
                          {product.originalPrice.toLocaleString('vi-VN')}₫
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="px-5 py-2 bg-[#D98C7A] hover:bg-[#C97B69] active:bg-[#B86855] text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                    >
                      Thêm giỏ
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls Component */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1A3626]/8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#51634D]">
            <div>
              Trang <span className="font-bold text-[#042112]">{currentPage}</span> /{' '}
              <span className="font-bold text-[#042112]">{totalPages}</span> trang
              {' '}(<span className="font-semibold text-[#042112]">{filteredProducts.length}</span> sản phẩm)
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px]">Hiển thị:</span>
              <Select
                value={itemsPerPage}
                onChange={(val) => {
                  setItemsPerPage(val);
                  setCurrentPage(1);
                }}
                size="small"
                className="w-24 text-xs"
                options={[
                  { value: 6, label: '6 / trang' },
                  { value: 9, label: '9 / trang' },
                  { value: 12, label: '12 / trang' }
                ]}
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Previous Page Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-full border text-xs font-medium flex items-center gap-1 transition-colors ${
                currentPage === 1
                  ? 'border-[#1A3626]/10 text-[#727973]/40 cursor-not-allowed bg-transparent'
                  : 'border-[#1A3626]/15 text-[#1A3626] hover:bg-[#1A3626] hover:text-white bg-white shadow-2xs'
              }`}
              aria-label="Trang trước"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden xs:inline">Trước</span>
            </button>

            {/* Numeric Page Buttons */}
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => {
              const isActive = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-9 h-9 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1A3626] text-white shadow-xs scale-105'
                      : 'bg-white border border-[#1A3626]/12 text-[#424843] hover:border-[#1A3626]/40 hover:bg-[#FAF7F2]'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Page Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-full border text-xs font-medium flex items-center gap-1 transition-colors ${
                currentPage === totalPages
                  ? 'border-[#1A3626]/10 text-[#727973]/40 cursor-not-allowed bg-transparent'
                  : 'border-[#1A3626]/15 text-[#1A3626] hover:bg-[#1A3626] hover:text-white bg-white shadow-2xs'
              }`}
              aria-label="Trang tiếp"
            >
              <span className="hidden xs:inline">Sau</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Diagnostic Prompt Banner */}
      <div className="bg-[#F0EDE9] rounded-2xl p-6 sm:p-8 border border-[#1A3626]/8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xs">
        <div className="space-y-1.5 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#042112] tracking-tight flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="w-5 h-5 text-[#D98C7A]" />
            <span>Chưa biết làn da của bạn cần liệu trình nào?</span>
          </h3>
          <p className="text-xs text-[#424843] max-w-xl leading-relaxed">
            Thực hiện chẩn đoán hàng rào bảo vệ da trong 3 phút để nhận phác đồ trị liệu chuẩn y khoa và danh mục sản phẩm tương thích tuyệt đối.
          </p>
        </div>

        <button
          onClick={onOpenDiagnostic}
          className="px-7 py-3 rounded-full bg-[#1A3626] hover:bg-[#042112] text-white text-xs uppercase tracking-wider font-semibold shadow-xs shrink-0 transition-colors"
        >
          Chẩn đoán ngay
        </button>
      </div>
    </div>
  );
}
