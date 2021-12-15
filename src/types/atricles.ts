export interface ArticlesResListItem {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string;
  createdAt: string;
  updatedAt: string;
  favorited: true;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: true;
  };
}
export interface FavoriteArticleRes {
  article: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string;
    createdAt: string;
    updatedAt: string;
    favorited: true;
    favoritesCount: number;
    author: {
      username: string;
      bio: string;
      image: string;
      following: true;
    };
  };
}
