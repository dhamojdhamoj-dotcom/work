import React, { useState } from 'react';
import { CarpenterOrder, OrderProgressStage, RepairAppointment } from '../types/carpentry';
import { getStoredOrders, getStoredRepairs, resetToDemoData, updateOrderStatus } from '../services/storage';
import { OWNER_PROFILE } from '../data/mockData';
import { Shield, Hammer, CheckCircle, Clock, Plus, RefreshCw, X, AlertTriangle, Phone, MapPin, Eye } from 'lucide-react';

interface ArjunMasterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOrderToTrack: (orderId: string) => void;
}

export const ArjunMasterPanel: React.FC<ArjunMasterPanelProps> = ({
  isOpen,
  onClose,
  onSelectOrderToTrack
}) => {
  const [orders, setOrders] = useState<CarpenterOrder[]>(() => getStoredOrders());
  const [repairs, setRepairs] = useState<RepairAppointment[]>(() => getStoredRepairs());
  const [activeTab, setActiveTab] = useState<'orders' | 'repairs'>('orders');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [newNote, setNewNote] = useState('');

  if (!isOpen) return null;

  const handleAdvanceStage = (orderId: string, stage: OrderProgressStage) => {
    const updated = updateOrderStatus(orderId, stage, newNote.trim() || undefined);
    setOrders(updated);
    setNewNote('');
  };

  const handleResetData = () => {
    if (confirm('Reset orders and appointments to initial demo catalog?')) {
      resetToDemoData();
      setOrders(getStoredOrders());
      setRepairs(getStoredRepairs());
    }
  };

  const stages: { stage: OrderProgressStage; label: string }[] = [
    { stage: 'received', label: '1. Received' },
    { stage: 'measurement', label: '2. Measurement' },
    { stage: 'in_workshop', label: '3. Workshop Cutting' },
    { stage: 'finishing', label: '4. Polishing / Rigging' },
    { stage: 'installed', label: '5. Installed & Delivered' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl wood-panel rounded-2xl border-2 border-amber-600/70 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#442817] flex items-center justify-between bg-[#23150d]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-amber-500 shrink-0">
              <img src={OWNER_PROFILE.photo} alt="Arjun" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  Carpenter Admin Desk
                </span>
                <span className="text-[10px] bg-amber-500 text-stone-950 font-bold px-1.5 py-0.5 rounded">
                  Live Management
                </span>
              </div>
              <h3 className="font-rustic text-xl sm:text-2xl font-bold text-[#fcf8f2]">
                Arjun's Workshop Dashboard
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetData}
              title="Reset sample orders"
              className="p-2 rounded-lg bg-[#2b180d] text-stone-400 hover:text-amber-300 border border-[#442817] text-xs flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Demo</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#2b180d] text-stone-300 hover:text-white border border-[#442817]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-5 pt-3 pb-2 border-b border-[#3d2414] bg-[#1e1109] flex items-center gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-2 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'orders'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Hammer className="w-3.5 h-3.5" />
            <span>Active Custom Orders ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('repairs')}
            className={`pb-2 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'repairs'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Repair Bookings ({repairs.length})</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          
          {activeTab === 'orders' ? (
            <div className="space-y-4">
              <p className="text-xs text-stone-400">
                Update fabrication stages below to test the live customer order tracking system.
              </p>

              <div className="space-y-3">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="wood-panel rounded-xl p-4 border border-[#442817] space-y-3 hover:border-amber-500/40 transition-colors"
                  >
                    {/* Header line */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-400 text-stone-950">
                            {order.id}
                          </span>
                          <span className="text-xs font-bold text-stone-200">
                            {order.customerName} ({order.phone})
                          </span>
                        </div>
                        <p className="text-xs text-amber-300/90 font-medium mt-1">
                          {order.workType} • {order.estimatedCost}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            onSelectOrderToTrack(order.id);
                            onClose();
                          }}
                          className="flex items-center gap-1 text-[11px] font-bold text-stone-200 bg-[#2b180d] hover:bg-[#382114] px-2.5 py-1.5 rounded-lg border border-[#4d2d18]"
                        >
                          <Eye className="w-3 h-3 text-amber-400" />
                          <span>View as Customer</span>
                        </button>
                      </div>
                    </div>

                    {/* Stage Buttons */}
                    <div>
                      <p className="text-[10px] uppercase font-bold text-stone-400 mb-1.5">
                        Current Stage: <span className="text-amber-400 font-mono">{order.currentStage.toUpperCase()}</span>
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                        {stages.map((st) => (
                          <button
                            key={st.stage}
                            onClick={() => handleAdvanceStage(order.id, st.stage)}
                            className={`py-1.5 px-2 rounded-lg text-[11px] font-medium border text-center transition-colors ${
                              order.currentStage === st.stage
                                ? 'bg-amber-400 text-stone-950 font-bold border-amber-300'
                                : 'bg-[#22130a] text-stone-400 border-[#3d2414] hover:bg-[#2e190f] hover:text-stone-200'
                            }`}
                          >
                            {st.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Carpenter Activity note */}
                    {order.carpenterNotes && order.carpenterNotes.length > 0 && (
                      <div className="text-[11px] text-stone-400 bg-[#1a0e08] p-2.5 rounded-lg border border-[#382012] flex items-center justify-between">
                        <span className="truncate">Latest: {order.carpenterNotes[0]}</span>
                        <span className="text-amber-400 text-[10px] font-semibold shrink-0 ml-2">Logged</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {repairs.length === 0 ? (
                <div className="text-center py-8 text-stone-400 text-xs">
                  No repair tickets booked yet. Use the "Book Repair" button to schedule a test appointment!
                </div>
              ) : (
                repairs.map((rep) => (
                  <div
                    key={rep.id}
                    className="wood-panel rounded-xl p-4 border border-[#442817] space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
                          {rep.id}
                        </span>
                        <span className="text-xs font-bold text-stone-200">{rep.customerName}</span>
                      </div>
                      <span className="text-[11px] font-bold text-amber-400 uppercase bg-[#26150c] px-2 py-0.5 rounded border border-[#442817]">
                        {rep.urgency}
                      </span>
                    </div>

                    <p className="text-xs text-amber-200">{rep.problemType}</p>
                    <div className="text-[11px] text-stone-400 flex flex-wrap gap-x-4">
                      <span>Visit: {rep.preferredDate} ({rep.preferredTimeSlot})</span>
                      <span>Address: {rep.address}</span>
                      <span>Phone: {rep.phone}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
