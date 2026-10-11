import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types/carpentry';
import { Sparkles, Clock, CheckCircle, ArrowRight, Shield, Layers, HelpCircle, X, Phone, MessageSquare } from 'lucide-react';

interface WorksServicesProps {
  onSelectServiceForQuote: (service: ServiceItem) => void;
  onOpenRepairBooking: () => void;
}

export const WorksServices: React.FC<WorksServicesProps> = ({
  onSelectServiceForQuote,
  onOpenRepairBooking
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="works-section" className="py-16 bg-[#170e08] border-b border-[#3d2414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Carpentry Catalog</span>
          </div>
          <h2 className="font-rustic text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fcf6ee] tracking-tight">
            Specialized Works & Custom Installations
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            From modern bedroom cupboards and modular kitchens to commercial bank counters and aluminium glass partitions — handcrafted with seasoned timber and precision engineering.
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="wood-card rounded-2xl overflow-hidden flex flex-col group border border-[#442817] bg-[#20130b]"
            >
              {/* Work Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#2b170c]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1008] via-transparent to-black/20" />

                {/* Popular For Badge */}
                <div className="absolute top-3 left-3 bg-[#180e08]/90 backdrop-blur-sm border border-amber-500/40 px-3 py-1 rounded-full text-[11px] font-semibold text-amber-300 shadow">
                  {service.popularFor}
                </div>

                {/* Estimate Badge */}
                <div className="absolute bottom-3 right-3 bg-amber-500 text-stone-950 px-3 py-1 rounded-md text-xs font-extrabold shadow-lg">
                  {service.startingEstimate}
                </div>
              </div>

              {/* Work Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-rustic text-xl font-bold text-[#fcf8f2] group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#c4b09e] line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Materials */}
                <div className="space-y-2 pt-2 border-t border-[#3b2315]">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-400/90 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Materials & Hardware:</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.materials.slice(0, 2).map((mat, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#2b190f] text-[#d6c3b2] border border-[#442817]"
                      >
                        {mat}
                      </span>
                    ))}
                    {service.materials.length > 2 && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-[#2b190f] text-amber-400/80 border border-[#442817]">
                        +{service.materials.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Turnaround Time & Free Site Measurement */}
                <div className="flex items-center justify-between text-xs text-[#a8927e] pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{service.estimatedDays}</span>
                  </span>
                  <span className="text-emerald-400 font-medium">
                    ✓ Free Site Visit
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-stone-200 bg-[#2b190f] hover:bg-[#382114] border border-[#4d2d18] transition-colors"
                  >
                    View Specs
                  </button>

                  <button
                    onClick={() => {
                      if (service.category === 'repairs') {
                        onOpenRepairBooking();
                      } else {
                        onSelectServiceForQuote(service);
                      }
                    }}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 shadow"
                  >
                    <span>{service.category === 'repairs' ? 'Book Repair' : 'Get Quote'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Free Custom Consultation Callout */}
        <div className="mt-12 wood-panel rounded-2xl p-6 sm:p-8 border border-amber-600/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-rustic text-xl sm:text-2xl font-bold text-amber-200">
              Need a Custom Measurement or Commercial Estimate?
            </h4>
            <p className="text-xs sm:text-sm text-[#d4c1b0]">
              Arjun visits your home, office, or bank branch with catalogs and measuring tape. 100% Free consultation with zero obligation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:9948639084"
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-stone-950 shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call 9948639084</span>
            </a>

            <a
              href="https://wa.me/919948639084?text=Hi%20Arjun,%20I%20need%20a%20site%20visit%20and%20quotation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Arjun</span>
            </a>
          </div>
        </div>

      </div>

      {/* Detail Specifications Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl wood-panel rounded-2xl border-2 border-amber-600/50 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-[#442817] flex items-center justify-between bg-[#23150d]">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Specifications & Features</span>
                <h3 className="font-rustic text-2xl font-bold text-stone-100">{selectedService.title}</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg bg-[#2e1b10] text-stone-300 hover:text-white border border-[#4d2d18]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              <div className="relative h-60 rounded-xl overflow-hidden border border-[#4d2d18]">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#180e08]/90 border border-amber-500/40 px-3 py-1 rounded-md text-xs font-semibold text-amber-300">
                  Estimated Timeline: {selectedService.estimatedDays}
                </div>
              </div>

              <p className="text-sm text-[#d4c0ae] leading-relaxed">
                {selectedService.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>Craftsmanship & Construction Highlights:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 bg-[#26150c] p-2.5 rounded-lg border border-[#3d2314] text-xs text-stone-300">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Material Standards & Hardwood:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.materials.map((mat, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-lg bg-[#2b180d] text-amber-200 border border-[#52311b]">
                      ✓ {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Free Benefits */}
              <div className="bg-[#2a170d] p-4 rounded-xl border border-amber-500/30 space-y-2">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Free With Every Order:</span>
                </h4>
                <ul className="text-xs text-[#c9b5a2] space-y-1">
                  {selectedService.freeServicesIncluded.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-emerald-400">✔</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#442817] bg-[#1f120a] flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] text-stone-400">Transparent Estimate</p>
                <p className="text-base font-bold text-amber-300">{selectedService.startingEstimate}</p>
              </div>

              <button
                onClick={() => {
                  const s = selectedService;
                  setSelectedService(null);
                  if (s.category === 'repairs') {
                    onOpenRepairBooking();
                  } else {
                    onSelectServiceForQuote(s);
                  }
                }}
                className="py-2.5 px-5 rounded-xl text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow flex items-center gap-2"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
