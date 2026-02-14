import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-dark-bg/50" id="experience">
      {/* <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Journey</h2>
          <div className="h-1 w-20 bg-brand-500 rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className="relative pl-8 pb-12 last:pb-0">
              
              {index !== EXPERIENCE.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-dark-border"></div>
              )}
              
             
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-dark-card border-2 border-brand-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-brand-500"></div>
              </div>

              <div className="bg-dark-card border border-dark-border p-6 rounded-xl hover:border-brand-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <span className="text-sm font-mono text-brand-400">{job.period}</span>
                </div>
                <div className="flex items-center text-slate-400 mb-4">
                  <Briefcase size={16} className="mr-2" />
                  <span className="font-medium">{job.company}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};
