export interface IBannerItem {
  describe: string;
  img: string;
  link: string | null;
  orders: number;
  title: string;
}

export interface IChoolGroupItem {
  province: string;
  province_count: number;
}

export interface IChoolItem {
  address: string;
  created_at: string;
  describe: string;
  img: string;
  name: string;
  province: string;
}

export interface IContactsItem {
  key: string;
  qrcode: string;
  type: string;
  value: string;
}

export interface IgetNewsListParams {
  cid: number;
  page: number;
  limit: number;
}

export interface IIgetNewsListRes {
  has_next: boolean;
  has_previous: boolean;
  articles: NesListItem[];
}

export interface NesListItem {
  category: string;
  html_content: string;
  img: string;
  is_top: number;
  published_at: string;
  slug: string;
  source: string;
  summary: string;
  tags: {
    id: number;
    name: string;
  }[];
  title: string;
  url: string;
  views: string;
}

export interface INewsCategory {
  cid: number;
  name: number;
}

export interface LeaveMessageParams {
  username: string;
  phone: string;
  email: string;
  school_name: string;
  content: string;
}

export interface IRichText {
  category: string;
  html_content: string;
  img: string;
  is_top: string;
  published_at: string;
  slug: string;
  source: string;
  summary: string;
  tags: {
    id: number;
    name: string;
  }[];
  title: string;
  url: string;
  views: number;
}
