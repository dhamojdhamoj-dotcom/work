import React, { useState } from 'react';
import { CarpenterOrder, WorkCategory } from '../types/carpentry';
import { saveOrder } from '../services/storage';
import { OWNER_PROFILE } from '../data/mockData';
import confetti from 'canvas-confetti';
import { X, Sparkles, Ruler, CheckCircle, Phone, MessageSquare, Layers, ShieldCheck, ArrowRight, IndianRupee } from 'lucide-react';

interface CustomOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderCreated: (orderId: string) => void;
  initialServiceCategory?: WorkCategory;
}

export const CustomOrderModal: React.FC<CustomOrderModalProps> = ({
  isOpen,
  onClose,
  onOrderCreated,
  initialServiceCategory
}) => {
  const [workType, setWorkType] = useState<string>(() => {
    if (initialServiceCategory === 'cupboards') return 'Designer Cupboard & Wardrobe';
    if (initialServiceCategory === 'modular_kitchen') return 'Modular Kitchen Setup';
    if (initialServiceCategory === 'bank_works') return 'Commercial Bank Fitout';
    if (initialServiceCategory === 'aluminium') return 'Aluminium Glass Partitions';
    return 'Designer Cupboard & Wardrobe';
  });

  const [woodMaterial, setWoodMaterial] = useState('Century Club Prime BWP 710 Ply');
  const [finishType, setFinishType] = useState('Natural Teak Veneer + PU Polish');
  const [dimensions, setDimensions] = useState('Approx 10 ft Width x 8 ft Height');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  
  const [submittedOrder, setSubmittedOrder] = useState<CarpenterOrder | null>(null);

  if (!isOpen) return null;

  const calculateEstimate = () => {
    let base = 35000;
    if (workType.includes('Kitchen')) base = 95000;
    else if (workType.includes('Cupboard')) base = 65000;
    else if (workType.includes('Bank')) base = 125000;
    else if (workType.includes('Aluminium')) base = 42000;

    if (woodMaterial.includes('Teak')) base += 25000;
    if (finishType.includes('Acrylic')) base += 18000;

    const lower = Math.round(base * 0.9 / 1000) * 1000;
    const upper = Math.round(base * 1.15 / 1000) * 1000;
    return `₹${lower.toLocaleString('en-IN')} - ₹${upper.toLocaleString('en-IN')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !address.trim()) {
      alert('Please fill in your Name, Phone Number, and Address.');
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newOrderId = `ARJ-${randomSuffix}`;
    const today = new Date().toISOString().split('T')[0];

    // calculate estimated delivery 12 days out
    const deliveryDateObj = new Date();
    deliveryDateObj.setDate(deliveryDateObj.getDate() + 12);
    const deliveryStr = deliveryDateObj.toISOString().split('T')[0];

    const estimate = calculateEstimate();

    const newOrder: CarpenterOrder = {
      id: newOrderId,
      customerName,
      phone,
      workType,
      category: workType.toLowerCase().includes('kitchen') ? 'modular_kitchen' :
                workType.toLowerCase().includes('cupboard') ? 'cupboards' :
                workType.toLowerCase().includes('bank') ? 'bank_works' :
                workType.toLowerCase().includes('aluminium') ? 'aluminium' : 'cupboards',
      woodMaterial,
      finishType,
      dimensions,
      address,
      createdAt: today,
      expectedDelivery: deliveryStr,
      estimatedCost: estimate,
      currentStage: 'received',
      steps: [
        {
          stage: 'received',
          title: 'Request Received & Blueprint Review',
          description: `Quote registered for ${customerName}. Master Carpenter Arjun will call you for confirmation.`,
          dateCompleted: today,
          isCurrent: true,
          isCompleted: false
        },
        {
          stage: 'measurement',
          title: 'Free On-Site Measurement & Sample Display',
          description: 'Arjun will bring laser measurer and physical wood/veneer swatches to your location.',
          isCurrent: false,
          isCompleted: false
        },
        {
          stage: 'in_workshop',
          title: 'Timber Cutting & Workshop Fabrication',
          description: 'Seasoned wood cutting, joinery, and carcass assembly in workshop.',
          isCurrent: false,
          isCompleted: false
        },
        {
          stage: 'finishing',
          title: 'Lamination, Edge-Banding & Hardware Rigging',
          description: 'Multi-coat polish, laminate pressing, and soft-close channel fittings.',
          isCurrent: false,
          isCompleted: false
        },
        {
          stage: 'installed',
          title: 'Doorstep Assembly & Final Quality Handover',
          description: 'Installed at your premises with dustless cleanup.',
          isCurrent: false,
          isCompleted: false
        }
      ],
      carpenterNotes: [
        `${today}: Custom order submitted online. Free site measurement scheduled upon phone confirmation.`
      ]
    };

    saveOrder(newOrder);
    setSubmittedOrder(newOrder);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl wood-panel rounded-2xl border-2 border-amber-600/60 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-[#442817] flex items-center justify-between bg-[#23150d]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Custom Woodwork Configurator
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/50">
                100% Free
              </span>
            </div>
            <h3 className="font-rustic text-2xl font-bold text-[#fcf8f2] mt-0.5">
              Request Free Custom Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#2e1b10] text-stone-300 hover:text-white border border-[#4d2d18]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {submittedOrder ? (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
                  Quote Request Confirmed!
                </span>
                <h3 className="font-rustic text-3xl font-bold text-[#fcf8f2] mt-1">
                  Order ID: <span className="text-amber-400 font-mono">{submittedOrder.id}</span>
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you <strong className="text-amber-200">{submittedOrder.customerName}</strong>. Master Carpenter Arjun will call you on <strong className="text-amber-200">{submittedOrder.phone}</strong> to confirm your free site visit time!
                </p>
              </div>

              {/* Order Card Preview */}
              <div className="wood-panel-amber p-4 rounded-xl text-left border border-amber-600/40 space-y-2 text-xs">
                <div className="flex justify-between border-b border-[#4d2d18] pb-2">
                  <span className="text-stone-400">Work Type:</span>
                  <span className="font-bold text-stone-200">{submittedOrder.workType}</span>
                </div>
                <div className="flex justify-between border-b border-[#4d2d18] pb-2">
                  <span className="text-stone-400">Material Core:</span>
                  <span className="font-bold text-stone-200">{submittedOrder.woodMaterial}</span>
                </div>
                <div className="flex justify-between border-b border-[#4d2d18] pb-2">
                  <span className="text-stone-400">Finish / Polish:</span>
                  <span className="font-bold text-stone-200">{submittedOrder.finishType}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-stone-400">Estimated Range:</span>
                  <span className="font-bold text-amber-300 text-sm">{submittedOrder.estimatedCost}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    onOrderCreated(submittedOrder.id);
                    onClose();
                  }}
                  className="py-3 px-6 rounded-xl text-xs font-bold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors shadow"
                >
                  View In Live Order Tracker →
                </button>

                <a
                  href={`https://wa.me/919948639084?text=Hi%20Arjun,%20I%20just%20submitted%20Order%20${submittedOrder.id}%20for%20${encodeURIComponent(submittedOrder.workType)}.%20Please%20schedule%20my%20free%20site%20visit!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Notify Arjun on WhatsApp</span>
                </a>
              </div>

            </div>
          ) : (
            /* Order Input Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Free Guarantee Notice */}
              <div className="bg-[#24150b] p-3.5 rounded-xl border border-amber-600/30 flex items-center gap-3 text-xs text-[#d6c4b2]">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  <strong>100% Free Consultation:</strong> Requesting a quote or site measurement carries zero cost, zero subscription, and zero obligation.
                </span>
              </div>

              {/* Work Type Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                  Select Work Category
                </label>
                <select
                  value={workType}
                  onChange={(e) => setWorkType(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="Designer Cupboard & Wardrobe">Designer Cupboards & Sliding Wardrobes</option>
                  <option value="Modular Kitchen Setup">Modular Kitchen Installation (L / Parallel / Island)</option>
                  <option value="Commercial Bank Fitout">Bank Commercial Fitout & Cash Counter Cabins</option>
                  <option value="Aluminium Glass Partitions">Aluminium Works & Glass Partitions</option>
                  <option value="Custom Bed & Storage Box">Custom Teak Bed with Hydraulic Storage</option>
                  <option value="TV Unit & Wall Paneling">Luxury TV Console & Wooden Wall Paneling</option>
                  <option value="Teak Wood Dining Table">Solid Teak Dining Table & Chairs</option>
                </select>
              </div>

              {/* Wood / Core Material */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                    Wood / Core Material
                  </label>
                  <select
                    value={woodMaterial}
                    onChange={(e) => setWoodMaterial(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="Century Club Prime BWP 710 Ply">Century Club Prime BWP 710 Ply (Waterproof)</option>
                    <option value="Solid Burma Teak Hardwood">Solid Burma Teak Hardwood (Premium)</option>
                    <option value="Greenply Marine Grade Ply">Greenply Marine Grade Plywood</option>
                    <option value="Jindal Heavy Aluminium Section">Jindal Heavy Aluminium Extrusion</option>
                    <option value="Commercial Hardwood with Fire-Retardant Core">Commercial Hardwood Fire-Retardant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                    Finish / Laminate / Polish
                  </label>
                  <select
                    value={finishType}
                    onChange={(e) => setFinishType(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="Natural Teak Veneer + PU Polish">Natural Teak Veneer + Clear PU Polish</option>
                    <option value="Anti-Fingerprint Matte Laminate">Anti-Fingerprint Matte Laminate (1mm)</option>
                    <option value="High-Gloss Mirror Acrylic">High-Gloss Mirror Acrylic (German finish)</option>
                    <option value="Duco Paint Italian Satin">Duco Italian Satin Paint</option>
                    <option value="Anodized Powder-Coat (Aluminium)">Anodized Matte Black Powder-Coat</option>
                  </select>
                </div>
              </div>

              {/* Dimensions or Room Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                  Approximate Dimensions / Space Details
                </label>
                <input
                  type="text"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder="e.g. 10 ft width x 8 ft height / 3 bedrooms / 120 sq.ft kitchen"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Client Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#442817]">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9849012345"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                  Site / Delivery Address *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Flat 302, Sai Residency, Main Road, Hyderabad / City"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Instant Live Estimate */}
              <div className="bg-[#1f1109] p-4 rounded-xl border border-amber-600/40 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Estimated Budget Range</p>
                  <p className="text-xl font-bold text-amber-300 font-rustic">{calculateEstimate()}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-emerald-400 font-semibold">Free Site Visit</p>
                  <p className="text-[10px] text-stone-400">Final price confirmed on-site</p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-200 transition-all shadow-xl cursor-pointer"
              >
                Submit Custom Order Request (100% Free)
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
