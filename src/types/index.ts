export type New = {
  date: string;
  title: string;
  image: string;
  color: string;
  theme: "light" | "dark";
};

export type Product = {
  name: string;
  description: string;
  color: string;
  hashtag: string;
  logo: string;
  background: string;
};

export type Post = {
  url: string;
  image: string;
};
