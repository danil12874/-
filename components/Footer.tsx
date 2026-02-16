
import React from 'react';
import { CompanyInfo } from '../types';

interface FooterProps {
  info: CompanyInfo;
}

const Footer: React.FC<FooterProps> = ({ info }) => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">TAEBONG<span className="text-purple-accent">STEEL</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              태봉강업은 최고의 기술력과 신뢰를 바탕으로 H빔 강구조물 제작 및 설치, 일반건축공사 분야에서 최상의 가치를 제공합니다.
            </p>
            <div className="flex space-x-4">
               {/* Kakao Icon Placeholder */}
               <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs cursor-pointer">TALK</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>주소: {info.address}</li>
              <li>대표전화: {info.phone}</li>
              <li>이메일: {info.email}</li>
              <li>담당자: {info.manager} ({info.phone})</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Business Details</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>상호명: {info.name}</li>
              <li>대표이사: {info.representative}</li>
              <li>사업자등록번호: {info.businessNumber}</li>
              <li>업태: {info.businessType}</li>
              <li>종목: {info.businessCategory}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© 2024 TAEBONG STEEL. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <button className="hover:text-white">Privacy Policy</button>
            <button className="hover:text-white">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
