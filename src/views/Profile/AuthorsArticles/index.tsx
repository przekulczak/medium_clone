import { useParams } from "react-router-dom";
import useSWR from "swr";
import { ArticlesResListItem } from "types/atricles";
import ArticleListItem from "../../../components/Common/ArticleListItem";

const AuthorsArticleListItems = () => {
  const { username } = useParams<{ username: string }>();
  const { data: articles, error } = useSWR(`/articles?author=${username}`);
  const loading = !error && !articles;
  const content = articles?.articles.map((article: ArticlesResListItem) => (
    <ArticleListItem item={article} key={article.title} />
  ));
  const currentContent = loading ? <p>Loading</p> : content;
  return <div>{currentContent}</div>;
};

export default AuthorsArticleListItems;
