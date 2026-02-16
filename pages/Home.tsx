
import React from 'react';
import { CompanyInfo, Post } from '../types';

interface HomeProps {
  info: CompanyInfo;
  posts: Post[];
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ info, posts, onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000" 
            alt="Steel structure" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-purple-accent text-sm md:text-lg font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            Steel Structure Specialists
          </h2>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            강력한 구조,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">내일의 가치</span>를 세웁니다
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-12 opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            {info.name}은 H빔 강구조물 제작과 설치 분야의 선두주자로서 정밀한 시공과 안전한 건축을 약속합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            <button 
              onClick={() => onNavigate('projects')}
              className="px-10 py-4 bg-purple-accent hover:bg-purple-600 text-white font-bold rounded-full transition-all transform hover:scale-105"
            >
              프로젝트 보기
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold rounded-full transition-all"
            >
              견적 문의하기
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-purple-accent font-bold tracking-widest text-sm block mb-2">OUR SERVICES</span>
              <h2 className="text-4xl md:text-5xl font-black">전문적인 기술 서비스</h2>
            </div>
            <p className="text-gray-400 max-w-md">
              H빔 강구조물 제작부터 설치, 건축공사 및 정밀 임가공까지 철강 산업의 모든 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'H빔 강구조 제작', desc: '최첨단 설비를 통한 정밀 절단, 홀가공 및 제작', icon: '🏗️' },
              { title: '현장 설치 공사', desc: '풍부한 경험을 가진 전문 인력의 완벽한 현장 설치', icon: '👷' },
              { title: '임가공 용역', desc: '다양한 규격의 철골 자재 가공 및 맞춤 제작 서비스', icon: '⚙️' }
            ].map((s, idx) => (
              <div key={idx} className="group p-10 bg-zinc-900 border border-white/5 rounded-3xl hover:border-purple-accent transition-all">
                <div className="text-4xl mb-6">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">최신 소식</h2>
            <div className="w-20 h-1 bg-purple-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.slice(0, 2).map(post => (
              <div key={post.id} className="flex flex-col md:flex-row bg-zinc-900 rounded-3xl overflow-hidden border border-white/5">
                <div className="w-full md:w-1/3 h-48 md:h-auto">
                   <img src={post.imageUrl} className="w-full h-full object-cover" alt={post.title} />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-purple-accent font-bold mb-2 block">{post.category}</span>
                    <h4 className="text-xl font-bold mb-4">{post.title}</h4>
                    <p className="text-gray-400 text-sm line-clamp-2">{post.content}</p>
                  </div>
                  <div className="mt-6 flex justify-between items-center text-xs text-gray-500">
                    <span>{post.date}</span>
                    <button className="text-white hover:text-purple-accent font-bold transition-colors">READ MORE →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Home;
