
export interface CompanyInfo {
  name: string;
  nameEn: string;
  representative: string;
  businessNumber: string;
  address: string;
  phone: string;
  email: string;
  manager: string;
  kakao: string;
  businessType: string;
  businessCategory: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  category: '공지사항' | '프로젝트' | '기술소식';
  date: string;
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
}
