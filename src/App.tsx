import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute, Product, CartItem } from './types';
import { PRODUCTS } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { RoutinePage } from './pages/RoutinePage';
import { SciencePage } from './pages/SciencePage';
import { AboutPage } from './pages/AboutPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { WishlistModal } from './components/WishlistModal';
import { DiagnosticModal } from './components/DiagnosticModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      quantity: 1
    }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([PRODUCTS[0].id]);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(PRODUCTS[0]);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenProductDetail = (p: Product) => {
    setSelectedProduct(p);
    setIsProductModalOpen(true);
  };

  const handleCloseProductDetail = () => {
    setIsProductModalOpen(false);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddBundleToCart = (products: Product[]) => {
    products.forEach((p) => {
      handleAddToCart(p, 1);
    });
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const handleRemoveWishlist = (productId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
  };

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Navigation scroll to top
  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1A3626',
          colorLink: '#D98C7A',
          colorLinkHover: '#C97B69',
          borderRadius: 12,
          fontFamily: "'Be Vietnam Pro', sans-serif",
          colorText: '#1C1C19',
          colorBgContainer: '#FAF7F2',
          colorBorder: 'rgba(26, 54, 38, 0.15)',
        },
      }}
    >
      <div id="velvet-app" className="min-h-screen bg-[#FCF9F4] text-[#1C1C19] flex flex-col font-sans selection:bg-[#1A3626] selection:text-white antialiased">
      {/* Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
      />

      {/* Main Routed Page Content with smooth page transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentRoute === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenProductDetail={handleOpenProductDetail}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistIds={wishlistIds}
                onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}

            {currentRoute === 'products' && (
              <ProductsPage
                onOpenProductDetail={handleOpenProductDetail}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistIds={wishlistIds}
                onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
              />
            )}

            {currentRoute === 'routine' && (
              <RoutinePage
                onAddBundleToCart={handleAddBundleToCart}
                onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}

            {currentRoute === 'science' && <SciencePage />}

            {currentRoute === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseProductDetail}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => handleOpenProductDetail(p)}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistedProducts}
        onRemove={handleRemoveWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Skin Barrier Diagnostic Modal */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onAddPrescriptionToCart={handleAddBundleToCart}
      />

      {/* 1:1 Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
      </div>
    </ConfigProvider>
  );
}
