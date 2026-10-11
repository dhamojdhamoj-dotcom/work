import React, { useState } from 'react';
import { Phone, MessageSquare, Hammer, Search, Calendar, PlusCircle, ShieldCheck, Menu, X, Wrench, Shield } from 'lucide-react';
import { OWNER_PROFILE } from '../data/mockData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCustomOrder: () => void;
  onOpenRepairBooking: () => void;
  isMasterMode: boolean;
  setIsMasterMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenCustomOrder,
  onOpenRepairBooking,
  isMasterMode,
  setIsMasterMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'explore', label: 'Explore Works', icon: Hammer },
    { id: 'services', label: 'All Services', icon: Wrench },
    { id: 'track', label: 'Track Order', icon: Search },
    { id: 'portfolio', label: 'Photo Gallery', icon: ShieldCheck },
    { id: 'reviews', label: 'Customer Reviews', icon: MessageSquare }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#1e130c]/95 backdrop-blur-md border-b border-[#5c3a21]/60 shadow-xl">
      {/* Top Bar with Free Notice & Owner Direct Phone */}
      <div className="bg-[#2a1a10] border-b border-[#4d301b] py-1.5 px-4 text-xs text-[#d6c4b2]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-900/60 text-amber-300 font-medium border border-amber-600/40 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              100% Free For All Customers
            </span>
            <span className="hidden sm:inline text-[#ab927b]">
              • No Subscription Fees • Free Site Measurement & Inspection
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${OWNER_PROFILE.phone}`}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 animate-bounce" />
              <span>Call Arjun: {OWNER_PROFILE.phone}</span>
            </a>
            <span className="text-[#5c3a21]">|</span>
            <a
              href={OWNER_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden md:inline">WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Master Carpenter Brand */}
          <div 
            onClick={() => { setActiveTab('explore'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-600/80 shadow-lg group-hover:border-amber-400 transition-all duration-300 bg-[#2b180d]">
                <img 
                  src={OWNER_PROFILE.photo} 
                  alt="Arjun The Carpenter" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-600 text-[10px] text-stone-950 font-bold px-1 rounded-sm shadow">
                ★ 4.9
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-rustic text-2xl font-bold tracking-tight text-[#fdf8f2] group-hover:text-amber-300 transition-colors">
                  Arjun The Carpenter
                </span>
              </div>
              <p className="text-xs text-amber-400/90 font-medium tracking-wide flex items-center gap-1">
                <span>Handcrafted Furniture</span>
                <span className="text-[#71482b]">•</span>
                <span>Modular Fitouts</span>
                <span className="text-[#71482b]">•</span>
                <span>Repairs</span>
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-600/20 text-amber-300 border border-amber-600/50 shadow-inner'
                      : 'text-stone-300 hover:text-amber-200 hover:bg-[#2b1b11]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenRepairBooking}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-stone-200 bg-[#2d1b10] border border-[#5d3b22] hover:border-amber-500/60 hover:bg-[#382215] transition-all shadow-sm"
              title="Schedule a carpenter repair visit"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Book Repair</span>
            </button>

            <button
              onClick={onOpenCustomOrder}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 shadow-md shadow-amber-950/40 transition-all transform active:scale-95"
            >
              <PlusCircle className="w-3.5 h-3.5 text-stone-950" />
              <span>Get Free Quote</span>
            </button>

            {/* Carpenter Master Mode switch */}
            <button
              onClick={() => setIsMasterMode(!isMasterMode)}
              className={`p-2 rounded-lg border text-xs transition-colors ml-1 ${
                isMasterMode 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500' 
                  : 'bg-[#22150d] text-stone-400 border-stone-800 hover:text-stone-200'
              }`}
              title="Toggle Arjun's Workshop Desk Mode (Manage active orders)"
            >
              <Shield className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCustomOrder}
              className="px-3 py-1.5 rounded-md text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 sm:hidden"
            >
              Free Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-300 hover:text-white bg-[#2b180d] border border-[#4d2d18]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#22150d] border-b border-[#4d2d18] px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-600/20 text-amber-300 border border-amber-600/40'
                    : 'text-stone-300 hover:bg-[#2d1c12]'
                }`}
              >
                <Icon className="w-4 h-4 text-amber-400" />
                {item.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#3d2414] grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onOpenRepairBooking();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold bg-[#321e12] border border-[#52331f] text-stone-200"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              Schedule Repair
            </button>

            <button
              onClick={() => {
                onOpenCustomOrder();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold bg-amber-400 text-stone-950"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              New Order Quote
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-stone-400 px-2">
            <span>Direct Call: 9948639084</span>
            <button
              onClick={() => setIsMasterMode(!isMasterMode)}
              className="text-amber-400 underline font-medium"
            >
              {isMasterMode ? '✓ Workshop Desk Active' : 'Open Workshop Desk'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
