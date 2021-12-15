import useSWR from "swr";
import { useSelector, useDispatch } from "react-redux";
import { Topbar, HomePageWrapper, Banner, PageContainer, FeedToggle, Footer } from "../../components/Layout";
import ArticleListItems from "./ArticleListItems";
import { RootState } from "store";
import { ArticlesResListItem } from "types/atricles";
import { setFavoriteArticles } from "store/user";

export default function ArticleList() {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.user?.username);
  const { data: favoriteArticles, error } = useSWR(`/articles?favorited=${username}`);
  const favoriteArticlesSlugs = favoriteArticles?.articles.map((article: ArticlesResListItem) => article?.slug);
  const loading = !error && !favoriteArticles;
  dispatch(setFavoriteArticles(favoriteArticlesSlugs));
  if (loading) return <p>Loading</p>;
  else if (error) return <p>Error</p>;
  return (
    <>
      <Topbar />
      <HomePageWrapper>
        <Banner />
        <PageContainer>
          <div className="row">
            <div className="col-md-9">
              <FeedToggle />
              <ArticleListItems />
            </div>
          </div>
        </PageContainer>
      </HomePageWrapper>
      <Footer />
    </>
  );
}
