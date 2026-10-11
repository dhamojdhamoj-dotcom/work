import React, { useState } from 'react';
import { CustomerReview } from '../types/carpentry';
import { getStoredReviews, saveReview } from '../services/storage';
import { OWNER_PROFILE } from '../data/mockData';
import { Star, MessageSquare, Plus, CheckCircle, ShieldCheck, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(() => getStoredReviews());
  const [isAddingReview, setIsAddingReview] = useState(false);

  // Form states
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [workType, setWorkType] = useState('Cupboard & Modular Wardrobe');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) {
      alert('Please fill in your name and review comments.');
      return;
    }

    const newRev: CustomerReview = {
      id: `rev-${Date.now()}`,
      author,
      location: location || 'Hyderabad / Local',
      rating,
      date: 'Just now',
      workType,
      comment,
      verified: true
    };

    const updated = saveReview(newRev);
    setReviews(updated);
    setIsAddingReview(false);

    // Reset form
    setAuthor('');
    setLocation('');
    setComment('');
    setRating(5);

    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch {
      // ignore
    }
  };

  return (
    <section id="reviews-section" className="py-16 bg-[#160d07] border-b border-[#3d2414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-600/30 text-amber-300 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Real Customer Experiences</span>
          </div>
          <h2 className="font-rustic text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fcf6ee] tracking-tight">
            Customer Reviews & Ratings
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Over 240+ homeowners, bank managers, and commercial clients trust Arjun for punctual, honest, and flawless carpentry works.
          </p>
        </div>

        {/* Rating Breakdown & CTA Bar */}
        <div className="wood-panel-amber rounded-2xl p-6 sm:p-8 border border-amber-600/40 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-center sm:text-left">
            <div>
              <p className="font-rustic text-5xl font-extrabold text-amber-300 leading-none">4.9</p>
              <div className="flex items-center justify-center sm:justify-start gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[11px] text-stone-400 mt-1">Based on 246+ Verified Jobs</p>
            </div>

            <div className="hidden sm:block border-l border-[#4d2d18] pl-6 space-y-1 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Genuine Seasoned Timber Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Zero Advance Until Material Dispatched</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Clean & Dustless Installation at Site</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsAddingReview(true)}
            className="flex items-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-stone-950 transition-colors shadow-md shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="wood-panel rounded-2xl p-5 border border-[#442817] flex flex-col justify-between space-y-4 hover:border-amber-500/50 transition-colors"
            >
              <div className="space-y-3">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>

                {/* Work Type Badge */}
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#2d1b10] border border-[#4d2d18] text-[11px] font-medium text-amber-300">
                  {rev.workType}
                </span>

                {/* Comment */}
                <p className="text-xs text-[#d8c5b3] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-3 border-t border-[#3b2315] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-stone-200">{rev.author}</p>
                  <p className="text-[10px] text-stone-400">{rev.location}</p>
                </div>
                {rev.verified && (
                  <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Client</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {isAddingReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg wood-panel rounded-2xl border-2 border-amber-600/60 shadow-2xl overflow-hidden flex flex-col">
            
            <div className="p-5 border-b border-[#442817] flex items-center justify-between bg-[#23150d]">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Share Your Experience</span>
                <h3 className="font-rustic text-2xl font-bold text-stone-100">Review Arjun's Work</h3>
              </div>
              <button
                onClick={() => setIsAddingReview(false)}
                className="p-1.5 rounded-lg bg-[#2e1b10] text-stone-300 hover:text-white border border-[#4d2d18]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  Your Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setRating(num)}
                      className="p-1 hover:scale-125 transition-transform"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          num <= rating ? 'fill-amber-400 text-amber-400' : 'text-stone-600'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-amber-300 font-bold ml-2">({rating} / 5 Stars)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Anand Kumar"
                    className="w-full py-2 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                    Your City / Area
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Madhapur"
                    className="w-full py-2 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                  Work Done
                </label>
                <select
                  value={workType}
                  onChange={(e) => setWorkType(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                >
                  <option value="Cupboard & Modular Wardrobe">Cupboards & Designer Wardrobes</option>
                  <option value="Modular Kitchen Installation">Modular Kitchen Installation</option>
                  <option value="Bank Fitting & Cash Counters">Bank Work & Commercial Counters</option>
                  <option value="Aluminium Glass Partitions">Aluminium Works & Glazing</option>
                  <option value="Door & Lock Repair">Door & Lock Repair</option>
                  <option value="Furniture Polish & Restoration">Furniture Polish & Restoration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                  Your Review / Feedback *
                </label>
                <textarea
                  rows={3}
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="How was Arjun's work, punctuality, and craftsmanship?"
                  className="w-full py-2 px-3 rounded-xl bg-[#2b190f] border border-[#52311b] text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-stone-950 transition-colors shadow-lg cursor-pointer"
              >
                Submit Review
              </button>
            </form>

          </div>
        </div>
      )}
    </section>
  );
};
