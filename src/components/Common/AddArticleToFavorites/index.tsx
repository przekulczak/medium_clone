import { FC } from "react";
import useAddArticleToFavorites from "../../../hooks/useAddArticleToFavorites";

interface Props {
  favoritesCount: number;
  articleSlug: string;
}

const AddArticleToFavorites: FC<Props> = ({ favoritesCount, articleSlug }: Props) => {
  const { handleClick, currentActiveClass, currentFavoriteCount } = useAddArticleToFavorites(
    articleSlug,
    favoritesCount
  );
  return (
    <>
      {/* TO DO STYLE IT WITH ACTIVE CLASS */}
      <button
        className={`btn btn-outline-primary btn-sm pull-xs-right`}
        onClick={handleClick}
        style={{
          backgroundColor: currentActiveClass === "active" ? "#5cb85c" : "#fff",
          color: currentActiveClass === "active" ? "#fff" : "#5cb85c",
        }}
      >
        <i className="ion-heart" /> {currentFavoriteCount}
      </button>
    </>
  );
};

export default AddArticleToFavorites;
