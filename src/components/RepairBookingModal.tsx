import React, { useState } from 'react';
import { RepairAppointment } from '../types/carpentry';
import { saveRepairAppointment } from '../services/storage';
import { OWNER_PROFILE } from '../data/mockData';
import confetti from 'canvas-confetti';
import { X, Wrench, Calendar, Clock, MapPin, Phone, MessageSquare, CheckCircle, ShieldAlert } from 'lucide-react';

interface RepairBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RepairBookingModal: React.FC<RepairBookingModalProps> = ({
  isOpen,
  onClose
}) => {
  const [problemType, setProblemType] = useState('Wardrobe / Cupboard Hinge & Channel Repair');
  const [urgency, setUrgency] = useState<'routine' | 'urgent' | 'emergency'>('urgent');
  const [preferredDate, setPreferredDate] = useState(() => {
    return new Date().toISOString().split('T')[0];
  });
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('Morning (9:00 AM - 1:00 PM)');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const [confirmedAppt, setConfirmedAppt] = useState<RepairAppointment | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !address.trim()) {
      alert('Please fill in your Name, Phone Number, and Address.');
      return;
    }

    const randomId = `REP-${Math.floor(1000 + Math.random() * 9000)}`;
    const newAppointment: RepairAppointment = {
      id: randomId,
      customerName,
      phone,
      problemType,
      urgency,
      preferredDate,
      preferredTimeSlot,
      address,
      description,
      status: 'confirmed',
      createdAt: new Date().toISOString().split('T')[0]
    };

    saveRepairAppointment(newAppointment);
    setConfirmedAppt(newAppointment);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl wood-panel rounded-2xl border-2 border-amber-600/60 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-[#442817] flex items-center justify-between bg-[#23150d]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Fast Doorstep Service
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/50">
                Zero Diagnosis Fee
              </span>
            </div>
            <h3 className="font-rustic text-2xl font-bold text-[#fcf8f2] mt-0.5">
              Schedule Repair Appointment
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#2e1b10] text-stone-300 hover:text-white border border-[#4d2d18]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {confirmedAppt ? (
            /* Confirmation View */
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
                  Appointment Scheduled!
                </span>
                <h3 className="font-rustic text-2xl font-bold text-[#fcf8f2] mt-1">
                  Ticket #{confirmedAppt.id}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  Arjun has been notified. He will arrive on <strong className="text-amber-300">{confirmedAppt.preferredDate}</strong> during <strong className="text-amber-300">{confirmedAppt.preferredTimeSlot}</strong> with necessary repair tools.
                </p>
              </div>

              {/* Receipt Summary */}
              <div className="wood-panel-amber p-4 rounded-xl text-left border border-amber-600/40 space-y-2 text-xs">
                <div className="flex justify-between border-b border-[#4d2d18] pb-1.5">
                  <span className="text-stone-400">Customer:</span>
                  <span className="font-bold text-stone-200">{confirmedAppt.customerName} ({confirmedAppt.phone})</span>
                </div>
                <div className="flex justify-between border-b border-[#4d2d18] pb-1.5">
                  <span className="text-stone-400">Issue:</span>
                  <span className="font-bold text-stone-200">{confirmedAppt.problemType}</span>
                </div>
                <div className="flex justify-between border-b border-[#4d2d18] pb-1.5">
                  <span className="text-stone-400">Location:</span>
                  <span className="font-bold text-stone-200">{confirmedAppt.address}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-stone-400">Urgency:</span>
                  <span className="font-bold uppercase text-amber-300">{confirmedAppt.urgency}</span>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919948639084?text=Hi%20Arjun,%20I%20have%20scheduled%20Repair%20Ticket%20${confirmedAppt.id}%20for%20${encodeURIComponent(confirmedAppt.problemType)}%20on%20${confirmedAppt.preferredDate}.%20Please%20confirm!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Notify Arjun on WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="py-3 px-6 rounded-xl text-xs font-bold bg-[#2d1b10] text-stone-200 border border-[#52331f] hover:bg-[#382215] transition-colors"
                >
                  Done
                </button>
              </div>

            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Emergency Banner */}
              <div className="bg-[#2b170c] p-3 rounded-xl border border-amber-600/40 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-200">
                  <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Doorstep Visit Fee: <strong>Free if repaired</strong> (starts ₹299)</span>
                </div>
                <a href={`tel:${OWNER_PROFILE.phone}`} className="text-amber-400 font-bold underline">
                  Call {OWNER_PROFILE.phone}
                </a>
              </div>

              {/* Problem Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  What Needs To Be Repaired?
                </label>
                <select
                  value={problemType}
                  onChange={(e) => setProblemType(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                >
                  <option value="Wardrobe / Cupboard Hinge & Channel Repair">Wardrobe / Cupboard Hinge & Channel Repair</option>
                  <option value="Jammed Main Door / Window Trimming & Alignment">Jammed Main Door / Window Trimming & Alignment</option>
                  <option value="Godrej / Yale Lock & Handle Replacement">Door Lock, Deadbolt & Handle Replacement</option>
                  <option value="Modular Kitchen Drawer / Hydraulic Arm Fixing">Modular Kitchen Drawer / Hydraulic Arm Fixing</option>
                  <option value="Wood Scratch Removal & French Polish Revamp">Wood Scratch Removal & PU / French Polish Revamp</option>
                  <option value="Dining Chair / Bed Frame Joint Reinforcement">Dining Chair / Bed Frame Joint Reinforcement</option>
                  <option value="Termite Damage Inspection & Restoration">Termite Damage Inspection & Timber Treatment</option>
                  <option value="Aluminium Window Roller & Glass Seal Fix">Aluminium Window Roller & Glass Seal Fix</option>
                  <option value="Other Custom Carpentry Fix">Other Custom Carpentry Fix</option>
                </select>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  Service Urgency
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('routine')}
                    className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      urgency === 'routine' ? 'bg-amber-500/20 border-amber-400 text-amber-300' : 'bg-[#26150c] border-[#442817] text-stone-400'
                    }`}
                  >
                    Normal (1-2 Days)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('urgent')}
                    className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      urgency === 'urgent' ? 'bg-amber-500/30 border-amber-400 text-amber-300 font-bold' : 'bg-[#26150c] border-[#442817] text-stone-400'
                    }`}
                  >
                    Same Day (Priority)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('emergency')}
                    className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      urgency === 'emergency' ? 'bg-red-950/60 border-red-500 text-red-300 font-bold' : 'bg-[#26150c] border-[#442817] text-stone-400'
                    }`}
                  >
                    Emergency (2-4 Hrs)
                  </button>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTimeSlot}
                    onChange={(e) => setPreferredTimeSlot(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#442817]">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Ramesh Varma"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9948639084"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                  Complete Address & Landmark *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Flat 204, Lakshmi Towers, Near Metro Station"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                  Describe Problem (Optional)
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Wardrobe sliding door came off track, makes grinding sound"
                  className="w-full py-2 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-200 transition-all shadow-xl cursor-pointer"
              >
                Confirm Repair Appointment
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
