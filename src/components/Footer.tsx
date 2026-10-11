import React from 'react';
import { OWNER_PROFILE } from '../data/mockData';
import { Phone, MessageSquare, MapPin, Mail, ShieldCheck, Hammer, Clock, Heart } from 'lucide-react';

interface FooterProps {
  onExploreWorks: () => void;
  onOpenCustomOrder: () => void;
  onOpenRepairBooking: () => void;
  onTrackOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onExploreWorks,
  onOpenCustomOrder,
  onOpenRepairBooking,
  onTrackOrder
}) => {
  return (
    <footer className="bg-[#120a05] border-t border-[#3b2315] text-[#d6c4b2] text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-600/70 shadow-lg bg-[#28160d]">
                <img src={OWNER_PROFILE.photo} alt="Arjun The Carpenter" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <h4 className="font-rustic text-xl font-bold text-[#fcf8f2]">{OWNER_PROFILE.brandName}</h4>
                <p className="text-[11px] text-amber-400 font-medium">Master Carpenter & Workshop Lead</p>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed text-xs">
              Handcrafting luxury custom cupboards, heavy commercial bank fitouts, precision aluminium works, and modular kitchens for 18+ years. 100% Free site measurement & transparent quotes.
            </p>

            <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero Subscription • Free for All Customers</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h5 className="font-rustic text-sm font-bold text-stone-100 uppercase tracking-wider text-amber-400">
              Work Categories
            </h5>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={onExploreWorks} className="hover:text-amber-300 transition-colors">
                  • Designer Cupboards & Wardrobes
                </button>
              </li>
              <li>
                <button onClick={onExploreWorks} className="hover:text-amber-300 transition-colors">
                  • Modular Kitchen Installations
                </button>
              </li>
              <li>
                <button onClick={onExploreWorks} className="hover:text-amber-300 transition-colors">
                  • Bank Works & Teller Counters
                </button>
              </li>
              <li>
                <button onClick={onExploreWorks} className="hover:text-amber-300 transition-colors">
                  • Aluminium Office & Balcony Works
                </button>
              </li>
              <li>
                <button onClick={onOpenRepairBooking} className="hover:text-amber-300 transition-colors">
                  • Doorstep Repairs & Wood Polishing
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Tools */}
          <div className="space-y-3">
            <h5 className="font-rustic text-sm font-bold text-stone-100 uppercase tracking-wider text-amber-400">
              Customer Services
            </h5>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={onTrackOrder} className="text-amber-300 font-semibold hover:underline">
                  ▸ Track Live Order Status
                </button>
              </li>
              <li>
                <button onClick={onOpenCustomOrder} className="hover:text-amber-300 transition-colors">
                  ▸ Free Custom Furniture Estimate
                </button>
              </li>
              <li>
                <button onClick={onOpenRepairBooking} className="hover:text-amber-300 transition-colors">
                  ▸ Schedule Repair Appointment
                </button>
              </li>
              <li>
                <span className="text-stone-400">▸ Free On-Site Laser Measurement</span>
              </li>
              <li>
                <span className="text-stone-400">▸ 10-Year Termite Protection Advice</span>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h5 className="font-rustic text-sm font-bold text-stone-100 uppercase tracking-wider text-amber-400">
              Direct Contact
            </h5>
            
            <div className="space-y-2.5">
              <a
                href={`tel:${OWNER_PROFILE.phone}`}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-[#1f1109] border border-[#3b2315] hover:border-amber-500/50 text-amber-300 font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Arjun: {OWNER_PROFILE.phone}</span>
              </a>

              <a
                href={OWNER_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-[#1f1109] border border-[#3b2315] hover:border-emerald-500/50 text-emerald-400 font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex items-start gap-2 text-stone-400 text-[11px] pt-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Serving all city localities, residential villas & commercial bank branches</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#2d1b10] flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px]">
          <p>© {new Date().getFullYear()} Arjun The Carpenter. Handcrafted Excellence. All rights reserved.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Direct Carpenter Pricing</span>
            <span>•</span>
            <span>No Subscription Fees</span>
            <span>•</span>
            <span>Call 9948639084</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
