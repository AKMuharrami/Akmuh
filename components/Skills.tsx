import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { SKILLS_DATA } from '../constants';
import { Cpu, Globe, Server, Database } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section className="py-24 bg-dark-bg relative" id="skills">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-brand-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="h-[400px] w-full bg-dark-card/30 rounded-2xl border border-dark-border backdrop-blur-sm p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  fill="#0ea5e9"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Detailed List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard 
              icon={<Globe className="text-brand-400" />} 
              title="Frontend" 
              items={['React 18', 'Next.js', 'Tailwind', 'React Native', 'Expo']} 
            />
            <SkillCard 
              icon={<Server className="text-purple-400" />} 
              title="Backend" 
              items={['Node.js', 'Vercel', 'GraphQL']} 
            />
            <SkillCard 
              icon={<Database className="text-emerald-400" />} 
              title="Database" 
              items={['PostgreSQL', 'Neon', 'Blob']} 
            />
            <SkillCard 
              icon={<Cpu className="text-pink-400" />} 
              title="AI & Ops" 
              items={['Gemini API', 'Docker']} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ icon: React.ReactNode; title: string; items: string[] }> = ({ icon, title, items }) => (
  <div className="p-6 rounded-xl bg-dark-card border border-dark-border hover:border-brand-500/50 transition-colors group">
    <div className="flex items-center space-x-3 mb-4">
      <div className="p-2 rounded-lg bg-dark-bg group-hover:bg-brand-500/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="px-2 py-1 text-xs font-medium text-slate-400 bg-dark-bg rounded border border-dark-border">
          {item}
        </span>
      ))}
    </div>
  </div>
);
