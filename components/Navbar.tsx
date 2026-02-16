
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '홈', id: 'home' },
    { name: '회사소개', id: 'about' },
    { name: '주요사업', id: 'services' },
    { name: '프로젝트', id: 'projects' },
    { name: '고객지원', id: 'contact' },
    { name: '관리자', id: 'admin' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <span className="text-2xl font-black tracking-tighter text-white">
              TAEBONG<span className="text-purple-accent">STEEL</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`${
                    currentPage === item.id 
                    ? 'text-purple-accent border-b-2 border-purple-accent' 
                    : 'text-gray-300 hover:text-white'
                  } px-3 py-2 text-sm font-medium transition-all`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`${
                  currentPage === item.id ? 'bg-purple-900/30 text-purple-accent' : 'text-gray-300'
                } block px-3 py-4 text-base font-medium w-full text-left`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
