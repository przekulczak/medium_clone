import { Redirect } from "react-router-dom";
import useSWR from "swr";
import { ArticlesResListItem } from "types/atricles";
import ArticleListItem from "../../../components/Common/ArticleListItem";

const ArticleListItems = () => {
  const { data: articles, error } = useSWR("/articles");
  const loading = !error && !articles;
  const content = articles?.articles.map((article: ArticlesResListItem) => (
    <ArticleListItem item={article} key={article.title} />
  ));
  if (loading) return <p>Loading</p>;
  if (error) return <Redirect to="/" />;
  return content;
};

export default ArticleListItems;
