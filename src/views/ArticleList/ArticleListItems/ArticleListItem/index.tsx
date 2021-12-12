import { ArticlesListItem } from "../../../../types/atricles";
import { Link } from "react-router-dom";

interface Props {
  item: ArticlesListItem;
}

export interface ArticlesListItem {
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

const ArticleListItem = ({ item: { title, description, author, createdAt, favoritesCount } }: Props) => (
  <div className="article-preview">
    <div className="article-meta">
      <a href="/#/profile/ericsimmons">
        <img src={author.image} />
      </a>
      <div className="info">
        <a href="/#/profile/ericsimmons" className="author">
          {author.username}
        </a>
        <span className="date">{createdAt}</span>
      </div>
      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart" /> {favoritesCount}
      </button>
    </div>
    <Link to="/#/how-to-build-webapps-that-scale" className="preview-link">
      <h1>{title}</h1>
      <p>{description}</p>
      <span>Read more...</span>
    </Link>
  </div>
);

export default ArticleListItem;
