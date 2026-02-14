import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-dark-bg" id="projects">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Selected Work</h2>
          <div className="h-1 w-20 bg-brand-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border hover:border-brand-500/50 transition-all duration-300 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-dark-border">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" className="flex items-center text-sm text-slate-300 hover:text-white transition-colors">
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} className="flex items-center text-sm text-slate-300 hover:text-white transition-colors">
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
