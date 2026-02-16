
import React, { useState } from 'react';
import { CompanyInfo, Post, Project, SEOMetadata } from '../types';
import { generateSEODescription, suggestKeywords } from '../services/gemini';

interface AdminDashboardProps {
  info: CompanyInfo;
  setInfo: (info: CompanyInfo) => void;
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  info, setInfo, posts, setPosts, projects, setProjects 
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'posts' | 'seo'>('info');
  const [isGenerating, setIsGenerating] = useState(false);
  const [seo, setSeo] = useState<SEOMetadata>({
    title: "태봉강업 | H빔 강구조 전문",
    description: "천안 H빔 제작 및 설치 전문 태봉강업",
    keywords: "H빔, 강구조, 철구조물, 천안 건설"
  });

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleNewPost = () => {
    const newPost: Post = {
      id: Date.now().toString(),
      title: "새 게시글 제목",
      content: "여기에 내용을 입력하세요.",
      category: "공지사항",
      date: new Date().toISOString().split('T')[0],
      imageUrl: "https://picsum.photos/800/600?random=" + Math.random()
    };
    setPosts([newPost, ...posts]);
  };

  const handleAISuggestions = async () => {
    setIsGenerating(true);
    try {
      const desc = await generateSEODescription(info.name, info.businessCategory);
      const kw = await suggestKeywords(info.businessCategory);
      setSeo({
        ...seo,
        description: desc,
        keywords: kw
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h1 className="text-3xl font-black">관리자 대시보드</h1>
            <p className="text-gray-400">태봉강업 웹사이트 콘텐츠를 자유롭게 관리하세요.</p>
          </div>
          <div className="flex bg-zinc-900 rounded-lg p-1">
            <button 
              onClick={() => setActiveTab('info')}
              className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'info' ? 'bg-purple-accent text-white' : 'text-gray-400 hover:text-white'}`}
            >
              기업 정보
            </button>
            <button 
              onClick={() => setActiveTab('posts')}
              className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'posts' ? 'bg-purple-accent text-white' : 'text-gray-400 hover:text-white'}`}
            >
              게시글 관리
            </button>
            <button 
              onClick={() => setActiveTab('seo')}
              className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'seo' ? 'bg-purple-accent text-white' : 'text-gray-400 hover:text-white'}`}
            >
              AI SEO 도구
            </button>
          </div>
        </header>

        {activeTab === 'info' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            <div className="space-y-6 bg-zinc-900 p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-4">기본 정보</h3>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">회사명</label>
                <input name="name" value={info.name} onChange={handleInfoChange} className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-purple-accent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">대표자</label>
                <input name="representative" value={info.representative} onChange={handleInfoChange} className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-purple-accent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">사업자번호</label>
                <input name="businessNumber" value={info.businessNumber} onChange={handleInfoChange} className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-purple-accent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">전화번호</label>
                <input name="phone" value={info.phone} onChange={handleInfoChange} className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-purple-accent outline-none" />
              </div>
            </div>
            <div className="space-y-6 bg-zinc-900 p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-4">사업 및 위치</h3>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">주소</label>
                <textarea name="address" value={info.address} onChange={handleInfoChange} rows={2} className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-purple-accent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">업태 / 종목</label>
                <input name="businessCategory" value={info.businessCategory} onChange={handleInfoChange} className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-purple-accent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">이메일</label>
                <input name="email" value={info.email} onChange={handleInfoChange} className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-purple-accent outline-none" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'posts' && (
          <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">공지사항 및 블로그</h3>
              <button 
                onClick={handleNewPost}
                className="px-6 py-2 bg-purple-accent text-white font-bold rounded-lg hover:bg-purple-600 transition-all"
              >
                + 새 게시글 작성
              </button>
            </div>
            <div className="space-y-4">
              {posts.map(post => (
                <div key={post.id} className="bg-zinc-900 p-6 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold">{post.title}</h4>
                    <p className="text-sm text-gray-500">{post.date} | {post.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-white/5 hover:bg-white/10 text-xs rounded">수정</button>
                    <button 
                      onClick={() => setPosts(posts.filter(p => p.id !== post.id))}
                      className="px-3 py-1 bg-red-900/20 text-red-500 hover:bg-red-900/40 text-xs rounded"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/5 animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold">AI SEO 최적화 도구</h3>
                <p className="text-sm text-gray-400">Gemini AI를 활용해 검색 엔진 노출을 극대화하는 메타 데이터를 생성합니다.</p>
              </div>
              <button 
                onClick={handleAISuggestions}
                disabled={isGenerating}
                className={`px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-full shadow-lg shadow-purple-500/20 flex items-center gap-2 transition-all ${isGenerating ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
              >
                {isGenerating ? (
                   <span className="animate-spin text-xl">⏳</span>
                ) : (
                   <span className="text-xl">✨</span>
                )}
                AI 추천 생성하기
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">SEO 제목</label>
                <input 
                  value={seo.title} 
                  onChange={(e) => setSeo({...seo, title: e.target.value})} 
                  className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-purple-accent outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">SEO 설명 (메타 디스크립션)</label>
                <textarea 
                  value={seo.description} 
                  rows={4}
                  onChange={(e) => setSeo({...seo, description: e.target.value})} 
                  className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-purple-accent outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">핵심 키워드</label>
                <input 
                  value={seo.keywords} 
                  onChange={(e) => setSeo({...seo, keywords: e.target.value})} 
                  className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-purple-accent outline-none" 
                  placeholder="쉼표로 구분하여 입력 (예: H빔, 강구조, 공사)"
                />
              </div>
            </div>

            <div className="mt-8 p-4 bg-purple-900/10 border border-purple-900/30 rounded-lg">
                <p className="text-xs text-purple-300">
                    💡 **Tip:** Gemini AI는 실시간 트렌드를 반영하여 가장 효과적인 키워드를 제안합니다. 주기적으로 정보를 업데이트하여 상위 노출 기회를 높이세요.
                </p>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
