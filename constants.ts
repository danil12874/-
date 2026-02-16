
import { CompanyInfo, Post, Project } from './types';

export const INITIAL_COMPANY_INFO: CompanyInfo = {
  name: "태봉강업",
  nameEn: "TAEBONG STEEL",
  representative: "박성익",
  businessNumber: "529-43-00245",
  address: "충청남도 천안시 동남구 성남면 대흥1길 105-14",
  phone: "010-8401-0404",
  email: "danil12874@gmail.com",
  manager: "박일 소장",
  kakao: "010-8401-0404",
  businessType: "제조, 건설, 서비스업",
  businessCategory: "철구조물, 일반건축공사, 임가공 용역"
};

export const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    title: '신규 H빔 제작 설비 도입 안내',
    content: '태봉강업에서 정밀도를 높인 최신 자동화 절단 및 용접 설비를 도입하였습니다.',
    category: '기술소식',
    date: '2024-05-15',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: '천안 성남면 공장 확장 소식',
    content: '증가하는 수요에 대응하기 위해 제2공장 부지를 확장하였습니다.',
    category: '공지사항',
    date: '2024-04-20',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: '성남 물류센터 강구조 공사',
    description: '1,500평 규모의 물류창고 H빔 강구조 제작 및 현장 설치 완료.',
    imageUrl: 'https://picsum.photos/800/600?random=10',
    date: '2024-01'
  },
  {
    id: 'p2',
    title: '신부동 오피스 빌딩 철골조',
    description: '도심지 협소 공간 내 정밀 시공 및 구조 검토를 거친 철골 공사.',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    date: '2023-11'
  }
];
