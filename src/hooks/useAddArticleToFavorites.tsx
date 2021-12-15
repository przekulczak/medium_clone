import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { history } from "../App";
import { FavoriteArticleRes } from "types/atricles";

const useAddArticleToFavorites = (articleSlug: string, favoritesCount: number) => {
  const favoritedArticles = useSelector((state: RootState) => state.user.favoriteArticles);

  useEffect(() => {
    if (Array.isArray(favoritedArticles) && favoritedArticles.length === 0) {
      setActiveClass("");
    }
  }, [favoritedArticles]);

  const isFavoriteByDefault = favoritedArticles.includes(articleSlug);

  const [currentActiveClass, setActiveClass] = useState(isFavoriteByDefault ? "active" : "");

  const [currentFavoriteCount, setCurrentFavoriteCount] = useState(favoritesCount);
  {
    /*TO DO SPOT 401 AND THAN REDIRECT */
  }
  const deleteFromFavorites = () =>
    axios
      .delete(`http://localhost:3000/api/articles/${articleSlug}/favorite`)
      .then((res: AxiosResponse<FavoriteArticleRes>) => {
        setActiveClass("");
        setCurrentFavoriteCount(res.data.article.favoritesCount);
      })
      .catch(() => history.push("/login"));

  const addToFavorites = () =>
    axios
      .post(`http://localhost:3000/api/articles/${articleSlug}/favorite`, null, {})
      .then((res: AxiosResponse<FavoriteArticleRes>) => {
        setActiveClass("active");
        setCurrentFavoriteCount(res.data.article.favoritesCount);
      })
      .catch(() => history.push("/login"));

  const handleClick = () => {
    if (currentActiveClass === "active") {
      deleteFromFavorites();
    } else {
      addToFavorites();
    }
  };

  return { handleClick, currentActiveClass, currentFavoriteCount };
};

export default useAddArticleToFavorites;
