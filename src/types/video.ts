export interface Video {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorTitle: string;
  duration: string;
  views: number;
  publishDate: string;
  category: string;
  type: string;
  thumbnail: string;
  url: string;
}

export interface VideoCategory {
  id: string;
  name: string;
  count: number;
}

export interface SearchFilters {
  query: string;
  category: string;
  instructor: string;
}
