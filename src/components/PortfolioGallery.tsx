import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { PortfolioProject, WorkCategory } from '../types/carpentry';
import { Image, Filter, Star, Clock, MapPin, Eye, X, CheckCircle, ArrowRight } from 'lucide-react';

interface PortfolioGalleryProps {
  onOpenCustomOrder: () => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onOpenCustomOrder
}) => {
  const [activeFilter, setActiveFilter] = useState<WorkCategory>('all');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const filterTabs: { id: WorkCategory; label: string }[] = [
    { id: 'all', label: 'All Handcrafted Works' },
    { id: 'cupboards', label: 'Cupboards & Wardrobes' },
    { id: 'modular_kitchen', label: 'Modular Kitchens' },
    { id: 'bank_works', label: 'Bank Works & Fitouts' },
    { id: 'aluminium', label: 'Aluminium Works' },
    { id: 'repairs', label: 'Repairs & Polish' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="gallery-section" className="py-16 bg-[#1a1109] border-b border-[#3d2414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-600/30 text-amber-300 text-xs font-semibold mb-3">
            <Image className="w-3.5 h-3.5" />
            <span>Master Craftsman Portfolio</span>
          </div>
          <h2 className="font-rustic text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fcf6ee] tracking-tight">
            Photo Gallery of Recent Works
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Take a look inside our real client installations — custom finished cupboards, high-gloss modular kitchens, commercial bank teller counters, and aluminium glass cabins.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.id
                  ? 'bg-amber-400 text-stone-950 shadow-lg shadow-amber-950/50 scale-105'
                  : 'bg-[#26150c] text-stone-300 border border-[#442817] hover:border-amber-600/50 hover:bg-[#321c10]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="wood-card rounded-2xl overflow-hidden cursor-pointer group border border-[#442817] bg-[#22140c]"
            >
              {/* Photo */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#2b170c]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08] via-transparent to-black/30" />

                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-[#180e08]/90 backdrop-blur-sm border border-amber-500/40 px-3 py-1 rounded-full text-[11px] font-semibold text-amber-300">
                  {project.duration}
                </div>

                {/* View Icon Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <span className="p-3 rounded-full bg-amber-400 text-stone-950 shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>

                {/* Location */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-stone-300 bg-[#160d07]/80 px-2.5 py-1 rounded-md backdrop-blur-xs">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 space-y-3">
                <h3 className="font-rustic text-xl font-bold text-[#fcf8f2] group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#c4b19f] line-clamp-2 leading-relaxed">
                  {project.highlight}
                </p>

                <div className="pt-2 border-t border-[#3b2315] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-stone-400 font-mono truncate max-w-[180px]">
                    {project.woodUsed.split('+')[0]}
                  </span>
                  <span className="text-amber-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-stone-400 mb-3">
            Want similar custom cabinetry or aluminium fitments built for your home or business?
          </p>
          <button
            onClick={onOpenCustomOrder}
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-stone-950 transition-colors shadow-lg cursor-pointer"
          >
            <span>Request Free Site Visit & Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Detail Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl wood-panel rounded-2xl border-2 border-amber-600/60 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-[#442817] flex items-center justify-between bg-[#23150d]">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  Portfolio Inspection
                </span>
                <h3 className="font-rustic text-xl sm:text-2xl font-bold text-stone-100">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 rounded-lg bg-[#2e1b10] text-stone-300 hover:text-white border border-[#4d2d18]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden border border-[#4d2d18]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-[#24140b] p-3.5 rounded-xl border border-[#442817]">
                  <p className="text-[10px] text-amber-400 uppercase font-semibold">Wood & Hardware Specs</p>
                  <p className="font-semibold text-stone-200 mt-1">{activeProject.woodUsed}</p>
                </div>
                <div className="bg-[#24140b] p-3.5 rounded-xl border border-[#442817]">
                  <p className="text-[10px] text-amber-400 uppercase font-semibold">Turnaround Time</p>
                  <p className="font-semibold text-stone-200 mt-1">{activeProject.duration}</p>
                </div>
              </div>

              <p className="text-sm text-[#d4c0ae] leading-relaxed">
                {activeProject.description}
              </p>

              {/* Client Feedback Quote */}
              {activeProject.clientFeedback && (
                <div className="wood-panel-amber p-4 rounded-xl border border-amber-600/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-200">{activeProject.clientFeedback.name}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(activeProject.clientFeedback.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs italic text-[#e0cfbe]">
                    "{activeProject.clientFeedback.comment}"
                  </p>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#442817] bg-[#1f120a] flex items-center justify-between">
              <span className="text-xs text-stone-400">100% Free Site Inspection</span>
              <button
                onClick={() => {
                  setActiveProject(null);
                  onOpenCustomOrder();
                }}
                className="py-2.5 px-5 rounded-xl text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow flex items-center gap-2"
              >
                <span>Request Work Like This</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
