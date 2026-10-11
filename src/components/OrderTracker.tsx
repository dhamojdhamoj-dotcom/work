import React, { useState } from 'react';
import { CarpenterOrder, OrderProgressStage } from '../types/carpentry';
import { findOrderByIdOrPhone, getStoredOrders } from '../services/storage';
import { OWNER_PROFILE } from '../data/mockData';
import { Search, CheckCircle2, Clock, MapPin, Hammer, Calendar, Phone, MessageSquare, AlertCircle, Sparkles, ChevronRight, User } from 'lucide-react';

interface OrderTrackerProps {
  onOpenCustomOrder: () => void;
  selectedOrderId?: string;
}

export const OrderTracker: React.FC<OrderTrackerProps> = ({
  onOpenCustomOrder,
  selectedOrderId
}) => {
  const [searchQuery, setSearchQuery] = useState(selectedOrderId || 'ARJ-8921');
  const [foundOrder, setFoundOrder] = useState<CarpenterOrder | null>(() => {
    return findOrderByIdOrPhone(selectedOrderId || 'ARJ-8921') || null;
  });
  const [hasSearched, setHasSearched] = useState(true);

  const sampleOrderIds = ['ARJ-8921', 'ARJ-9104', 'ARJ-7732', 'ARJ-6520'];

  const handleSearch = (e?: React.FormEvent, directId?: string) => {
    if (e) e.preventDefault();
    const query = directId || searchQuery;
    if (!query.trim()) return;

    const result = findOrderByIdOrPhone(query);
    setFoundOrder(result || null);
    setHasSearched(true);
    if (directId) {
      setSearchQuery(directId);
    }
  };

  const getStageColor = (stage: OrderProgressStage, isCurrent: boolean, isCompleted: boolean) => {
    if (isCompleted) return 'bg-emerald-500 text-stone-950 border-emerald-400';
    if (isCurrent) return 'bg-amber-400 text-stone-950 border-amber-300 ring-4 ring-amber-400/20 animate-pulse';
    return 'bg-[#29170d] text-stone-500 border-[#472916]';
  };

  return (
    <section id="tracker-section" className="py-16 bg-[#140b06] border-b border-[#3d2414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-600/30 text-amber-300 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Live Workshop Status Updates</span>
          </div>
          <h2 className="font-rustic text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fcf6ee] tracking-tight">
            Track Your Custom Order Status
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Follow your custom furniture, cupboards, bank fitouts, or kitchen installations in real-time from raw timber cutting to final doorstep handover.
          </p>
        </div>

        {/* Search Bar & Sample ID Chips */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="relative flex items-center shadow-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter Order ID (e.g. ARJ-8921) or Your Phone Number..."
              className="w-full py-4 pl-12 pr-32 rounded-2xl bg-[#23150d] border-2 border-[#54321b] text-stone-100 placeholder:text-stone-500 text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-inner"
            />
            <Search className="w-5 h-5 text-amber-400 absolute left-4" />
            <button
              type="submit"
              className="absolute right-2.5 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-stone-950 transition-colors cursor-pointer"
            >
              Track Order
            </button>
          </form>

          {/* Quick Demo Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-400">
            <span className="text-[11px] uppercase tracking-wider text-amber-400/90 font-medium">Quick Preview Orders:</span>
            {sampleOrderIds.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => handleSearch(undefined, id)}
                className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-colors ${
                  searchQuery.toUpperCase() === id 
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500' 
                    : 'bg-[#1e1008] text-stone-300 border-[#3d2414] hover:border-amber-600/60'
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        {/* Found Order Card */}
        {foundOrder ? (
          <div className="max-w-4xl mx-auto wood-panel-amber rounded-2xl p-6 sm:p-8 border-2 border-amber-600/40 shadow-2xl space-y-8 animate-fadeIn">
            
            {/* Order Summary Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#4d2d18]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-amber-500 text-stone-950">
                    {foundOrder.id}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded bg-[#2b180d] border border-[#442817] text-stone-300">
                    Ordered: {foundOrder.createdAt}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/50">
                    Est. Delivery: {foundOrder.expectedDelivery}
                  </span>
                </div>
                <h3 className="font-rustic text-2xl sm:text-3xl font-bold text-[#fcf8f2] mt-2">
                  {foundOrder.workType}
                </h3>
              </div>

              <div className="text-left md:text-right space-y-1">
                <p className="text-xs text-stone-400 uppercase tracking-wider">Estimated Project Value</p>
                <p className="text-2xl font-bold text-amber-300 font-rustic">{foundOrder.estimatedCost}</p>
                <p className="text-[11px] text-emerald-400 font-medium">✓ Direct Carpenter Pricing</p>
              </div>
            </div>

            {/* Client & Material Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#24140b] p-3.5 rounded-xl border border-[#442817]">
                <p className="text-[10px] text-amber-400 uppercase tracking-wider font-semibold">Client Name</p>
                <p className="font-semibold text-stone-200 mt-0.5 text-sm">{foundOrder.customerName}</p>
                <p className="text-stone-400 mt-0.5">{foundOrder.phone}</p>
              </div>

              <div className="bg-[#24140b] p-3.5 rounded-xl border border-[#442817]">
                <p className="text-[10px] text-amber-400 uppercase tracking-wider font-semibold">Timber & Material</p>
                <p className="font-semibold text-stone-200 mt-0.5">{foundOrder.woodMaterial}</p>
                <p className="text-stone-400 mt-0.5">{foundOrder.finishType}</p>
              </div>

              <div className="bg-[#24140b] p-3.5 rounded-xl border border-[#442817] sm:col-span-2 lg:col-span-1">
                <p className="text-[10px] text-amber-400 uppercase tracking-wider font-semibold">Installation Location</p>
                <p className="font-semibold text-stone-200 mt-0.5 line-clamp-1">{foundOrder.address}</p>
                {foundOrder.dimensions && (
                  <p className="text-stone-400 mt-0.5">Size: {foundOrder.dimensions}</p>
                )}
              </div>
            </div>

            {/* Visual Step Progress Pipeline */}
            <div className="py-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Hammer className="w-4 h-4 text-amber-400" />
                <span>Fabrication & Handover Progress</span>
              </h4>

              <div className="relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#382012] -translate-y-1/2 z-0" />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                  {foundOrder.steps.map((step, index) => {
                    const isDone = step.isCompleted;
                    const isCurrent = step.isCurrent;
                    
                    return (
                      <div
                        key={step.stage}
                        className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                          isCurrent
                            ? 'bg-[#2f1b0f] border-amber-400 shadow-lg'
                            : isDone
                            ? 'bg-[#22150d] border-emerald-600/40'
                            : 'bg-[#1b0e08]/60 border-[#382012] opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border ${getStageColor(step.stage, isCurrent, isDone)}`}>
                            {isDone ? '✓' : index + 1}
                          </span>
                          {step.dateCompleted && (
                            <span className="text-[10px] text-stone-400">{step.dateCompleted}</span>
                          )}
                        </div>

                        <div>
                          <p className={`text-xs font-bold leading-tight ${isCurrent ? 'text-amber-300' : isDone ? 'text-stone-200' : 'text-stone-400'}`}>
                            {step.title}
                          </p>
                          <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                            {step.description}
                          </p>
                        </div>

                        {isCurrent && (
                          <div className="mt-2 text-[10px] font-bold text-amber-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                            <span>In Progress</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Carpenter Workshop Notes Log */}
            {foundOrder.carpenterNotes && foundOrder.carpenterNotes.length > 0 && (
              <div className="bg-[#1f1109] rounded-xl p-4 border border-[#442817] space-y-2">
                <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  Master Carpenter Activity Log:
                </p>
                <div className="space-y-1.5">
                  {foundOrder.carpenterNotes.map((note, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                      <span className="text-amber-500 font-mono">▸</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct WhatsApp Callout for this Order */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#442817]">
              <div className="text-xs text-stone-300 text-center sm:text-left">
                <span>Have a question about order </span>
                <strong className="text-amber-300">{foundOrder.id}</strong>
                <span>? Message Arjun directly:</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`tel:${OWNER_PROFILE.phone}`}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#2d1b10] hover:bg-[#382215] text-stone-200 border border-[#52331f]"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {OWNER_PROFILE.phone}</span>
                </a>

                <a
                  href={`https://wa.me/919948639084?text=Hello%20Arjun,%20I%20am%20checking%20status%20for%20order%20${foundOrder.id}%20(${encodeURIComponent(foundOrder.workType)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Arjun</span>
                </a>
              </div>
            </div>

          </div>
        ) : hasSearched ? (
          <div className="max-w-xl mx-auto wood-panel rounded-2xl p-8 border border-red-900/40 text-center space-y-4">
            <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
            <h3 className="font-rustic text-2xl font-bold text-stone-200">Order Not Found</h3>
            <p className="text-xs sm:text-sm text-stone-400">
              We couldn't locate an active order for "<span className="text-amber-300">{searchQuery}</span>". Please check your Order ID (e.g. ARJ-8921) or phone number.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => handleSearch(undefined, 'ARJ-8921')}
                className="py-2 px-4 rounded-lg text-xs font-semibold bg-[#2a170d] text-amber-300 border border-[#4d2d18]"
              >
                View Sample Order (ARJ-8921)
              </button>
              <button
                onClick={onOpenCustomOrder}
                className="py-2 px-4 rounded-lg text-xs font-bold bg-amber-400 text-stone-950"
              >
                Create New Quote
              </button>
            </div>
          </div>
        ) : null}

      </div>
    </section>
  );
};
