import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorksServices } from './components/WorksServices';
import { OrderTracker } from './components/OrderTracker';
import { PortfolioGallery } from './components/PortfolioGallery';
import { CustomerReviews } from './components/CustomerReviews';
import { CustomOrderModal } from './components/CustomOrderModal';
import { RepairBookingModal } from './components/RepairBookingModal';
import { ArjunMasterPanel } from './components/ArjunMasterPanel';
import { Footer } from './components/Footer';
import { ServiceItem, WorkCategory } from './types/carpentry';
import { OWNER_PROFILE } from './data/mockData';
import { Phone, MessageSquare, Compass, Hammer, Sparkles, ShieldCheck, CheckCircle2, Ruler } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('explore');
  const [customOrderModalOpen, setCustomOrderModalOpen] = useState(false);
  const [repairModalOpen, setRepairModalOpen] = useState(false);
  const [selectedCategoryForQuote, setSelectedCategoryForQuote] = useState<WorkCategory | undefined>(undefined);
  const [selectedTrackOrderId, setSelectedTrackOrderId] = useState<string>('ARJ-8921');
  const [isMasterMode, setIsMasterMode] = useState(false);

  // Handlers
  const handleExploreWorks = () => {
    setActiveTab('explore');
    const worksEl = document.getElementById('works-section');
    if (worksEl) {
      worksEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (service: ServiceItem) => {
    setSelectedCategoryForQuote(service.category);
    setCustomOrderModalOpen(true);
  };

  const handleOrderCreated = (orderId: string) => {
    setSelectedTrackOrderId(orderId);
    setActiveTab('track');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTrackDirect = (orderId?: string) => {
    if (orderId) setSelectedTrackOrderId(orderId);
    setActiveTab('track');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#180f09] text-[#f7efe6] flex flex-col font-sans selection:bg-amber-600 selection:text-stone-950">
      
      {/* Navbar with brand, owner photo badge, and direct phone */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCustomOrder={() => {
          setSelectedCategoryForQuote(undefined);
          setCustomOrderModalOpen(true);
        }}
        onOpenRepairBooking={() => setRepairModalOpen(true)}
        isMasterMode={isMasterMode}
        setIsMasterMode={setIsMasterMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'explore' && (
          <>
            {/* Hero Section with prominent "Explore The Works" button and Arjun's Owner Photo */}
            <Hero
              onExploreWorks={handleExploreWorks}
              onOpenCustomOrder={() => {
                setSelectedCategoryForQuote(undefined);
                setCustomOrderModalOpen(true);
              }}
              onOpenRepairBooking={() => setRepairModalOpen(true)}
              onTrackOrder={() => setActiveTab('track')}
            />

            {/* Quick Interactive Highlights Bar */}
            <div className="bg-[#21140c] border-b border-[#442817] py-6 px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-3 rounded-xl bg-[#2a180e] border border-[#4d2d18]">
                  <p className="font-rustic text-2xl font-bold text-amber-300">100% Free</p>
                  <p className="text-xs text-stone-300 mt-0.5">App & Quote Requests</p>
                </div>
                <div className="p-3 rounded-xl bg-[#2a180e] border border-[#4d2d18]">
                  <p className="font-rustic text-2xl font-bold text-amber-300">18+ Years</p>
                  <p className="text-xs text-stone-300 mt-0.5">Master Craftsmanship</p>
                </div>
                <div className="p-3 rounded-xl bg-[#2a180e] border border-[#4d2d18]">
                  <p className="font-rustic text-2xl font-bold text-amber-300">850+ Jobs</p>
                  <p className="text-xs text-stone-300 mt-0.5">Cupboards, Kitchens & Banks</p>
                </div>
                <div className="p-3 rounded-xl bg-[#2a180e] border border-[#4d2d18]">
                  <p className="font-rustic text-2xl font-bold text-emerald-400">Same Day</p>
                  <p className="text-xs text-stone-300 mt-0.5">Doorstep Repairs</p>
                </div>
              </div>
            </div>

            {/* Specialized Works Catalog (Cupboards, Modular Kitchen, Bank works, Aluminium, Repairs) */}
            <WorksServices
              onSelectServiceForQuote={handleSelectServiceForQuote}
              onOpenRepairBooking={() => setRepairModalOpen(true)}
            />

            {/* Live Order Tracker Section */}
            <OrderTracker
              onOpenCustomOrder={() => {
                setSelectedCategoryForQuote(undefined);
                setCustomOrderModalOpen(true);
              }}
              selectedOrderId={selectedTrackOrderId}
            />

            {/* Portfolio Photo Gallery Section */}
            <PortfolioGallery
              onOpenCustomOrder={() => {
                setSelectedCategoryForQuote(undefined);
                setCustomOrderModalOpen(true);
              }}
            />

            {/* Customer Reviews & Testimonials Section */}
            <CustomerReviews />
          </>
        )}

        {activeTab === 'services' && (
          <div className="pt-4">
            <WorksServices
              onSelectServiceForQuote={handleSelectServiceForQuote}
              onOpenRepairBooking={() => setRepairModalOpen(true)}
            />
          </div>
        )}

        {activeTab === 'track' && (
          <div className="pt-4">
            <OrderTracker
              onOpenCustomOrder={() => {
                setSelectedCategoryForQuote(undefined);
                setCustomOrderModalOpen(true);
              }}
              selectedOrderId={selectedTrackOrderId}
            />
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="pt-4">
            <PortfolioGallery
              onOpenCustomOrder={() => {
                setSelectedCategoryForQuote(undefined);
                setCustomOrderModalOpen(true);
              }}
            />
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="pt-4">
            <CustomerReviews />
          </div>
        )}
      </main>

      {/* Floating Call & WhatsApp Action Bar (Sticky at bottom for mobile) */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2">
        <a
          href={`tel:${OWNER_PROFILE.phone}`}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm shadow-2xl hover:bg-amber-300 hover:scale-105 transition-all border-2 border-stone-950/20 group"
          title={`Call Arjun at ${OWNER_PROFILE.phone}`}
        >
          <Phone className="w-4 h-4 text-stone-950 group-hover:animate-bounce" />
          <span className="hidden sm:inline">Call: {OWNER_PROFILE.phone}</span>
          <span className="sm:hidden">Call 9948639084</span>
        </a>

        <a
          href={OWNER_PROFILE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-2xl hover:bg-emerald-500 hover:scale-105 transition-all border-2 border-stone-950/20"
          title="Chat with Arjun on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Arjun</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>

      {/* Footer */}
      <Footer
        onExploreWorks={handleExploreWorks}
        onOpenCustomOrder={() => {
          setSelectedCategoryForQuote(undefined);
          setCustomOrderModalOpen(true);
        }}
        onOpenRepairBooking={() => setRepairModalOpen(true)}
        onTrackOrder={() => handleTrackDirect()}
      />

      {/* Modals */}
      <CustomOrderModal
        isOpen={customOrderModalOpen}
        onClose={() => setCustomOrderModalOpen(false)}
        onOrderCreated={handleOrderCreated}
        initialServiceCategory={selectedCategoryForQuote}
      />

      <RepairBookingModal
        isOpen={repairModalOpen}
        onClose={() => setRepairModalOpen(false)}
      />

      <ArjunMasterPanel
        isOpen={isMasterMode}
        onClose={() => setIsMasterMode(false)}
        onSelectOrderToTrack={handleTrackDirect}
      />

    </div>
  );
}
