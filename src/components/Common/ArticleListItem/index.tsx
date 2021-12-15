import { Link } from "react-router-dom";
import Avatar from "components/Common/Avatar";
import AddArticleToFavorites from "components/Common/AddArticleToFavorites";
import DateComponent from "components/Common/DateComponent";
import { ArticlesResListItem } from "../../../types/atricles";

interface Props {
  item: ArticlesResListItem;
}

const ArticleListItem = ({ item: { title, description, author, createdAt, favoritesCount, slug } }: Props) => (
  <div className="article-preview">
    <div className="article-meta">
      <a href="/#/profile/ericsimmons">
        <Avatar url={author.image} />
      </a>
      <div className="info">
        <a href={`/#/profile/${author.username}`} className="author">
          {author.username}
        </a>
        <DateComponent date={createdAt} />
      </div>
      <AddArticleToFavorites favoritesCount={favoritesCount} articleSlug={slug} />
    </div>
    <Link to="/#/how-to-build-webapps-that-scale" className="preview-link">
      <h1>{title}</h1>
      <p>{description}</p>
      <span>Read more...</span>
    </Link>
  </div>
);

export default ArticleListItem;
