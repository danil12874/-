
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminDashboard from './components/AdminDashboard';
import { CompanyInfo, Post, Project } from './types';
import { INITIAL_COMPANY_INFO, INITIAL_POSTS, INITIAL_PROJECTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(INITIAL_COMPANY_INFO);
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home info={companyInfo} posts={posts} onNavigate={setCurrentPage} />;
      case 'about':
        return (
          <div className="pt-40 pb-24 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-black mb-12">회사소개</h1>
            <div className="aspect-video w-full bg-zinc-900 rounded-3xl overflow-hidden mb-12 relative">
                <img src="https://picsum.photos/1200/800?random=30" className="w-full h-full object-cover opacity-60" alt="Factory" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl font-bold">천안 최대 규모의 H빔 강구조물 제작 인프라</p>
                </div>
            </div>
            <p className="text-xl text-gray-400 leading-relaxed mb-8 text-left">
              {companyInfo.name}은 고객 만족과 안전을 최우선으로 생각하는 기업입니다. 충청남도 천안시 성남면에 위치한 저희 사업장은 철구조물 제작, 일반건축공사, 임가공 용역을 주력으로 하고 있으며, 수많은 프로젝트 수행을 통해 쌓아온 풍부한 경험과 전문성을 갖추고 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
                <div className="p-8 bg-zinc-900 rounded-2xl">
                    <h3 className="text-purple-accent font-bold mb-4">비전</h3>
                    <p className="text-gray-400">철강 기술의 한계를 뛰어넘어 건축의 새로운 표준을 제시하는 기업</p>
                </div>
                <div className="p-8 bg-zinc-900 rounded-2xl">
                    <h3 className="text-purple-accent font-bold mb-4">가치</h3>
                    <p className="text-gray-400">정직한 시공, 안전한 현장, 완벽한 품질 관리</p>
                </div>
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="pt-40 pb-24 max-w-7xl mx-auto px-4">
             <div className="text-center mb-16">
                <h1 className="text-5xl font-black mb-4 uppercase tracking-tighter">Business Services</h1>
                <p className="text-gray-400">태봉강업의 주요 사업 분야를 소개합니다.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                    { title: "철구조물 제작", items: ["H빔 가공", "자동 용접", "정밀 절단", "표면 처리"], img: "https://picsum.photos/800/600?random=40" },
                    { title: "일반건축공사", items: ["공장 건축", "창고 공사", "증축/개축", "철골 보강"], img: "https://picsum.photos/800/600?random=41" },
                    { title: "임가공 용역", items: ["도면 가공", "대량 발주", "특수 사양 가공", "긴급 제작"], img: "https://picsum.photos/800/600?random=42" },
                    { title: "구조 검토 및 설계", items: ["구조 계산", "도면 설계", "내진 보강", "안전 진단"], img: "https://picsum.photos/800/600?random=43" },
                ].map((s, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 group hover:border-purple-accent transition-all">
                        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                            <img src={s.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={s.title} />
                        </div>
                        <div className="p-10 flex-1">
                            <h3 className="text-2xl font-bold mb-6">{s.title}</h3>
                            <ul className="space-y-3">
                                {s.items.map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-400">
                                        <span className="w-1.5 h-1.5 bg-purple-accent rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
             </div>
          </div>
        );
      case 'projects':
        return (
          <div className="pt-40 pb-24 max-w-7xl mx-auto px-4">
             <div className="text-center mb-16">
                <h1 className="text-5xl font-black mb-4">포트폴리오</h1>
                <p className="text-gray-400">성공적으로 수행된 태봉강업의 주요 프로젝트입니다.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(proj => (
                    <div key={proj.id} className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:-translate-y-2 transition-all">
                        <div className="h-64 overflow-hidden relative group">
                            <img src={proj.imageUrl} className="w-full h-full object-cover" alt={proj.title} />
                            <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-6 py-2 bg-white text-black font-bold rounded-full">자세히 보기</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <span className="text-xs text-gray-500 mb-2 block">{proj.date}</span>
                            <h3 className="text-xl font-bold mb-4">{proj.title}</h3>
                            <p className="text-gray-400 text-sm line-clamp-2">{proj.description}</p>
                        </div>
                    </div>
                ))}
             </div>
          </div>
        );
      case 'contact':
        return (
          <div className="pt-40 pb-24 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h1 className="text-5xl font-black mb-8">견적 문의</h1>
                    <p className="text-gray-400 mb-12 text-lg">
                        프로젝트의 성공적인 완성을 위해 전문가의 상담이 필요하신가요?<br/>태봉강업이 최적의 솔루션을 제안해 드립니다.
                    </p>
                    
                    <div className="space-y-8">
                        <div className="flex items-center gap-6 p-6 bg-zinc-900 rounded-2xl border border-white/5">
                            <div className="w-12 h-12 bg-purple-accent/20 text-purple-accent flex items-center justify-center rounded-xl text-2xl">📞</div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Phone</p>
                                <p className="text-xl font-bold">{companyInfo.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-6 bg-zinc-900 rounded-2xl border border-white/5">
                            <div className="w-12 h-12 bg-purple-accent/20 text-purple-accent flex items-center justify-center rounded-xl text-2xl">✉️</div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                                <p className="text-xl font-bold">{companyInfo.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-6 bg-zinc-900 rounded-2xl border border-white/5">
                            <div className="w-12 h-12 bg-purple-accent/20 text-purple-accent flex items-center justify-center rounded-xl text-2xl">📍</div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Office</p>
                                <p className="text-sm font-bold">{companyInfo.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-zinc-900 p-10 rounded-3xl border border-white/5 shadow-2xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">성함/업체명</label>
                                <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 focus:border-purple-accent outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">연락처</label>
                                <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 focus:border-purple-accent outline-none" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">문의 유형</label>
                            <select className="w-full bg-black border border-white/10 rounded-lg p-4 focus:border-purple-accent outline-none text-white">
                                <option>H빔 제작 견적</option>
                                <option>철골조 설치 공사</option>
                                <option>일반건축 상담</option>
                                <option>기타 문의</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">상세 내용</label>
                            <textarea rows={6} className="w-full bg-black border border-white/10 rounded-lg p-4 focus:border-purple-accent outline-none" placeholder="문의하실 내용을 입력해 주세요."></textarea>
                        </div>
                        <button className="w-full py-5 bg-purple-accent hover:bg-purple-600 text-white font-black rounded-xl transition-all uppercase tracking-widest">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
          </div>
        );
      case 'admin':
        return (
          <AdminDashboard 
            info={companyInfo} 
            setInfo={setCompanyInfo} 
            posts={posts} 
            setPosts={setPosts} 
            projects={projects} 
            setProjects={setProjects} 
          />
        );
      default:
        return <Home info={companyInfo} posts={posts} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-accent selection:text-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer info={companyInfo} />

      {/* Persistent Call-to-Action / Social */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <a 
          href={`tel:${companyInfo.phone}`}
          className="w-14 h-14 bg-purple-accent text-white flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer border-4 border-black"
          title="전화 연결"
        >
          📞
        </a>
        <button 
          className="w-14 h-14 bg-yellow-400 text-black flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer border-4 border-black font-black text-xs"
          title="카카오톡 연결"
          onClick={() => alert(`카카오톡 문의: ${companyInfo.kakao}`)}
        >
          TALK
        </button>
      </div>
    </div>
  );
};

export default App;
