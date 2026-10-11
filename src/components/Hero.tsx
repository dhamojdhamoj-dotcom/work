import React from 'react';
import { Phone, MessageSquare, Compass, CheckCircle2, Star, ShieldCheck, ArrowRight, Sparkles, Ruler, Award } from 'lucide-react';
import { OWNER_PROFILE } from '../data/mockData';

interface HeroProps {
  onExploreWorks: () => void;
  onOpenCustomOrder: () => void;
  onOpenRepairBooking: () => void;
  onTrackOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWorks,
  onOpenCustomOrder,
  onOpenRepairBooking,
  onTrackOrder
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20 border-b border-[#4d2d18]/70">
      {/* Warm Ambient Woodglow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#4a2714_0%,#20120a_60%,#140a05_100%)] pointer-events-none" />
      <div className="absolute inset-0 wood-grain-overlay pointer-events-none opacity-40" />

      {/* Subtle floating carpenter wood chip accents */}
      <div className="absolute -top-10 right-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-5 w-72 h-72 bg-amber-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Trust Signals & Primary Explore Works Button */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Free App & Master Artisan Trust Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#321c10] border border-amber-600/40 shadow-sm text-xs text-[#e8d5c4]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="font-semibold text-amber-300">100% Free For All Customers</span>
              <span className="text-[#6d462c]">•</span>
              <span className="text-stone-300">No Subscription Fees • Free Site Measurement</span>
            </div>

            {/* Main Headline with Rustic Typography */}
            <h1 className="font-rustic text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-[#fdf8f2] leading-[1.15]">
              Master Carpentry <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Custom Woodwork & Repairs
              </span>
            </h1>

            {/* Subheading describing specific works requested */}
            <p className="text-base sm:text-lg text-[#d8c3b0] max-w-2xl font-normal leading-relaxed">
              Specialist in modern <strong className="text-amber-200 font-semibold">Cupboards & Designer Wardrobes</strong>, heavy-duty <strong className="text-amber-200 font-semibold">Aluminium Glass Works</strong>, commercial <strong className="text-amber-200 font-semibold">Bank Fitouts</strong>, ergonomic <strong className="text-amber-200 font-semibold">Modular Kitchens</strong>, and quick doorstep repair services by Master Carpenter Arjun.
            </p>

            {/* Highlighted Guarantees */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs text-[#c9b39e]">
              <div className="flex items-center gap-2 bg-[#26150c]/80 p-2.5 rounded-lg border border-[#442715]">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Subscription Fee</span>
              </div>
              <div className="flex items-center gap-2 bg-[#26150c]/80 p-2.5 rounded-lg border border-[#442715]">
                <Ruler className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Free On-Site Measurement</span>
              </div>
              <div className="flex items-center gap-2 bg-[#26150c]/80 p-2.5 rounded-lg border border-[#442715] col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Seasoned Teak & Marine Ply</span>
              </div>
            </div>

            {/* Core Action Buttons - Specifically "Explore The Works" as requested */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWorks}
                className="group flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-950/60 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Compass className="w-5 h-5 text-stone-950 group-hover:rotate-45 transition-transform duration-300" />
                <span>Explore The Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCustomOrder}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-stone-100 bg-[#2d1a10] border border-[#633a1e] hover:border-amber-400/80 hover:bg-[#382114] transition-all shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Request Custom Quote</span>
              </button>

              <button
                onClick={onOpenRepairBooking}
                className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-semibold text-amber-300 bg-[#25150d]/80 border border-[#4d2d18] hover:bg-[#311c10] transition-colors"
              >
                <span>Schedule Repair</span>
              </button>
            </div>

            {/* Quick Track order helper link */}
            <div className="pt-1 flex items-center gap-3 text-xs text-[#a9917d]">
              <span>Already placed an order?</span>
              <button 
                onClick={onTrackOrder}
                className="text-amber-400 hover:text-amber-300 underline font-semibold flex items-center gap-1"
              >
                Track Live Order Status →
              </button>
            </div>

          </div>

          {/* Right Column: Master Carpenter Arjun's Profile Card with Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative wooden frame accent */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-amber-600/40 via-amber-800/20 to-[#4a2614] rounded-3xl blur-sm" />
              
              <div className="relative wood-panel-amber rounded-2xl p-6 sm:p-7 shadow-2xl border-2 border-[#6d4122]">
                
                {/* Header with Master Craftsman badge */}
                <div className="flex items-center justify-between pb-4 border-b border-[#52331d]">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">Master Craftsman</p>
                      <p className="text-xs text-stone-300 font-medium">Verified Workshop Owner</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-[#1a0e08] px-2.5 py-1 rounded-md border border-[#442817]">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-amber-300">4.9 / 5.0</span>
                  </div>
                </div>

                {/* Arjun's Photo & Introduction */}
                <div className="pt-5 flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden border-2 border-amber-500/70 shadow-xl bg-[#28160d]">
                      <img 
                        src={OWNER_PROFILE.photo} 
                        alt="Master Carpenter Arjun" 
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                      18+ Yrs Exp
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-rustic text-2xl font-bold text-[#fcf6ee] tracking-tight">
                      {OWNER_PROFILE.name}
                    </h3>
                    <p className="text-xs font-medium text-amber-300">
                      Master Carpenter & Workshop Lead
                    </p>
                    <p className="text-xs text-[#bfa996] leading-relaxed pt-1">
                      "I inspect, design, and personally oversee all woodworking, aluminium frames, and kitchen setups to guarantee zero compromises in durability."
                    </p>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 mt-5 py-3 px-2 bg-[#1b0f09]/90 rounded-xl border border-[#442817] text-center">
                  <div>
                    <p className="text-lg font-bold text-amber-300 font-rustic">850+</p>
                    <p className="text-[10px] text-stone-400 uppercase tracking-wider">Completed</p>
                  </div>
                  <div className="border-x border-[#3b2213]">
                    <p className="text-lg font-bold text-amber-300 font-rustic">18 Yrs</p>
                    <p className="text-[10px] text-stone-400 uppercase tracking-wider">Experience</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-emerald-400 font-rustic">100%</p>
                    <p className="text-[10px] text-stone-400 uppercase tracking-wider">Free Quote</p>
                  </div>
                </div>

                {/* Direct Contact Call-to-Action Bar with 9948639084 */}
                <div className="mt-5 space-y-2.5">
                  <div className="text-[11px] font-semibold text-stone-400 text-center flex items-center justify-center gap-1.5">
                    <span>Direct Contact with Arjun</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${OWNER_PROFILE.phone}`}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md group"
                    >
                      <Phone className="w-4 h-4 text-stone-950 group-hover:scale-110 transition-transform" />
                      <span>Call {OWNER_PROFILE.phone}</span>
                    </a>

                    <a
                      href={OWNER_PROFILE.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-200" />
                      <span>WhatsApp Arjun</span>
                    </a>
                  </div>
                </div>

                {/* Free Visit Banner inside Card */}
                <div className="mt-4 pt-3 border-t border-[#442817] flex items-center justify-between text-[11px] text-[#a8927e]">
                  <span>Doorstep Visit across all areas</span>
                  <span className="text-amber-400 font-semibold">Free Estimate</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
