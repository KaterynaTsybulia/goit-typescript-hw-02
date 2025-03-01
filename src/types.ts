export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string | undefined;
  description: string | null;
  likes: number;
};