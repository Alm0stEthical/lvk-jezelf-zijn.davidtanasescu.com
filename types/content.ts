export interface ContentItem {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export interface ContentConfig {
  items: ContentItem[];
}
